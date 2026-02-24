import { pool } from "../config/db.js";

export const createProfessor = async (email, password) => {
	const [result] = await pool.query(
		"INSERT INTO users (email, password, role) VALUES (?, ?, 'PROFESSOR')",
		[email, password],
	);

	return result.insertId;
};

export const findUserByEmail = async (email) => {
	const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
		email,
	]);
	return rows[0];
};

export const findUserById = async (id) => {
    const [rows] = await pool.query ("SELECT * FROM users WHERE id = ?", [id]);
    return rows [0];
};

