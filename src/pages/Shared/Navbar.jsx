import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import { GiDragonfly } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "../../App.css"

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)


    const signOutUser = () => {
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }

    const navLinks = <>
        <li className="font-medium font-3xl text-white"><NavLink to="/">Home</NavLink></li>
        <li className="font-medium font-3xl text-white"><NavLink to="/all-spots">All Tourists Spot</NavLink></li>
        <li className="font-medium font-3xl text-white"><NavLink to="/add-spot">Add Tourist Spot</NavLink></li>
        <li className="font-medium font-3xl text-white"><NavLink to="/my-spots">My List</NavLink></li>
        {/* <li className="font-medium font-3xl t*ext-white"><NavLink to="/profile">Login</NavLink></li> */}
        <li className="font-medium font-3xl text-white"><NavLink to="/register">Register</NavLink></li>
        

    </>

    return (
        <div className="mb-6 md:mb-8 lg:mb-12">
            <div className="navbar  py-4 lg:p-6 bg-gradient-to-r from-[#4F772D] from-0% via-[#90A955] via-27% to-[#4F772D] to-76% rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-1 md:p-3 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm z-10 dropdown-content mt-3  p-2 shadow bg-[#6A994E]  rounded-box w-52">
                        {navLinks}
                    </ul>
                    </div>
                    <a className="font-caveat font-semibold text-lg md:text-xl lg:text-3xl p-1 text-white"> <Link className="flex items-center justify-center gap-1 md:gap-2 font-caveat tracking-widest">  <GiDragonfly className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#386641] md:text-[#A7C957]"/> <span><span className="text-xl md:text-2xl lg:text-4xl">S</span>erendipia  </span></Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        {navLinks}
                    </ul>
                </div>
                
                    {user? 
                    <div className="navbar-end md:mr-2">
                    <div tabIndex={0} className="flex gap-2 md:gap-3 lg:gap-4 items-center">
                        <div className="tooltip" data-tip={user.displayName}>
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
    );
};

export default Navbar;