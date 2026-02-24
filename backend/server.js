import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
	res.send("<h1>My Server is working </h1>");
});

app.listen(PORT, () => {
	console.log(`Serveur tourne sur http://localhost:${PORT}`);
});
