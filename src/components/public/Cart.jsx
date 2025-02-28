import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PublicNavbar from "../common/customer/PublicNavbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />

      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-[#00693e] text-center mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600 text-center">Your cart is empty. <Link to="/all-gears" className="text-blue-500">Go Shopping</Link></p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">✕</button>
              </div>
            ))}

            <div className="mt-6 text-right">
              <Link to="/checkout" className="bg-[#00693e] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;