import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/70 backdrop-blur-lg shadow-md" 
        : "bg-white shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Breezify
              </div>
              <div className="hidden sm:block text-xs px-2 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md">
                .me
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">
              About
            </Link>
            <Link href="#data" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Data Analysis
            </Link>
            <Link href="#benefits" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Benefits
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300">
              Get a Quote
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${
          scrolled 
            ? "bg-white/90 backdrop-blur-lg" 
            : "bg-white"
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition duration-300"
            >
              About
            </Link>
            <Link 
              href="#data" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition duration-300"
            >
              Data Analysis
            </Link>
            <Link 
              href="#benefits" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition duration-300"
            >
              Benefits
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition duration-300"
            >
              Contact
            </Link>
            <button className="mt-2 w-full px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 