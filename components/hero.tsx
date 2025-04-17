import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Droplets, Wind } from 'lucide-react';
import dynamic from 'next/dynamic';
import GlowingButton from './ui/GlowingButton';

// Dynamically import the 3D Canvas component to avoid SSR issues
const Virus3DCanvas = dynamic(() => import('./3d/Virus3DCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-blue-600/20 animate-pulse"></div>
    </div>
  )
});

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
  const controls = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Start animations when component mounts
  useEffect(() => {
    const loadSequence = async () => {
      await controls.start("visible");
      setIsLoaded(true);
    };
    
    loadSequence();
  }, [controls]);
  
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };
  
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-cyan-600 text-white overflow-hidden min-h-[80vh] flex items-start">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-0 right-0 w-1/3 h-full bg-blue-500 opacity-20 blur-3xl rounded-full"
          animate={{ 
            x: [50, 30, 50],
            y: [-50, -30, -50],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-cyan-500 opacity-20 blur-3xl rounded-full"
          animate={{ 
            x: [-50, -30, -50],
            y: [30, 50, 30],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-white opacity-10 blur-xl rounded-full"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
        
        {/* Floating particles */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16 md:pb-24 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            <div className="mb-6">
              <motion.div 
                variants={itemVariants}
                className="mb-1"
              >
                <span className="text-white text-lg md:text-xl font-medium uppercase tracking-wider">
                  <AnimatePresence>
                    {isLoaded && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative inline-block"
                      >
                        <motion.span
                          className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-cyan-400"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.7, delay: 0.5 }}
                        />
                        Professional & Personalized
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.div>
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight"
              >
                <span className="text-white drop-shadow-lg relative inline-block">
                  Ocean Breeze
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-1 bg-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: isLoaded ? "100%" : 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">Your Space</span>
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "120px" }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="h-1 bg-white mb-4"
              />
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl mb-6 text-blue-50 max-w-lg leading-relaxed"
              >
                Experience the difference of my personalized cleaning approach. I'm dedicated to reducing bacteria, 
                germs, and allergens in your space, improving your health and well-being.
              </motion.p>
            </div>
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
          
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="grid grid-cols-1 gap-5"
            >
              {/* 3D Virus Visualization */}
              <motion.div 
                className="h-[380px] w-full relative mb-5 rounded-2xl overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 0 25px rgba(56, 189, 248, 0.2)",
                }}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.div
                  className="absolute inset-0 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <Virus3DCanvas />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600/20 z-20 pointer-events-none" />
                
                {/* Animated border */}
                <motion.div 
                  className="absolute inset-0 border border-blue-400/30 rounded-2xl z-30 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
                
                {/* Corner accents */}
                <motion.div 
                  className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-blue-400/50 rounded-tl-2xl z-30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                />
                <motion.div 
                  className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-blue-400/50 rounded-br-2xl z-30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 }}
                />
              </motion.div>
              
              {/* Info cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ boxShadow: "0 0 30px rgba(8, 145, 178, 0.15)" }}
                className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 gap-5 relative z-10">
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <ShieldCheck className="h-8 w-8 text-cyan-200" />
                    <div>
                      <h3 className="text-xl font-semibold">Reduce Harmful Bacteria</h3>
                      <p className="text-blue-50">My detailed cleaning reduces harmful bacteria by up to 80%.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{ x: 5 }}
                  >
                    <Droplets className="h-8 w-8 text-cyan-200" />
                    <div>
                      <h3 className="text-xl font-semibold">Improve Air Quality</h3>
                      <p className="text-blue-50">I eliminate allergens to improve breathing for your family.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <Wind className="h-8 w-8 text-cyan-200" />
                    <div>
                      <h3 className="text-xl font-semibold">Personal Commitment</h3>
                      <p className="text-blue-50">Every space receives my personal attention to detail.</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Background accents */}
                <motion.div 
                  className="absolute top-0 right-0 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Mobile cards - only visible on small screens */}
      <div className="md:hidden px-4 pb-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ y: -5 }}
          className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 gap-6 relative z-10">
            <motion.div 
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <ShieldCheck className="h-7 w-7 text-cyan-200 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Reduce Harmful Bacteria</h3>
                <p className="text-blue-50 text-sm">My detailed cleaning reduces harmful bacteria by up to 80%.</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Droplets className="h-7 w-7 text-cyan-200 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Improve Air Quality</h3>
                <p className="text-blue-50 text-sm">I eliminate allergens to improve breathing for your family.</p>
              </div>
            </motion.div>
          </div>
          
          {/* Background accent */}
          <motion.div 
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 