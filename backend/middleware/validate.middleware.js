export const validate = (shcema) => (req,res,next) =>{
    try{
        shcema.parse(req.body)
        next()
    } catch (error){
        return res.status(400).json(error.errors)
    }
}