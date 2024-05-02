import { NextApiRequest, NextApiResponse } from "next";
import pool from "../utils/postgres";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM categorias WHERE ativo = 'Sim'"
    );
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter as categorias" });
  }
}
