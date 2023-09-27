import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector } from "react-redux";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className="navBar flex justify-around h-10 w-full bg-slate-900 text-white items-center shadow ">
        <div className=" ">
          <h3 className="text-emerald-700  font-bold font-mono text-xl ">
            MERN APP
          </h3>
        </div>
        <div className="">
          <ul className="flex gap-3 sm:gap-6">
          <li >
                  <NavLink to="/">HOME</NavLink>
                </li>
            {userInfo ? (
              <>
              <li >
                  <NavLink to="/profile"><img className="w-7 h-7 rounded-full object-cover" src={userInfo.profilePhoto} alt="profile"/></NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/signup">SIGN UP</NavLink>
                </li>
                <li>
                  <NavLink to="/signin">SIGN IN</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
