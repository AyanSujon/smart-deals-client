import React from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const product = useLoaderData();
    // console.log(product);

    return (
        <div>
            <h3>Product Details </h3>
            
        </div>
    );
};

export default ProductDetails;


