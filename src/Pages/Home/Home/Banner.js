import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../../assets/banner/banner1.jpg'
import Typewriter from 'typewriter-effect';
import { Fade,Slide,Flip,Zoom } from "react-awesome-reveal";
const Banner = () => {
    return (
        <section className='banner-bg my-12'>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2 lg:ml-8 text-center lg:text-left'>
                    <Typewriter
                       options={{
                        strings: ['<strong style="color: #27ae60;  font-size: 40px;">Welcome to</strong>', '<strong style="color: #000;  font-size: 40px;">Classice Phone Store!</strong>'],
                        autoStart: true,
                        loop: true,
                      }}
                        />
                    <p className="py-6">The current age is full of challenges and uncertainty. To believe in “Inspiration Ahead” is to believe that the future is promising. Just as we encourage everyone to brave the difficulties, OPPO will stick to the right thing and never sacrifice quality for speed.</p>
                    <Link to='/dashboard/addproducts'>
                        <button className="btn btn-warning">Add a Products</button>
                    </Link>
                </div>
                <div className='lg:w-1/2'>
                <Zoom>
                <img src={banner1} className="rounded-lg shadow-2xl" alt='' />
                </Zoom>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;