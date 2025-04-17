'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Building, Home, Leaf, Droplets, Zap, Wind } from 'lucide-react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  
  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      
      <div className="fixed inset-0 z-[-1] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/10 via-transparent to-transparent"></div>
      </div>
      
      {mounted && <ScrollToTopButton />}
      
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="gradient-text">Our</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Health-focused cleaning services designed to create a cleaner, healthier living environment.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Health-First</span> Cleaning Approach
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl border border-blue-600/20 bg-gray-800/50 backdrop-blur-sm h-80 flex items-center justify-center">
                  <Shield className="h-32 w-32 text-cyan-400" />
                </div>
              </div>
              
              <div className="flex flex-col space-y-6">
                <h3 className="text-2xl font-bold">
                  <span className="gradient-text">My Commitment</span> to Your Health
                </h3>
                
                <p className="text-gray-300 text-lg">
                  As a health-focused cleaning specialist, I prioritize not just the appearance of your space, but its 
                  impact on your physical wellbeing. My approach combines effective cleaning techniques with health-conscious
                  product choices.
                </p>
                
                <p className="text-gray-300 text-lg">
                  Each service is designed to reduce allergens, eliminate harmful pathogens, and improve indoor 
                  air quality, creating spaces that look clean and promote better health.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
                      <Leaf className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Eco-Friendly</h4>
                      <p className="text-gray-300">Safe for family & planet</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
                      <Shield className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Health-Focused</h4>
                      <p className="text-gray-300">Reduces allergens & pathogens</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Service Types Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Specialized</span> Cleaning Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Residential Cleaning */}
              <div id="residential" className="bg-gray-800/70 backdrop-blur-sm border border-blue-700/20 rounded-xl overflow-hidden">
                <div className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center px-6">
                  <Home className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-xl font-bold text-white">Residential Cleaning</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Comprehensive cleaning services tailored to your home's unique needs, focusing on creating a 
                    healthier living environment for you and your family.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Deep cleaning</span> of bathrooms and kitchens with sanitization
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Allergen removal</span> from carpets, upholstery, and surfaces
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">High-touch surface</span> disinfection and cleaning
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Air quality improvement</span> through dust removal and ventilation
                      </p>
                    </li>
                  </ul>
                  <Link 
                    href="#contact"
                    className="inline-block px-6 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
              
              {/* Commercial Cleaning */}
              <div id="commercial" className="bg-gray-800/70 backdrop-blur-sm border border-blue-700/20 rounded-xl overflow-hidden">
                <div className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center px-6">
                  <Building className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-xl font-bold text-white">Commercial Cleaning</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Professional cleaning services for offices, retail spaces, and small businesses, designed to maintain 
                    a healthy, productive environment for employees and customers.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Workspace sanitization</span> focused on high-traffic areas
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Break room and restroom</span> cleaning and disinfection
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Office equipment cleaning</span> with appropriate sanitizers
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Custom cleaning schedules</span> to minimize business disruption
                      </p>
                    </li>
                  </ul>
                  <Link 
                    href="#contact"
                    className="inline-block px-6 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
              
              {/* Deep Sanitization */}
              <div id="deep-sanitization" className="bg-gray-800/70 backdrop-blur-sm border border-blue-700/20 rounded-xl overflow-hidden">
                <div className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center px-6">
                  <Sparkles className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-xl font-bold text-white">Deep Sanitization</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Intensive cleaning and sanitization services designed to eliminate pathogens, reduce allergens, 
                    and address hidden contaminants in your living or working space.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Thorough disinfection</span> of all surfaces and high-touch areas
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Specialized cleaning techniques</span> for rarely addressed areas
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">EPA-approved disinfectants</span> for effective pathogen elimination
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Particular focus</span> on kitchens, bathrooms, and living areas
                      </p>
                    </li>
                  </ul>
                  <Link 
                    href="#contact"
                    className="inline-block px-6 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
              
              {/* Post-Construction */}
              <div id="post-construction" className="bg-gray-800/70 backdrop-blur-sm border border-blue-700/20 rounded-xl overflow-hidden">
                <div className="h-16 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center px-6">
                  <Wind className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-xl font-bold text-white">Post-Construction</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Specialized cleaning services for newly constructed or renovated spaces, removing construction debris, 
                    dust, and potentially harmful materials before occupancy.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Complete removal</span> of construction dust and debris
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Thorough cleaning</span> of air vents and HVAC components
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Surface preparation</span> for safe occupancy
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Elimination of harmful residues</span> from construction materials
                      </p>
                    </li>
                  </ul>
                  <Link 
                    href="#contact"
                    className="inline-block px-6 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Aromatherapy Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Enhanced</span> Cleaning Experience
            </h2>
            
            <div className="bg-gray-800/70 backdrop-blur-sm border border-blue-700/20 rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-48 h-48">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-900/20 to-blue-900/20 blur-md"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Droplets className="h-24 w-24 text-teal-500" />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-3">Aromatherapy-Enhanced Cleaning</h3>
                  <p className="text-gray-300 mb-4">
                    Upon request, I can incorporate therapeutic-grade essential oils into your cleaning service. These natural 
                    aromatics not only leave your space smelling wonderful but also provide scientifically-backed health benefits:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-teal-900/30 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                      </div>
                      <p className="ml-2 text-sm text-gray-300">Reduced stress and anxiety</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-teal-900/30 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                      </div>
                      <p className="ml-2 text-sm text-gray-300">Improved sleep quality</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-teal-900/30 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                      </div>
                      <p className="ml-2 text-sm text-gray-300">Enhanced mood and productivity</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-teal-900/30 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                      </div>
                      <p className="ml-2 text-sm text-gray-300">Additional antimicrobial properties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-xl p-8 border border-blue-600/30">
              <h2 className="text-3xl font-bold mb-4">Ready for a Healthier Space?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience the difference a health-focused cleaning approach can make in your home or business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="#contact"
                  className="px-8 py-3 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300"
                >
                  Get a Free Quote
                </Link>
                <Link 
                  href="/about"
                  className="px-8 py-3 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-700 transition duration-300"
                >
                  Learn About My Approach
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 