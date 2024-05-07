import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import pool from "../utils/postgres";
import cloudinary from "../utils/cloudnary";

interface CustomNextApiRequest extends NextApiRequest {
  files: any;
}

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: CustomNextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Configurar o middleware Multer para processar os campos de arquivo especificados
      upload.fields([
        { name: "imagem_principal", maxCount: 1 },
        { name: "imagem_miniatura_1", maxCount: 1 },
        { name: "imagem_miniatura_2", maxCount: 1 },
        { name: "imagem_miniatura_3", maxCount: 1 },
      ])(req as any, res as any, async (err: any) => {
        if (err) {
          // Lida com erros de upload de arquivos
          return res.status(400).json({ error: "Error uploading files" });
        }

        // Faz upload de cada imagem para o Cloudinary e armazena as URLs
        const imageUrls: string[] = [];
        for (const fieldName of Object.keys(req.files)) {
          if (fieldName.startsWith("imagem_")) {
            const files = req.files[fieldName];
            for (const file of files) {
              const result = await cloudinary.v2.uploader.upload(file.path, {
                folder: "produtos_imagems",
              });
              imageUrls.push(result.secure_url);
            }
          }
        }

        const client = await pool.connect();
        try {
          await client.query("BEGIN");

          const {
            sku,
            nome,
            marcas_id,
            categorias_id,
            valor_antigo,
            valor,
            estoque,
            desconto,
            modelo,
            descricao,
            ativo,
            status,
          } = req.body;
          // Verifica se já existe uma produtos com o mesmo nome
          const checkQuery = "SELECT * FROM produtos WHERE nome = $1";
          const { rows: existingProdutos } = await pool.query(checkQuery, [
            sku,
          ]);

          if (existingProdutos.length > 0) {
            return res.status(400).json({ message: "Produto já existe" });
          }
          const insertQuery = `
            INSERT INTO produtos (sku, nome, marcas_id, categorias_id, valor_antigo, valor, estoque, desconto, modelo, descricao, imagem_principal, imagem_miniatura_1, imagem_miniatura_2, imagem_miniatura_3, ativo, status)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
            RETURNING *;
          `;
          const values = [
            sku,
            nome,
            marcas_id,
            categorias_id,
            valor_antigo,
            valor,
            estoque,
            desconto,
            modelo,
            descricao,
            ...imageUrls,
            ativo,
            status,
          ];
          const dbResult = await client.query(insertQuery, values);

          await client.query("COMMIT");

          // Retorna uma resposta de sucesso com os detalhes do produto inserido
          return res.status(200).json({
            message: "Product added successfully",
            product: dbResult.rows[0],
          });
        } catch (e) {
          // Em caso de erro, reverte a transação e lança o erro
          await client.query("ROLLBACK");
          throw e;
        } finally {
          // Libera o cliente do pool após o uso
          client.release();
        }
      });
    } catch (error) {
      // Lida com erros internos do servidor
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    // Retorna um erro se o método de requisição não for permitido
    return res.status(405).json({ error: "Method not allowed" });
  }
}
