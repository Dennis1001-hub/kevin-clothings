"use client"; 

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const validCartItems = cart.filter(
        (item) => item && item.id && item.title && item.price && item.image
      );
      setCartItems(validCartItems);

      // Set document title dynamically
      if (validCartItems.length > 0) {
        document.title = `Cart (${validCartItems.length}) | Kevin Clothings`;
      } else {
        document.title = 'Cart | Kevin Clothings';
      }
    }
  }, []);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);

    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // Update the document title dynamically when items are removed
    if (updatedCart.length > 0) {
      document.title = `Cart (${updatedCart.length}) | Kevin Clothings`;
    } else {
      document.title = 'Cart | Kevin Clothings';
    }
  };

  const formatCartForWhatsApp = () => {
    let message = "Hello, I'm interested in the following products:\n\n";

    cartItems.forEach((item, index) => {
      if (item.title && item.price && item.image) {
        message += `${index + 1}. *${item.title}* - ₦${item.price}\n`;
        message += `Click to view image: ${item.image}\n\n`; // Adding image link
      }
    });

    return message;
  };

  const vendorPhoneNumber = "+2347025313949"; // Replace with actual vendor number
  const whatsappLink = `https://api.whatsapp.com/send?phone=${vendorPhoneNumber}&text=${encodeURIComponent(
    formatCartForWhatsApp()
  )}`;

  return (
    <>
      <div className="min-h-screen bg-gray-900 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6 text-white">
          <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

          {cartItems.length === 0 ? (
            <div className="text-center">
              <p>Your Cart is Empty</p>
              <Link href="/" className="text-blue-500 underline">
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-700 rounded-lg mb-4 p-4"
              >
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400">Price: ₦{item.price}</p>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))
          )}

          {cartItems.length > 0 && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all mt-6"
            >
              Contact Vendor on WhatsApp
            </a>
          )}

          <div className="mt-6">
            <Link href="/" className="text-blue-500 underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}