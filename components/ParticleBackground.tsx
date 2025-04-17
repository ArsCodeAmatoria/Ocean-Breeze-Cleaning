'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  originalX: number
  originalY: number
}

interface ParticleBackgroundProps {
  particleCount?: number
  interactive?: boolean
  colors?: string[]
  maxSize?: number
  minSize?: number
  speed?: number
  className?: string
}

export default function ParticleBackground({
  particleCount = 50,
  interactive = true,
  colors = ['#80dfff', '#00aaff', '#0088cc', '#64B5F6'],
  maxSize = 6,
  minSize = 1,
  speed = 0.5,
  className = ''
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
  const animationRef = useRef<number>(0)

  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    if (!context) return
    
    // Set canvas dimensions
    const updateDimensions = () => {
      if (canvas.parentElement) {
        const { width, height } = canvas.parentElement.getBoundingClientRect()
        canvas.width = width
        canvas.height = height
        setDimensions({ width, height })
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    // Create particles
    const newParticles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      newParticles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.2
      })
    }
    particlesRef.current = newParticles
    
    return () => {
      window.removeEventListener('resize', updateDimensions)
      cancelAnimationFrame(animationRef.current)
    }
  }, [particleCount, colors, maxSize, minSize, speed])
  
  // Animation function
  useEffect(() => {
    if (!canvasRef.current || particlesRef.current.length === 0) return
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    if (!context) return
    
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections between particles
      context.lineWidth = 0.3
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            context.beginPath()
            context.strokeStyle = `rgba(150, 220, 255, ${0.15 * (1 - distance / 120)})`
            context.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            context.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            context.stroke()
          }
        }
      }
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY
        }
        
        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        
        // Mouse interaction
        if (interactive && isMouseInCanvas) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150
          
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            const angle = Math.atan2(dy, dx)
            
            // Push particles away from mouse
            particle.x -= Math.cos(angle) * force * 2
            particle.y -= Math.sin(angle) * force * 2
          } else {
            // Gradually return to original position when not influenced
            particle.x += (particle.originalX - particle.x) * 0.01
            particle.y += (particle.originalY - particle.y) * 0.01
          }
        }
        
        // Draw the particle
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`
        context.fill()
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, mousePosition, isMouseInCanvas, interactive])
  
  // Mouse event handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return
    
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }
  
  const handleMouseEnter = () => {
    setIsMouseInCanvas(true)
  }
  
  const handleMouseLeave = () => {
    setIsMouseInCanvas(false)
  }

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseEnter={interactive ? handleMouseEnter : undefined}
      onMouseLeave={interactive ? handleMouseLeave : undefined}
    />
  )
} 