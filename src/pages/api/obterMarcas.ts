import { NextApiRequest, NextApiResponse } from "next";
import pool from "../utils/postgres";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM marcas WHERE ativo = 'Sim'"
    );
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter as marcas" });
  }
}
