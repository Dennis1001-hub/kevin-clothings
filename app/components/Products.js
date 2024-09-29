"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

const Products = () => {
  const [products, setProducts] = useState([]); // Store the list of products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [searchTerm, setSearchTerm] = useState(""); // Local search term state

  const proFunction = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data); // Set fetched data to products state
      setFilteredProducts(data); // Initialize filtered products with all products
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    proFunction();
  }, []);

  // Filter products when searchTerm changes
  useEffect(() => {
    const filtered = products.filter((product) => {
      return product.title?.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filtered);
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
          Comforting you...
        </h1>
        {/* Search Input */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="px-4 py-2 rounded-md w-80 bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
                <p className="text-gray-400">Price: ${product.price}</p>
                <p className="text-gray-500 text-sm mt-2 mb-4">
                  {product.description}
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300">
                  Purchase
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-white col-span-full">
              Loading...
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
