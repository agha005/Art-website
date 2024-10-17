"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="absolute top-4 left-0 w-full bg-transparent text-orange-400 px-8 flex items-center justify-between z-50">
      {/* Hamburger menu button (only visible on mobile) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleNav}
          className="text-orange-400 focus:outline-none"
        >
          {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Navigation Links (visible on larger screens) */}
      <ul className="hidden md:flex space-x-4 rounded-[3rem] px-10 py-4 ml-[23rem]">
        <li className="relative overflow-hidden border border-gray-300 px-7 py-2 rounded-full font-semibold text-base group">
          <a
            href="#page-3"
            className="relative z-10 text-white font-bold transition-colors duration-300"
          >
            Work
          </a>
          <span className="absolute bottom-0 left-0 w-full h-full bg-[#1ea39c] z-0 transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom rounded-full"></span>
        </li>
        <li className="relative overflow-hidden border border-gray-300 px-6 py-2 rounded-full font-semibold text-base group">
          <a
            href="#"
            className="relative z-10 text-white font-bold transition-colors duration-300"
          >
            Portfolio
          </a>
          <span className="absolute bottom-0 left-0 w-full h-full bg-[#1ea39c] z-0 transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom rounded-full"></span>
        </li>
        <li className="relative overflow-hidden border border-gray-300 px-6 py-2 rounded-full font-semibold text-base group">
          <a
            href="#"
            className="relative z-10 text-white font-bold transition-colors duration-300"
          >
            Contact
          </a>
          <span className="absolute bottom-0 left-0 w-full h-full bg-[#1ea39c] z-0 transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom rounded-full"></span>
        </li>
        <li className="relative overflow-hidden border border-gray-300 px-6 py-2 rounded-full font-semibold text-base group">
          <a
            href="#"
            className="relative z-10 text-white font-bold transition-colors duration-300 "
          >
            About
          </a>
          <span className="absolute bottom-0 left-0 w-full h-full bg-[#1ea39c] z-0 transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom rounded-full"></span>
        </li>
      </ul>

      {/* Mobile Menu (visible on mobile when hamburger is clicked) */}
      <ul
        className={`${
          navOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-start p-6 z-50 transition-transform transform duration-300 ease-in-out`}
      >
        {/* Close Button inside the mobile menu */}
        <div className="flex justify-between items-center w-full mb-8">
          <h2 className="text-3xl text-orange-400 font-bold">Menu</h2>
          <button
            onClick={toggleNav}
            className="text-orange-400 focus:outline-none"
          >
            <AiOutlineClose size={30} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <li className="relative text-2xl px-4 py-4 rounded-full font-semibold">
          <a
            href="#page-3"
            className="text-orange-300 hover:text-orange-500"
            onClick={toggleNav}
          >
            Work
          </a>
        </li>
        <li className="relative text-2xl px-4 py-4 rounded-full font-semibold">
          <a
            href="#"
            className="text-orange-300 hover:text-orange-500"
            onClick={toggleNav}
          >
            Portfolio
          </a>
        </li>
        <li className="relative text-2xl px-4 py-4 rounded-full font-semibold">
          <a
            href="#"
            className="text-orange-300 hover:text-orange-500"
            onClick={toggleNav}
          >
            Contact
          </a>
        </li>
        <li className="relative text-2xl px-4 py-4 rounded-full font-semibold">
          <a
            href="#"
            className="text-orange-300 hover:text-orange-500"
            onClick={toggleNav}
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
