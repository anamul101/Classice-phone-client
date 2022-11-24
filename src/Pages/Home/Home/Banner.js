import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg'
// import banner2 from '../../../assets/banner/banner2.webp'
const Banner = () => {
    return (
        <section className='banner-bg my-12'
        // style={{
        //     background:`url(${banner2})`,
        //     backgroundSize: 'cover',
        // }}
    >
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2 lg:ml-8 text-center lg:text-left'>
                    <h1 className="text-xl lg:text-5xl font-bold">Welcome to Classice Phone Stor!</h1>
                    <p className="py-6">The current age is full of challenges and uncertainty. To believe in “Inspiration Ahead” is to believe that the future is promising. Just as we encourage everyone to brave the difficulties, OPPO will stick to the right thing and never sacrifice quality for speed.</p>
                    <button className="btn btn-wide">Explore Your Products</button>
                </div>
                <div className='lg:w-1/2'>
                <img src={banner1} className="rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;