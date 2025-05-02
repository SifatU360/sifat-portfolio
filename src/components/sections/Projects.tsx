/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/config/projects";
import LoadingScreen from ".././loading";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { GithubIcon, ServerIcon } from "@/components/icons";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
interface ProjectsProps {
  standalone?: boolean;
  filteredProjects?: typeof projects;
}
export default function Projects({ standalone = false, filteredProjects = projects }: ProjectsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const displayedProjects = standalone ? filteredProjects : filteredProjects.slice(0, 3);

  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, projectId: string) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push(`/projects/${projectId}`);
    }, 1000);
  };

  return (
    <>
      {/* {isLoading && <LoadingScreen />} */}
      <section id="projects" className={`${standalone ? '' : 'py-24'} relative overflow-hidden`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4"
        >
          {/* Only show header when not in standalone mode */}
          {!standalone && (
            <>
              <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                A collection of projects that showcase my expertise in full-stack development
              </p>
            </>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={`/projects/${project.id}`}
                  onClick={(e) => handleProjectClick(e, project.id)}
                >
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
                      <div className="absolute top-2 right-2">
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "border text-sm",
                            {
                              'bg-blue-500/10 text-blue-400 border-blue-500/20': project.category === 'fullstack',
                              'bg-green-500/10 text-green-400 border-green-500/20': project.category === 'frontend',
                              'bg-purple-500/10 text-purple-400 border-purple-500/20': project.category === 'backend',
                            }
                          )}
                        >
                          {project.category === 'fullstack' 
                            ? 'Full Stack' 
                            : project.category === 'frontend' 
                              ? 'Frontend'
                              : 'Backend'}
                        </Badge>
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
                      <div className="flex items-center space-x-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                              >
                                <GithubIcon className="w-5 h-5" />
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{project.serverUrl ? "View Frontend Code" : "View Code"}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        {project.serverUrl && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <a
                                  href={project.serverUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                  <ServerIcon className="w-5 h-5" />
                                </a>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View Backend Code</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
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