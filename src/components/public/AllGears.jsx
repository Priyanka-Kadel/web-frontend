import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import PublicNavbar from "../common/customer/PublicNavbar";

const AllGears = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Gears");
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const categories = ["All Gears", "Camping", "Trekking", "Outdoor"];

  const products = [
    { id: 1, name: "6 X 4 Camping Tent", price: "Rs 500/day", image: "/images/tent.png", category: "Camping", features: ["Waterproof material", "Spacious for 4 people", "Easy setup with color-coded poles"] },
    { id: 2, name: "Eco Friendly Stove", price: "Rs 350/day", image: "/images/stove.png", category: "Outdoor", features: ["Compact and lightweight", "Eco-friendly fuel system", "Stainless steel body"] },
    { id: 3, name: "Trekking Backpack", price: "Rs 300/day", image: "/images/backpack.png", category: "Trekking", features: ["Adjustable straps", "Multiple compartments", "Breathable back panel"] },
    { id: 4, name: "Portable Silverware", price: "Rs 250/day", image: "/images/silverware.png", category: "Outdoor", features: ["Compact and durable", "Made from stainless steel", "Easy to clean"] },
    { id: 5, name: "Portable Gas Stove", price: "Rs 300/day", image: "/images/gasstove.png", category: "Camping", features: ["Portable and lightweight", "Perfect for camping and hiking", "Built-in ignition system"] },
    { id: 6, name: "Trekking Bag", price: "Rs 300/day", image: "/images/trekbag.png", category: "Trekking", features: ["Durable fabric", "Water-resistant", "Designed for long treks"] },
  ];

  const filteredProducts = selectedCategory === "All Gears"
    ? products
    : products.filter((product) => product.category === selectedCategory);

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

      {/* Hero Section */}
      <section className="relative bg-[#00693e] text-white py-16 px-6 md:px-20 flex flex-col items-center">
        <motion.h1
          className="text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Explore All Gears
        </motion.h1>
        <p className="mt-4 text-xl opacity-90 text-center max-w-3xl">
          Choose from a wide range of premium camping, trekking, and outdoor gear for your next adventure.
        </p>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 md:px-20">
        <div className="flex justify-center space-x-6 mb-0">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`text-lg font-semibold px-4 py-2 rounded-lg transition ${selectedCategory === category ? "bg-[#00693e] text-white" : "bg-[#D3D3D3] text-[#00693e]"}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-1xl font-extrabold mb-4 text-[#00693e] text-center">Choose the Gears You Need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="flip-card bg-white p-4 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-[#00693e] text-lg font-semibold mt-2">{product.price}</p>
                </div>
                <div className="flip-card-back p-4">
                  <h4 className="text-xl font-semibold text-[#00693e] mb-4">Features</h4>
                  <ul className="text-left space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-base">{feature}</li>
                    ))}
                  </ul>
                  <motion.button
                    className="bg-[#D3D3D3] text-[#00693e] py-3 px-5 rounded-lg font-semibold text-lg hover:bg-[#B0B0B0] transition w-full mt-4"
                    onClick={() => addToCart(product)}
                    whileHover={{ scale: 1.1 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-20 bg-[#00693e] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">Contact Us</h2>
          <p className="text-lg opacity-80">Your Trusted Camping & Trekking Gear Rental</p>

          <div className="mt-4 space-y-2 text-lg">
            <p><strong>Address:</strong> Dilibazar, Kathmandu, Nepal</p>
            <p><strong>Email:</strong> support@gogear.com</p>
            <p><strong>Phone:</strong> +977 9800000000</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AllGears;
