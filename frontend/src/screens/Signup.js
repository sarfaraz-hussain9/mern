import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSignupMutation } from '../redux/slices/userApiSlice.js';
import { signIn } from '../redux/slices/authSlice.js';
import {toast} from "react-toastify"


const Signup = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {userInfo}=useSelector((state)=> state.auth)

   const [username,setUsername]=useState('')
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

   const [signup,{isLoading}]=useSignupMutation()

   
   useEffect(()=>{
    if(userInfo){
      navigate("/")
    }
  },[navigate,userInfo]);
  
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
          const res=await signup({username,email,password}).unwrap();
          dispatch(signIn({...res}))
          toast.success("User Login Successfully")
          navigate("/")
         } catch (err) {
          toast.error('Something Went Wrong')
         }
      }
    
  return (
    <>
        <div className="container w-60 mx-auto bg-slate-200 mt-5 p-3 rounded-xl shadow-md ">
            <h1 className='text-center font-bold text-xl mb-5'>SIGN UP</h1>
            <form className='flex flex-col' onSubmit={handleSubmit}>
            <input onChange={(e)=>{setUsername(e.target.value)}} className=" focus:outline-none my-2  p-1 rounded-md" type="text" placeholder='Username' id='username'/>
            <input onChange={(e)=>{setEmail(e.target.value)}} className=" focus:outline-none my-2  p-1 rounded-md" type="text" placeholder='Email' id='email'/>
            <input onChange={(e)=>{setPassword(e.target.value)}} className=" focus:outline-none my-2  p-1 rounded-md" type="password" placeholder='Password' id='password'/>
            <button type='submit' className='mt-2 bg-blue-600 w-full rounded-lg text-white p-1'>SIGN UP</button>
            </form>
            <p className=''>Have an Account? <span className='text-blue-600 font-medium'><Link to="/signin">Sign In</Link></span></p>
        </div>
    </>
  )
}

export default Signup