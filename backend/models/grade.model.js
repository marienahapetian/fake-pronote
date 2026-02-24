import {pool} from "../config/db.js";

export const createGrade = async(value, professor_id, student_id) =>{
    const [result] = await pool.query("INSERT INTO grades (value, student_id, professor_id) VALUE (?,?,?)", [value, student_id, professorId]);
    return result.insertId
}

export const getGradeByStudent = async (studentId) => {
    const [rows] = await pool.query("SELECT * FROM grades WHERE student_id = ?", [studentId]);
    return rows
}