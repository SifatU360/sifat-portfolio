/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/config/projects";
import LoadingScreen from ".././loading";
import { useState } from "react";

interface ProjectsProps {
  standalone?: boolean;
  filteredProjects?: typeof projects;
}
export default function Projects({ standalone = false, filteredProjects = projects }: ProjectsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const displayedProjects = standalone ? filteredProjects : filteredProjects.slice(0, 3);
  return (
    <>
      {isLoading && <LoadingScreen />}
      <section id="projects" className={`${standalone ? '' : 'py-24'} relative overflow-hidden`}>
        {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in full-stack development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.id}`}>
                  <Card className="group h-full flex flex-col hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader className="relative">
                      <div className="absolute -top-4 -right-4 bg-blue-500/20 backdrop-blur-md border border-blue-500/20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <p className="text-gray-300 mb-6 line-clamp-4 hover:line-clamp-none transition-all duration-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    
    </>
  );
}