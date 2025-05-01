"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaBrain,
  FaUsers,
  FaTasks,
  FaGithub,
  FaDatabase,
  FaCode,
  FaTools,
  FaChartLine,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiCplusplus,
  SiC,
  SiPostman,
  SiVercel,
  SiTailwindcss,
  SiExpress,
  SiMongoose,
} from "react-icons/si";
import { TbBinaryTree2 } from "react-icons/tb";

export default function SkillsPage() {
  const skillCategories = {
    frontend: [
      { name: "React", icon: <FaReact />, level: 85, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 80, color: "#ffffff" },
      { name: "TypeScript", icon: <SiTypescript />, level: 75, color: "#3178C6" },
      { name: "JavaScript", icon: <SiJavascript />, level: 85, color: "#F7DF1E" },
      { name: "Redux", icon: <SiRedux />, level: 70, color: "#764ABC" },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 90, color: "#06B6D4" },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#339933" },
      { name: "Express", icon: <SiExpress />, level: 75, color: "#ffffff" },
      { name: "MongoDB", icon: <SiMongodb />, level: 75, color: "#47A248" },
      { name: "Mongoose", icon: <SiMongoose />, level: 70, color: "#2D3748" },
    ],
    programming: [
      { name: "C++", icon: <SiCplusplus />, level: 70, color: "#00599C" },
      { name: "C", icon: <SiC />, level: 65, color: "#A8B9CC" },
      { name: "DSA", icon: <TbBinaryTree2 />, level: 75, color: "#22C55E" },
    ],
    tools: [
      { name: "Git", icon: <FaGithub />, level: 85, color: "#ffffff" },
      { name: "Postman", icon: <SiPostman />, level: 80, color: "#FF6C37" },
      { name: "Vercel", icon: <SiVercel />, level: 75, color: "#ffffff" },
    ],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen py-24">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <motion.div
        className="max-w-7xl mx-auto px-4 relative"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <Link href="/#skills" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <motion.div key={category} variants={fadeInUp}>
              <Card className="group hover:scale-[1.02] transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    {getCategoryIcon(category)}
                    <h2 className="text-2xl font-semibold capitalize bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {category}
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl" style={{ color: skill.color }}>
                              {skill.icon}
                            </span>
                            <span className="text-gray-300">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Additional Skills Section */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Professional Skills
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                  {[
                    { name: "Problem Solving", icon: <FaBrain />, description: "Analytical thinking and solution design" },
                    { name: "Team Collaboration", icon: <FaUsers />, description: "Effective team communication" },
                    { name: "Project Management", icon: <FaTasks />, description: "Timeline and resource management" },
                    { name: "Technical Writing", icon: <FaCode />, description: "Documentation and specifications" },
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-3xl text-blue-400 mb-3">{skill.icon}</div>
                      <h3 className="text-lg font-medium text-gray-200 mb-2">{skill.name}</h3>
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "frontend":
      return <FaCode className="text-3xl text-blue-400" />;
    case "backend":
      return <FaDatabase className="text-3xl text-blue-400" />;
    case "programming":
      return <FaBrain className="text-3xl text-blue-400" />;
    case "tools":
      return <FaTools className="text-3xl text-blue-400" />;
    default:
      return <FaChartLine className="text-3xl text-blue-400" />;
  }
}