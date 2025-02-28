// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// // Custom Hook to Use CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart"));
//     if (savedCart) setCart(savedCart);
//   }, []);

//   // Update localStorage whenever cart changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
