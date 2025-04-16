import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cylinder, Sphere } from '@react-three/drei'
import * as THREE from 'three'

interface BacteriaProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  color?: string
  speed?: number
  type?: 'rod' | 'cocci' | 'spiral'
  dying?: boolean
}

export default function Bacteria({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  color = '#00ff00',
  speed = 0.003,
  type = 'rod',
  dying = false,
}: BacteriaProps) {
  const bacteriaRef = useRef<THREE.Group>(null)
  const dyingRef = useRef({
    progress: 0,
    active: dying,
  })

  // Animation
  useFrame((state, delta) => {
    if (bacteriaRef.current) {
      bacteriaRef.current.rotation.y += speed
      
      // More dynamic movement for bacteria
      bacteriaRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1
    }

    // Dying animation
    if (dying && bacteriaRef.current && dyingRef.current.active) {
      dyingRef.current.progress += delta * 0.3
      
      // Shrink when dying
      const scaleValue = Math.max(1 - dyingRef.current.progress, 0.1)
      bacteriaRef.current.scale.set(scaleValue * scale, scaleValue * scale, scaleValue * scale)
      
      // Stop the animation when complete
      if (dyingRef.current.progress > 1) {
        dyingRef.current.active = false
      }
    }
  })

  // Random small bumps on bacteria surface
  const randomBumps = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => {
      const u = Math.random()
      const v = Math.random()
      const theta = 2 * Math.PI * u
      const phi = Math.acos(2 * v - 1)
      
      let radius, x, y, z
      
      if (type === 'rod') {
        // Distribute along the rod
        radius = 0.8
        x = radius * Math.sin(phi) * Math.cos(theta)
        y = (Math.random() * 2 - 1) * 1.2
        z = radius * Math.sin(phi) * Math.sin(theta)
      } else if (type === 'cocci') {
        // Distribute on sphere
        radius = 0.8
        x = radius * Math.sin(phi) * Math.cos(theta)
        y = radius * Math.cos(phi)
        z = radius * Math.sin(phi) * Math.sin(theta)
      } else {
        // Spiral type
        const t = Math.random() * 4 * Math.PI
        radius = 0.2
        x = Math.cos(t) * 0.7
        y = Math.sin(t) * 0.7
        z = t * 0.2 - 2
      }
      
      return {
        position: [x, y, z],
        scale: Math.random() * 0.15 + 0.1,
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
      }
    })
  }, [type])

  // Renders different bacteria shapes based on type
  const renderBacteriaShape = () => {
    switch (type) {
      case 'rod':
        return (
          <Cylinder args={[0.5, 0.5, 3, 16, 1]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color={color} 
              roughness={0.8} 
              metalness={0.1}
              transparent={true}
              opacity={dying ? 0.3 : 0.7}
            />
          </Cylinder>
        )
      case 'cocci':
        return (
          <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color={color} 
              roughness={0.8} 
              metalness={0.1}
              transparent={true}
              opacity={dying ? 0.3 : 0.7}
            />
          </Sphere>
        )
      case 'spiral':
        // Create a spiral shape using multiple spheres
        return (
          <group>
            {Array.from({ length: 20 }).map((_, i) => {
              const t = i * 0.3
              const x = Math.cos(t) * 0.7
              const y = Math.sin(t) * 0.7
              const z = t * 0.2 - 2
              return (
                <Sphere key={i} args={[0.25, 16, 16]} position={[x, y, z]}>
                  <meshStandardMaterial 
                    color={color} 
                    roughness={0.8} 
                    metalness={0.1}
                    transparent={true}
                    opacity={dying ? 0.3 : 0.7}
                  />
                </Sphere>
              )
            })}
          </group>
        )
      default:
        return null
    }
  }

  return (
    <group 
      ref={bacteriaRef} 
      position={position} 
      rotation={rotation} 
      scale={scale}
    >
      {renderBacteriaShape()}
      
      {/* Small bumps for texture */}
      {randomBumps.map((bump, index) => (
        <Sphere 
          key={index} 
          args={[bump.scale, 8, 8]} 
          position={bump.position as [number, number, number]}
          rotation={bump.rotation as [number, number, number]}
        >
          <meshStandardMaterial 
            color={color} 
            roughness={0.9}
            transparent={true}
            opacity={dying ? 0.2 : 0.8}
          />
        </Sphere>
      ))}
    </group>
  )
} 