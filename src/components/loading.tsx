"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Inner circle */}
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1, 0.8],
            rotate: 360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full rounded-full bg-slate-900/90 scale-[0.96]" />
        </motion.div>
      </div>
      <motion.span
        className="absolute mt-24 text-blue-400 text-sm font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Loading...
      </motion.span>
    </div>
  );
}