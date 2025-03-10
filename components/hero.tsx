import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Wind } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-light text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              A Cleaner Home Is A Healthier Home
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-50">
              Discover how regular cleaning reduces bacteria, germs, and viruses, 
              improving your family's health and well-being.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-accent text-white font-medium rounded-md shadow-lg hover:shadow-xl transition"
              >
                Get a Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-primary font-medium rounded-md shadow-lg hover:shadow-xl transition"
              >
                View Our Data
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="text-xl font-semibold">Reduce Harmful Bacteria</h3>
                    <p className="text-blue-50">Regular cleaning reduces harmful bacteria by up to 80%.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Droplets className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="text-xl font-semibold">Improve Air Quality</h3>
                    <p className="text-blue-50">Eliminate allergens and improve breathing for your family.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Wind className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="text-xl font-semibold">Ocean Breeze Fresh</h3>
                    <p className="text-blue-50">Leave your home smelling as fresh as an ocean breeze.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-400 opacity-20 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-accent opacity-20 blur-3xl rounded-full transform -translate-x-1/3 translate-y-1/4"></div>
    </section>
  );
};

export default Hero; 