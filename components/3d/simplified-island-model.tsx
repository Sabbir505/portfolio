"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function SimplifiedIslandModel() {
  // Since we don't have a real GLTF model, let's create a simplified island
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Small hover effect
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Island base */}
      <mesh position={[0, -0.5, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[3, 3.5, 1, 32, 1]} />
        <meshStandardMaterial color="#6b7280" roughness={0.8} />
      </mesh>

      {/* Island top */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[3, 3, 0.3, 32, 1]} />
        <meshStandardMaterial color="#16a34a" roughness={0.7} />
      </mesh>

      {/* Workspace elements */}
      {/* Desk */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#713f12" roughness={0.6} />
      </mesh>

      {/* Monitor */}
      <mesh position={[0, 0.6, -0.2]} castShadow>
        <boxGeometry args={[1, 0.7, 0.1]} />
        <meshStandardMaterial color="#1e293b" roughness={0.2} />
      </mesh>

      {/* Monitor Stand */}
      <mesh position={[0, 0.3, -0.2]} castShadow>
        <boxGeometry args={[0.1, 0.2, 0.1]} />
        <meshStandardMaterial color="#475569" roughness={0.5} />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, 0.25, 0.2]} castShadow>
        <boxGeometry args={[0.8, 0.05, 0.3]} />
        <meshStandardMaterial color="#334155" roughness={0.5} />
      </mesh>

      {/* Office Chair */}
      <mesh position={[0, 0.4, 1]} castShadow>
        <boxGeometry args={[0.6, 0.1, 0.6]} />
        <meshStandardMaterial color="#0f172a" roughness={0.7} />
      </mesh>

      {/* Chair Back */}
      <mesh position={[0, 0.8, 0.7]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.1]} />
        <meshStandardMaterial color="#0f172a" roughness={0.7} />
      </mesh>

      {/* Trees */}
      <group position={[2, 0.2, -1]}>
        <mesh position={[0, 0.6, 0]} castShadow>
          <coneGeometry args={[0.4, 1, 8]} />
          <meshStandardMaterial color="#15803d" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.4, 8]} />
          <meshStandardMaterial color="#7c2d12" roughness={0.8} />
        </mesh>
      </group>
      
      <group position={[-2, 0.2, 1]}>
        <mesh position={[0, 0.6, 0]} castShadow>
          <coneGeometry args={[0.4, 1, 8]} />
          <meshStandardMaterial color="#15803d" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.4, 8]} />
          <meshStandardMaterial color="#7c2d12" roughness={0.8} />
        </mesh>
      </group>
      
      {/* Add some clouds */}
      <group position={[3, 2, -2]}>
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="white" roughness={0.9} />
        </mesh>
        <mesh position={[0.4, 0.1, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="white" roughness={0.9} />
        </mesh>
        <mesh position={[-0.4, 0, 0.1]}>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshStandardMaterial color="white" roughness={0.9} />
        </mesh>
      </group>
      
      <group position={[-2.5, 2.5, -1]}>
        <mesh>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="white" roughness={0.9} />
        </mesh>
        <mesh position={[0.3, 0.1, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="white" roughness={0.9} />
        </mesh>
        <mesh position={[-0.3, 0, 0.1]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="white" roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
}