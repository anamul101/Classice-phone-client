import React from 'react';
import About from './About';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import Contact from './Contact';
import CustomerReview from './CustomerReview';
import FeatureCategories from './FeatureCategories';
import LatestBlog from './LatestBlog';
import ProductCategories from './ProductCategories ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <AdvertisedItems></AdvertisedItems>
            <About></About>
            <CustomerReview></CustomerReview>
            <LatestBlog></LatestBlog>
            <FeatureCategories></FeatureCategories>
            <Contact></Contact>
        </div>
    );
};

export default Home;