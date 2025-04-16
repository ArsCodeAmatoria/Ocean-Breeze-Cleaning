import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

interface VirusProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  color?: string
  speed?: number
  spikes?: number
  dying?: boolean
}

export default function Virus({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  color = '#ff0000',
  speed = 0.005,
  spikes = 20,
  dying = false,
}: VirusProps) {
  const virusRef = useRef<THREE.Group>(null)
  const spikesRef = useRef<THREE.InstancedMesh>(null)
  const dyingAnimationRef = useRef({
    progress: 0,
    active: dying,
  })

  // Generate random positions for spikes
  const spikePositions = Array.from({ length: spikes }, () => {
    // Generate random points on a sphere
    const u = Math.random()
    const v = Math.random()
    const theta = 2 * Math.PI * u
    const phi = Math.acos(2 * v - 1)
    const radius = 1

    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)

    return [x, y, z]
  })

  // Animation
  useFrame((state, delta) => {
    if (virusRef.current) {
      virusRef.current.rotation.x += speed
      virusRef.current.rotation.y += speed * 1.3
    }

    // Dying animation
    if (dying && spikesRef.current && dyingAnimationRef.current.active) {
      dyingAnimationRef.current.progress += delta * 0.2 // Speed of dying animation
      
      // Update each spike
      const dummy = new THREE.Object3D()
      for (let i = 0; i < spikes; i++) {
        const [x, y, z] = spikePositions[i]
        
        // Get radial direction
        const direction = new THREE.Vector3(x, y, z).normalize()
        
        // Calculate new position with outward movement
        const progress = dyingAnimationRef.current.progress
        const outwardDistance = Math.min(progress * 2, 1.5) // Max distance to move outward
        
        dummy.position.set(
          x + direction.x * outwardDistance,
          y + direction.y * outwardDistance,
          z + direction.z * outwardDistance
        )
        
        // Shrink the spikes as they move outward
        const scaleDown = Math.max(1 - progress * 0.8, 0.2)
        dummy.scale.set(scaleDown, scaleDown, scaleDown)
        
        dummy.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        )
        
        dummy.updateMatrix()
        spikesRef.current.setMatrixAt(i, dummy.matrix)
      }
      
      spikesRef.current.instanceMatrix.needsUpdate = true
      
      // Stop the animation when it's complete
      if (dyingAnimationRef.current.progress > 2) {
        dyingAnimationRef.current.active = false
      }
    }
  })

  return (
    <group ref={virusRef} position={position} rotation={rotation} scale={scale}>
      {/* Main virus body */}
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.7} 
          metalness={0.2} 
          transparent={true}
          opacity={dying ? 0.5 : 0.7}
        />
      </Sphere>
      
      {/* Spikes */}
      <instancedMesh 
        ref={spikesRef} 
        args={[undefined, undefined, spikes]}
      >
        <coneGeometry args={[0.2, 0.5, 8]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.6} 
          metalness={0.3}
          transparent={true}
          opacity={dying ? 0.6 : 0.8}
        />
      </instancedMesh>
    </group>
  )
} 