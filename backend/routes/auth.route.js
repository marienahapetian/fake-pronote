import express from "express";
import { validate } from "../middleware/validation.middleware.js";
import { authSchema, register } from "../controllers/auth.controller.js";
import { sendMail } from "../services/mailer.service.js";

const router = express.Router();

router.post("/register", validate(authSchema), register);

export default router;
