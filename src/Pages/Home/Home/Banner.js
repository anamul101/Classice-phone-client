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
                <div className='mr-12'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <img src={banner1} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
            </div>
        </div>
    </section>
    );
};

export default Banner;