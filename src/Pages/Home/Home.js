import React from 'react';
import Hero from '../../components/Hero/index-hero';
import Products from '../../components/Products/index-products';
import Features from '../../components/Features/index-features';
import { productData, productDataTwo } from '../../components/Products/data-products';

const Home = () => {
    return (
        <div>
        <Hero />
        <Products heading='Choose your favorite' data={productData} />
        <Features />
        <Products heading='Sweet Drinks for You' data={productDataTwo} />
        </div>
    );
}

export default Home;
