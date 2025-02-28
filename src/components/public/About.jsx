import React, { useState } from "react";
import { FaMountain, FaShieldAlt, FaTachometerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PublicNavbar from "../common/customer/PublicNavbar";

const About = () => {
  const navigate = useNavigate();

  const [notification, setNotification] = useState(null);

  const handleAddToCart = (product) => {
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />

      {/* Notification */}
      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition transform animate-bounce">
          {notification}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-[#00693e] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight">
            Your Adventure Starts Here
          </h1>
          <p className="mt-4 text-xl opacity-90 max-w-3xl">
            Rent premium camping and trekking gear to fuel your next journey. Experience high-quality, affordable rentals for all your outdoor needs.
          </p>
          <button
            className="mt-6 bg-[#D3D3D3] text-[#00693e] py-4 px-10 rounded-lg font-semibold text-lg shadow-md hover:bg-[#B0B0B0] transition transform hover:scale-105"
            onClick={() => navigate("/all-gears")}
          >
            Explore Our Gear
          </button>
        </div>

        {/* Fun Fact Section */}
        <div className="w-full md:w-1/3 bg-white text-[#00693e] p-6 rounded-lg shadow-lg mt-10 md:mt-0 flex flex-col items-center justify-center space-y-6">
          <h3 className="text-2xl font-bold text-center mb-4">Know GoGear</h3>
          <div className="flex space-x-8 text-4xl">
            <FaMountain className="text-[#00693e]" />
            <FaTachometerAlt className="text-[#00693e]" />
          </div>
          <p className="text-xl text-center mt-4">
            <strong>Fun Fact:</strong> Over 5000 satisfied adventurers trust GoGear for their outdoor needs!
          </p>
        </div>
      </section>

      {/* Why Choose GoGear Section */}
      <section className="py-28 px-6 md:px-20 text-center bg-white">
        <h3 className="text-4xl font-extrabold text-[#00693e] mb-12">Why Choose GoGear?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-xl">
            <FaMountain size={60} className="mx-auto text-[#00693e]" />
            <h4 className="text-2xl font-semibold text-[#111827] mt-4">Adventure-Ready</h4>
            <p className="text-gray-500 mt-4">
              Rent everything you need for your next mountain trek or camping trip. GoGear equips you with top-tier adventure gear.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-xl">
            <FaTachometerAlt size={60} className="mx-auto text-[#00693e]" />
            <h4 className="text-2xl font-semibold text-[#111827] mt-4">Fully Equipped</h4>
            <p className="text-gray-500 mt-4">
              We provide a wide selection of gear for trekking, camping, and outdoor exploration. Everything you need for your adventure.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-xl">
            <FaShieldAlt size={60} className="mx-auto text-[#00693e]" />
            <h4 className="text-2xl font-semibold text-[#111827] mt-4">Safety Assured</h4>
            <p className="text-gray-500 mt-4">
              All our gear undergoes rigorous checks to ensure maximum safety and performance, so you can focus on your adventure.
            </p>
          </div>
        </div>
      </section>


      {/* Product Grid Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-extrabold mb-8 text-[#00693e] text-center">Gear Up Now!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Products */}
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

export default About;
