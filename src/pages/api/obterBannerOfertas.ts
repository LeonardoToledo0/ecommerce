import { NextApiRequest, NextApiResponse } from "next";
import pool from "../utils/postgres";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM banners WHERE ativo = 'Sim' AND status = 'Oferta'"
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error("Erro ao obter os banners:", error);
    res.status(500).json({ message: "Erro ao obter os banners" });
  }
}
