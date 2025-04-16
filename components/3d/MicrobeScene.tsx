import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import Virus from './Virus'
import Bacteria from './Bacteria'
import { useInView } from 'framer-motion'
import * as THREE from 'three'

interface MicrobeSceneProps {
  interactive?: boolean
  autoRotate?: boolean
  showControls?: boolean
  density?: number // Controls how many microbes to display
  cleaningEffect?: boolean
  style?: React.CSSProperties
}

interface MicrobeType {
  type: 'virus' | 'bacteria'
  color: string
  name: string
  bacteriaType?: 'rod' | 'cocci' | 'spiral'
  scale: number
}

interface Microbe {
  id: number
  type: 'virus' | 'bacteria'
  color: string
  name: string
  bacteriaType?: 'rod' | 'cocci' | 'spiral'
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  dying: boolean
  deathDelay: number
  speed: number
}

interface ParticleType {
  position: [number, number, number]
  scale: number
  speed: number
}

const MICROBE_TYPES: MicrobeType[] = [
  { 
    type: 'virus', 
    color: '#ff5555', 
    name: 'Coronavirus',
    scale: 1.2
  },
  { 
    type: 'virus', 
    color: '#ff9955', 
    name: 'Rhinovirus',
    scale: 0.8
  },
  { 
    type: 'virus', 
    color: '#ffcc00', 
    name: 'Influenza',
    scale: 1.0
  },
  { 
    type: 'bacteria', 
    color: '#55aa55', 
    name: 'E. coli',
    bacteriaType: 'rod',
    scale: 0.9
  },
  { 
    type: 'bacteria', 
    color: '#55aaff', 
    name: 'Streptococcus',
    bacteriaType: 'cocci',
    scale: 0.7
  },
  { 
    type: 'bacteria', 
    color: '#aa55aa', 
    name: 'Spirochete',
    bacteriaType: 'spiral',
    scale: 1.1
  }
]

interface MicrobesGroupProps {
  density: number
  cleaningEffect: boolean
  autoRotate: boolean
}

const MicrobesGroup = ({ 
  density = 15, 
  cleaningEffect = false,
  autoRotate = false
}: MicrobesGroupProps) => {
  const [microbes, setMicrobes] = useState<Microbe[]>([])
  const groupRef = useRef<THREE.Group>(null)

  // Generate initial positions for microbes
  useEffect(() => {
    const initialMicrobes: Microbe[] = []
    for (let i = 0; i < density; i++) {
      const microbeType = MICROBE_TYPES[Math.floor(Math.random() * MICROBE_TYPES.length)]
      
      initialMicrobes.push({
        id: i,
        type: microbeType.type,
        color: microbeType.color,
        name: microbeType.name,
        bacteriaType: microbeType.bacteriaType,
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ],
        rotation: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        ],
        scale: microbeType.scale * (Math.random() * 0.4 + 0.8),
        dying: false,
        deathDelay: Math.random() * 5, // Random delay for death animation
        speed: Math.random() * 0.005 + 0.001
      })
    }
    setMicrobes(initialMicrobes)
  }, [density])

  // Apply cleaning effect
  useEffect(() => {
    if (cleaningEffect && microbes.length > 0) {
      const deathTimers = microbes.map((microbe) => {
        return setTimeout(() => {
          setMicrobes(prevMicrobes => 
            prevMicrobes.map(m => 
              m.id === microbe.id ? { ...m, dying: true } : m
            )
          )
        }, microbe.deathDelay * 1000)
      })
      
      return () => {
        deathTimers.forEach(timer => clearTimeout(timer))
      }
    }
  }, [cleaningEffect, microbes])

  return (
    <group ref={groupRef}>
      {microbes.map((microbe) => (
        microbe.type === 'virus' ? (
          <Virus 
            key={microbe.id}
            position={microbe.position}
            rotation={microbe.rotation}
            scale={microbe.scale}
            color={microbe.color}
            dying={microbe.dying}
            speed={microbe.speed}
          />
        ) : (
          <Bacteria 
            key={microbe.id}
            position={microbe.position}
            rotation={microbe.rotation}
            scale={microbe.scale}
            color={microbe.color}
            type={microbe.bacteriaType}
            dying={microbe.dying}
            speed={microbe.speed}
          />
        )
      ))}
    </group>
  )
}

interface CleaningSprayProps {
  active: boolean
}

// Cleaning spray particle effect
const CleaningSpray = ({ active }: CleaningSprayProps) => {
  const particles = useRef<ParticleType[]>([])
  
  // Generate particles
  useEffect(() => {
    if (active) {
      particles.current = Array.from({ length: 50 }, () => ({
        position: [
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5 + 5, // Start from top
          (Math.random() - 0.5) * 5
        ],
        scale: Math.random() * 0.2 + 0.05,
        speed: Math.random() * 0.1 + 0.05
      }))
    }
  }, [active])
  
  if (!active) return null
  
  return (
    <group>
      {particles.current.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshStandardMaterial 
            color="#80e0ff" 
            transparent={true} 
            opacity={0.6}
            emissive="#80e0ff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function MicrobeScene({ 
  interactive = false,
  autoRotate = true,
  showControls = true,
  density = 15,
  cleaningEffect = false,
  style = {}
}: MicrobeSceneProps) {
  const ref = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  
  // Start cleaning animation when in view
  useEffect(() => {
    if (isInView && cleaningEffect && !isAnimating) {
      setIsAnimating(true)
    }
  }, [isInView, cleaningEffect, isAnimating])

  return (
    <div 
      ref={ref} 
      style={{ 
        width: '100%', 
        height: '100%', 
        background: 'linear-gradient(to bottom, #111111, #000000)',
        ...style
      }}
    >
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.0} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={1}
          intensity={1.5}
          castShadow
        />
        
        {/* Background environment */}
        <Environment preset="night" />
        
        {/* Microbes */}
        <MicrobesGroup 
          density={density} 
          cleaningEffect={isAnimating && cleaningEffect} 
          autoRotate={autoRotate}
        />
        
        {/* Cleaning spray effect */}
        <CleaningSpray active={isAnimating && cleaningEffect} />
        
        {/* Controls */}
        {showControls && (
          <OrbitControls 
            enableZoom={interactive} 
            enablePan={interactive}
            enableRotate={interactive || autoRotate}
            autoRotate={autoRotate && !interactive}
            autoRotateSpeed={0.5}
          />
        )}
        
        {/* Shadow below for grounding */}
        <ContactShadows
          position={[0, -5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.5}
          far={5}
        />
      </Canvas>
    </div>
  )
} 