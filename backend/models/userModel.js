import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import pkg from "bcryptjs"

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        default:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
    }
},{ 
    timestamps:true
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    const {genSalt}=pkg
    const salt=await genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})

const User= mongoose.model('user',userSchema);

export default User;