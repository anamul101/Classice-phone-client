import React from 'react';

const ProductCategories  = () => {
    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold text-yellow-500 text-center'>Product Categories </h1>
            <div className='flex justify-between'>
                <div className='w-1/2 flex justify-center items-center'>
                    <h1>Please Selected Your best Phone</h1>
                </div>
                <div className='w-1/2 flex justify-center items-center flex-col'>
                    <h1 className='text-center'>Please Selected Your best Phone</h1>
                    <ul className='flex'>
                        <li className='text-xl font-bold text-blue-700 mr-4'>IPHONE</li>
                        <li className='text-xl font-bold text-blue-700 mr-4'>OPPO</li>
                        <li className='text-xl font-bold text-blue-700 mr-4'>REALME</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductCategories ;