"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export const FloatingNav = ({
  navItems,
  className = "",
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Blur Overlay when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-[4000] duration-200"
            onClick={() => setIsOpen(false)} // Close when clicking outside
          />
        )}
      </AnimatePresence>

      {/* Navbar Toggle Button (Hidden when menu is open) */}
      {!isOpen && (
        <div className="fixed top-5 right-5 z-[5000]">
          <button
            className="p-3 rounded-full bg-black/80 text-white hover:bg-black/90 focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu size={28} />
          </button>
        </div>
      )}

      {/* Slide-in Navbar from the Right */}
      <AnimatePresence>
        {isOpen && (
          <div
            className={`fixed top-0 right-0 w-[300px] h-screen bg-black/90 text-white shadow-lg p-8 space-y-8 z-[5001] flex flex-col ${className}`}
          >
            {/* Close (X) Button */}
            <div className="flex justify-end">
              <button
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
                onClick={() => setIsOpen(false)}
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Navbar Items */}
            <nav className="flex flex-col space-y-6">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  href={navItem.link}
                  className="block text-2xl font-semibold tracking-wide hover:text-yellow-400 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {navItem.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
