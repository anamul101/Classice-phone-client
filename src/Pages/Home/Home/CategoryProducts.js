import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts';

const CategoryProducts = () => {
    const product = useLoaderData();
    const {products,category}=product;
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
                ></SingleProducts>)
            }
            </div>
        </div>
    );
};

export default CategoryProducts;