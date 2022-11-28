import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdvertisedItems = () => {
    const {data:addProducts=[]}=useQuery({
        queryKey:['addProducts'],
        queryFn:async()=>{
            const res= await fetch('https://classic-phone-server.vercel.app/allproducts/advatise?role=available');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold text-yellow-500 text-center'>Advertised</h1>
            <div className='grid lg:grid-cols-2 lg:gap-6 mt-8'>
                {
                    addProducts?.map(advertise=>
                        <div className="border rounded-md w-[700px] bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={advertise.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <p className='text-2xl font-bold'>{advertise.name}</p>
                            <div className="badge bg-green-600">{advertise.role}</div>
                            </h2>
                            <p className='font-bold'>Location:{advertise.location}</p>
                            <p className='font-bold'>Category:{advertise.category}</p>
                            <p>{advertise.description}</p>
                            <p className='mb-0'>Condition:{advertise.condition}</p>
                            <p className='mb-0'>Orginial Price: ${advertise.original_price}</p>
                            <p className='mb-0'>Resale Price{advertise.resale_price}</p>
                            <p className='mb-0'>Year of Used: {advertise.used}</p>
                            <p className='mb-0'>Mobile Number: {advertise.phoneNumber}</p>
                        </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;