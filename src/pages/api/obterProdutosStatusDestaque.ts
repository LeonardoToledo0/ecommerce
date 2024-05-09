import { NextApiRequest, NextApiResponse } from "next";
import pool from "../utils/postgres";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const queryString = "SELECT * FROM produtos WHERE status = 'Destaque'";
    const { rows } = await pool.query(queryString);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter os produtos em destaque" });
  }
}
