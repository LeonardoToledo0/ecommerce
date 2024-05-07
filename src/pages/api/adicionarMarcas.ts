import { NextApiRequest, NextApiResponse } from "next";
import pool from "../utils/postgres";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { nome, ativo } = req.body;

    // Verifica se já existe uma marca com o mesmo nome
    const checkQuery = "SELECT * FROM marcas WHERE nome = $1";
    const { rows: existingBrands } = await pool.query(checkQuery, [nome]);

    if (existingBrands.length > 0) {
      return res.status(400).json({ message: "Marca já existe" });
    }

    // Se não houver uma marca com o mesmo nome, insira-a no banco de dados
    const insertQuery =
      "INSERT INTO marcas (nome, ativo) VALUES ($1, $2) RETURNING *";
    const { rows } = await pool.query(insertQuery, [nome, ativo]);

    res.status(200).json(rows);
  } catch (error) {
    console.error("Erro ao enviar marca:", error);
    res.status(500).json({ message: "Erro ao enviar marca" });
  }
}
