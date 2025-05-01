"use client";

import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/SifatU360", icon: <GithubIcon className="w-5 h-5" /> },
    { href: "https://linkedin.com/in/yourusername", icon: <LinkedinIcon className="w-5 h-5" /> },
    { href: "mailto:sifatullah30.info@gmail.com", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <footer className="relative mt-20">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5" />
      
      {/* 3D layered effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12 relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <span className="text-gray-400 text-sm">
              © {currentYear} <span className="font-medium text-blue-400">Sifat Ullah</span>.
              <br className="md:hidden" /> All rights reserved.
            </span>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center flex-wrap gap-6"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-blue-400 transition-colors relative group text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-px bg-blue-400 transform scale-x-0 transition-transform group-hover:scale-x-100" />
              </motion.a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center md:justify-end space-x-4"
          >
            {socialLinks.map((link, ) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-blue-400 transition-colors border border-white/10 hover:border-blue-400/50"
                whileHover={{ 
                  scale: 1.1,
                  rotateZ: 5,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}