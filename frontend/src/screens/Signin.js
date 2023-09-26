import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../redux/slices/userApiSlice.js';
import { signIn } from '../redux/slices/authSlice.js';
import {toast} from "react-toastify"


const Signin = () => {
  
  const dispatch=useDispatch();
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [login,{isLoading}]=useLoginMutation();

    const {userInfo}=useSelector((state)=>state.auth)

    useEffect(()=>{
      if(userInfo){
        navigate("/")
      }
    },[navigate,userInfo]);
   

    const handleSubmit=async (e)=>{
        e.preventDefault();
       try {
        const res=await login({email,password}).unwrap();
        dispatch(signIn({...res}))
        toast.success("Login successfully")
        navigate("/")
       } catch (err) {
        toast.error('Invalid Email or Password')
       }
    }
  

  return (
    <>
        <div className="container w-64 mx-auto bg-slate-200 mt-5 p-3 rounded-xl shadow-md ">
            <h1 className='text-center uppercase font-bold text-xl mb-5'>Sign In</h1>
            <form className='flex flex-col' onSubmit={handleSubmit} >
            <input onChange={(e)=>{setEmail(e.target.value)}} className=" focus:outline-none  my-2 p-1 rounded-md" type="text" placeholder='Email' value={email}/>
            <input onChange={(e)=>{setPassword(e.target.value)}} className=" focus:outline-none   my-2 p-1 rounded-md" type="password" placeholder='Password' value={password}/>
            <button type='submit' className='mt-2 bg-blue-600 w-full uppercase rounded-lg text-white p-1'>Sign In</button>
            </form>
            <p className=''>Dont have an Account? <span className='text-blue-600 font-medium'><Link to="/signup">Sign Up</Link></span></p>
        </div>
    </>
  )
}

export default Signin