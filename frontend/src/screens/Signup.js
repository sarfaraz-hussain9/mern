import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const submitHandler=async (e)=>{

    }
  return (
    <>
        <div className="container w-60 h-80 mx-auto bg-slate-200 mt-5 p-3 rounded-xl shadow-md ">
            <h1 className='text-center font-bold text-xl mb-5'>Sign Up</h1>
            <form className='flex flex-col' onSubmit={submitHandler}>
            <input className=" focus:outline-none my-2 p-1 rounded-md" type="text" placeholder='username' id='username'/>
            <input className=" focus:outline-none my-2 p-1 rounded-md" type="text" placeholder='email' id='email'/>
            <input className=" focus:outline-none my-2 p-1 rounded-md" type="password" placeholder='password' id='password'/>
            <button className='my-2 bg-blue-600 w-full rounded-md text-white p-1'>Sign Up</button>
            </form>
            <p className=''>Have an Account? <span className='text-blue-600 font-medium'><Link to="/signin">Sign In</Link></span></p>
        </div>
    </>
  )
}

export default Signup