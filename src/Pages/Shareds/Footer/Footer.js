import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to='/' className="link link-hover">Home</Link> 
                <Link to='/blog' className="link link-hover">Blog</Link> 
                <Link to='/dashboard' className="link link-hover">Dashboard</Link> 
                <Link to='/signup' className="link link-hover">SignUp</Link>
            </div>  
            <div>
                <p>Copyright © 2022 - All right reserved by ClassicePhone.com </p>
            </div>
        </footer>
    );
};

export default Footer;