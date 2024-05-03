import { NextApiRequest, NextApiResponse } from "next";
import pool from "../utils/postgres";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { nome, email, senha } = req.body;

    // Verifica se já existe um Administrador com o mesmo email
    const checkQuery = "SELECT * FROM administradores WHERE email = $1";
    const { rows: existingAdministrador } = await pool.query(checkQuery, [
      email,
    ]);

    if (existingAdministrador.length > 0) {
      return res.status(400).json({ message: "Administrador já existe" });
    }

    // Se não houver um Administrador com o mesmo email, insira-o no banco de dados
    const insertQuery =
      "INSERT INTO administradores (nome, email, senha) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await pool.query(insertQuery, [nome, email, senha]);

    res.status(200).json(rows);
  } catch (error) {
    console.error("Erro ao enviar Administrador:", error);
    res.status(500).json({ message: "Erro ao enviar Administrador" });
  }
}
