import React from 'react';
import { Link } from 'react-router-dom';
import CategoryProducts from './CategoryProducts';

const SingleCategory = ({categorys}) => {
    const {category,_id,products}=categorys;
    return (
        <div>
           <Link to={`/categoryproducts/${_id}`}>
                <h1 className='text-3xl font-bold uppercase mr-8 hover:rounded-sm hover:bg-gray-300 p-3 hover:hover:text-blue-700 text-center'>{category}</h1>
           </Link>
        </div>
    );
};

export default SingleCategory;