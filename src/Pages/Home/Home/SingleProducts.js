import React from 'react';

const SingleProducts = ({product}) => {
    const {name,description,resale_price,original_price,used,number,condition,location,img}=product;
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
                <div className="mx-auto my-4">
                    <button className="btn btn-wide">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;