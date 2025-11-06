import React from "react";
import { Link } from "react-router";


const Product = ({ product }) => {
  return (
    <>
    <div className="card w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl">
      <figure className="h-40 bg-gray-100 rounded-t-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title} [{product.condition === "fresh" ? "Full Fresh Condition" : product.condition}]
        </h2>

        <p className="text-sm text-purple-700 font-medium">
          ${product.price_min} - {product.price_max}
        </p>

        <div className="card-actions justify-center mt-2">
          <Link to={`/products/${product._id}`}  className="btn btn-outline btn-sm w-full border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;
