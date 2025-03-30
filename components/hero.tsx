import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Wind } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-2"
              >
                <span className="text-white text-lg md:text-xl font-medium uppercase tracking-wider">Professional & Personalized</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              >
                <span className="text-white drop-shadow-lg">Ocean Breeze</span>
                <br />
                <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Cleaning</span>
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "120px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-white mb-6"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg md:text-xl mb-8 text-blue-50 max-w-lg leading-relaxed"
              >
                Experience the difference of my personalized cleaning approach. I'm dedicated to reducing bacteria, 
                germs, and allergens in your space, improving your health and well-being.
              </motion.p>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md shadow-lg hover:shadow-xl transition"
              >
                Get a Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md shadow-lg hover:shadow-xl transition"
              >
                My Cleaning Approach
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4">
                  <ShieldCheck className="h-8 w-8 text-cyan-200" />
                  <div>
                    <h3 className="text-xl font-semibold">Reduce Harmful Bacteria</h3>
                    <p className="text-blue-50">My detailed cleaning reduces harmful bacteria by up to 80%.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Droplets className="h-8 w-8 text-cyan-200" />
                  <div>
                    <h3 className="text-xl font-semibold">Improve Air Quality</h3>
                    <p className="text-blue-50">I eliminate allergens to improve breathing for your family.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Wind className="h-8 w-8 text-cyan-200" />
                  <div>
                    <h3 className="text-xl font-semibold">Personal Commitment</h3>
                    <p className="text-blue-50">Every space receives my personal attention to detail.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-400 opacity-20 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-cyan-400 opacity-20 blur-3xl rounded-full transform -translate-x-1/3 translate-y-1/4"></div>
    </section>
  );
};

export default Hero; 