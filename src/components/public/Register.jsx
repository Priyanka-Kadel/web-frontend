import axios from "axios";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    fName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);

  const { fName, email, password, termsAccepted } = formData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // Prevent double submission

    if (!termsAccepted) {
      alert("You must accept the Terms and Conditions.");
      return;
    }

    setLoading(true); // Prevent further submissions

    try {
      console.log("Sending request with:", formData);
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        formData
      );

      console.log("Response:", response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      alert(`Registration failed: ${error.response?.data?.message || "Please try again."}`);
    } finally {
      setLoading(false); // Allow resubmission
    }
  };

  return (
    <div 
      className="h-screen flex items-center justify-center relative bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/login_pic.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg p-10 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="GoGear Icon" className="w-24 h-24 transform hover:scale-110 transition" />
        </div>

        <h2 className="text-2xl font-extrabold text-white text-center">Join GoGear</h2>
        <p className="text-gray-200 text-center mb-6">Create an account and start renting gears now!</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <FaUser className="absolute left-4 top-3 text-gray-300 text-lg" />
            <input
              name="fName"
              type="text"
              value={fName}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3 border border-gray-500 rounded-md bg-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none shadow-sm"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3 text-gray-300 text-lg" />
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 border border-gray-500 rounded-md bg-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none shadow-sm"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-3 text-gray-300 text-lg" />
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-500 rounded-md bg-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none shadow-sm"
            />
          </div>

          <div className="flex items-center">
            <input
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              checked={termsAccepted}
              onChange={handleChange}
              className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="termsAccepted" className="ml-3 text-sm text-gray-300">
              I accept the {" "}
              <a href="#" className="text-green-300 font-semibold hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-lg font-semibold shadow-lg transition transform hover:scale-105 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-teal-600 text-white hover:opacity-90"
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-300 mt-4">
          Already have an account? {" "}
          <a href="/login" className="text-green-300 font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
