"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechAnimation from "../magicui/Magic";



export default function Hero() {
  const handleDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = "/Sifatullah_resume.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sifatullah_resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-[90vh] relative flex items-center overflow-hidden">
      {/* Background Elements - Simplified */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-medium"
            >
              Hi there, welcome to my portfolio
            </motion.span>

            {/* Name and Title - Simplified */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                I&apos;m <span className="text-blue-400">Sifat</span>
              </motion.h1>

              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer
              </motion.h2>
            </div>

            {/* Brief Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about crafting seamless web experiences through clean code and innovative solutions. 
                Specializing in modern web technologies with a focus on{' '}
                <span className="text-blue-400">React</span>,{' '}
                <span className="text-blue-400">Next.js</span>, and{' '}
                <span className="text-blue-400">TypeScript</span>.
              </p>
            </motion.div>

            {/* Enhanced Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <Button
                onClick={handleDownload}
                className="group relative overflow-hidden px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 pt-4"
            >
              {[
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "10+" },
                { label: "Experience", value: "1+ year" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tech Animation Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex lg:justify-center items-center"
          >
            <TechAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}