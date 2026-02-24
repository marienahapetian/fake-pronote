export const requireProfessor = (req, res, next) => {
	if (req.user.role != "PROFESSOR") {
		return res.status(403).json({ message: "Access Denied" });
	}

	next();
};
