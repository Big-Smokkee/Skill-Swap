import { Link, NavLink } from "react-router";
import { PiSwapDuotone } from "react-icons/pi";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logoutUser } = use(AuthContext);
    console.log(user);
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast("Logout Successfull");
            })
            .catch((err) => {
                toast("There was a problem when logging out");
                console.log(err);
            })
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/browse'>Browse Skills</NavLink></li>
        <li><NavLink to='/profile'>My Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Skill<span className="text-emerald-400">Swap </span><span className="text-emerald-400"><PiSwapDuotone /></span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                {
                    user ? <button onClick={handleLogout}
                        className="btn bg-emerald-600 text-white hover:bg-black hover:text-emerald-400">
                        Logout
                    </button> : <div>
                        <Link to='/login'
                            className="btn bg-black text-white hover:bg-emerald-600">
                            Login
                        </Link>
                        <Link to="/signup"
                            className="btn bg-emerald-600 text-white hover:bg-black hover:text-emerald-400">
                            Register
                        </Link>
                    </div>
                }


            </div>
        </div>
    );
};

export default Navbar;