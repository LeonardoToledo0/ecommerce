import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import pool from "../utils/postgres";
import cloudinary from "../utils/cloudinary";

interface CustomNextApiRequest extends NextApiRequest {
  files: any;
}

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};

// Função para limpar os arquivos temporários
const limparArquivosTemporarios = () => {
  const pastaUpload = "uploads/";

  // Listar todos os arquivos na pasta de upload
  fs.readdir(pastaUpload, (err, arquivos) => {
    if (err) {
      console.error("Erro ao listar arquivos:", err);
      return;
    }

    // Calcular o tempo atual menos o tempo limite para a exclusão (por exemplo, 24 horas atrás)
    const tempoLimite = Date.now() - 24 * 60 * 60 * 1000;

    // Iterar sobre os arquivos e excluí-los se forem mais antigos que o tempo limite
    arquivos.forEach((arquivo) => {
      const caminhoArquivo = path.join(pastaUpload, arquivo);

      // Obter a data de modificação do arquivo
      fs.stat(caminhoArquivo, (err, stats) => {
        if (err) {
          console.error("Erro ao obter informações do arquivo:", err);
          return;
        }

        // Verificar se o arquivo foi modificado antes do tempo limite
        if (stats.mtime.getTime() < tempoLimite) {
          // Excluir o arquivo
          fs.unlink(caminhoArquivo, (err) => {
            if (err) {
              console.error("Erro ao excluir arquivo:", err);
            } else {
              console.log("Arquivo excluído:", caminhoArquivo);
            }
          });
        }
      });
    });
  });
};

// Executar a função para limpar os arquivos temporários a cada 24 horas
setInterval(limparArquivosTemporarios, 24 * 60 * 60 * 1000);

export default async function handler(
  req: CustomNextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Configurar o middleware Multer para processar os campos de arquivo especificados
      upload.fields([{ name: "imagem", maxCount: 1 }])(
        req as any,
        res as any,
        async (err: any) => {
          if (err) {
            // Lida com erros de upload de arquivos
            return res
              .status(400)
              .json({ error: "Erro ao fazer upload dos arquivos" });
          }

          // Faz upload de cada imagem para o Cloudinary e armazena as URLs
          const imageUrls: string[] = [];
          for (const fieldName of Object.keys(req.files)) {
            if (fieldName.startsWith("imagem")) {
              const files = req.files[fieldName];
              for (const file of files) {
                const result = await cloudinary.v2.uploader.upload(file.path, {
                  folder: "banners_imagens",
                });
                imageUrls.push(result.secure_url);
              }
            }
          }

          const client = await pool.connect();
          try {
            await client.query("BEGIN");

            const { nome, ativo, status } = req.body;
            const checkQuery = "SELECT * FROM banners WHERE nome = $1";
            const { rows: existingBanners } = await pool.query(checkQuery, [
              nome,
            ]);

            if (existingBanners.length > 0) {
              return res.status(400).json({ message: "O banner já existe" });
            }

            const insertQuery =
              "INSERT INTO banners (nome, imagem, ativo, status) VALUES ($1, $2, $3, $4) RETURNING *";
            const values = [nome, imageUrls[0], ativo, status]; // Apenas a primeira URL é usada para a imagem
            const dbResult = await client.query(insertQuery, values);

            await client.query("COMMIT");

            return res.status(200).json({
              message: "Banner adicionado com sucesso",
              banner: dbResult.rows[0],
            });
          } catch (e) {
            // Em caso de erro, reverte a transação e lança o erro
            await client.query("ROLLBACK");
            throw e;
          } finally {
            // Libera o cliente do pool após o uso
            client.release();
          }
        }
      );
    } catch (error) {
      // Lida com erros internos do servidor
      console.error("Erro:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  } else {
    // Retorna um erro se o método de requisição não for permitido
    return res.status(405).json({ error: "Método não permitido" });
  }
}
