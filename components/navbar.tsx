import React from 'react';
import Link from 'next/link';
import { Droplet, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Droplet className="h-8 w-8 text-primary" />
              <div className="ml-2">
                <span className="text-xl font-bold text-primary">Ocean Breeze Cleaning</span>
                <div className="text-xs text-neutral-DEFAULT">by Karla Figueroa Zuniga</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-neutral-DEFAULT hover:text-primary transition">
              About
            </Link>
            <Link href="#data" className="text-neutral-DEFAULT hover:text-primary transition">
              Data Analysis
            </Link>
            <Link href="#benefits" className="text-neutral-DEFAULT hover:text-primary transition">
              Benefits
            </Link>
            <Link href="#contact" className="text-neutral-DEFAULT hover:text-primary transition">
              Contact
            </Link>
            <button className="px-4 py-2 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition">
              Get a Quote
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-dark hover:text-primary hover:bg-gray-100 focus:outline-none"
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
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-DEFAULT hover:text-primary hover:bg-gray-50"
            >
              About
            </Link>
            <Link 
              href="#data" 
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-DEFAULT hover:text-primary hover:bg-gray-50"
            >
              Data Analysis
            </Link>
            <Link 
              href="#benefits" 
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-DEFAULT hover:text-primary hover:bg-gray-50"
            >
              Benefits
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-DEFAULT hover:text-primary hover:bg-gray-50"
            >
              Contact
            </Link>
            <button className="mt-2 w-full px-4 py-2 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 