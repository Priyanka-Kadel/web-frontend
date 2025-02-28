// import React, { useState } from 'react';
// import { FiMenu, FiShoppingCart, FiUser, FiX } from 'react-icons/fi';
// import { Link, useLocation } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const PublicNavbar = () => {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);

//   const navLinks = [
//     { to: "/dashboard", label: "Home" },
//     { to: "/all-gears", label: "All Gears" },
//     { to: "/about", label: "About" },
//     { to: "/contact", label: "Contact" },
//   ];
  
  

//   const toggleProfileDropdown = () => {
//     setProfileOpen(!profileOpen);
//   };

//   const toggleCartDropdown = () => {
//     setCartOpen(!cartOpen);
//   };

//   // // ✅ FIX: Ensure clicking "GoGear" navigates to dashboard
//   // const handleLogoClick = (e) => {
//   //   e.preventDefault(); // Prevent unnecessary reload
//   //   navigate("/dashboard"); // Redirect user to dashboard instead of logging out
//   // };


// // Cart Items (Example with product image, name, and price)
// const cartItems = [
//   {
//     id: 1,
//     name: 'Trekking Backpack',
//     price: 'Rs 1500/day',
//     imageUrl: 'images/backpack.png', // Replace with the actual image URL
//   },
//   {
//     id: 2,
//     name: 'Camping Tent',
//     price: 'Rs 3000/day',
//     imageUrl: 'images/tent.png', // Replace with the actual image URL
//   },
// ];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-10">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Brand Logo */}
//         <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
//           GoGear
//         </Link>

//         {/* Navigation Links - Centered */}
//         <div className="flex justify-center space-x-6 w-full">
//           {navLinks.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className={`text-gray-700 hover:text-blue-600 transition ${
//                 location.pathname === link.to ? "font-bold text-blue-600" : ""
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Cart Icon */}
//         <div className="relative mr-4" onClick={toggleCartDropdown}>
//           <FiShoppingCart size={24} className="text-gray-700 hover:text-blue-600 cursor-pointer transition" />
          
//           {/* Cart Dropdown */}
//           {cartOpen && (
//             <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border-2 border-blue-500 p-2 transition duration-200 ease-in-out transform scale-95 hover:scale-100">
//               {cartItems.length > 0 ? (
//                 cartItems.map((item) => (
//                   <div key={item.id} className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100">
//                     <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded" />
//                     <div className="ml-2 flex-1">
//                       <span className="block font-semibold">{item.name}</span>
//                       <span className="block text-sm text-gray-500">{item.price}</span>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="px-4 py-2 text-gray-700">Your cart is empty</div>
//               )}
//               <Link to="/cart" className="block px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition">
//                 View Cart
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Profile Icon with Dropdown */}
//         <div className="relative">
//           <button onClick={toggleProfileDropdown} className="text-gray-700 hover:text-blue-600">
//             <FiUser size={24} />
//           </button>
//           {profileOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border-2 border-blue-500 p-2 transition duration-200 ease-in-out transform scale-95 hover:scale-100">
//               <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                 Profile
//               </Link>
//               <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200">
//           {navLinks.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       )}

//       <ToastContainer position="top-right" autoClose={1500} />
//     </nav>
//   );
// };

// export default PublicNavbar;




// import React, { useEffect, useState } from "react";
// import { FiMenu, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
// import { Link, useLocation } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PublicNavbar = () => {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   const removeFromCart = (itemId) => {
//     const updatedCart = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const navLinks = [
//     { to: "/dashboard", label: "Home" },
//     { to: "/all-gears", label: "All Gears" },
//     { to: "/about", label: "About" },
//     { to: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-10">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Brand Logo */}
//         <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
//           GoGear
//         </Link>

//         {/* Navigation Links */}
//         <div className="hidden md:flex justify-center space-x-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className={`text-gray-700 hover:text-blue-600 transition ${
//                 location.pathname === link.to ? "font-bold text-blue-600" : ""
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Cart Icon */}
//         <div className="relative mr-4" onClick={() => setCartOpen(!cartOpen)}>
//           <FiShoppingCart size={24} className="text-gray-700 hover:text-blue-600 cursor-pointer transition" />
//           {cartItems.length > 0 && (
//             <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//               {cartItems.length}
//             </span>
//           )}

//           {/* Cart Dropdown */}
//           {cartOpen && (
//             <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border-2 border-blue-500 p-2">
//               {cartItems.length > 0 ? (
//                 <>
//                   {cartItems.map((item) => (
//                     <div key={item.id} className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100">
//                       <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
//                       <div className="ml-2 flex-1">
//                         <span className="block font-semibold">{item.name}</span>
//                         <span className="block text-sm text-gray-500">{item.price}</span>
//                       </div>
//                       <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
//                         ✕
//                       </button>
//                     </div>
//                   ))}
//                   <Link to="/cart" className="block px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition text-center rounded">
//                     View Cart
//                   </Link>
//                 </>
//               ) : (
//                 <div className="px-4 py-2 text-gray-700">Your cart is empty</div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Profile Icon */}
//         <div className="relative">
//           <button onClick={() => setProfileOpen(!profileOpen)} className="text-gray-700 hover:text-blue-600">
//             <FiUser size={24} />
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200">
//           {navLinks.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       )}

//       <ToastContainer position="top-right" autoClose={1500} />
//     </nav>
//   );
// };

// export default PublicNavbar;



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
  const [user, setUser] = useState(null); // ✅ Track logged-in user

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    // Check if user is logged in
    const loggedInUser = localStorage.getItem("user"); // Example user data
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    setUser(null);
    navigate("/login"); // Redirect to login page
  };

  const navLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/all-gears", label: "All Gears" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
          GoGear
        </Link>

        {/* Navigation Links */}
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

        {/* Cart Icon */}
        <div className="relative mr-4" onClick={() => setCartOpen(!cartOpen)}>
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
                      <button onClick={() => setCartItems(cartItems.filter((c) => c.id !== item.id))} className="text-red-500 hover:text-red-700">
                        ✕
                      </button>
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

        {/* Profile Icon Dropdown */}
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)} className="text-gray-700 hover:text-blue-600">
            <FiUser size={24} />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border-2 border-blue-500 p-2">
              {user ? (
                <>
                  <div className="px-4 py-2 text-gray-700 font-semibold">
                    Welcome, {user.name}
                  </div>
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Login
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
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