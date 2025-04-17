'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Award, Leaf, Briefcase, Heart, Star } from 'lucide-react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import VirusWireframeContainer from '../../components/VirusWireframeContainer';
import { useTheme } from 'next-themes';

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

export default function AboutPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isDarkMode = mounted && (theme === 'dark');

  return (
    <main className="bg-neutral-dark dark:bg-gray-900 text-white min-h-screen">
      <Navbar />
      
      <div className="fixed inset-0 z-[-1] bg-neutral-dark dark:bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-neutral-dark dark:from-blue-950/20 dark:to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent dark:from-blue-950/10"></div>
      </div>
      
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="gradient-text">About</span> Ocean Breeze Cleaning
            </h1>
            <p className="text-xl text-neutral-light dark:text-gray-300 max-w-3xl mx-auto">
              Dedicated to creating healthier living spaces through science-based cleaning approaches.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl border border-blue-600/20 bg-neutral-dark/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <Image 
                  src="/images/karla.png" 
                  alt="Karla - Founder of Ocean Breeze Cleaning" 
                  width={600} 
                  height={600}
                  className="w-full object-contain"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col space-y-6"
            >
              <h2 className="text-3xl font-bold">
                <span className="gradient-text">Meet Karla</span> - Founder &amp; Health-Focused Cleaning Expert
              </h2>
              
              <p className="text-neutral-light dark:text-gray-300 text-lg">
                With a background in microbiology and a passion for creating healthier living environments, 
                Karla founded Ocean Breeze Cleaning to address the hidden health impacts of unclean spaces.
              </p>
              
              <p className="text-neutral-light dark:text-gray-300 text-lg">
                "I started Ocean Breeze Cleaning after witnessing how proper cleaning techniques could dramatically 
                improve indoor air quality and reduce illness in my own family. What began as a personal mission 
                has grown into a service that helps hundreds of families and businesses create truly healthy spaces."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <Calendar className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Founded in 2018</h3>
                    <p className="text-neutral-light dark:text-gray-300">5+ years of excellence</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <Award className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Health-Focused Approach</h3>
                    <p className="text-neutral-light dark:text-gray-300">Science-backed methods</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="#contact"
                className="mt-4 px-8 py-3 w-fit rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg transition duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
          
          {/* Virus Wireframe Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">The Science</span> Behind Clean Spaces
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Understanding Microbes in Your Environment</h3>
                <p className="text-neutral-light dark:text-gray-300 text-lg mb-4">
                  Viruses, bacteria, and other pathogens are constantly present in our living spaces. These microscopic organisms 
                  can significantly impact our health and well-being when allowed to proliferate.
                </p>
                <p className="text-neutral-light dark:text-gray-300 text-lg mb-4">
                  My professional cleaning approach targets these microorganisms using scientifically proven methods
                  that effectively reduce their presence and prevent their rapid regrowth.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-600/20 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <p className="text-neutral-light dark:text-gray-300">
                      <span className="text-white font-medium">Reduces viral and bacterial load</span> by up to 80% compared to standard cleaning
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-600/20 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <p className="text-neutral-light dark:text-gray-300">
                      <span className="text-white font-medium">Targets high-touch surfaces</span> where microorganisms concentrate and spread
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-600/20 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <p className="text-neutral-light dark:text-gray-300">
                      <span className="text-white font-medium">Improves air quality</span> by reducing airborne particulates and allergens
                    </p>
                  </li>
                </ul>
              </div>
              
              {/* Virus Wireframe Animation */}
              <div>
                {mounted && (
                  <VirusWireframeContainer
                    title="Visualizing Viral Structures"
                    description="Understanding the microscopic threats in our environments helps us create better cleaning strategies."
                    height="450px"
                    wireframeColor={isDarkMode ? "#00aaff" : "#0088ff"}
                    spikeColor={isDarkMode ? "#80dfff" : "#4db8ff"}
                    darkMode={isDarkMode}
                  />
                )}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Our Approach</span> to Healthy Cleaning
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-neutral-dark/70 dark:bg-gray-800/70 backdrop-blur-sm border border-blue-600/20 dark:border-blue-700/20 rounded-xl p-6">
                <div className="h-14 w-14 rounded-full bg-blue-600/20 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <Leaf className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Eco-Friendly Products</h3>
                <p className="text-neutral-light dark:text-gray-300">
                  We use environmentally responsible cleaning solutions that effectively eliminate pathogens without harsh chemicals that can harm your health or the planet.
                </p>
              </div>
              
              <div className="bg-neutral-dark/70 dark:bg-gray-800/70 backdrop-blur-sm border border-blue-600/20 dark:border-blue-700/20 rounded-xl p-6">
                <div className="h-14 w-14 rounded-full bg-blue-600/20 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <Briefcase className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Advanced Techniques</h3>
                <p className="text-neutral-light dark:text-gray-300">
                  Our methods are based on scientific research about how pathogens spread and survive in home environments, allowing us to target high-risk areas effectively.
                </p>
              </div>
              
              <div className="bg-neutral-dark/70 dark:bg-gray-800/70 backdrop-blur-sm border border-blue-600/20 dark:border-blue-700/20 rounded-xl p-6">
                <div className="h-14 w-14 rounded-full bg-blue-600/20 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Health-First Mindset</h3>
                <p className="text-neutral-light dark:text-gray-300">
                  We prioritize your family's health by removing allergens, reducing asthma triggers, and eliminating hidden contaminants that can affect your wellbeing.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">What Our Clients</span> Say About Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-dark/70 dark:bg-gray-800/70 backdrop-blur-sm border border-blue-600/20 dark:border-blue-700/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-neutral-light dark:text-gray-300 italic mb-4">
                  "Since switching to Ocean Breeze Cleaning, my family has experienced fewer allergy symptoms and respiratory issues. Their attention to detail and health-focused approach has made a noticeable difference in our home environment."
                </p>
                <div>
                  <h4 className="font-semibold text-white">Sarah Johnson</h4>
                  <p className="text-sm text-neutral dark:text-gray-400">Homeowner</p>
                </div>
              </div>
              
              <div className="bg-neutral-dark/70 dark:bg-gray-800/70 backdrop-blur-sm border border-blue-600/20 dark:border-blue-700/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-neutral-light dark:text-gray-300 italic mb-4">
                  "As a pediatric clinic, we needed a cleaning service that understood the importance of thorough sanitization. Ocean Breeze not only meets but exceeds our expectations. Their commitment to health has helped us maintain a safe environment for our young patients."
                </p>
                <div>
                  <h4 className="font-semibold text-white">Dr. Michael Chen</h4>
                  <p className="text-sm text-neutral dark:text-gray-400">Medical Practice Owner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 