import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, Award, TrendingUp, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyan-50 rounded-full blur-3xl opacity-60 -z-10"></div>
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-cyan-600 text-sm uppercase tracking-wider font-medium mb-2"
            >
              My Cleaning Journey
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-dark mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Experience</span> 
              <span className="relative mx-2 inline-block">
                &
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-0 h-1 bg-cyan-500"
                ></motion.span>
              </span>
              <span className="bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-12 gap-4 items-center">
            {/* Image section - creative layout */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-5 lg:col-span-4 md:row-span-2 relative"
            >
              <div className="relative mx-auto max-w-sm">
                {/* Image frame with decorative elements */}
                <div className="absolute inset-0 border-2 border-cyan-500 rounded-xl transform translate-x-4 translate-y-4 z-0"></div>
                
                {/* Main image with overlay gradient */}
                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                  <div className="aspect-w-3 aspect-h-4 w-full relative">
                    <Image 
                      src="/images/hero-image.jpg" 
                      alt="Karla's cleaning expertise" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-transparent to-cyan-400/30 mix-blend-overlay"></div>
                  </div>
                  
                  {/* Floating badges */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-5 -right-5 bg-white rounded-full shadow-lg p-3"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full p-2">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -top-4 -left-4 bg-white rounded-full shadow-lg p-2"
                  >
                    <Award className="h-7 w-7 text-cyan-500" />
                  </motion.div>
                </div>
                
                {/* Experience indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-2 bg-white px-4 py-2 rounded-lg shadow-lg"
                >
                  <p className="text-sm font-semibold text-neutral-dark">
                    <span className="text-cyan-600">10+ </span>Years Experience
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-7 lg:col-span-8"
            >
              <p className="text-lg text-neutral-DEFAULT mb-6">
                With over a decade of experience in the cleaning industry, I've developed a passion for transforming 
                spaces into healthier, more inviting environments. What started as a simple cleaning service has evolved into 
                a commitment to improving the quality of life for every client through exceptional cleaning practices.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 p-5 rounded-xl"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-md">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-dark mb-2">Health-Focused Approach</h3>
                  <p className="text-sm text-neutral-DEFAULT">
                    I specialize in cleaning techniques that promote health and wellness in your space.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-cyan-50 p-5 rounded-xl"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-md">
                    <Check className="h-6 w-6 text-cyan-500" />
                  </div>
                  <h3 className="font-semibold text-neutral-dark mb-2">Personal Attention</h3>
                  <p className="text-sm text-neutral-DEFAULT">
                    As a solo operator, I personally handle every cleaning job with meticulous care and attention to detail.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-teal-50 p-5 rounded-xl"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-md">
                    <TrendingUp className="h-6 w-6 text-teal-500" />
                  </div>
                  <h3 className="font-semibold text-neutral-dark mb-2">Continuous Growth</h3>
                  <p className="text-sm text-neutral-DEFAULT">
                    I regularly update my methods and tools based on the latest research in cleaning science.
                  </p>
                </motion.div>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden px-8 py-4 bg-white border-2 border-cyan-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="relative z-10 font-medium text-neutral-dark group-hover:text-white transition-colors duration-300">
                    Learn About My Story
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 