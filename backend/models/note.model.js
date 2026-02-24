import { pool } from "../config/db.js";

export const createNote = async (eleveId, professeurId, note) => {
	const [result] = await pool.query("INSERT INTO note (eleve_id, professeur_id, valeur) VALUES (?,?,?)", [eleveId, professeurId, note]);
	return result.insertId;
};

export const getNotesParEleve = async (eleveId) => {
	const [result] = await pool.query("SELECT * FROM note WHERE eleve_id=?", [eleveId]);
	return result;
};
