// import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams} from 'react-router';

const ProductDetails = () => {
 const data = useLoaderData();
    const {id} = useParams();
    console.log({id, data})
    // const [product, setProduct] = useState({});
    // useEffect(()=> {

    //     const productDetails = data.find(singleProduct =>  singleProduct.id == id);
    //     setProduct(productDetails);

    // }, [data, id]);

    // console.log({data, id, product});
    return (
        <div>
            <main className='w-11/12 mx-auto grid grid-cols-1 gap-5 py-10'>
                <section className='col-span-9 '>
                    <h2 className='font-bold mb-5 '>Product Details</h2>
                    
                </section>
            </main>
        </div>
    );
};
export default ProductDetails;


