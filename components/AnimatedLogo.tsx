'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Component for the water droplet logo in 3D
const WaterDroplet = ({ position = [0, 0, 0], scale = 1, color = '#007BFF' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(scale * 1.2, scale * 1.2, scale * 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
      }
    }
  });

  return (
    <group position={[position[0], position[1], position[2]]}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={scale}
      >
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.5, 0]} scale={[0.8 * scale, 1.2 * scale, 0.8 * scale]}>
        <coneGeometry args={[0.7, 1.5, 32]} />
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} />
      </mesh>
    </group>
  );
};

// Background element with wave effect
const WavyBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current && meshRef.current.material) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      const time = clock.getElapsedTime();
      if (material.uniforms) {
        material.uniforms.uTime.value = time;
      }
    }
  });

  // Custom shader for wavy effect
  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    
    void main() {
      vec2 uv = vUv;
      float wave1 = sin(uv.x * 10.0 + uTime) * 0.05;
      float wave2 = sin(uv.y * 8.0 + uTime * 0.8) * 0.05;
      
      vec3 color1 = vec3(0.0, 0.48, 1.0); // Primary blue
      vec3 color2 = vec3(0.0, 0.68, 0.94); // Lighter blue
      
      float mix1 = sin(uTime * 0.5) * 0.5 + 0.5;
      float mix2 = cos(uv.x * 5.0 + uTime) * 0.5 + 0.5;
      
      vec3 finalColor = mix(color1, color2, mix1 * mix2 + wave1 + wave2);
      
      gl_FragColor = vec4(finalColor, 0.7);
    }
  `;

  const vertexShader = `
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          uTime: { value: 0 }
        }}
        transparent={true}
      />
    </mesh>
  );
};

// Main 3D scene for the logo
const LogoScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <WavyBackground />
      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <WaterDroplet position={[0, 0, 0]} />
      </Float>
    </>
  );
};

// The main logo component to be exported
const AnimatedLogo = ({ size = 50 }) => {
  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ 
          background: 'transparent',
          borderRadius: '50%',
          width: '100%',
          height: '100%'
        }}
      >
        <LogoScene />
      </Canvas>
    </div>
  );
};

export default AnimatedLogo; 