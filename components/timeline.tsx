"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface TimelineProps {
  experiences: Experience[];
  isInView: boolean;
}

export function Timeline({ experiences, isInView }: TimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative max-w-4xl mx-auto"
    >
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 h-full w-px bg-border -translate-x-1/2 md:translate-x-0" />

      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          variants={itemVariants}
          className={cn(
            "relative mb-12 md:mb-24 md:grid md:grid-cols-2 md:gap-8",
            index % 2 === 0 ? "md:grid-flow-row" : "md:grid-flow-row-dense"
          )}
        >
          {/* Timeline dot */}
          <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 md:translate-x-0" style={{ top: "24px" }} />

          <div
            className={cn(
              "mb-8 md:mb-0",
              index % 2 === 1 ? "md:col-start-1" : ""
            )}
          >
            <div className="ml-8 md:ml-0">
              <h3 className="text-xl font-bold mb-1">{experience.role}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-medium">{experience.company}</span>
                <span className="text-sm text-muted-foreground">• {experience.period}</span>
              </div>
              <p className="text-muted-foreground mb-4">
                {experience.description}
              </p>
              <ul className="space-y-2 mb-4">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="rounded-full">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "hidden md:block md:h-24",
              index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
            )}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}