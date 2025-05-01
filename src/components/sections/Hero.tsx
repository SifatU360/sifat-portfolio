"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconCloud } from "@/components/magicui/icon-cloud";
import TechAnimation from "../magicui/Magic";

// Technology slugs array
const slugs = [
  "typescript",
  "javascript",
  "react",
  "redux",
  "nextdotjs",
  "nodejs",
  "express",
  "mongodb",
  "tailwindcss",
  "git",
  "github",
  // Add more technologies as needed
];

export default function Hero() {
  const handleDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = "/Sifat_Resume.pdf";
    
    // Create a link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sifat_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section id="home" className="min-h-[90vh] relative flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-blue-400 font-medium mb-4 block">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Sifat
              </span>
            </motion.h1>

            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p 
              className="text-gray-400 text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Building modern web applications with cutting-edge technologies. 
              Specialized in creating responsive, user-friendly interfaces with 
              seamless backend integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={handleDownload}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Tech Animation Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <TechAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}