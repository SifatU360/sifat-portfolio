"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";
import { motion } from "framer-motion";

const techStack = {
  languages: [
    "typescript",
    "javascript",
    "html5",
    "css3",
  ],
  frontend: [
    "react",
    "redux",
    "nextdotjs",
    "tailwindcss",
    "bootstrap",
    "mui",
    "antdesign",
    "shadcnui",
  ],
  backend: [
    "nodejs",
    "express",
    "prisma",
    "redis",
    "postgresql",
    "mongodb",
    "firebase",
  ],
  tools: [
    "git",
    "github",
    "docker",
    "postman",
    "visualstudiocode",
    "figma",
    "jira",
    "swagger",
    "gitbook",
  ],
  cloud: [
    "vercel",
    "amazonaws",
  ],
  testing: [
    "jest",
    "testinglibrary",
    "cypress",
  ],
};

export default function TechAnimation() {
  const slugs = Object.values(techStack)
    .flat()
    .sort(() => Math.random() - 0.5);

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />
      <div className="relative flex aspect-square max-w-md mx-auto items-center justify-center overflow-hidden rounded-full border border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 animate-pulse" />
        <IconCloud 
          images={images} 
          random={1.5}
          className="p-6" 
        />
      </div>
    </motion.div>
  );
}