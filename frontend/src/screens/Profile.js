import React from 'react'
import { NavLink } from 'react-router-dom';
import { useLogoutMutation ,useDeleteMutation} from '../redux/slices/userApiSlice';
import { signOut } from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from "react-router-dom"
import {toast} from "react-toastify"

const Profile = () => {


  const {userInfo}=useSelector((state)=> state.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [logoutApiCall]=useLogoutMutation();
  const [deleteUser]=useDeleteMutation()


  // delete function
  const handledelte=async ()=>{
  if(userInfo){
    try {
      await deleteUser({
       email:userInfo.email
      }).unwrap();
      dispatch(signOut())
      toast.success("Account deleted successfully")
      navigate("/")
    } catch (error) {
      toast.error("Something went wrong")
    }
  }else{
    toast.error("You can only delete your account")
  }
  }

  // logout function
  const logoutHandler=async ()=>{
    try {
      await logoutApiCall().unwrap();
      dispatch(signOut())
      toast.success("User logout successfully")
      navigate("/")
    } catch (err) {
      toast.error("Something went wrong")
    }
  }

  return (
    <>
    <div className="container w-96  mx-auto bg-slate-200 mt-5 p-4 rounded-xl shadow-lg ">
    <h1 className='text-center font-bold  mb-5 text-4xl'>Profile</h1>
    <div className="box flex flex-col justify-center items-center ">

        <img className="w-24 h-24 rounded-full object-cover my-6 cursor-pointer" src={userInfo.profilePhoto} alt='profile'/>

        <h1 className='font-bold text-2xl'>USERNAME</h1>
        <h1 className='bg-white w-full pb-1 my-2 text-center  text-lg rounded-lg shadow-md'>{userInfo.username}</h1>
        <h1 className='font-bold text-2xl'>GMAIL</h1>
        <h1 className='bg-white w-full pb-1 my-2 text-center  text-lg rounded-lg shadow-md'>{userInfo.email}</h1>
        <NavLink to="/update" className=' text-white bg-blue-600 p-1 text-center  rounded-md shadow-md my-3'>Update Profile</NavLink>
        <div className="btn flex gap-[140px] mt-7"> 
        <button onClick={handledelte} className='bg-red-600 px-3 rounded-lg text-white'>Delete Account</button>
        <button onClick={logoutHandler} className='bg-slate-400 text-white rounded-md px-3'>LogOut </button>
        </div>
</div>
</div>
</>
  )
}

export default Profile