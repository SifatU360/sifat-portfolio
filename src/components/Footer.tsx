"use client";

import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import LoadingScreen from "./loading";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const isHomePage = pathname === "/";

  const navLinks = [
    { label: "Home", hash: "#home", path: "/" },
    { label: "About", hash: "#about", path: "/about" },
    { label: "Projects", hash: "#projects", path: "/projects" },
    { label: "Skills", hash: "#skills", path: "/skills" },
    { label: "Contact", hash: "#contact", path: "/contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/SifatU360", icon: <GithubIcon className="w-5 h-5" /> },
    { href: "https://linkedin.com/in/yourusername", icon: <LinkedinIcon className="w-5 h-5" /> },
    { href: "mailto:sifatullah30.info@gmail.com", icon: <Mail className="w-5 h-5" /> },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsLoading(false);
      }
    } else {
      // If on other pages, navigate with loading animation
      setTimeout(() => {
        router.push(path);
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <footer className="relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5" />
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
                <Link
                  key={link.label}
                  href={isHomePage ? link.hash : link.path}
                  onClick={(e) => handleNavigation(e, isHomePage ? link.hash : link.path)}
                  className="text-gray-400 hover:text-blue-400 transition-colors relative group text-sm"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-1 h-px bg-blue-400 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                  </motion.span>
                </Link>
              ))}
            </motion.nav>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center md:justify-end space-x-4"
            >
              {socialLinks.map((link) => (
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
    </>
  );
}