"use client";

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "SwapNest",
      description: "SwapNest is a modern web platform designed to simplify the exchange of second-hand goods. It connects users in a secure and user-friendly environment, making it easy to buy and sell.",
      technologies: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS", "Shadcn UI"],
      demoUrl: "https://swap-nest-client-two.vercel.app/",
      githubUrl: "https://github.com/username/repo"
    },
    {
      title: "Papyrus",
      description: "Papyrus is an e-commerce platform for stationery products. It allows users to browse a wide range of stationery items, add them to cart, and make secure payments. Users can manage their profiles and view order history, while admins can manage products, orders, and users. Papyrus aims to provide a smooth and efficient online stationery shopping experience.",
      technologies: ["React","Redux", "TypeScript","Express.js", "MongoDB", "Tailwind CSS", "Shadcn UI"],
      demoUrl: "https://papyrus-client.vercel.app/",
      githubUrl: "https://github.com/username/repo"
    },
    {
      title: "Infinia",
      description: "Infinia is an AI-powered assistant that helps users with various tasks through natural language interactions. Built with React and Vite, it provides a modern, responsive interface for seamless AI communication. Users can ask questions, get recommendations, and receive personalized assistance in real-time. Infinia aims to enhance productivity and simplify daily tasks through intelligent automation.",
      technologies: ["React","Redux", "TypeScript","Express.js", "MongoDB", "Tailwind CSS", "Shadcn UI"],
      demoUrl: "https://papyrus-client.vercel.app/",
      githubUrl: "https://github.com/username/repo"
    },
    {
      title: "Blog Server",
      description: "The goal of this project is to develop a backend for a  blogging  platform where users can write, update, and delete their blogs. The system has 2 roles: Admin and User. The Admin has special permissions to manage users and their blogs, while users can perform CRUD operations on their own blogs.The backend includes secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.",
      technologies: ["TypeScript","Express.js", "MongoDB", "Mongoose", ],
      demoUrl: "https://papyrus-client.vercel.app/",
      githubUrl: "https://github.com/SifatU360/Blog-Project.git"
    },
    {
      title: "Book Store Server",
      description: "A Book Shop Management application built with TypeScript, Express, and MongoDB, offering efficient management of books and orders. Features include CRUD operations, inventory tracking, and revenue calculations.",
      technologies: ["TypeScript","Express.js", "MongoDB", "Mongoose", ],
      demoUrl: "https://papyrus-client.vercel.app/",
      githubUrl: "https://github.com/username/repo"
    },
    // Add more projects
  ]
  return (
    <section id="projects" className="py-24">
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full flex flex-col hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}