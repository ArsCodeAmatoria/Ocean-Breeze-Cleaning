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
              <div className="aspect-w-4 aspect-h-3 w-full h-96 relative">
                <Image 
                  src="/images/science.jpg" 
                  alt="Karla Figueroa Zuniga's approach to cleaning" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block text-accent text-sm uppercase tracking-wider font-medium mb-2"
              >
                Personalized & Scientific
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Karla Figueroa Zuniga's</span> 
                <br className="hidden md:block" /> Approach to Healthy Cleaning
              </h2>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-primary/60 mb-6"
              />
            </div>
            <p className="text-lg text-neutral-DEFAULT mb-8">
              At Ocean Breeze Cleaning, I believe in a scientific approach to cleaning. I founded this company 
              with a vision that goes beyond appearance—I'm dedicated to creating genuinely healthier environments 
              through research-based cleaning techniques that reduce bacteria, viruses, and allergens.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="ml-3 text-neutral-DEFAULT">
                  <span className="font-medium">Health-focused cleaning</span> - I prioritize methods that improve air quality and reduce pathogens in your space.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="ml-3 text-neutral-DEFAULT">
                  <span className="font-medium">Personalized approach</span> - Each client receives a customized cleaning plan based on their specific needs.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="ml-3 text-neutral-DEFAULT">
                  <span className="font-medium">Eco-friendly products</span> - My cleaning solutions are effective against germs but gentle on the planet.
                </p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white font-medium rounded-md shadow-lg hover:shadow-xl transition"
            >
              Learn More About My Approach
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 