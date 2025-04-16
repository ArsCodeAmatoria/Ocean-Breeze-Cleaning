import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-dark text-white pt-16 pb-8 w-full h-full flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="flex items-center">
                <div className="text-2xl font-bold gradient-text">Ocean Breeze Cleaning</div>
              </div>
            </div>
            <p className="text-neutral-light mb-6">
              Professional health-focused cleaning services for a cleaner, healthier living environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cyan-400 transition bg-blue-600/20 p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition bg-blue-600/20 p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition bg-blue-600/20 p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600/30 pb-2 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#microbes" className="text-neutral-light hover:text-cyan-400 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  The Science
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-light hover:text-cyan-400 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-neutral-light hover:text-cyan-400 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-400 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600/30 pb-2 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-400 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-400 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-400 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Deep Sanitization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-400 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Post-Construction
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-600/30 pb-2 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-cyan-500 mt-1 mr-3" />
                <p className="text-neutral-light">123 Breeze Way, Ocean City, FL 33123</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-cyan-500 mr-3" />
                <p className="text-neutral-light">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-cyan-500 mr-3" />
                <p className="text-neutral-light">info@breezify.me</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-b border-blue-600/20 py-8 mb-8">
          <div className="md:flex justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-1 text-white">Subscribe to Our Newsletter</h3>
              <p className="text-neutral-light">Stay updated with cleaning tips and health research</p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-neutral-dark/80 border border-blue-600/30 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder:text-gray-500"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-r-md hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-neutral-light text-sm">
          <p>© {new Date().getFullYear()} Ocean Breeze Cleaning. All rights reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-cyan-400 transition">Privacy Policy</Link>
            {' | '}
            <Link href="#" className="hover:text-cyan-400 transition">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 