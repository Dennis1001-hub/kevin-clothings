"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState([]); // Store the list of products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [searchTerm, setSearchTerm] = useState(""); // Local search term state
  const [showNotFound, setShowNotFound] = useState(false); // State to handle "not found" message

  // Function to fetch products from the products.json file
  const proFunction = async () => {
    try {
      const res = await fetch("/products.json"); // Fetching the products from public/products.json
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched products:", data); // Log fetched products for debugging
      setProducts(data.products); // Set fetched data to products state
      setFilteredProducts(data.products); // Initialize filtered products with all products
    } catch (error) {
      console.error("Error fetching products:", error); // Log errors
    }
  };

  useEffect(() => {
    proFunction(); // Call the fetch function on component mount
  }, []);

  // Filter products when searchTerm changes
  useEffect(() => {
    const filtered = products.filter((product) => {
      return product.title?.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filtered);

    // If no products are found, show "not found" message after a delay
    if (filtered.length === 0) {
      const timer = setTimeout(() => {
        setShowNotFound(true);
      }, 3000); // 3-second delay

      return () => clearTimeout(timer); // Cleanup the timeout on unmount or when search term changes
    } else {
      setShowNotFound(false); // Reset if products are found
    }
  }, [searchTerm, products]);

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term state
  };

  return (
    <>
      <Head>
        <title>Okirika | Home</title>
      </Head>

      <div className="min-h-screen bg-gray-900 py-10">
        {" "}
        {/* Dark background */}
        <h1
          className="text-4xl font-bold text-center text-white mb-8"
          style={{ fontFamily: "Verdana, sans-serif" }}
        >
          Dripping in Sport...
        </h1>
        {/* Search Input */}
        <div className="flex justify-center items-center mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="px-4 py-2 rounded-md w-80 bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-600"
          />

          <button className="bg-blue-600 text-white px-4 py-2 lg:mx-14 mx-5 rounded-md hover:bg-blue-500 transition-colors duration-300">
            <Link href="/cart">view cart</Link>
          </button>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h2 className="text-lg font-semibold text-white">
                    {product.title}
                  </h2>
                  <p className="text-gray-400">
                    Price: <span>₦</span>
                    {product.price}
                  </p>

                  <p className="text-gray-500 text-sm mt-2 mb-4">
                    {product.description}
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300">
                    <Link
                      href={`/products/${product.id}`}
                      className="text-blue-100 hover:text-blue-700"
                    >
                      Purchase Now
                    </Link>
                  </button>
                </div>
              ))
            : showNotFound && (
                <p className="text-center text-lg text-white col-span-full">
                  Products not found
                </p>
              )}
        </div>
      </div>
    </>
  );
};

export default Products;
