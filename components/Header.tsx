"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "py-6 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-8 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - cleaner design */}
        <Link href="/" className="group">
          <span
            className={`font-playfair text-2xl font-normal transition-colors duration-300 ${
              scrolled ? "text-gray-900" : "text-gray-800"
            }`}
          >
            MORGAN
            <span className="text-gray-500 ml-1 font-light italic">S.</span>
          </span>
        </Link>

        {/* Navigation - improved readability */}
        <div className="flex gap-8 items-center">
          <Link
            href="#about"
            className={`relative text-sm font-light transition-colors duration-300 tracking-wide ${
              scrolled
                ? "text-gray-600 hover:text-gray-900"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            About
          </Link>
          <Link
            href="#skills"
            className={`relative text-sm font-light transition-colors duration-300 tracking-wide ${
              scrolled
                ? "text-gray-600 hover:text-gray-900"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`relative text-sm font-light transition-colors duration-300 tracking-wide ${
              scrolled
                ? "text-gray-600 hover:text-gray-900"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 text-sm font-light transition-all duration-300 rounded-full bg-gray-900 text-white hover:bg-gray-800"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
