"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  FaReact,
  // FaNodeJs,
  FaServer,
  FaBrain,
  FaUsers,
  FaComments,
  FaTasks,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiCplusplus,
  SiTailwindcss,
  SiC,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { TbBinaryTree2 } from "react-icons/tb";

export default function Skills() {
  const developmentSkills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    // { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Express", icon: <FaServer className="text-white" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      level: "Advanced",
      color: "#38BDF8",
    },
    {
      name: "Mongoose",
      icon: <SiMongodb />,
      level: "Advanced",
      color: "#880000",
    },
  ];

  const toolsAndPlatforms = [
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ];
  const programmingSkills = [
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    { name: "DSA", icon: <TbBinaryTree2 className="text-green-400" /> },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <FaBrain /> },
    { name: "Team Leadership", icon: <FaUsers /> },
    { name: "Communication", icon: <FaComments /> },
    { name: "Project Management", icon: <FaTasks /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <section id="skills" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Development Skills */}
            <Card className="group hover:scale-[1.01] transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 dark:bg-slate-900/20 backdrop-blur-xl border border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-8">
                  Development
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {developmentSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="text-4xl transform transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Programming Skills */}
            <Card className="group hover:scale-[1.01] transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 dark:bg-slate-900/20 backdrop-blur-xl border border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-8">
                  Tools & Platforms
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {toolsAndPlatforms.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="text-4xl transform transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Platforms */}
            <Card className="group hover:scale-[1.01] transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 dark:bg-slate-900/20 backdrop-blur-xl border border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-8">
                  Programming
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  {programmingSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="text-4xl transform transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="group hover:scale-[1.01] transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 dark:bg-slate-900/20 backdrop-blur-xl border border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-8">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="text-4xl text-blue-400 transform transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
