"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/timeline";

// Sample experience data
const experiences = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading development of enterprise web applications using Next.js, TypeScript, and GraphQL. Implemented 3D visualization features and optimized performance.",
    achievements: [
      "Reduced load times by 60% through code splitting and lazy loading",
      "Implemented CI/CD pipeline improving deployment efficiency by 40%",
      "Led team of 5 developers delivering 3 major projects ahead of schedule"
    ],
    technologies: ["Next.js", "TypeScript", "GraphQL", "Three.js", "AWS"],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2022",
    description: "Developed and maintained scalable web applications for e-commerce clients. Created RESTful APIs and integrated payment gateways.",
    achievements: [
      "Built real-time inventory tracking system used by 50+ stores",
      "Designed and implemented custom CMS reducing content update time by 75%",
      "Integrated multiple third-party APIs improving business workflow efficiency"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Docker"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2017 - 2019",
    description: "Designed and developed responsive websites and interactive web applications for various clients. Focused on pixel-perfect designs and smooth animations.",
    achievements: [
      "Created award-winning website resulting in 45% increase in client engagement",
      "Introduced animation system improving user experience metrics by 30%",
      "Developed 15+ client websites with perfect Lighthouse performance scores"
    ],
    technologies: ["JavaScript", "React", "CSS/SASS", "Webpack", "Figma"],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            My professional journey in software development, showcasing roles
            and achievements throughout my career.
          </motion.p>
        </motion.div>

        <Timeline experiences={experiences} isInView={isInView} />
      </div>
    </section>
  );
}