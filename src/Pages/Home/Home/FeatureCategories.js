import React from 'react';
import women1 from '../../../assets/banner/women1.png';
import women2 from '../../../assets/banner/women2.png';
import women3 from '../../../assets/banner/women3.png';
import women4 from '../../../assets/banner/women4.png';
import women5 from '../../../assets/banner/women5.png';
import women6 from '../../../assets/banner/women6.png';
import men1 from '../../../assets/banner/men1.png';
import men2 from '../../../assets/banner/men2.png';
import men3 from '../../../assets/banner/men3.png';
import men4 from '../../../assets/banner/men4.png';
import men5 from '../../../assets/banner/men5.png';
import men6 from '../../../assets/banner/men6.png';
import baby1 from '../../../assets/banner/baby1.png';
import baby2 from '../../../assets/banner/baby2.png';
import baby3 from '../../../assets/banner/baby3.png';
import baby4 from '../../../assets/banner/baby4.png';
import baby5 from '../../../assets/banner/baby5.png';
import baby6 from '../../../assets/banner/baby6.png';

const FeatureCategories = () => {
    return (
        <div className='my-20'>
        <h1 className='text-4xl font-semibold text-yellow-500 mb-6 text-center'>Feature Categories</h1>
         <div className='grid lg:grid-cols-3'>
         <div className='w-96 mx-auto'>
                <div className='p-2 mx-auto bg-base-300 rounded-md w-96 flex justify-between'>
                    <p className='text-md font-bold'>Women Fashion</p>
                    <p className='text-md font-bold hover:underline cursor-pointer'>View ALL</p>
                </div>
                <div className='grid lg:grid-cols-3 mt-8'>
                <img className='w-25' src={women3} alt="" />
                <img className='w-25' src={women2} alt="" />
                <img className='w-25' src={women1} alt="" />
                <img className='w-25' src={women4} alt="" />
                <img className='w-25' src={women5} alt="" />
                <img className='w-25' src={women6} alt="" />
                </div>
            </div>
            <div className='w-96 mx-auto'>
                <div className='p-2 mx-auto bg-base-300 rounded-md w-96 flex justify-between'>
                    <p className='text-md font-bold'>Man Fashion</p>
                    <p className='text-md font-bold hover:underline cursor-pointer'>View ALL</p>
                </div>
                <div className='grid lg:grid-cols-3 mt-8'>
                <img className='w-25' src={men1} alt="" />
                <img className='w-25' src={men2} alt="" />
                <img className='w-25' src={men3} alt="" />
                <img className='w-25' src={men4} alt="" />
                <img className='w-25' src={men5} alt="" />
                <img className='w-25' src={men6} alt="" />
                </div>
            </div>
            <div className='w-96 mx-auto'>
                <div className='p-2 mx-auto bg-base-300 rounded-md w-96 flex justify-between'>
                    <p className='text-md font-bold'>Baby Fashion</p>
                    <p className='text-md font-bold hover:underline cursor-pointer'>View ALL</p>
                </div>
                <div className='grid lg:grid-cols-3 mt-8'>
                <img className='w-25' src={baby1} alt="" />
                <img className='w-25' src={baby2} alt="" />
                <img className='w-25' src={baby3} alt="" />
                <img className='w-25' src={baby4} alt="" />
                <img className='w-25' src={baby5} alt="" />
                <img className='w-25' src={baby6} alt="" />
                </div>
            </div>
         </div>
           
        </div>
    );
};

export default FeatureCategories;