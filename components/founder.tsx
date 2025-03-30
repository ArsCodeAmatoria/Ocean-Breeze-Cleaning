'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Scroll, Star, Clock } from 'lucide-react';

const Founder = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Founder achievements
  const achievements = [
    {
      icon: <Award className="h-12 w-12 text-cyan-500" />,
      title: "Health-Focused Cleaning",
      description: "Specialized in creating healthier living environments"
    },
    {
      icon: <Scroll className="h-12 w-12 text-cyan-500" />,
      title: "Environmental Health Specialist",
      description: "Trained in health-focused cleaning approaches"
    },
    {
      icon: <Star className="h-12 w-12 text-cyan-500" />,
      title: "5-Star Service Provider",
      description: "Consistently rated 5 stars by satisfied customers"
    },
    {
      icon: <Clock className="h-12 w-12 text-cyan-500" />,
      title: "7+ Years Experience",
      description: "Established track record of quality service since 2015"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-cyan-600 text-sm uppercase tracking-wider font-medium mb-2"
          >
            The Face Behind Breezify
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Meet <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Karla Figueroa Zuniga</span>
          </h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-cyan-500/60 mx-auto mb-5"
          />
          <p className="text-lg text-neutral-DEFAULT max-w-3xl mx-auto">
            Professional cleaner, entrepreneur, and healthy environment advocate
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cyan-400/20 rounded-full blur-xl z-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-cyan-500 relative">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M0,192L48,165.3C96,139,192,85,288,96C384,107,480,181,576,186.7C672,192,768,128,864,117.3C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>
                
                <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white/20"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-white/20"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative text-center">
                    <div className="text-9xl font-bold text-white/20 leading-none">KF</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-2xl font-semibold text-white">Karla Figueroa</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4 text-center">
                  <div className="text-white text-lg font-medium">Breezify</div>
                  <div className="text-cyan-100 text-sm">Founder & CEO</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-neutral-dark mb-6">My Cleaning Philosophy</h3>
            
            {/* Stylized quotes */}
            <div className="space-y-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow-md relative"
              >
                <div className="absolute -left-2 -top-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                  <div className="text-lg text-white font-bold">"</div>
                </div>
                <p className="text-lg italic text-neutral-DEFAULT pl-6">
                  "I founded Breezify with a clear mission: to transform the conventional approach to cleaning services. For me, cleaning isn't just about appearances—it's fundamentally about creating healthier living and working environments."
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow-md relative"
              >
                <div className="absolute -left-2 -top-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                  <div className="text-lg text-white font-bold">"</div>
                </div>
                <p className="text-lg italic text-neutral-DEFAULT pl-6">
                  "With my background in environmental health, I've developed cleaning protocols that specifically target pathogens, allergens, and pollutants that impact everyday wellbeing. Every client receives personalized service based on their unique needs."
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow-md relative"
              >
                <div className="absolute -left-2 -top-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                  <div className="text-lg text-white font-bold">"</div>
                </div>
                <p className="text-lg italic text-neutral-DEFAULT pl-6">
                  "Whether it's your home or business, my commitment is to deliver a level of cleanliness that promotes health and peace of mind. I incorporate aromatherapy elements that not only make your space smell wonderful but provide genuine therapeutic benefits."
                </p>
              </motion.div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition"
            >
              Book a Consultation
            </motion.button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition"
            >
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2">{achievement.title}</h3>
              <p className="text-neutral-DEFAULT">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founder; 