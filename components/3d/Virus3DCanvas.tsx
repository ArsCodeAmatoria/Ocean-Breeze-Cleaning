'use client'

import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  OrbitControls, 
  Environment, 
  Stars, 
  useTexture, 
  MeshDistortMaterial,
  Sphere,
  GradientTexture,
  AdaptiveDpr
} from '@react-three/drei'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import VirusWireframe from './VirusWireframe'
import * as THREE from 'three'

interface GlowingParticlesProps {
  count?: number;
}

// Glowing particles in the background
const GlowingParticles: React.FC<GlowingParticlesProps> = ({ count = 30 }) => {
  const ref = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.075
    }
  })
  
  const particles = Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 0.2 + 0.05
    return (
      <mesh 
        key={i} 
        position={[
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        ]}
      >
        <sphereGeometry args={[size, 10, 10]} />
        <meshBasicMaterial 
          color={new THREE.Color().setHSL(Math.random() * 0.1 + 0.5, 0.8, 0.5)} 
          transparent 
          opacity={0.6} 
        />
      </mesh>
    )
  })
  
  return <group ref={ref}>{particles}</group>
}

// Atmospheric background
const Background: React.FC = () => {
  return (
    <mesh position={[0, 0, -10]} scale={[30, 30, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial>
        <GradientTexture 
          stops={[0, 0.3, 0.8, 1]} 
          colors={['#000620', '#00134d', '#003377', '#0055aa']} 
          size={1024} 
        />
      </meshBasicMaterial>
    </mesh>
  )
}

// Energy field surrounding the virus
const EnergyField: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.getElapsedTime() * 0.1
      ref.current.scale.x = 4.5 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
      ref.current.scale.y = 4.5 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
      ref.current.scale.z = 4.5 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })
  
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color="#5599ff"
        transparent
        opacity={0.1}
        distort={0.4}
        speed={4}
        wireframe
      />
    </mesh>
  )
}

const Virus3DCanvas: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 15], fov: 40 }} 
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Better lighting */}
          <ambientLight intensity={0.3} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={1.5} 
            castShadow 
            color="#80d8ff" 
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5599ff" />
          <pointLight position={[0, 5, 5]} intensity={0.8} color="#ffffff" />
          
          {/* Background elements */}
          <Background />
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          <GlowingParticles count={20} />
          
          {/* Energy field */}
          <EnergyField />
          
          {/* Main virus */}
          <VirusWireframe 
            color="#80d8ff"
            spikeColor="#ffffff"
            rotationSpeed={0.001}
            pulseSpeed={0.2}
            spikes={48}
            scale={3.5}
          />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
          
          {/* Post-processing effects */}
          <EffectComposer>
            <Bloom 
              luminanceThreshold={0.2} 
              luminanceSmoothing={0.9} 
              height={300} 
              intensity={1.5}
            />
            <Noise opacity={0.05} />
          </EffectComposer>
          
          <AdaptiveDpr pixelated />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Virus3DCanvas 