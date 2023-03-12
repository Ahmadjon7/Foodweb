import React from 'react';
import Buy from './Buy/Buy';
import Hero from './Hero/Hero';
import More from './More/More';
import About from './About/About';
import AllFood from './AllFood/AllFood';
import Product from './Product/Product';
import Email from './Email/Email';

const index = () => {
    return (
        <div>
            <Hero/>
            <Buy/>
            <More/>
            <About/>
            <AllFood/>
            <Product/>
            <Email/>
        </div>
    );
};

export default index;