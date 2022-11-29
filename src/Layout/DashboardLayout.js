import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import NavBar from '../Pages/Shareds/NavBar/NavBar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    // console.log(user?.email);
    // const [isRole, setIsRole]=useState('')
    // const {data:users}=useQuery({
    //     queryKey:['users',user?.email],
    //     queryFn:async()=>{
    //         const res= await fetch(`http://localhost:5000/user/${user.email}`);
    //         const data=await res.json();
    //         return data;
    //     }
    // })
    // console.log(users)
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content">
                    
                        <li className='mb-2'><Link to='/dashboard'>My Orders</Link></li>
                        <li className='mb-2'><Link to='/dashboard/addproducts'>Add Products</Link></li>
                        <li className='mb-2'><Link to='/dashboard/myproducts'>My Products</Link></li>
                        <li className='mb-2'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                        <li className='mb-2'><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                        
                    </ul>
                </div>
        </div>
            
        </div>
    );
};

export default DashboardLayout;