"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image/Avatar side */}
          <motion.div 
            variants={itemVariants}
            className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden border-4 border-muted"
          >
            <Image
              src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Developer portrait"
              fill
              className="object-cover"
            />
            
            {/* Floating badges */}
            <div className="absolute -right-5 top-10 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-12">
              Full-Stack
            </div>
            <div className="absolute left-5 -bottom-3 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg transform -rotate-6">
              3D Enthusiast
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight mb-6"
            >
              About Me
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                Hello! I'm a passionate full-stack developer with expertise in building
                modern web applications using cutting-edge technologies. My journey in
                software development began 5 years ago, and I've been obsessed with
                creating beautiful, performant web experiences ever since.
              </p>
              <p>
                I specialize in React, Next.js, Three.js, and modern backend technologies.
                My approach combines technical excellence with creative problem-solving
                to deliver solutions that not only work flawlessly but also provide
                exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or creating 3D visualizations
                and interactive experiences.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <Button className="group" variant="outline" size="lg">
                <FileText className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}