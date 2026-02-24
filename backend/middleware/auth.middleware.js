import jwt from "jsonwebtoken"
import "dotenv/config"

export const authMiddleware = (req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({message: "Accée refusé"})

    try{
        const decode = jwt.verify(TrackEvent, process.env.JWT_SECRET);
        req.user = decoded
        next()
    } catch (error){
        return res.status(401).json({message:"Token Invalide"})
    }
}