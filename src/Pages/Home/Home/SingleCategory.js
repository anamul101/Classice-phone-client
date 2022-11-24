import React from 'react';
import { Link } from 'react-router-dom';
import CategoryProducts from './CategoryProducts';

const SingleCategory = ({categorys}) => {
    const {category,_id,products}=categorys;
    return (
        <div>
           <Link to={`/categoryproducts/${_id}`}>
                <h1 className='text-3xl font-bold mr-8'>{category}</h1>
           </Link>
        </div>
    );
};

export default SingleCategory;