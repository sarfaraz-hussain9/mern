import jwt from "jsonwebtoken";
import User from "../models/userModel.js"

const protect=async(req,res,next)=>{
    const token=req.cookies.Token;
    try {
        if(token){
            const decoded=await jwt.verify(token,process.env.JWT);
            req.user=await User.findById(decoded.id);
            next();
        }
    } catch (error) {
        next(error);
    }
}
export {
    protect
}