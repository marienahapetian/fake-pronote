import  express from "express"
import { authSchema } from "../controllers/auth.controller.js"
import { register } from "../controllers/auth.controller.js"
import { validate } from "../middleware/validate.middleware.js";


const router = express.Router()

router.post("/register", validate(authSchema), register);

export default router