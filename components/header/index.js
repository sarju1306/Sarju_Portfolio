"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 border-b border-gray-600">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
          <Link href="/">Sarju Dharsandiya</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="hover:text-teal-400 transition duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-purple-400 transition duration-300 font-medium"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-teal-400 transition duration-300 font-medium"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-purple-400 transition duration-300 font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-teal-400 hover:text-purple-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-4">
          <Link
            href="/"
            className="block hover:text-teal-400 transition duration-300 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-purple-400 transition duration-300 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block hover:text-teal-400 transition duration-300 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block hover:text-purple-400 transition duration-300 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;