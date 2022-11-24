import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const ProductCategories  = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories)
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold text-yellow-500 text-center'>Product Categories: {categories.length}</h1>
            <div className='flex justify-between'>
                <div className='w-1/2 flex justify-center items-center'>
                    <h1>Please Selected Your best Phone</h1>
                </div>
               
                <div className='w-1/2 flex justify-center items-center flex-col'>
                    <h1 className='text-center'>Please Selected Your best Phone:</h1>
                    {
                    categories.map(categorys=><SingleCategory 
                        categorys={categorys}
                    >
                    </SingleCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCategories ;