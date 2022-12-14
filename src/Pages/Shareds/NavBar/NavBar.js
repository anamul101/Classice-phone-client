import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';


const NavBar = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success(' Your Login Successfull')
            })
            .catch(err => console.log(err));
    }
    const menuItems = <>
        <li className='rounded-md mr-2'><Link to="/">Home</Link></li>
        <li className='rounded-md mr-2'><Link to="/blog">Blog</Link></li>
        <li className='rounded-md mr-2'><Link to="/login">Login</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                
                <li><button className='bg-red-600 rounded-lg hover:bg-red-800' onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link to="/signup">Sign Up</Link></li>
        }
    </>
    return (
        <div className="navbar mb-4 shadow-md bg-neutral text-neutral-content flex justify-between">
        <div className="navbar-start">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Classice Phone</Link>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
        </div>
        <div className="navbar-center  hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
            </ul>
        </div>
        <label htmlFor="dashbord-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
    </div>
    );
};

export default NavBar;