'use client';

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Droplet, Wind, ChevronDown } from 'lucide-react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Benefits from '@/components/benefits'
import DataAnalysis from '@/components/data-analysis'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/ParticleBackground'
import GlowingButton from '@/components/ui/GlowingButton'
import FloatingCard from '@/components/FloatingCard'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const { scrollYProgress } = useScroll()
  
  // Transform values for parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacityScrollDown = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
    
    // Hide scroll indicator after 5 seconds
    const timer = setTimeout(() => {
      setShowScrollIndicator(false)
    }, 5000)
    
    // Check if user has scrolled
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false)
        window.removeEventListener('scroll', handleScroll)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Particle background */}
      {mounted && (
        <div className="fixed inset-0 -z-10">
          <ParticleBackground 
            particleCount={70}
            colors={['#0e7490', '#155e75']}
            interactive={false}
          />
        </div>
      )}
      
      {/* Main Content */}
      <Navbar />
      <Hero />
      <About />
      <div className="relative">
        {/* Feature Cards */}
        <section className="relative py-20 overflow-hidden bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Experience the Difference</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                More than just cleaning—a scientifically-backed approach to creating healthier spaces
                through advanced sanitization techniques and eco-friendly solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FloatingCard
                title="Advanced Sanitization"
                subtitle="Targeting invisible threats"
                darkMode={true}
                delay={0}
                depth={3}
                icon={
                  <div className="w-14 h-14 rounded-full bg-blue-900/30 flex items-center justify-center">
                    <ShieldCheck className="h-8 w-8 text-cyan-400" />
                  </div>
                }
              >
                <p className="text-gray-300">
                  Our specialized cleaning process eliminates up to 99.9% of bacteria and viruses using
                  hospital-grade disinfectants and techniques validated by scientific research.
                </p>
                <div className="mt-4">
                  <GlowingButton 
                    href="#microbes" 
                    type="secondary" 
                    size="sm"
                  >
                    Learn more
                  </GlowingButton>
                </div>
              </FloatingCard>
              
              <FloatingCard
                title="Eco-Friendly Products"
                subtitle="Safe for your family and planet"
                darkMode={true}
                delay={0.5}
                depth={5}
                icon={
                  <div className="w-14 h-14 rounded-full bg-blue-900/30 flex items-center justify-center">
                    <Droplet className="h-8 w-8 text-cyan-400" />
                  </div>
                }
              >
                <p className="text-gray-300">
                  We use environmentally responsible cleaning solutions that effectively eliminate pathogens
                  without the harsh chemicals that can harm your health or the planet.
                </p>
                <div className="mt-4">
                  <GlowingButton 
                    href="/about" 
                    type="secondary" 
                    size="sm"
                  >
                    Our approach
                  </GlowingButton>
                </div>
              </FloatingCard>
              
              <FloatingCard
                title="Improved Air Quality"
                subtitle="Breathe easier, live better"
                darkMode={true}
                delay={1}
                depth={4}
                icon={
                  <div className="w-14 h-14 rounded-full bg-blue-900/30 flex items-center justify-center">
                    <Wind className="h-8 w-8 text-cyan-400" />
                  </div>
                }
              >
                <p className="text-gray-300">
                  Our cleaning process removes airborne particles, allergens, and pollutants, 
                  significantly improving indoor air quality and creating a healthier environment.
                </p>
                <div className="mt-4">
                  <GlowingButton 
                    href="#benefits" 
                    type="secondary" 
                    size="sm"
                  >
                    Discover benefits
                  </GlowingButton>
                </div>
              </FloatingCard>
            </div>
            
            <div className="mt-16 text-center">
              <GlowingButton 
                href="#contact" 
                type="primary" 
                size="lg"
              >
                Get a Free Consultation
              </GlowingButton>
            </div>
          </div>
        </section>
      </div>
      <Benefits />
      <DataAnalysis />
      <Footer />
      
      {/* Scroll to top button */}
      {mounted && <ScrollToTopButton />}
      
      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div 
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
          style={{ opacity: opacityScrollDown }}
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2 opacity-70">Scroll to explore</span>
            <ChevronDown className="text-white h-6 w-6 opacity-70" />
          </div>
        </motion.div>
      )}
    </div>
  )
} 