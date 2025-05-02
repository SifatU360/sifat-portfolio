"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/loading";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push(path);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <main className="min-h-screen">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Header */}
        <div className="py-24 pb-0 mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Link 
              href="/"
              className="text-blue-400 hover:text-blue-300 mb-4 inline-block"
              onClick={(e) => handleNavigation(e, '/')}
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Me
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let&lsquo;s collaborate and create something amazing together
            </p>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <Contact standalone={true}/>

        {/* Additional Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="py-16 relative"
        >
        </motion.section>

        <Footer />
      </main>
    </>
  );
}