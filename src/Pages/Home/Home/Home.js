import React from 'react';
import About from './About';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import CustomerReview from './CustomerReview';
import ProductCategories from './ProductCategories ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <AdvertisedItems></AdvertisedItems>
            <About></About>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;