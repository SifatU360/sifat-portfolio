"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaServer,
//   FaDatabase,
  FaBrain,
  FaUsers,
  FaComments,
  FaTasks,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
} from "react-icons/si";

export default function Skills() {
  const technicalSkills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express", icon: <FaServer className="text-[#000000]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <FaBrain /> },
    { name: "Team Leadership", icon: <FaUsers /> },
    { name: "Communication", icon: <FaComments /> },
    { name: "Project Management", icon: <FaTasks /> },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="group hover:scale-[1.02] transition-all duration-300 bg-white/5 dark:bg-slate-900/20 backdrop-blur-xl border border-white/10 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="text-3xl">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:scale-[1.02] transition-all duration-300 bg-white/5 dark:bg-slate-900/20 backdrop-blur-xl border border-white/10 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="text-3xl text-blue-400">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}