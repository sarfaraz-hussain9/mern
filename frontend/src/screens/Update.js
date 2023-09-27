import React, { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useUpdateMutation } from '../redux/slices/userApiSlice'
import { signIn } from '../redux/slices/authSlice'
import { toast } from 'react-toastify'

const Update = () => {

    const {userInfo}=useSelector((state)=> state.auth)
    
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    // eslint-disable-next-line
    const [updateProfile,{isLoading}]=useUpdateMutation();

    useEffect(()=>{
        // eslint-disable-next-line
       setUsername(userInfo.username);
       setEmail(userInfo.email)
      },[userInfo.setUsername,userInfo.setEmail]);

      const handleSubmit=async(e)=>{
        e.preventDefault();
       if(password!==confirmPassword){
        toast.error("password not match")
       }else{
        try {
            const res=await updateProfile({
                _id:userInfo._id,
                username,
                email,
                password,
            }).unwrap();
            dispatch(signIn({...res}));
            toast.success("profile updated successfully");
            navigate("/profile")
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
       }
      }
  return (
    <>
    <div className="container w-60  mx-auto bg-slate-200 mt-5 p-3 rounded-xl shadow-md ">
        <h1 className='text-center font-bold text-xl mb-5'>UPDATE PROFILE</h1>
        <form className='flex flex-col' onSubmit={handleSubmit}>
        <input onChange={(e)=>{setUsername(e.target.value)}} className=" focus:outline-none my-2 p-1 rounded-md" type="text" placeholder='Username' />
        <input onChange={(e)=>{setEmail(e.target.value)}} className=" focus:outline-none my-2 p-1 rounded-md" type="text" placeholder='Email' />
        <input onChange={(e)=>{setPassword(e.target.value)}} className=" focus:outline-none my-2 p-1 rounded-md" type="password" placeholder='password'/>
        <input onChange={(e)=>{setConfirmPassword(e.target.value)}} className=" focus:outline-none my-2 p-1 rounded-md" type="password" placeholder='Confirm Password' />
        <button type='submit' className='my-2 bg-blue-600 w-full rounded-lg text-white p-1'>UPDATE PROFILE</button>
        </form>
    </div>
</>
  )
}

export default Update