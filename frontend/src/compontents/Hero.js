import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <div className="container w-3/4  mx-auto bg-slate-200 my-9 rounded-3xl shadow-md">
          <h1 className='text-3xl font-bold text-center py-7'>MERN Authentication</h1>
          <p className='text-center mb-5'>This is a boilerplate for mern authentication that stores a JWT in an HTTP-only cookie. it also uses Redux toolkit and tailwind css.</p>
          <div className="btn pb-7 flex items-center justify-center gap-6">
            <Link to="/signin" className='bg-blue-600 w-32 px-2 py-1 rounded-xl text-white shadow text-center'>Sign In</Link>
            <Link to="/signup" className='bg-slate-500 w-32 px-2 py-1 rounded-xl text-white shadow text-center'>Sign Up</Link>
          </div>
        </div>
    </>
  )
}

export default Hero