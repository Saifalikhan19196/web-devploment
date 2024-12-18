import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-orange-600 hover:text-orange-500 transition duration-300">
          <NavLink to="/">Saif's Portfolio</NavLink>
        </div>

        {/* Menu - Large Screens */}
        <div className="hidden md:flex space-x-8 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-800 hover:text-orange-500 transition duration-300 py-2 px-4 rounded-lg ${isActive ? 'text-orange-500 font-semibold' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-800 hover:text-orange-500 transition duration-300 py-2 px-4 rounded-lg ${isActive ? 'text-orange-500 font-semibold' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-gray-800 hover:text-orange-500 transition duration-300 py-2 px-4 rounded-lg ${isActive ? 'text-orange-500 font-semibold' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-800 hover:text-orange-500 transition duration-300 py-2 px-4 rounded-lg ${isActive ? 'text-orange-500 font-semibold' : ''}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-md">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-md transition duration-300 ${isActive ? 'bg-gray-100' : ''}`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-md transition duration-300 ${isActive ? 'bg-gray-100' : ''}`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-md transition duration-300 ${isActive ? 'bg-gray-100' : ''}`
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-md transition duration-300 ${isActive ? 'bg-gray-100' : ''}`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
