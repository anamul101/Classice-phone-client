import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';


const DisplayError = () => {
    const error = useRouteError();

    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-5xl text-gray-600'>
          <p className='text-red-600'>{error.statusText || error.message} <br /> 404</p>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Sorry, The page uou are looking for was not found....
          </p>
          <Link to='/'
            className='px-8 py-3 font-semibold rounded bg-gray-900 hover:bg-gray-700 text-gray-100'
          >
         homepage
          </Link>
        </div>
      </div>
    </section>
    );
};

export default DisplayError;