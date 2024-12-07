"use client"
import React, { useState } from 'react'
import Link from "next/link";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="sticky border-b-2 w-full bg-white text-black border-black z-50">
          <nav className="max-w-7xl mx-auto 3 pt-3 pl-2 pr-2 pb-3 flex justify-between items-center">
            {/* Left side - Your Name */}
            <div className="text-xl font-bold">
              <Link href="/">Name</Link>
            </div>
    
            {/* Right side - Navigation links */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
              <Link href="/projects" className="hover:text-gray-400">
                Socials
              </Link>
            </div>
    
            {/* Hamburger for small screens */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  stroke="black"
                  className="w-6 h-6"
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
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden bg-gray-800 text-white px-4 py-2 space-y-4`}
          >
            <Link href="/" className="block hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="block hover:text-gray-400">
              About
            </Link>
            <Link href="/projects" className="block hover:text-gray-400">
              Projects
            </Link>
          </div>
        </header>
      );
}

export default Navbar