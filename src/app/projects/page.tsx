"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/loading";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/config/projects";

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push(path);
      setIsLoading(false);
    }, 1000);
  };

  const filterCategories = ["all", "frontend", "backend", "fullstack"];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <main className="min-h-screen">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="py-24 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Link 
              href="/"
              className="text-blue-400 hover:text-blue-300 mb-4 inline-block"
              onClick={(e) => handleNavigation(e, '/')}
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my work, side projects, and contributions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {filterCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="max-w-7xl mx-auto px-4"
          >
            <Projects standalone={true} filteredProjects={filteredProjects} />
          </motion.div>
        </div>

        {/* Project Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="py-16 relative"
        >
          <div className="max-w-7xl mx-auto px-4">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold text-blue-400">
                      {projects.length}+
                    </h4>
                    <p className="text-gray-400">Total Projects</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold text-blue-400">
                      {projects.filter(p => p.category === "frontend").length}+
                    </h4>
                    <p className="text-gray-400">Frontend Projects</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold text-blue-400">
                      {projects.filter(p => p.category === "backend").length}+
                    </h4>
                    <p className="text-gray-400">Backend Projects</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold text-blue-400">
                      {projects.filter(p => p.category === "fullstack").length}+
                    </h4>
                    <p className="text-gray-400">Full Stack Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <Footer />
      </main>
    </>
  );
}