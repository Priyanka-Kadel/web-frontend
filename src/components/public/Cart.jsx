// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import PublicNavbar from "../common/customer/PublicNavbar";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   const removeFromCart = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <PublicNavbar />

//       <div className="max-w-4xl mx-auto py-16 px-6">
//         <h2 className="text-3xl font-bold text-[#00693e] text-center mb-6">Your Cart</h2>

//         {cartItems.length === 0 ? (
//           <p className="text-lg text-gray-600 text-center">Your cart is empty. <Link to="/all-gears" className="text-blue-500">Go Shopping</Link></p>
//         ) : (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center justify-between border-b py-4">
//                 <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
//                 <div className="flex-1 ml-4">
//                   <h3 className="text-lg font-semibold">{item.name}</h3>
//                   <p className="text-gray-600">{item.price}</p>
//                 </div>
//                 <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">✕</button>
//               </div>
//             ))}

//             <div className="mt-6 text-right">
//               <Link to="/checkout" className="bg-[#00693e] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition">
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;


import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCreditCard, FaMoneyBillWave, FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setNotification("Item removed from cart!");
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCashOnDelivery = (id) => {
    alert("Order placed with Cash on Delivery!");
    removeFromCart(id);
  };

  const handlePayNow = () => {
    alert("Redirecting to payment gateway...");
  };

  return (
    <motion.div 
      className="min-h-screen bg-green-100 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Fancy Navbar Section */}
      <div className="bg-gradient-to-r from-teal-500 to-green-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
          <FaShoppingCart className="text-yellow-400" /> Your Gear Cart
        </h1>
        <p className="mt-2 text-sm opacity-90">Review your rented gears and proceed to checkout.</p>
      </div>

      {/* Notification */}
      {notification && (
        <motion.div
          className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md z-50 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {notification}
        </motion.div>
      )}

      {/* Cart Section */}
      <div className="container mx-auto p-6">
        {cartItems.length === 0 ? (
          <motion.div 
            className="text-center text-gray-500 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
            <p>Explore our gear collection and add to your cart.</p>
            <Link to="/all-gears" className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Browse Gear
            </Link>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {cartItems.map((item) => (
              <motion.div 
                key={item.id}
                className="bg-white p-5 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mx-auto mb-3 rounded-lg" />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">Rs {item.price}/day</p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
                <p className="text-gray-700">Total: Rs {item.price * item.quantity}</p>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-center gap-2">
                  <button 
                    className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash /> Remove
                  </button>
                  <button 
                    className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition"
                    onClick={handlePayNow}
                  >
                    <FaCreditCard /> Pay Now
                  </button>
                  <button 
                    className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={() => handleCashOnDelivery(item.id)}
                  >
                    <FaMoneyBillWave /> Cash on Delivery
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Footer Section */}
      <motion.footer 
        className="py-10 text-center bg-gradient-to-r from-teal-500 to-green-600 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold">Secure & Fast Gear Rentals</h2>
        <p className="text-xs opacity-80">Secure and Convenient transactions with GoGear.</p>
      </motion.footer>

      <section className="py-6 bg-gray-100 text-center">
        <p className="text-xs text-gray-600">© 2025 GoGear. All rights reserved.</p>
      </section>
    </motion.div>
  );
};

export default CartPage;
