import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const ProductCategories  = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold text-yellow-500 text-center'>Product Categories</h1>
            <div className='mx-12'>
                <div className='lg:w-1/2 border border-yellow-600 rounded-md mx-auto p-12 my-12'>
                    <h1 className='text-center text-xl font-bold mb-4'>Please Selected Your best Phone</h1>
                    <div className='grid lg:grid-cols-3 lg:gap-6'>
                        {
                        categories.map(categorys=><SingleCategory 
                            key={categorys._id}
                            categorys={categorys}
                        >
                        </SingleCategory>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategories ;