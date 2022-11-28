import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import NavBar from '../Pages/Shareds/NavBar/NavBar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin]=useAdmin(user?.email);
    const [isBuyer]=useBuyer(user?.email);
    const [isSeller]=useSeller(user?.email);
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
                   {
                    isAdmin && <>
                    <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                    <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>    
                    </>
                   }
                   {
                    isSeller &&<>
                    <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                    <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
                    </>
                   }
                   {
                    isBuyer && <>
                        <li><Link to='/dashboard'>My Orders</Link></li>
                    </>
                   }

                    </ul>
                
                </div>
        </div>
            
        </div>
    );
};

export default DashboardLayout;