
import React from 'react';

const SingleProducts = ({product,setBooking,currentTime}) => {
    const {name,description,resale_price,original_price,used,number,condition,location,img,id}=product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between">
                {name}
                <div className="badge badge-secondary">Number: {number}</div>
                </h2>
                <p className='text-xl font-semibold'>{location}</p>
                <p>{description}</p>
                <div className='flex justify-between'>
                    <p>Condition: {condition}</p>
                    <p>{used} Yers used </p>
                </div>
                <p>Resale Price: ${resale_price}</p>
                <p>Original Price: ${original_price}</p>
                <p>Time: {currentTime}</p>
                <div className=" text-center">
                <label 
                htmlFor="booking-modal" 
                className="btn btn-primary text-white"
                onClick={()=>setBooking(product)}
                >Book Product</label>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;