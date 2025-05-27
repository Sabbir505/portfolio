"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { SimplifiedIslandModel } from "./simplified-island-model";

interface FloatingIslandProps {
  position?: [number, number, number];
  scale?: number;
}

export function FloatingIsland({
  position = [0, 0, 0],
  scale = 1,
}: FloatingIslandProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);

  // Float animation
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Gentle floating motion
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    
    // Subtle rotation
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    
    // Hover effect
    if (hover) {
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      scale={scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <SimplifiedIslandModel />
    </group>
  );
}