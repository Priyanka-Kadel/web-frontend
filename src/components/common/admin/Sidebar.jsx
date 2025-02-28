import { useEffect, useState } from "react";
import {
  FaBars,
  FaEdit,
  FaEye,
  FaHome,
  FaSignOutAlt,
  FaUsers
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [sidebarHeight, setSidebarHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      setSidebarHeight(`${window.innerHeight}px`);
    };

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      className={`bg-gray-900 text-white p-6 transition-all duration-300 flex flex-col fixed left-0 top-0 ${isOpen ? "w-64" : "w-16"} h-full`}
      style={{ height: sidebarHeight }}
    >
      {/* Toggle Button */}
      <button onClick={toggleSidebar} className="mb-6 text-xl self-end">
        <FaBars />
      </button>

      {/* Menu Items */}
      <ul className="space-y-6 flex-1 overflow-y-auto">
        <li className="flex items-center gap-3">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <FaHome aria-label="Dashboard" /> {isOpen && <span>Dashboard</span>}
          </Link>
        </li>

        {/* Products (Main Topic) */}
        <li>
          <Link to="/admin/products/view-products" className="flex items-center gap-3">
            <FaEye aria-label="View Products" /> {isOpen && <span>View Products</span>}
          </Link>
        </li>
        <li>
          <Link to="/admin/products/add-products" className="flex items-center gap-3">
            <FaEdit aria-label="Add Product" /> {isOpen && <span>Add Product</span>}
          </Link>
        </li>

        {/* Users (Without Submenus) */}
        <li>
          <Link to="/admin/users" className="flex items-center gap-3">
            <FaUsers aria-label="Users" /> {isOpen && <span>Users</span>}
          </Link>
        </li>
      </ul>

      {/* Bottom Buttons */}
      <div className="mt-auto space-y-4">
        {/* Dashboard Button */}
        <Link to="/dashboard" className="flex items-center gap-3 text-white">
          <FaHome aria-label="Public Dashboard" /> {isOpen && <span>Public Dashboard</span>}
        </Link>

        {/* Logout Button */}
        <button onClick={() => console.log("Logging out...")} className="flex items-center gap-3 text-white">
          <FaSignOutAlt aria-label="Logout" /> {isOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
