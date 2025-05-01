"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Brain, Target, Coffee } from "lucide-react";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 relative"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            An aspiring developer passionate about creating meaningful web experiences
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="group hover:scale-[1.01] transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            <CardContent className="p-8 relative space-y-8">
              {/* Personal Introduction */}
              <motion.div 
                className="space-y-4"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-400">Who I Am</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate learner and aspiring Full Stack Developer, currently focusing on modern web development. 
                  While I may be at the beginning of my professional journey, I bring fresh perspectives and a strong 
                  desire to create meaningful web applications.
                </p>
              </motion.div>

              {/* Technical Journey */}
              <motion.div 
                className="space-y-4"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-400">My Journey</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Through self-study and hands-on projects, I've developed skills in React, Next.js, and Node.js. 
                  I'm constantly learning and building projects to improve my abilities and stay current with 
                  modern development practices.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Current Focus */}
                <motion.div 
                  className="space-y-4"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-semibold text-blue-400">Current Focus</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Building full-stack applications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Learning TypeScript and Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Exploring backend development
                    </li>
                  </ul>
                </motion.div>

                {/* Interests */}
                <motion.div 
                  className="space-y-4"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-3">
                    <Coffee className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-semibold text-blue-400">What I Love</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Problem-solving through code
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Creating user-friendly interfaces
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Learning new technologies
                    </li>
                  </ul>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}