import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shareds/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;