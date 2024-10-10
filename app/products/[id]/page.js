"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";


export default function ProductDetail ({ params }) {
  const { id } = params; // Get 'id' from the params object
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter(); // For navigation

  useEffect(() => {
    if (id) {
      // Fetch the products.json file
      fetch("/products.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to load product data");
          }
          
          return response.json();
          
        })
        .then((data) => {
          // Find the product by id
          const foundProduct = data.products.find((p) => p.id === parseInt(id));
          if (!foundProduct) {
            throw new Error("Product not found");
          }
          setProduct(foundProduct);
        })
        .catch((error) => setError(error.message));
    }
  }, [id]);

  if (error) {
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  // WhatsApp API URL
  const phoneNumber = "+2347025313949"; // Replace with the vendor's WhatsApp number
  const productImageLink = product.image; // Get the product image link
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hi,%20I'm%20interested%20in%20the%20product:%20${encodeURIComponent(
    product.title
  )}%20(${encodeURIComponent(product.description)})%20%0A%0AImage%20Link:%20${encodeURIComponent(productImageLink)}`;

  // Add product to the cart
 
    // Check if product is available
    const addToCart = () => {
      if (!product || !product.id) {
        alert("Product not available");
        return;
      }
    
      // Ensure localStorage is accessible
      if (typeof window !== "undefined") {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
        // Filter out invalid items from the cart
        const validCart = cart.filter(item => item && item.id);
    
        // Check if the product is already in the cart
        const itemExists = validCart.some((item) => parseInt(item.id) === parseInt(product.id));
    
        if (itemExists) {
          alert("This product is already in your cart");
        } else {
          // Add the new product to the cart
          validCart.push(product);
          localStorage.setItem("cart", JSON.stringify(validCart));
         
    
          // Navigate to the cart page after adding the product
          router.push("/cart");
        }
      }
    };
    

  return (
    <>
      <Head>
        <title>{product.title} | Kevin-Clothings</title>
      </Head>

      <div className="min-h-screen bg-gray-900 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center items-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-96 rounded-lg shadow-md"
              />
            </div>

            {/* Product Details Section */}
            <div className="md:w-1/2 p-6 text-white">
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-400 mb-6">
                Price: <span>&#x20A6;</span> {product.price}
              </p>
              <p className="text-gray-300 mb-6">{product.description}</p>

              {/* Link to WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all mr-4"
              >
                Contact on WhatsApp
              </a>
 
              {/* Add to Cart Button */}
              <button
                onClick={addToCart}
                disabled={!product} // Disable the button if the product is not available
                className={`inline-block py-2 px-4 rounded-lg text-lg font-semibold transition-all hover:bg-blue-900 ${!product ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
              >
                {product ? "Add to Cart" : "Loading..."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


