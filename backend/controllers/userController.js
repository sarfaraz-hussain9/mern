import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import errorHandler from "../middlewares/errorHandler.js"

// signup post public
const signUp=async(req,res,next)=>{
    const {username,email,password}=req.body;
    const hashedPassword=bcrypt.hashSync(password,10);
    const newUser=new User({username,email,password:hashedPassword});
    try {
        await newUser.save();
        res.status(200).json({
            message:"user created successfully"
        })
        
    } catch (error) {
        next(error);
    }
}


// signin post public
const signIn=async(req,res,next)=>{
    const {email,password}=req.body;
    try {
        const validUser=await User.findOne({email});
        if(!validUser){
            return next(errorHandler())
        }
        const validPassword=bcrypt.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorHandler())
        }
        const token=jwt.sign({id:validUser._id},process.env.JWT,{expiresIn:'30d'});
        res.cookie("Token",token,{httpOnly:true,secure:true,sameSite:"strict", maxAge:30*24*60*60*100 });
        const{password:hashedPassword,...rest}=validUser._doc;
        res.status(200).json({rest})

    } catch (error) {
        next(error)
    }
}

// logout post public
const logOut=async(req,res,next)=>{

}

// profile get private
const profile=async(req,res,next)=>{

}

// updateprofile put private
const updateProfile=async(req,res,next)=>{

}


export {
    signUp,
    signIn,
    logOut,
    profile,
    updateProfile
}