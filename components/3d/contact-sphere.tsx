"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ContactSphere() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Planet-like sphere with particles */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial 
          color="#2563eb" 
          roughness={0.7}
          metalness={0.3}
          emissive="#1d4ed8"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Connection points */}
      {Array.from({ length: 15 }).map((_, i) => {
        // Create random positions on the sphere
        const phi = Math.acos(-1 + (2 * i) / 15);
        const theta = Math.sqrt(15 * Math.PI) * phi;
        
        const x = 2.2 * Math.cos(theta) * Math.sin(phi);
        const y = 2.2 * Math.sin(theta) * Math.sin(phi);
        const z = 2.2 * Math.cos(phi);
        
        return (
          <group key={i} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial 
                color="#60a5fa" 
                emissive="#3b82f6"
                emissiveIntensity={0.6}
              />
            </mesh>
            
            {/* Create pulsing effect */}
            <pointLight 
              position={[0, 0, 0]} 
              intensity={0.5} 
              distance={0.5} 
              color="#60a5fa" 
            />
          </group>
        );
      })}
      
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.04, 16, 100]} />
        <meshStandardMaterial 
          color="#60a5fa" 
          transparent 
          opacity={0.4}
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshStandardMaterial 
          color="#93c5fd" 
          transparent 
          opacity={0.3}
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Small orbiting objects */}
      <group rotation-y={useFrame((state) => state.clock.elapsedTime * 0.5)}>
        <mesh position={[3, 0, 0]}>
          <dodecahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial 
            color="#60a5fa" 
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      </group>
      
      <group rotation-y={useFrame((state) => -state.clock.elapsedTime * 0.3)}>
        <mesh position={[-3.2, 1, 0]}>
          <icosahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial 
            color="#93c5fd" 
            roughness={0.4}
            metalness={0.6}
          />
        </mesh>
      </group>
    </group>
  );
}
