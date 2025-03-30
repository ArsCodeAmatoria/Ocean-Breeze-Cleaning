import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-white">Ocean Breeze</div>
                <div className="ml-1 text-xs px-1.5 py-0.5 bg-white/20 text-white rounded">
                  .me
                </div>
              </div>
            </div>
            <p className="text-neutral-light mb-2">
              Professional cleaning services enhanced with aromatherapy for healthier and more rejuvenating spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cyan-300 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-cyan-300 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-cyan-300 transition">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-300 transition">About Us</Link>
              </li>
              <li>
                <Link href="#data" className="text-neutral-light hover:text-cyan-300 transition">Our Data</Link>
              </li>
              <li>
                <Link href="#benefits" className="text-neutral-light hover:text-cyan-300 transition">Health Benefits</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-300 transition">Cleaning Services</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-300 transition">FAQ</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-300 transition">Residential Cleaning</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-300 transition">Commercial Cleaning</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-300 transition">Deep Sanitization</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-300 transition">Post-Construction</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-cyan-300 transition">Specialized Services</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-cyan-300 mt-1 mr-3" />
                <p className="text-neutral-light">123 Breeze Way, Ocean City, FL 33123</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-cyan-300 mr-3" />
                <p className="text-neutral-light">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-cyan-300 mr-3" />
                <p className="text-neutral-light">info@breezify.me</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-b border-neutral py-8 mb-8">
          <div className="md:flex justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-neutral-light">Stay updated with cleaning tips and health research</p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-neutral text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
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
            <Link href="#" className="hover:text-cyan-300 transition">Privacy Policy</Link>
            {' | '}
            <Link href="#" className="hover:text-cyan-300 transition">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 