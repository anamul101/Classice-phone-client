import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts';

const CategoryProducts = () => {
    const product = useLoaderData();
    const {products,category}=product;
    return (
        <div>
            <h1>category of {product.category}</h1>
            <h1>Products: {products.length}</h1>

            <div className='grid lg:grid-cols-3 gap-8'>
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