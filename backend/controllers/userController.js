import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import errorHandler from "../middlewares/errorHandler.js"

// signup post public
const signUp=async(req,res,next)=>{
    const {username,email,password}=req.body;
    
    const userExist=await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error("User already Exist")
    }

    const user=await User.create({
        username,
        email,
        password,
    })

    if(user){
        
        const token=jwt.sign({_id:user._id},process.env.JWT,{expiresIn:'30d'});
        res.cookie("Token",token,{httpOnly:true,secure:process.env.NODE_ENV!=="devlopment",sameSite:"strict", maxAge:30*24*60*60*100 });
        res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email,
            profilePhoto:user.profilePhoto,
        })
    }else{
        res.status(400)
        throw new Error("Invalid User Data")
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

        const token=jwt.sign({_id:validUser._id},process.env.JWT,{expiresIn:'30d'});
        res.cookie("Token",token,{httpOnly:true,secure:process.env.NODE_ENV!=="devlopment",sameSite:"strict", maxAge:30*24*60*60*100 });

        res.status(200).json({
            _id: validUser._id,
            username: validUser.username,
            email: validUser.email,
            profilePhoto: validUser.profilePhoto,
        })

    } catch (err) {
        next(err)
    }
}

// logout post public
const logOut=async(req,res,next)=>{
    res.cookie("Token","",{httpOnly:true,expires:new Date(0)});
    res.status(200).json({message:"user logout successfully"})
}

// profile get private
const profile=async(req,res,next)=>{
    res.status(200).json("profile");
}

// updateprofile put private
const updateProfile=async(req,res,next)=>{
    const user=await User.findById(req.user._id);
    if(user){
        user.username=req.body.username || user.username;
        user.email=req.body.email || user.email;
        if(req.body.password){
            user.password=req.body.password;
        }
        const updateUser=await user.save()
        res.status(200).json({
            _id: updateUser._id,
            username: updateUser.username,
            email: updateUser.email,
            profilePhoto:updateUser.profilePhoto,
        });
    }
    else{
        res.status(404);
        throw new Error("user not found");
    }
    
    }

// delete user Account

const deleteUser=async(req,res,next)=>{
    const {email}=req.body
    if(!email){
        res.status(500)
        throw new Error("You can only delete your account")
    }
    try {
        await User.deleteOne({email})
        res.status(200).json({message:"user deleted successfully"})
    } catch (error) {
        next(error)
    }
}



export {
    signUp,
    signIn,
    logOut,
    profile,
    updateProfile,
    deleteUser
}