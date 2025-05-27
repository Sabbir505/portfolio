"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Text } from "@react-three/drei";
import * as THREE from "three";

// Technology labels to display
const technologies = [
  "React", "TypeScript", "Next.js", "Three.js", 
  "Node.js", "GraphQL", "Tailwind", "PostgreSQL",
  "MongoDB", "AWS", "Docker", "Git", 
  "Jest", "Cypress", "Figma", "REST API"
];

export function TechSphere() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Position technologies in a sphere pattern
  const radius = 3;
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation animation
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sphere wireframe */}
      <mesh>
        <sphereGeometry args={[radius, 24, 24]} />
        <meshBasicMaterial color="#6366f1" wireframe opacity={0.2} transparent />
      </mesh>
      
      {/* Tech labels */}
      {technologies.map((tech, i) => {
        // Calculate position on sphere using fibonacci sphere distribution
        const phi = Math.acos(-1 + (2 * i) / technologies.length);
        const theta = Math.sqrt(technologies.length * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        return (
          <group key={tech} position={[x, y, z]}>
            <Html
              center
              transform
              distanceFactor={6}
              zIndexRange={[0, 1]}
            >
              <div className="technology-label px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full shadow-md border text-xs font-medium whitespace-nowrap">
                {tech}
              </div>
            </Html>
          </group>
        );
      })}
      
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#4f46e5"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Connecting lines */}
      {technologies.map((tech, i) => {
        const phi = Math.acos(-1 + (2 * i) / technologies.length);
        const theta = Math.sqrt(technologies.length * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        // Create line from center to tech label
        const points = [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(x, y, z),
        ];
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <primitive 
            key={`line-${tech}`} 
            object={new THREE.Line(
              lineGeometry,
              new THREE.LineBasicMaterial({ 
                color: "#6366f1", 
                opacity: 0.4, 
                transparent: true 
              })
            )} 
          />
        );
      })}
    </group>
  );
}
