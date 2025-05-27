"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code, Database, Globe, Laptop, Layout, 
  PenTool, Server, Settings, ShieldCheck, Smartphone 
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { TechSphere } from "@/components/3d/tech-sphere";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma ORM"],
  },
  {
    title: "3D & Graphics",
    icon: <PenTool className="h-6 w-6" />,
    skills: ["Three.js", "React Three Fiber", "WebGL", "GLSL", "Blender"],
  },
  {
    title: "DevOps",
    icon: <Settings className="h-6 w-6" />,
    skills: ["Docker", "CI/CD", "AWS", "Vercel", "GitHub Actions"],
  },
  {
    title: "Other",
    icon: <Code className="h-6 w-6" />,
    skills: ["Git", "Testing (Jest, Cypress)", "Agile", "Figma", "Performance Optimization"],
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive collection of technologies and tools I use to bring ideas to life.
          </motion.p>
        </motion.div>

        {/* 3D Tech Sphere */}
        <motion.div
          variants={itemVariants}
          className="h-[300px] md:h-[400px] mb-16 overflow-hidden rounded-xl"
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />
            <OrbitControls 
              enableZoom={false}
              autoRotate
              autoRotateSpeed={1}
              enablePan={false}
              minPolarAngle={Math.PI / 2 - 0.5}
              maxPolarAngle={Math.PI / 2 + 0.5}
            />
            <TechSphere />
          </Canvas>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-xl">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}