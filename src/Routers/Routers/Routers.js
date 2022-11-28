import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashbord from "../../Pages/Dashboard/Dashbord";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import CategoryProducts from "../../Pages/Home/Home/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LogIn/Login";
import DisplayError from "../../Pages/Shareds/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute";
import BuyerRoute from "../SellerRoute/BuyerRoute/BuyerRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/categoryproducts/:id',
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`),
                element:<PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/dashboard',
                element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
        
            {
                path:'/dashboard/addproducts',
                element:<SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path:'/dashboard/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/dashboard/allsellers',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/allbuyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            }
        ]
    }
])