import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect=async(req,res,next)=>{
    
    let token
    token=req.cookies.Token;
   if(token){
    try {
        const decoded=jwt.verify(token,process.env.JWT);
        
        req.user=await User.findById(decoded._id).select('-password');
        next()

    } catch (err) {
        res.status(401)
        throw new Error("Not Authroized, invalid token")
    }
   }else{
    res.status(401)
    throw new Error("Not Authroized, no token")
   }
}

export {
    protect
}