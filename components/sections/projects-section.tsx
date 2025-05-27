"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ProjectCard } from "@/components/project-card";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, shopping cart, and payment processing using Stripe.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "3D Product Configurator",
    description: "Interactive 3D product configurator that allows users to customize products in real-time with different materials and colors.",
    image: "https://images.pexels.com/photos/7989751/pexels-photo-7989751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Three.js", "React Three Fiber", "TypeScript", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "Feature-rich chat application with real-time messaging, user presence, and file sharing capabilities.",
    image: "https://images.pexels.com/photos/5589930/pexels-photo-5589930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "Redis"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Dashboard & Analytics",
    description: "Comprehensive dashboard with data visualization, analytics, and reporting features for business intelligence.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "GraphQL", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background"
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
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of projects showcasing my skills and experience in web development,
            3D graphics, and full-stack applications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              variants={itemVariants} 
            />
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}