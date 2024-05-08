import { NextApiRequest, NextApiResponse } from "next";
import pool from "../../utils/postgres";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    if (id === undefined || id === null) {
      throw new Error("ID inválido");
    }

    let productId: number;
    if (typeof id === "string") {
      productId = parseInt(id, 10);
    } else if (Array.isArray(id) && id.length > 0) {
      productId = parseInt(id[0], 10); // Use o primeiro valor do array
    } else {
      throw new Error("ID inválido");
    }

    const product = await fetchProductById(productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao obter o produto:", error);
    res.status(500).json({ message: "Erro ao obter o produto" });
  }
}

async function fetchProductById(id: number): Promise<any> {
  try {
    const { rows } = await pool.query("SELECT * FROM produtos WHERE id = $1", [
      id,
    ]);
    return rows[0];
  } catch (error) {
    console.error("Erro ao buscar produto no banco de dados:", error);
    return null;
  }
}
