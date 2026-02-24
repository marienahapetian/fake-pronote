import argon2 from "argon2";
import jwt from "jsonwebtoken";
import "dotenv/config";
import z from "zod";
import { createProf, findProfByEmail } from "../models/prof.model.js";
import { sendMail } from "../services/mailer.service.js";

export const authSchema = z.object({
	email: z.email().min(3, "email is too short"),
	password: z.string().min(8),
});

export const register = async (req, res) => {
	const { email, password } = req.body;

	const existing = await findProfByEmail(email);
	console.log(existing);
	if (existing) return res.status(400).json({ message: "Email already exists" });

	try {
		const hash = await argon2.hash(password);
		const id = await createProf(email, hash);
		sendMail("mnahap891@gmail.com", `http://localhost:5000/verify/rzehkjhrejherjhjkdhjhjfhdf`);

		sendMail(email, `${process.env.HOST}:${process.env.port}/verify/rzehkjhrejherjhjkdhjhjfhdf`);
		res.status(201).json({ message: "Professeur crée ", id, email });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
