"use client";

import { motion } from "framer-motion";
import { Award, GitBranch, Database, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const codingStats = [
    { platform: "LeetCode", solved: "50+", rank: "15,000+" },
    { platform: "CodeForces", solved: "30+", rating: "Newbie" },
    { platform: "HackerRank", solved: "20+", badges: "4 Stars C++" }
  ];

  return (
    <>
    <main className="min-h-screen py-24">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 relative"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <Link href="/#about" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Full Stack Developer | Problem Solver | Continuous Learner
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Main Introduction Card */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-semibold text-blue-400">Professional Overview</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  As an aspiring Full Stack Developer, I combine technical expertise with a passion for creating 
                  impactful web solutions. My journey in software development is driven by curiosity and a 
                  commitment to writing clean, efficient code that solves real-world problems.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Skills Grid */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-semibold text-blue-400">Technical Stack</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-200 mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-200 mb-2">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express", "MongoDB", "Mongoose"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem Solving Stats */}
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-semibold text-blue-400">Problem Solving</h2>
                </div>
                <div className="space-y-4">
                  {codingStats.map((platform) => (
                    <div key={platform.platform} className="p-4 bg-white/5 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-200 mb-2">{platform.platform}</h3>
                      <div className="flex gap-4 text-sm">
                        <span className="text-blue-300">Problems Solved: {platform.solved}</span>
                        <span className="text-purple-300">
                          {platform.rank || platform.rating || platform.badges}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Projects Overview */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GitBranch className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-semibold text-blue-400">Project Experience</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    I&apos;ve developed several full-stack applications, focusing on clean architecture and user experience.
                    My projects demonstrate proficiency in modern web technologies and best practices in software development.
                  </p>
                  <Link 
                    href="/#projects"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
                  >
                    View My Projects →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
      
    </main>
    <Footer/>
    </>
  );
}