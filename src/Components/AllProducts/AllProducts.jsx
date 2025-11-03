import React, { use } from 'react';
import Product from '../Product/Product';


const allProductsPromise = fetch('http://localhost:3000/products').then(res => res.json());

const AllProducts = () => {
        const products = use(allProductsPromise);
        // console.log(products);
    return (
        <>
        <h2 className='my-10 text-3xl text-center'>All Products </h2>
        <div className='container mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 my-20'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            
        </div>
        </>
    );
};

export default AllProducts;