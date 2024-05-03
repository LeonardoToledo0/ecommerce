import { NextApiRequest, NextApiResponse } from "next";
import pool from "../utils/postgres";
import dotenv from "dotenv";
import cloudinary from "../utils/cloudnary";

dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { nome, ativo, imagem, status } = req.body;

    // Verifica se já existe um banner com o mesmo nome
    const checkQuery = "SELECT * FROM banners WHERE nome = $1";
    const { rows: existingBanners } = await pool.query(checkQuery, [nome]);

    if (existingBanners.length > 0) {
      return res.status(400).json({ message: "Banner já existe" });
    }

    // Realiza o upload da imagem para o Cloudinary
    const cloudinaryResponse = await cloudinary.v2.uploader.upload(imagem);

    // Insere os dados do banner no banco de dados, armazenando apenas a URL da imagem
    const insertQuery =
      "INSERT INTO banners (nome, ativo, imagem, status) VALUES ($1, $2, $3, $4) RETURNING *";
    const { rows } = await pool.query(insertQuery, [
      nome,
      ativo,
      cloudinaryResponse.secure_url,
      status,
    ]);

    res.status(200).json(rows);
  } catch (error) {
    console.error("Erro ao enviar banner:", error);
    res.status(500).json({ message: "Erro ao enviar banner" });
  }
}
