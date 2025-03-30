import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the AnimatedLogo component with no SSR
const AnimatedLogo = dynamic(() => import('./AnimatedLogo'), { ssr: false });

const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <AnimatedLogo size={40} />
              </div>
              <span className="ml-1 text-xl font-bold">Ocean Breeze Cleaning</span>
            </div>
            <p className="text-neutral-light mb-2">
              Professional cleaning services with a focus on health, backed by scientific research on bacteria, germs, and air quality.
            </p>
            <p className="text-neutral-light mb-4">
              <span className="text-accent font-medium">Founded by Karla Figueroa Zuniga</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-light hover:text-accent transition">About Us</Link>
              </li>
              <li>
                <Link href="#data" className="text-neutral-light hover:text-accent transition">Our Data</Link>
              </li>
              <li>
                <Link href="#benefits" className="text-neutral-light hover:text-accent transition">Health Benefits</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-accent transition">Cleaning Services</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-accent transition">FAQ</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-light hover:text-accent transition">Residential Cleaning</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-accent transition">Commercial Cleaning</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-accent transition">Deep Sanitization</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-accent transition">Post-Construction</Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-light hover:text-accent transition">Specialized Services</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-neutral pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mt-1 mr-3" />
                <p className="text-neutral-light">123 Breeze Way, Ocean City, FL 33123</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3" />
                <p className="text-neutral-light">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <p className="text-neutral-light">info@oceanbreezecleaning.com</p>
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
                className="px-4 py-2 bg-neutral text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-4 py-2 bg-accent text-white font-medium rounded-r-md hover:bg-accent/90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-neutral-light text-sm">
          <p>© {new Date().getFullYear()} Ocean Breeze Cleaning by Karla Figueroa Zuniga. All rights reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-accent transition">Privacy Policy</Link>
            {' | '}
            <Link href="#" className="hover:text-accent transition">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 