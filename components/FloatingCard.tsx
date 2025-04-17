'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

interface FloatingCardProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  icon?: React.ReactNode
  className?: string
  depth?: number  // Controls parallax effect (1-10)
  delay?: number
  darkMode?: boolean
  hoverEffect?: boolean
  glowColor?: string
}

export default function FloatingCard({
  children,
  title,
  subtitle,
  icon,
  className = '',
  depth = 5,
  delay = 0,
  darkMode = false,
  hoverEffect = true,
  glowColor = 'rgba(0, 170, 255, 0.2)'
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.2 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })
  
  // Normalized depth factor (1-10 scale)
  const depthFactor = Math.min(Math.max(depth, 1), 10) / 20
  
  // Transform values based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [50 * depthFactor, -50 * depthFactor])
  const rotate = useTransform(scrollYProgress, [0, 1], [2 * depthFactor, -2 * depthFactor])
  
  // 3D card effect on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hoverEffect) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Calculate position relative to center (normalized -1 to 1)
    const relativeX = (e.clientX - rect.left - centerX) / centerX
    const relativeY = (e.clientY - rect.top - centerY) / centerY
    
    setMousePosition({ x: relativeX, y: relativeY })
  }
  
  // Card styling based on dark mode
  const cardBg = darkMode 
    ? 'bg-gray-900/50 backdrop-blur-lg border border-gray-800/50' 
    : 'bg-white/50 backdrop-blur-lg border border-gray-200/60'
  
  const cardTextColor = darkMode ? 'text-white' : 'text-gray-800'
  const subtitleColor = darkMode ? 'text-gray-300' : 'text-gray-600'
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-xl overflow-hidden shadow-xl ${cardBg} ${className}`}
      style={{ 
        y,
        rotate,
        transformStyle: 'preserve-3d', 
        perspective: '1000px',
        boxShadow: isHovered ? `0 20px 40px ${glowColor}` : undefined
      }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 50, 
        scale: isInView ? 1 : 0.95,
        rotateX: isHovered ? mousePosition.y * 10 : 0,
        rotateY: isHovered ? mousePosition.x * -10 : 0,
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay * 0.2,
        ease: [0.16, 1, 0.3, 1]  // Custom ease
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      {isHovered && (
        <motion.div 
          className="absolute inset-0 z-0 opacity-50"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 50}%, ${glowColor} 0%, transparent 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Card content */}
      <div className="relative z-10 p-6">
        {/* Icon and title section */}
        {(icon || title || subtitle) && (
          <div className="mb-4">
            {icon && (
              <div className="mb-4">
                {icon}
              </div>
            )}
            
            {title && (
              <h3 className={`text-xl font-semibold ${cardTextColor}`}>
                {title}
              </h3>
            )}
            
            {subtitle && (
              <p className={`mt-1 text-sm ${subtitleColor}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        {/* Main content */}
        <div className={cardTextColor}>
          {children}
        </div>
      </div>
    </motion.div>
  )
} 