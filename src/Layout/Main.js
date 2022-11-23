import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shareds/Footer/Footer';
import NavBar from '../Pages/Shareds/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;