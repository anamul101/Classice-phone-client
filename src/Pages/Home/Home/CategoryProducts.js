import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from './BookModal';
import SingleProducts from './SingleProducts';
import moment from 'moment/moment';

const CategoryProducts = () => {
    const product = useLoaderData();
    const {products,category}=product;
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    const [booking, setBooking]=useState(null)
    return (
        <div className='mb-20'>
            <h1 className='text-4xl font-bold text-yellow-600 text-center'>{product.category}</h1>
            <h1 className='text-2xl font-bold my-6'>Number of Products: {products.length}</h1>
            <div className="divider"></div>
            <div className='grid lg:grid-cols-3 gap-8 '>
            {
                products.map(product=><SingleProducts
                key={product._id}
                product={product}
                currentTime={currentTime}
                setBooking={setBooking}
                ></SingleProducts>)
            }
            {
                booking&&
                <BookModal
                booking={booking}
                currentTime={currentTime}
                setBooking={setBooking}
                ></BookModal>
            }
            </div>
        </div>
    );
};

export default CategoryProducts;