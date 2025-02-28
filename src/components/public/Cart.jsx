// import React from 'react';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   // Sample cart items, you would typically fetch this from your state or context
//   const cartItems = [
//     {
//       id: 1,
//       name: 'Trekking Backpack',
//       price: 'Rs 1500/day',
//       imageUrl: 'images/backpack.png', // Replace with actual image URL
//     },
//     {
//       id: 2,
//       name: 'Camping Tent',
//       price: 'Rs 3000/day',
//       imageUrl: 'images/tent.png', // Replace with actual image URL
//     },
//   ];

//   const totalPrice = cartItems.reduce((total, item) => total + parseInt(item.price.split(' ')[1]), 0);

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>

//       {/* Cart items list */}
//       {cartItems.length > 0 ? (
//         <div className="space-y-4">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
//               <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded" />
//               <div className="ml-4 flex-1">
//                 <h2 className="text-xl font-semibold">{item.name}</h2>
//                 <p className="text-sm text-gray-500">{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-700">Your cart is empty.</p>
//       )}

//       {/* Total Price */}
//       {cartItems.length > 0 && (
//         <div className="mt-6 flex justify-between items-center text-lg font-semibold">
//           <span>Total Price:</span>
//           <span>Rs {totalPrice}/day</span>
//         </div>
//       )}

//       {/* Checkout Button */}
//       <div className="mt-6 flex justify-center">
//         <Link
//           to="/checkout" // Navigate to the checkout page
//           className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//         >
//           Proceed to Checkout
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
