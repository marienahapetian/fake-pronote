import { pool } from "../config/db.js";

export const createProf = async (email, password) => {
	const [result] = await pool.query("INSERT INTO professeur (email, password_hash) VALUES (?,?)", [email, password]);

	return result.insertId;
};

export const findProfByEmail = async (email) => {
	const [rows] = await pool.query("SELECT * FROM professeur WHERE email=?", [email]);
	return rows[0];
};

export const findProfById = async (id) => {
	const [rows] = await pool.query("SELECT * FROM professeur WHERE id=?", [id]);
	return rows[0];
};
