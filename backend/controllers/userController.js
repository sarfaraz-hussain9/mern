import User from "../models/userModel.js";
import errorHandler from "../middlewares/errorHandler.js";
import bcrypt from "bcryptjs";

const signUp=async(req,res,next)=>{
const {username,email,password}=req.body;
const hashedPassword=bcrypt.hashSync(password,10);

const newUser=new User({username,email,password:hashedPassword})
try {
    await newUser.save();
    res.status(200).json({message:"user created successfully"});
} catch (error) {
    next(error);
}
}



export {
    signUp
}