"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
  Mail,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_neun1mu",
        "template_3k1ld4u",
        {
          to_email: "sifatullah30.info@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "JY7glp9weHekfzEZ8"
      );

      toast.success("Message sent successfully!", {
        duration: 3000,
        className: "bg-green-500",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
        className: "bg-red-500",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      href: "mailto:sifatullah30.info@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      text: "sifatullah30.info@gmail.com",
    },
    {
      href: "https://github.com/SifatU360",
      icon: <GithubIcon className="w-6 h-6" />,
      text: "GitHub Profile",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: <LinkedinIcon className="w-6 h-6" />,
      text: "LinkedIn Profile",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="group hover:scale-[1.01] transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              <CardContent className="p-8 space-y-6 relative">
                <h3 className="text-2xl font-semibold text-blue-400">
                  Contact Form
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="text-gray-400">
                    I would love to hear from you! Please fill out the form
                    below and I will get back to you as soon as possible.
                  </p>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-white/5 border-white/10 focus:border-blue-400/50 focus:ring-blue-400/20 transition-colors placeholder:text-gray-400"
                        required
                        aria-label="Name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-white/5 border-white/10 focus:border-blue-400/50 focus:ring-blue-400/20 transition-colors placeholder:text-gray-400"
                        required
                        aria-label="Email"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="min-h-[150px] bg-white/5 border-white/10 focus:border-blue-400/50 focus:ring-blue-400/20 transition-colors placeholder:text-gray-400 resize-none"
                        required
                        aria-label="Message"
                      />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center"
                        >
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </motion.div>
                      ) : (
                        <motion.div
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          Send Message
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.div>
                      )}
                    </Button>
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="group hover:scale-[1.01] transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              <CardContent className="p-8 space-y-8 relative">
                <h3 className="text-2xl font-semibold text-blue-400">
                  Connect With Me
                </h3>
                <div className="space-y-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-white/5 group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {link.icon}
                      <span>{link.text}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
