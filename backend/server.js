import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.route.js"

const PORT = process.env.PORT;
const app = express();
app.use(express.json())

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
	console.log(`serveur tourne sur http://localhost:${PORT}`);
});