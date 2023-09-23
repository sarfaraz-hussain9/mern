import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className='navBar flex justify-between h-10 bg-slate-900 text-white items-center shadow'>
            <div className="left mx-20">
                <h3 className='text-emerald-700  font-bold font-mono text-xl '>MERN APP</h3>
            </div>
            <div className="right mx-52">
                <ul className='flex gap-7'>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                    <li><NavLink to="/signin">Sign In</NavLink></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header;