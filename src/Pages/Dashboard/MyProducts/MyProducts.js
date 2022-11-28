import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleCard from './SingleCard';

const MyProducts = () => {
    const {data:addProducts=[],refetch}=useQuery({
        queryKey:['addProducts'],
        queryFn:async()=>{
            const res= await fetch('https://classic-phone-server.vercel.app/addproducts');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h1 className='text-4xl font-semibold text-yellow-500 my-4 text-center'>My Products</h1>
            <div className='divider'></div>
            <div className='grid lg:grid-cols-2 lg:gap-5 mt-8'>
                {
                    addProducts?.map(addproduct=><SingleCard
                        key={addproduct._id}
                        addproduct={addproduct}
                        refetch={refetch}
                    ></SingleCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;