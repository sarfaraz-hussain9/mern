import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Signin = () => {

    const navigate=useNavigate()
    const [formDate,setFormDate]=useState({});
    const [error,setError]=useState(false);

    const handleChange=(e)=>{
        setFormDate({...formDate,[e.target.id]:e.target.value});
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            setError(false);

            const res=await fetch('/api/auth/signin',{
                method:'POST',
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify(formDate),
              });
        
              const data =await res.json();
              if(data.success==="false"){
                setError(true);
              }
              navigate("/")
              
        } catch (error) {
            setError(true);
        }
    }
  

  return (
    <>
        <div className="container w-60 h-80 mx-auto bg-slate-200 mt-5 p-3 rounded-xl shadow-md ">
            <h1 className='text-center font-bold text-xl mb-5'>Sign In</h1>
            <form className='flex flex-col' onSubmit={handleSubmit} >
            <input onChange={handleChange} className=" focus:outline-none my-2 p-1 rounded-md" type="text" placeholder='username' id='username'/>
            <input onChange={handleChange} className=" focus:outline-none my-2 p-1 rounded-md" type="password" placeholder='password' id='password'/>
            <button type='submit' className='my-2 bg-blue-600 w-full rounded-md text-white p-1'>Sign In</button>
            </form>
            <p className=''>Have an Account? <span className='text-blue-600 font-medium'><Link to="/signup">Sign Up</Link></span></p>
            <p className="text-red-600">{error&&"something went wrong"}</p>
        </div>
    </>
  )
}

export default Signin