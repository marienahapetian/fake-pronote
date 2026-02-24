import jwt from "jsonwebtoken";
import "dotenv/config";

export const authMiddleware = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) res.status(401).json({ message: "Not authorized" });

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
	} catch (error) {}
};
