import {pool} from "../config/db.js";

export const createStudent = async (name, professorId) => {
    const [result] = await pool.query ("INSERT INTO students (name, professor_Id) VALUES (?,?)",
        [name, professorId],
    );

    return result.insertId;
};

export const getStudentByProfessor = async (professorId) =>{
    const [rows] = await pool.query ("SELECT * from students Where professor_id = ?",
        [professorId])

    return rows
};

export const findStudentByid = async (id) => {
    const [rows] = await pool.query ("SELECT * FROM students WHERE id = ?", [id])
    return rows [0]
}