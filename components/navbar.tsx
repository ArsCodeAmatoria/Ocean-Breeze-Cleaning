import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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

  // Helper function to get correct href based on current page
  const getHref = (anchor: string) => {
    if (isHomePage) {
      return anchor; // On home page, just use the anchor
    } else {
      return `/${anchor}`; // On other pages, redirect to home with anchor
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-gray-900/80 backdrop-blur-lg shadow-lg shadow-blue-900/10"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold gradient-text">
                Ocean Breeze Cleaning
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-white/80 hover:text-cyan-400 transition duration-300">
              Services
            </Link>
            <Link href={getHref('#data-analysis')} className="text-white/80 hover:text-cyan-400 transition duration-300">
              The Science
            </Link>
            <Link href="/about" className="text-white/80 hover:text-cyan-400 transition duration-300">
              About
            </Link>
            <Link href={getHref('#contact')} className="text-white/80 hover:text-cyan-400 transition duration-300">
              Contact
            </Link>
            <Link 
              href={getHref('#contact')}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300"
            >
              Get a Quote
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-400 hover:bg-gray-800/50 focus:outline-none transition duration-300"
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
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800/50 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href={getHref('#data-analysis')} 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800/50 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              The Science
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800/50 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href={getHref('#contact')} 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800/50 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href={getHref('#contact')}
              className="block mt-2 w-full px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 