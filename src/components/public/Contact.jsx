import { motion } from "framer-motion";
import React from "react";
import PublicNavbar from "../common/customer/PublicNavbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative bg-[#00693e] text-white py-16 px-6 md:px-20 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h1>
        <p className="mt-4 text-xl opacity-90 max-w-3xl">
          We'd love to hear from you! Whether you have a question about our products or need help with your order, feel free to reach out.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-20 flex justify-center">
        <motion.div
          className="bg-white text-[#00693e] p-8 rounded-lg shadow-lg w-full max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-center mb-6">Contact Us</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded mb-4"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded mb-4"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded"
                rows="6"
                placeholder="Your Message"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#D3D3D3] text-[#00693e] py-3 rounded-lg font-bold hover:bg-[#B0B0B0] transition"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-6 md:px-20 text-center bg-[#f9f9f9]">
        <h2 className="text-3xl font-extrabold mb-6 text-[#00693e]">Contact Information</h2>
        <div className="flex justify-center space-x-12">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#00693e]">Address</h3>
            <p className="text-gray-600">Kathmandu, Nepal</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#00693e]">Phone</h3>
            <p className="text-gray-600">+123 456 789</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#00693e]">Email</h3>
            <p className="text-gray-600">support@gogear.com</p>
          </div>
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

export default ContactPage;
