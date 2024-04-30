import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import { GiDragonfly } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import "../../App.css"

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)


    const signOutUser = () => {
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
      const handleToggle = (e) =>{
        if (e.target.checked){
          setTheme("dark");
        } else {
          setTheme("light");
        }
    };

    useEffect(()=>{
        localStorage.setItem("theme",theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);


    const navLinks = <>
        <li className="font-semibold font-3xl text-[#2d6a4f]"><NavLink to="/">Home</NavLink></li>
        <li className="font-semibold font-3xl text-[#2d6a4f]"><NavLink to="/all-spots">All Tourists Spot</NavLink></li>
        <li className="font-semibold font-3xl text-[#2d6a4f]"><NavLink to="/add-spot">Add Tourist Spot</NavLink></li>
        <li className="font-semibold font-3xl text-[#2d6a4f]"><NavLink to="/my-spots">My List</NavLink></li>
        <li className="font-semibold font-3xl text-[#2d6a4f]"><NavLink to="/register">Register</NavLink></li>
        

    </>

    return (
        <div className="mb-6 md:mb-8 lg:mb-12">
            <div className="navbar  py-4 lg:p-6 bg-gradient-to-r from-[#99D98C] from-0% via-[#d2f4b4] via-27% to-[#99D98C] to-76% rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-1 md:p-3 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm z-10 dropdown-content mt-3  p-2 shadow bg-[#99D98C]  rounded-box w-52">
                        {navLinks}
                    </ul>
                    </div>
                    <a className="font-caveat font-semibold text-lg md:text-xl lg:text-3xl p-1 text-[#2d6a4f]"> <Link className="flex items-center justify-center gap-1 md:gap-2 font-caveat tracking-widest">  <GiDragonfly className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2d6a4f]"/> <span><span className="text-xl md:text-2xl lg:text-4xl">S</span>erendipia  </span></Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        {navLinks}
                    </ul>
                </div>
                
                <div className='navbar-end md:mr-2'>
                    <label className="swap swap-rotate mr-1 lg:mr-2">
                                    <input type="checkbox" onChange={handleToggle} checked={theme==='light' ? false : true}/>
                                    <svg className="text-base swap-on fill-current w-6 h-6 md:h-7 md:w-7  lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                                    <svg className="text-base swap-off fill-current w-6 h-6 md:h-7 md:w-7  lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    </label>

                        {user? 
                        <div className="">
                        <div tabIndex={0} className="flex gap-2 md:gap-3 lg:gap-4 items-center">
                            <Tooltip className="z-10" id="my-tooltip" />
                            <div className="tooltip" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                            <img alt="Tailwind CSS Navbar component" className=" w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full  btn-circle avatar" src={user.photoURL}  />
                            </div>
                            <button onClick={signOutUser} className="btn hover:bg-[#50a9af] border-none p-2 md:p-3 lg:p-3 text-xs lg:text-sm bg-[#2e4057] text-white">Log Out</button>
                        </div>
                        </div>
                        :
                        <div className="navbar-end ">
                            <Link to='/login' className="hover:bg-[#50a9af] p-2 md:p-3 lg:p-3 btn border-none text-xs lg:text-sm bg-[#6A994E] text-white">Log In</Link>
                        </div>
                        }
                </div>
            </div>
        </div>
    );
};

export default Navbar;