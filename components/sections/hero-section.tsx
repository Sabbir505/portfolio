"use client";

import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ScrollControls, Environment, useScroll } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { FloatingIsland } from "@/components/3d/floating-island";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              <LoadingSpinner />
            </div>
          }
        >
          <Canvas
            camera={{ position: [0, 2, 10], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true }}
          >
            <ScrollControls pages={1} damping={0.25}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Suspense fallback={null}>
                <FloatingIsland position={[0, -1, 0]} scale={1} />
                <Environment preset="city" />
              </Suspense>
            </ScrollControls>
          </Canvas>
        </Suspense>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 mt-16"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Full-Stack Developer</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                & 3D Enthusiast
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent md:text-xl">
              Building beautiful, interactive, and performant web experiences
              with cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <a
              href="#about"
              className="flex flex-col items-center justify-center text-sm text-muted-foreground hover:text-foreground"
            >
              <span className="mb-2">Scroll Down</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}