import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import ProductCategories from './ProductCategories ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;