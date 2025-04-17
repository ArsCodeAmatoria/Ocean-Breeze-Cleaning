'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

interface ScrollToTopButtonProps {
  showAfterScroll?: number
  position?: 'bottom-right' | 'bottom-left'
  size?: 'sm' | 'md' | 'lg'
}

export default function ScrollToTopButton({
  showAfterScroll = 300,
  position = 'bottom-right',
  size = 'md'
}: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  // Track scroll position to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    
    window.addEventListener('scroll', toggleVisibility)
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [showAfterScroll])
  
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  // Button size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return { button: 'h-10 w-10', icon: 'h-4 w-4' }
      case 'md': return { button: 'h-12 w-12', icon: 'h-5 w-5' }
      case 'lg': return { button: 'h-14 w-14', icon: 'h-6 w-6' }
      default: return { button: 'h-12 w-12', icon: 'h-5 w-5' }
    }
  }
  
  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-right': return 'bottom-6 right-6'
      case 'bottom-left': return 'bottom-6 left-6'
      default: return 'bottom-6 right-6'
    }
  }
  
  const sizeClasses = getSizeClasses()
  const positionClasses = getPositionClasses()
  
  // Always use dark mode styling
  const colorClasses = 'bg-gray-800 hover:bg-gray-700 text-cyan-400 shadow-cyan-900/10'
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`fixed ${positionClasses} ${sizeClasses.button} ${colorClasses} rounded-full flex items-center justify-center shadow-lg z-50 focus:outline-none`}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ChevronUp className={sizeClasses.icon} size={24} />
          <span className="sr-only">Scroll to top</span>
          
          {/* Glow effect */}
          <span className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 blur-md -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  )
} 