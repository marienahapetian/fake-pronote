import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import {z} from 'zod'
import { createProfessor, findUserByEmail } from '../models/user.model.js'
import { sendWelcomeEmail } from '../config/mailer.js'

export const authSchema = z.object({
    email: z.email().min(3,"L'email doit contenir au moin 3 caracteres"),
    password : z.string().min(8)
})

export  const register = async (req,res)=>{
    const {email,password} = req.body;

    const existing = await findUserByEmail (email)
    if (existing) return res.status(400).json({message: "Email déja existant"})

        const hashed = await argon2.hash(password)
        const id = await createProfessor(email,hashed)

        await sendWelcomeEmail(email,email, password)

        res.status(201).json({message: "Professeur crée un email à été envoyé", id, email})
}