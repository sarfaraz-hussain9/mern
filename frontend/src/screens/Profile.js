import React from 'react'
import { useLogoutMutation } from '../redux/slices/userApiSlice';
import { signOut } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate} from "react-router-dom"

const Profile = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [logoutApiCall]=useLogoutMutation();

  const logoutHandler=async ()=>{
    try {
      await logoutApiCall().unwrap();
      dispatch(signOut())
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
    <div className="container w-96 h-[500px] mx-auto bg-slate-200 mt-5 p-4 rounded-xl shadow-lg ">
    <h1 className='text-center font-bold  mb-5 text-4xl'>Profile</h1>
    <div className="box flex flex-col justify-center items-center ">
        <img className="w-24 h-24 rounded-full my-6" src="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc1OTI2MjAxOTUyMTI0/unique-baby-names-2019-jpg.jpg" alt="" />

        <h1 className='bg-white w-full p-1 my-2 text-center font-bold text-2xl rounded-lg shadow-md'>username</h1>
        <h1 className='bg-white w-full p-1 my-2 text-center font-bold text-2xl rounded-lg shadow-md'>email</h1>
        <button className=' text-white bg-blue-600 w-full p-1 text-center  rounded-md shadow-md my-3'>Update Profile</button>
        <div className="btn flex gap-[140px] mt-20"> 
        <button className='bg-red-600 px-3 rounded-md text-white'>Delete Account</button>
        <button onClick={logoutHandler} className='bg-slate-400 text-white rounded-md px-3'>LogOut </button>
        </div>
</div>
</div>
</>
  )
}

export default Profile