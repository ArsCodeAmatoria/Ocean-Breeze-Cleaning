import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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
    <nav className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 backdrop-blur-sm ${
      scrolled 
        ? "bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-blue-900/20 py-2"
        : "bg-gray-900/30 backdrop-blur-sm py-3"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className={`text-2xl font-bold gradient-text transition-all duration-300 ${scrolled ? '' : 'scale-110'}`}>
                Ocean Breeze Cleaning
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/services" 
              className={`relative text-white/90 hover:text-cyan-400 transition-all duration-300 py-1
                ${pathname === '/services' ? 'text-cyan-400' : ''}
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 
                after:transition-all after:duration-300 hover:after:w-full`}
            >
              Services
            </Link>
            <Link 
              href={getHref('#data-analysis')} 
              className="relative text-white/90 hover:text-cyan-400 transition-all duration-300 py-1
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 
                after:transition-all after:duration-300 hover:after:w-full"
            >
              The Science
            </Link>
            <Link 
              href="/about" 
              className={`relative text-white/90 hover:text-cyan-400 transition-all duration-300 py-1
                ${pathname === '/about' ? 'text-cyan-400' : ''}
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 
                after:transition-all after:duration-300 hover:after:w-full`}
            >
              About
            </Link>
            <Link 
              href={getHref('#contact')} 
              className="relative text-white/90 hover:text-cyan-400 transition-all duration-300 py-1
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 
                after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
            <Link 
              href={getHref('#contact')}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium 
                hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 
                transition-all duration-300"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-blue-900/20 border-t border-blue-900/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/services" 
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 
                  hover:bg-gray-800/50 transition-all duration-300
                  ${pathname === '/services' ? 'bg-gray-800/70 text-cyan-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href={getHref('#data-analysis')} 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 
                  hover:bg-gray-800/50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                The Science
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 
                  hover:bg-gray-800/50 transition-all duration-300
                  ${pathname === '/about' ? 'bg-gray-800/70 text-cyan-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href={getHref('#contact')} 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400 
                  hover:bg-gray-800/50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href={getHref('#contact')}
                className="block mt-4 w-full px-4 py-3 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 
                  text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 hover:brightness-110 
                  active:brightness-90 transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 