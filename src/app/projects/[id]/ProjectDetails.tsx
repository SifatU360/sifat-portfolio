"use client";

import type { Project } from "@/types/project";  // Updated import
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { GithubIcon, ServerIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/loading";
import { useState, useEffect } from "react";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push('/#projects');
    }, 1000);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      <main className="min-h-screen py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              onClick={handleBackClick}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>

            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex gap-4 mb-8">
              <Button asChild>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>

            {/* Repository Links */}
            {(project.githubUrl || project.serverUrl) && (
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                  >
                    <GithubIcon className="w-5 h-5" />
                    <span>
                      {project.category === "fullstack"
                        ? "Frontend Repository"
                        : "View Repository"}
                    </span>
                  </a>
                )}
                {project.serverUrl && (
                  <a
                    href={project.serverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                  >
                    <ServerIcon className="w-5 h-5" />
                    <span>Backend Repository</span>
                  </a>
                )}
              </div>
            )}

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-300 whitespace-pre-line">
                  {project.longDescription}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.solutions.map((solution, i) => (
                      <li key={i}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </motion.div>
        </div>

        {/* Contributions Section */}
        {project.contributions && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto px-4 mt-16"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                My Contributions
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-gray-200">
                  <span className="font-medium">Role:</span>
                  <span>{project.contributions.role}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-gray-200">
                    Key Responsibilities:
                  </h3>
                  <ul className="grid gap-3">
                    {project.contributions.responsibilities.map(
                      (responsibility, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {responsibility}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </main>
    </>
  );
}