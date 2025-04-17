'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

interface VirusWireframeProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  color?: string
  spikeColor?: string
  rotationSpeed?: number
  pulseSpeed?: number
  spikes?: number
}

export default function VirusWireframe({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  color = '#00aaff',
  spikeColor = '#80dfff',
  rotationSpeed = 0.003,
  pulseSpeed = 0.4,
  spikes = 24,
}: VirusWireframeProps) {
  const virusRef = useRef<THREE.Group>(null)
  const spikesRef = useRef<THREE.InstancedMesh>(null)
  const clockRef = useRef<number>(0)

  // Generate random positions for spikes
  const spikePositions = React.useMemo(() => {
    return Array.from({ length: spikes }, () => {
      // Generate random points on a sphere using Fibonacci spiral for even distribution
      const phi = Math.acos(-1 + (2 * Math.random()) / spikes)
      const theta = Math.sqrt(spikes * Math.PI) * phi
      
      const x = Math.sin(phi) * Math.cos(theta)
      const y = Math.sin(phi) * Math.sin(theta)
      const z = Math.cos(phi)

      // Random length for variety
      const length = 0.7 + Math.random() * 0.3

      return {
        position: [x, y, z],
        length,
        phase: Math.random() * Math.PI * 2 // Random phase for pulse animation
      }
    })
  }, [spikes])

  // Animation
  useFrame((state, delta) => {
    clockRef.current += delta

    if (virusRef.current) {
      // Gentle rotation
      virusRef.current.rotation.x += rotationSpeed
      virusRef.current.rotation.y += rotationSpeed * 1.3
      virusRef.current.rotation.z += rotationSpeed * 0.7
    }

    // Animate spikes - pulsing movement
    if (spikesRef.current) {
      const time = clockRef.current * pulseSpeed
      const dummy = new THREE.Object3D()
      
      for (let i = 0; i < spikes; i++) {
        const { position, length, phase } = spikePositions[i]
        const [baseX, baseY, baseZ] = position
        
        // Calculate pulsing movement - spikes extend and retract
        const pulseAmount = Math.sin(time + phase) * 0.2 + 1
        const spikeLength = length * pulseAmount

        // Get normalized direction
        const direction = new THREE.Vector3(baseX, baseY, baseZ).normalize()
        
        // Set position - half the spike extends outward, half inward
        dummy.position.set(
          baseX * 1.15, // Position on the surface
          baseY * 1.15,
          baseZ * 1.15
        )
        
        // Point the spike outward
        dummy.lookAt(direction.multiplyScalar(10))
        
        // Set scale - x,y is thin, z is the length
        dummy.scale.set(0.05, 0.05, spikeLength)
        
        // Update the matrix
        dummy.updateMatrix()
        spikesRef.current.setMatrixAt(i, dummy.matrix)
      }
      
      spikesRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <group ref={virusRef} position={position} rotation={rotation} scale={scale}>
      {/* Main virus body - wireframe */}
      <Icosahedron args={[1, 1]}>
        <meshBasicMaterial 
          color={color} 
          wireframe={true}
          transparent={true}
          opacity={0.8}
        />
      </Icosahedron>
      
      {/* Inner glow sphere */}
      <Icosahedron args={[0.9, 1]}>
        <meshBasicMaterial 
          color={color} 
          transparent={true}
          opacity={0.1}
        />
      </Icosahedron>
      
      {/* Spikes */}
      <instancedMesh 
        ref={spikesRef} 
        args={[undefined, undefined, spikes]}
      >
        <cylinderGeometry args={[0.05, 0.01, 1, 6]} />
        <meshBasicMaterial 
          color={spikeColor} 
          transparent={true}
          opacity={0.7}
        />
      </instancedMesh>
    </group>
  )
} 