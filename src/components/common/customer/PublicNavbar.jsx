import React, { useEffect, useState } from "react";
import { FiMenu, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PublicNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user session
    navigate("/login"); // Redirect to login page
  };

  const navLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/all-gears", label: "All Gears" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Questions?" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* 🔹 GoGear Logo (Navigates to Dashboard) */}
        <Link to="/dashboard" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
          GoGear
        </Link>

        {/* 🔹 Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-gray-700 hover:text-blue-600 transition ${
                location.pathname === link.to ? "font-bold text-blue-600" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* 🔹 Cart & Profile Icons (Together) */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <div className="relative" onClick={() => setCartOpen(!cartOpen)}>
            <FiShoppingCart size={24} className="text-gray-700 hover:text-blue-600 cursor-pointer transition" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}

            {/* Cart Dropdown */}
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border-2 border-blue-500 p-2">
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                        <div className="ml-2 flex-1">
                          <span className="block font-semibold">{item.name}</span>
                          <span className="block text-sm text-gray-500">{item.price}</span>
                        </div>
                      </div>
                    ))}
                    <Link to="/cart" className="block px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition text-center rounded">
                      View Cart
                    </Link>
                  </>
                ) : (
                  <div className="px-4 py-2 text-gray-700">Your cart is empty</div>
                )}
              </div>
            )}
          </div>

          {/* Profile Icon & Dropdown */}
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)} className="text-gray-700 hover:text-blue-600">
              <FiUser size={24} />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border-2 border-blue-500 p-2">
                <div className="px-4 py-2 text-gray-700 font-semibold">Profile</div>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* 🔹 Mobile Menu (Only visible on small screens) */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <ToastContainer position="top-right" autoClose={1500} />
    </nav>
  );
};

export default PublicNavbar;