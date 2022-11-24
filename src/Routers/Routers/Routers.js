import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryProducts from "../../Pages/Home/Home/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";
import DisplayError from "../../Pages/Shareds/DisplayError/DisplayError";

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
                path:'/categoryproducts/:id',
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`),
                element:<CategoryProducts></CategoryProducts>
            }
        ]
    }
])