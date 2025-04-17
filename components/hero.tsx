import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Droplets, Wind } from 'lucide-react';
import GlowingButton from './ui/GlowingButton';

// Type definitions for FloatingParticle
interface FloatingParticleProps {
  size: string;
  color: string;
  delay: number;
  duration: number;
  x: string[] | number[];
  y: string[] | number[];
}

// Floating particle component
const FloatingParticle: React.FC<FloatingParticleProps> = ({ size, color, delay, duration, x, y }) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{ 
      width: size, 
      height: size,
    }}
    initial={{ 
      x: x[0], 
      y: y[0], 
      opacity: 0 
    }}
    animate={{ 
      x: x, 
      y: y, 
      opacity: [0, 0.6, 0], 
    }}
    transition={{ 
      duration, 
      delay, 
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  // State for the current stat/feature being displayed
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const controls = useAnimation();
  
  // Stats/features data
  const statsAndFeatures = [
    { 
      stat: "99.9%", 
      text: "Bacteria reduction through our specialized cleaning protocols",
      icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />
    },
    { 
      stat: "85%", 
      text: "Improvement in air quality after our deep cleaning services",
      icon: <Wind className="h-6 w-6 text-cyan-400" /> 
    },
    { 
      stat: "100%", 
      text: "Eco-friendly, non-toxic cleaning solutions",
      icon: <Droplets className="h-6 w-6 text-cyan-400" /> 
    },
  ];
  
  // Animation for rotating stats
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: [1, 0, 0, 1],
        y: [0, -10, 10, 0],
        transition: { duration: 1.5, times: [0, 0.3, 0.6, 1] }
      });
      
      // Wait for fade out animation to complete before changing content
      setTimeout(() => {
        setCurrentStatIndex((prevIndex) => 
          prevIndex === statsAndFeatures.length - 1 ? 0 : prevIndex + 1
        );
      }, 450);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [controls, statsAndFeatures.length]);
  
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  // Item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  return (
    <section id="hero" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="lg:col-span-6 mb-12 lg:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Professional <br/>
              <span className="gradient-text">Health-Focused</span><br/>
              Cleaning Services
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-6"
              variants={itemVariants}
            >
              Creating cleaner, healthier spaces with scientific cleaning approaches that enhance wellbeing and reduce illness risk.
            </motion.p>
            
            {/* Animated Stats */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 mb-8 border border-blue-600/20"
              variants={itemVariants}
              animate={controls}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center">
                  {statsAndFeatures[currentStatIndex].icon}
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {statsAndFeatures[currentStatIndex].stat}
                  </div>
                  <p className="text-gray-300">
                    {statsAndFeatures[currentStatIndex].text}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <GlowingButton 
                  href="#contact"
                  type="primary"
                  size="lg"
                  glowColor="rgba(255, 255, 255, 0.5)"
                >
                  Get a Free Quote
                </GlowingButton>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <GlowingButton
                  href="#data-analysis"
                  type="secondary"
                  size="lg"
                >
                  My Cleaning Approach
                </GlowingButton>
              </motion.div>
              
              {/* Subtle highlight overlay */}
              <motion.div 
                className="absolute -bottom-10 -left-10 w-60 h-60 bg-cyan-400/5 rounded-full blur-xl -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Right Column - Visual Elements */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.6,
              type: "spring",
              stiffness: 50
            }}
          >
            {/* Decorative visual element */}
            <div className="relative h-96 sm:h-[450px] flex items-center justify-center overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-cyan-900/40 animate-gradient"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-gray-900/40 border border-blue-500/20 rounded-xl overflow-hidden">
                {/* 3D animation space */}
                <div className="absolute inset-0">
                  {/* Glowing Orb */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="w-40 h-40 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-70 blur-xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.7, 0.5],
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 opacity-70 blur-md"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        scale: {
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                    />
                  </div>
                  
                  {/* Orbiting particles */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "center" }}
                  >
                    <motion.div
                      className="absolute w-3 h-3 rounded-full bg-cyan-300"
                      style={{ left: "0%", top: "50%" }}
                    />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "center" }}
                  >
                    <motion.div
                      className="absolute w-4 h-4 rounded-full bg-blue-400"
                      style={{ left: "0%", top: "50%" }}
                    />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "center" }}
                  >
                    <motion.div
                      className="absolute w-2 h-2 rounded-full bg-white"
                      style={{ left: "0%", top: "50%" }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Animated Features */}
            <motion.div 
              className="absolute -bottom-10 sm:right-12 bg-gray-800/80 backdrop-blur-md p-5 rounded-xl border border-blue-500/20 shadow-xl max-w-xs"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">Scientifically Backed Cleaning</h3>
              <p className="text-gray-300 text-sm mb-3">
                My approach combines microbiology research with effective cleaning techniques to eliminate harmful pathogens.
              </p>
              <div className="flex gap-2">
                <span className="inline-block px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">
                  Health-Focused
                </span>
                <span className="inline-block px-2 py-1 bg-cyan-900/50 text-cyan-300 text-xs rounded-full">
                  Eco-Friendly
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating particles for visual interest */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingParticle 
            size="8px" 
            color="bg-cyan-300/30" 
            delay={0} 
            duration={18}
            x={['10%', '15%', '5%', '12%']} 
            y={['15%', '60%', '40%', '15%']} 
          />
          <FloatingParticle 
            size="12px" 
            color="bg-blue-300/20" 
            delay={2} 
            duration={22}
            x={['80%', '75%', '85%']} 
            y={['20%', '50%', '20%']} 
          />
          <FloatingParticle 
            size="6px" 
            color="bg-white/30" 
            delay={1.5} 
            duration={15}
            x={['45%', '52%', '48%']} 
            y={['70%', '30%', '70%']} 
          />
          <FloatingParticle 
            size="10px" 
            color="bg-blue-200/20" 
            delay={3} 
            duration={20}
            x={['20%', '30%', '25%']} 
            y={['80%', '40%', '80%']} 
          />
          <FloatingParticle 
            size="14px" 
            color="bg-cyan-200/20" 
            delay={0.5} 
            duration={25}
            x={['90%', '70%', '90%']} 
            y={['90%', '30%', '90%']} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 