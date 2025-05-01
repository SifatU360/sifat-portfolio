"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "University of Global Village",
      year: "2024-2027",
      cgpa: "3.91",
      achievements: ["Dean's List", "First Class Honours", "Academic Excellence"]
    },
    // Add more education entries
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="education" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background and achievements in the field of Computer Science
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <Card className="group hover:scale-[1.02] transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <CardContent className="p-8 relative">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {edu.degree}
                      </h3>
                      {edu.cgpa && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-gray-400">CGPA:</span>
                          <span className="font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">
                            {edu.cgpa}
                          </span>
                        </motion.div>
                      )}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="mt-2 md:mt-0 bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {edu.year}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{edu.institution}</p>
                  {edu.achievements && (
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}