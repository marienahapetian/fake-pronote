import { pool } from "../config/db.js";

export const createEleve = async () => {
	const [result] = await pool.query("INSERT INTO eleve (email, password_hash) VALUES (?,?)", [email, password]);

	return result.insertId;
};

export const getElevesByProfesseur = async (professeurId) => {
	const [rows] = await pool.query("SELECT * FROM eleve WHERE professeur_id=?", [professeurId]);
	return rows;
};

export const findEleveById = async (id) => {
	const [rows] = await pool.query("SELECT * FROM eleve WHERE id=?", [id]);
	return rows[0];
};
