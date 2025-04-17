'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import VirusWireframe from './3d/VirusWireframe'
import { motion, useInView } from 'framer-motion'

interface VirusWireframeContainerProps {
  title?: string
  description?: string
  height?: string
  width?: string
  wireframeColor?: string
  spikeColor?: string
  interactive?: boolean
  darkMode?: boolean
}

export default function VirusWireframeContainer({
  title = "Virus Wireframe Animation",
  description = "An interactive 3D visualization of viral structure",
  height = "500px",
  width = "100%",
  wireframeColor = "#00aaff",
  spikeColor = "#80dfff",
  interactive = true,
  darkMode = false
}: VirusWireframeContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const [isVisible, setIsVisible] = useState(false)
  
  // Fade in when in view
  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true)
    }
  }, [isInView, isVisible])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className={`relative rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100/30'} backdrop-blur-sm border ${darkMode ? 'border-blue-900/20' : 'border-blue-200/50'}`}
      style={{ 
        width, 
        height,
        boxShadow: darkMode ? '0 0 50px rgba(0, 100, 255, 0.1)' : '0 0 30px rgba(0, 100, 255, 0.1)'
      }}
    >
      {/* Overlay gradients */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cyan-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      {/* Title and description */}
      {(title || description) && (
        <div className="absolute top-0 left-0 z-10 p-6 max-w-md">
          {title && (
            <h3 className={`font-semibold text-xl ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {title}
            </h3>
          )}
          {description && (
            <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>
          )}
        </div>
      )}
      
      {/* Canvas for 3D animation */}
      <Canvas
        className="z-1 relative"
        camera={{ position: [0, 0, 5], fov: 40 }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient light for the scene */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color={wireframeColor} intensity={0.4} />
        
        {/* The wireframe virus model */}
        <VirusWireframe
          position={[0, 0, 0]}
          scale={1.5}
          color={wireframeColor}
          spikeColor={spikeColor}
          rotationSpeed={0.002}
          pulseSpeed={0.3}
        />
        
        {/* Controls for interactive mode */}
        {interactive && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        )}
        
        {/* Environment map for subtle reflections */}
        <Environment preset="city" />
      </Canvas>
      
      {/* Attribution */}
      <div className={`absolute bottom-2 right-3 text-xs ${darkMode ? 'text-white/50' : 'text-gray-600/70'}`}>
        3D Virus Model
      </div>
    </motion.div>
  )
} 