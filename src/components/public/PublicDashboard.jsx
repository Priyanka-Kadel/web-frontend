// import { motion } from "framer-motion"; // Import framer-motion
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import PublicNavbar from "../common/customer/PublicNavbar";

// const PublicDashboard = () => {
//   const navigate = useNavigate();

//   const [products] = useState([
//     { id: 1, name: "6 X 4 Camping Tent", price: 500, image: "/images/tent.png" },
//     { id: 2, name: "Eco Friendly Stove", price: 350, image: "/images/stove.png" },
//     { id: 3, name: "Trekking Backpack", price: 300, image: "/images/backpack.png" },
//     { id: 4, name: "Portable Silverware", price: 250, image: "/images/silverware.png" },
//     { id: 5, name: "Portable Gas Stove", price: 300, image: "/images/gasstove.png" },
//     { id: 6, name: "Trekking Bag", price: 300, image: "/images/trekbag.png" },
//   ]);

//   const [notification, setNotification] = useState(null);

//   const handleAddToCart = (product) => {
//     setNotification(`${product.name} added to cart!`);
//     setTimeout(() => {
//       setNotification(null);
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <PublicNavbar />

//       {/* Notification */}
//       {notification && (
//         <motion.div
//           className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
//           animate={{ y: [0, -20, 0] }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           {notification}
//         </motion.div>
//       )}

//       {/* Hero Section with Rent Your Gear Form */}
//       <section className="relative bg-[#00693e] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <motion.h1
//             className="text-6xl font-extrabold leading-tight"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             Experience the Gears Like Never Before
//           </motion.h1>
//           <p className="mt-4 text-xl opacity-90 max-w-3xl">
//             Rent premium camping and trekking gear for your next adventure. High-quality equipment at affordable rates.
//           </p>
//           <motion.button
//             className="mt-6 bg-[#D3D3D3] text-[#00693e] py-4 px-10 rounded-lg font-semibold text-lg shadow-md hover:bg-[#B0B0B0] transition transform hover:scale-105"
//             whileHover={{ scale: 1.1 }}
//             onClick={() => navigate("/all-gears")}
//           >
//             View All Gears
//           </motion.button>
//         </div>

//         {/* Rent Your Gears Form */}
//         <div className="w-full md:w-1/3 bg-white text-[#00693e] p-6 rounded-lg shadow-lg mt-10 md:mt-0">
//           <h3 className="text-2xl font-bold text-center mb-4">Rent Your Gears</h3>
//           <form>
//             <label className="block mb-2 font-semibold">Gear Type</label>
//             <select className="w-full p-2 border border-gray-300 rounded mb-4">
//               <option>Tent</option>
//               <option>Stove</option>
//               <option>Backpack</option>
//               <option>Silverware</option>
//             </select>

//             <label className="block mb-2 font-semibold">Rental Date</label>
//             <input type="date" className="w-full p-2 border border-gray-300 rounded mb-4" />

//             <motion.button
//               className="w-full bg-[#D3D3D3] text-[#00693e] py-3 rounded-lg font-bold hover:bg-[#B0B0B0] transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               Rent Now
//             </motion.button>
//           </form>
//         </div>
//       </section>

//       {/* Product Grid Section */}
//       <section className="py-16 px-6 md:px-20">
//         <h2 className="text-3xl font-extrabold mb-8 text-[#00693e] text-center">Choose the Gears You Need</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {products.map((product) => (
//             <motion.div
//               key={product.id}
//               className="bg-white p-4 rounded-lg shadow-lg transform transition hover:scale-110 hover:shadow-2xl flex flex-col items-center text-center"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
//               <h3 className="text-3xl font-bold">{product.name}</h3>
//               <p className="text-[#00693e] text-lg font-semibold mt-2">NPR {product.price}/day</p>

//               <div className="mt-4 flex flex-col space-y-2 w-full">
//                 <motion.button
//                   className="bg-[#D3D3D3] text-[#00693e] py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#B0B0B0] transition w-full"
//                   onClick={() => handleAddToCart(product)}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   Add to Cart
//                 </motion.button>
//                 <motion.button
//                   className="bg-[#D3D3D3] text-[#00693e] py-3 px-4 rounded-lg text-sm font-medium hover:bg-[#B0B0B0] transition w-full"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   View Details
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
// <footer className="py-10 px-6 md:px-20 bg-[#00693e] text-white">
//   <div className="max-w-5xl mx-auto text-center">
//     <h2 className="text-3xl font-extrabold mb-4">Contact Us</h2>
//     <p className="text-lg opacity-80">Your Trusted Camping & Trekking Gear Rental</p>

//     <div className="mt-4 space-y-2 text-lg">
//       <p><strong>Address:</strong> Dilibazar, Kathmandu, Nepal</p>
//       <p><strong>Email:</strong> support@gogear.com</p>
//       <p><strong>Phone:</strong> +977 9800000000</p>
//     </div>
//   </div>
// </footer>
//     </div>
//   );
// };

// export default PublicDashboard;


import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PublicNavbar from "../common/customer/PublicNavbar";

const PublicDashboard = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const products = [
    { id: 1, name: "6 X 4 Camping Tent", price: "Rs 500/day", image: "/images/tent.png" },
    { id: 2, name: "Eco Friendly Stove", price: "Rs 350/day", image: "/images/stove.png" },
    { id: 3, name: "Trekking Backpack", price: "Rs 300/day", image: "/images/backpack.png" },
  ];

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);

    // Show notification
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />

      {/* Notification */}
      {notification && (
        <motion.div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          animate={{ y: [0, -20, 0] }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {notification}
        </motion.div>
      )}

      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-extrabold mb-8 text-[#00693e] text-center">Choose the Gears You Need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div key={product.id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center" whileHover={{ scale: 1.05 }}>
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-3xl font-bold">{product.name}</h3>
              <p className="text-[#00693e] text-lg font-semibold mt-2">{product.price}</p>
              <motion.button className="bg-[#D3D3D3] text-[#00693e] py-4 px-6 rounded-lg font-semibold text-lg mt-4" onClick={() => addToCart(product)} whileHover={{ scale: 1.1 }}>
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PublicDashboard;