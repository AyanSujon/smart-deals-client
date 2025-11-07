import React, { useState, useEffect} from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = ({ product }) => {




  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price_min: "",
    price_max: "",
    condition: "brandNew",
    usage: "",
    image: "",
    seller_name: "",
    email: "",
    seller_contact: "",
    seller_image: "",
    location: "",
    description: "",
    created_at: new Date(),
    status: "pending",
  });
          

  // Prefill form when editing an existing product
  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        category: product.category || "",
        price_min: product.price_min?.$numberInt || product.price_min || "",
        price_max: product.price_max?.$numberInt || product.price_max || "",
        condition: product.condition || "brandNew",
        usage: product.usage || "",
        image: product.image || "",
        seller_name: product.seller_name || "",
        email: product.email || "",
        seller_contact: product.seller_contact || "",
        seller_image: product.seller_image || "",
        location: product.location || "",
        description: product.description || "",
        created_at: new Date(),
        status: "pending",


      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.category || !formData.price_min) {
      toast.error("Please fill in all required fields!");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("✅ Product saved successfully!");

fetch(`https://smart-deals-server-nu.vercel.app/products`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
})
.then(res => res.json())
.then(data => {
    console.log("After submiting data in database: ", data);
})
.catch(error => {
    console.log(error);
})
















  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-2xl bg-base-100 p-8 shadow-xl rounded-2xl">
        <Link to={"/allProducts"} className="text-sm text-blue-600 hover:underline mb-2 block">
          ← Back To Products
        </Link>

        <h2 className="text-3xl font-bold text-center mb-6">
          {product ? "Edit" : "Create"}{" "}
          <span className="text-purple-600">A Product</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="e.g. Yamaha Fz Guitar for Sale"
              className="input input-bordered w-full"
              value={formData.title}
              onChange={handleChange}
            />

            <select
              name="category"
              className="select select-bordered w-full"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a Category</option>
              <option>Electronics</option>
              <option>Vehicles</option>
              <option>Instruments</option>
              <option>Furniture</option>
            </select>
          </div>

          {/* Price Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="price_min"
              placeholder="Min Price You want to Sale ($)"
              className="input input-bordered w-full"
              value={formData.price_min}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price_max"
              placeholder="Max Price (optional)"
              className="input input-bordered w-full"
              value={formData.price_max}
              onChange={handleChange}
            />
          </div>

          {/* Product Condition & Usage */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="condition"
                  value="brandNew"
                  checked={formData.condition === "brandNew"}
                  onChange={handleChange}
                  className="radio radio-primary"
                />
                Brand New
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="condition"
                  value="used"
                  checked={formData.condition === "used"}
                  onChange={handleChange}
                  className="radio radio-primary"
                />
                Used
              </label>
            </div>

            <input
              type="text"
              name="usage"
              placeholder="e.g. 1 year 3 months"
              className="input input-bordered flex-1"
              value={formData.usage}
              onChange={handleChange}
            />
          </div>

          {/* Product Image */}
          <input
            type="url"
            name="image"
            placeholder="Your Product Image URL"
            className="input input-bordered w-full"
            value={formData.image}
            onChange={handleChange}
          />

          {/* Seller Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="seller_name"
              placeholder="Seller Name"
              className="input input-bordered w-full"
              value={formData.seller_name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Seller Email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="seller_contact"
              placeholder="Seller Contact"
              className="input input-bordered w-full"
              value={formData.seller_contact}
              onChange={handleChange}
            />
            <input
              type="url"
              name="seller_image"
              placeholder="Seller Image URL"
              className="input input-bordered w-full"
              value={formData.seller_image}
              onChange={handleChange}
            />
          </div>

          {/* Location */}
          <input
            type="text"
            name="location"
            placeholder="City, Country"
            className="input input-bordered w-full"
            value={formData.location}
            onChange={handleChange}
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Simple description about your product..."
            className="textarea textarea-bordered w-full"
            rows="3"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
          >
            {product ? "Update Product" : "Create A Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
