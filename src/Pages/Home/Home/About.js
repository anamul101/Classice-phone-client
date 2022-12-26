import React from 'react';
import aboutpic from '../../../assets/banner/aboutpic.jpg'
import { Fade,Slide,Flip,Zoom } from "react-awesome-reveal";

const About = () => {
    return (
        <Slide>
            <div className="hero my-12 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={aboutpic} className="max-w-sm rounded-lg shadow-2xl" alt='iphone' />
                <div className='mt-4 lg:mt-0'>
                    <h1 className="text-5xl font-bold lg:text-left text-center  text-yellow-600">About Us</h1>
                    <p className="py-6">The smartphone is one of the most impactful pieces of technology ever created, and your smartphone is likely the most important piece of tech you own, which is why it can be very overwhelming when you need to upgrade. <br /> With so many different phones available on the market, all with distinctive features and styles, finding the best phone can be far from easy.</p>
                    <br />
                    <p>That’s why we’re here, and why we’ve carefully curated this list of all the best smartphones we’ve ever reviewed. We get through dozens and dozens of phones every year, from feature-packed flagships to budget handsets and everything in between, our expert team has plenty of experience.</p>
                </div>
            </div>
            </div>
        </Slide>
        
    );
};

export default About;