import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';



const latestProductsPromise = fetch('https://smart-deals-server-nu.vercel.app/latest-products').then(res => res.json());


const Home = () => {
    return (
        <div>
           <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
        </div>
    );
};

export default Home;