import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useSeller from '../Hooks/useSeller';
import NavBar from '../Pages/Shareds/NavBar/NavBar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isSeller]=useSeller(user?.email)
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
                    
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/allsellers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/allbuyers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/addproducts'>My Products</Link></li>
                        <li><Link to='/dashboard/myproducts'>Add Products</Link></li>

                    {
                        isSeller? <>
                        
                        </>:
                        <>
                        
                        </>
                    }
                   
                    {/* {
                        isAdmin && 
                        <>
                             <li><Link to='/dashboard/alluser'>All Users</Link></li>
                             <li><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                             <li><Link to='/dashboard/manageddoctor'>Manage Doctors</Link></li>
                        </>
                    } */}
                    
                    </ul>
                
                </div>
        </div>
            
        </div>
    );
};

export default DashboardLayout;