import React from 'react';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Zoom } from "react-awesome-reveal";
import client1 from '../../../assets/banner/client1.png'
import client2 from '../../../assets/banner/client2.png'
import client3 from '../../../assets/banner/client3.png'
import client4 from '../../../assets/banner/client4.png'
import client5 from '../../../assets/banner/client5.png'
import client6 from '../../../assets/banner/client6.png'
import bgc from '../../../assets/banner/bgc.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const CustomerReview = () => {
    return (
        <Zoom>
        <div className='my-20'
        style={{
            background:`url(${bgc})`,
            backgroundSize: 'cover'
        }}
        
        >
            <p className='text-4xl font-semibold text-center text-yellow-600'>Customer Review</p>
            <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
              
                <SwiperSlide className='p-12'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="">
                            <p className='px-8'>In sales, commerce, and economics, a customer is the recipient of a good, service, product or an 
                                idea - obtained from a seller, vendor, or supplier via a financial transaction.</p>
                            <div className="flex items-center mt-6 p-8 rounded-t-2xl bg-black">
                            <div className="avatar">
                            <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                <img src={client1} alt='Alex John'/>
                            </div>
                            </div>
                            <div className='text-xl font-bold ml-5 text-white'>
                                <p>Alex John</p>
                                <p>Customer</p>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </SwiperSlide>
        
                <SwiperSlide className='p-12'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="">
                            <p className='px-8'>In sales, commerce, and economics, a customer is the recipient of a good, service, product or an 
                                idea - obtained from a seller, vendor, or supplier via a financial transaction.</p>
                            <div className="flex items-center mt-6 p-8 rounded-t-2xl bg-black">
                            <div className="avatar">
                            <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                <img src={client2}   alt='Alex John'/>
                            </div>
                            </div>
                            <div className='text-xl font-bold ml-5 text-white'>
                                <p>Rose</p>
                                <p>Customer</p>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-12'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="">
                            <p className='px-8'>In sales, commerce, and economics, a customer is the recipient of a good, service, product or an 
                                idea - obtained from a seller, vendor, or supplier via a financial transaction.</p>
                            <div className="flex items-center mt-6 p-8 rounded-t-2xl bg-black">
                            <div className="avatar">
                            <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                <img src={client3}alt='Alex John'/>
                            </div>
                            </div>
                            <div className='text-xl font-bold ml-5 text-white'>
                                <p>Piter sone</p>
                                <p>Customer</p>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-12'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="">
                            <p className='px-8'>In sales, commerce, and economics, a customer is the recipient of a good, service, product or an 
                                idea - obtained from a seller, vendor, or supplier via a financial transaction.</p>
                            <div className="flex items-center mt-6 p-8 rounded-t-2xl bg-black">
                            <div className="avatar">
                            <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                <img src={client4}   alt='Alex John'/>
                            </div>
                            </div>
                            <div className='text-xl font-bold ml-5 text-white'>
                                <p>Antone</p>
                                <p>Customer</p>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-12'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="">
                            <p className='px-8'>In sales, commerce, and economics, a customer is the recipient of a good, service, product or an 
                                idea - obtained from a seller, vendor, or supplier via a financial transaction.</p>
                            <div className="flex items-center mt-6 p-8 rounded-t-2xl bg-black">
                            <div className="avatar">
                            <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                <img src={client5}   alt='Alex John'/>
                            </div>
                            </div>
                            <div className='text-xl font-bold ml-5 text-white'>
                                <p>Karena jon</p>
                                <p>Customer</p>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-12'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="">
                            <p className='px-8'>In sales, commerce, and economics, a customer is the recipient of a good, service, product or an 
                                idea - obtained from a seller, vendor, or supplier via a financial transaction.</p>
                            <div className="flex items-center mt-6 p-8 rounded-t-2xl bg-black">
                            <div className="avatar">
                            <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                <img src={client6}   alt='Alex John'/>
                            </div>
                            </div>
                            <div className='text-xl font-bold ml-5 text-white'>
                                <p>Alena</p>
                                <p>Customer</p>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </Zoom>
    );
};

export default CustomerReview;