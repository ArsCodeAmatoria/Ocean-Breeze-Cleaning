import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-xl z-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              {/* Replace with your own image */}
              <div className="aspect-w-4 aspect-h-3 w-full h-96 relative bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Cleaning professional image
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              Backed by Science, <span className="text-primary">Dedicated to Health</span>
            </h2>
            <p className="text-lg text-neutral-DEFAULT mb-8">
              At Ocean Breeze Cleaning, we believe in a scientific approach to cleaning. We're not just 
              about appearance—we're about creating genuinely healthier environments through research-based 
              cleaning techniques that reduce bacteria, viruses, and allergens.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="ml-3 text-neutral-DEFAULT">
                  <span className="font-medium">Health-focused cleaning</span> - We prioritize methods that improve air quality and reduce pathogens.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="ml-3 text-neutral-DEFAULT">
                  <span className="font-medium">Scientific approach</span> - We continuously update our techniques based on the latest research.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="ml-3 text-neutral-DEFAULT">
                  <span className="font-medium">Eco-friendly products</span> - Our cleaning solutions are effective against germs but gentle on the planet.
                </p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white font-medium rounded-md shadow-lg hover:shadow-xl transition"
            >
              Learn More About Our Approach
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 