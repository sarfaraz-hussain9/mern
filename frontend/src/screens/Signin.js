import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Signin = () => {

   
  

  return (
    <>
        <div className="container w-60 h-80 mx-auto bg-slate-200 mt-5 p-3 rounded-xl shadow-md ">
            <h1 className='text-center font-bold text-xl mb-5'>Sign In</h1>
            <form className='flex flex-col' >
            <input  className=" focus:outline-none my-2 p-1 rounded-md" type="text" placeholder='username' id='username'/>
            <input  className=" focus:outline-none my-2 p-1 rounded-md" type="password" placeholder='password' id='password'/>
            <button className='my-2 bg-blue-600 w-full rounded-md text-white p-1'>Sign In</button>
            </form>
            <p className=''>Have an Account? <span className='text-blue-600 font-medium'><Link to="/signup">Sign Up</Link></span></p>
        </div>
    </>
  )
}

export default Signin