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
                <p className='text-xl font-bold'>{location}</p>
                <p>{description}</p>
                <p>Resale Price: ${resale_price}</p>
                <p>Original Price: ${original_price}</p>
                <p>Phone Condition: {condition}</p>
                <p>Used Product: {used}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;