import React, { useContext } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../../Auth/AuthProvider';
import { auth } from '../../Firebase/Firebase.int';

const Nav = () => {
    const { user, logout } = useContext(Authcontext)
    const link = <>
        <Link> <li><a>Home</a></li></Link>
        <Link> <li><a>About</a></li></Link>
        <Link> <li><a>Profile</a></li></Link>
    </>

    const handlelogout = () => {
        console.log("Logout Butoon clicked")
        logout(auth)
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                {/* <Link
                    to="/"
                    className="text-xl font-bold mr-4 bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#6366f1] bg-clip-text text-transparent transition-all duration-300 hover:from-[#f472b6] hover:via-[#c084fc] hover:to-[#60a5fa]"
                >
                    TourLand
                </Link> */}
                <Link to={'/'} className="btn btn-ghost   text-xl font-bold mr-4 bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#6366f1] bg-clip-text text-transparent transition-all duration-300 hover:from-[#f472b6] hover:via-[#c084fc] hover:to-[#60a5fa] ">TourLand</Link>
                {
                    user && user?.email ? user.email : <span className='text-red-500'>No user</span>
                }
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            {/* {
                user && user?.email ? <div className="navbar-end">
                    <Link onClick={handlelogout} className="btn">SingOut</Link>
                </div> :
                    <div className="navbar-end">
                        <Link to={'/login'} className="btn">Login</Link>
                    </div>
            } */}
            {user && user?.email ? (
                <div className="navbar-end">
                    <Link
                        onClick={handlelogout}
                        className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md"
                    >
                        Sign Out
                    </Link>
                </div>
            ) : (
                <div className="navbar-end">
                    <Link
                        to="/login"
                        className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-300 shadow-md"
                    >
                        Login
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Nav;