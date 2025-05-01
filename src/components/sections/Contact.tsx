"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {  GithubIcon,LinkedinIcon, Mail, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_neun1mu', // Replace with your EmailJS service ID
        'template_3k1ld4u', // Replace with your EmailJS template ID
        {
          to_email: 'sifatullah30.info@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'JY7glp9weHekfzEZ8' // Replace with your EmailJS public key
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-blue-400">Contact Form</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/10 focus:border-blue-400 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/10 focus:border-blue-400 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 focus:border-blue-400 transition-colors min-h-[150px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-600 transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="group hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
              <CardContent className="p-8 space-y-8">
                <h3 className="text-2xl font-semibold text-blue-400">Connect With Me</h3>
                <div className="space-y-6">
                  <a 
                    href="mailto:sifatullah30.info@gmail.com" 
                    className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-white/5"
                  >
                    <Mail className="w-6 h-6" />
                    <span>sifatullah30.info@gmail.com</span>
                  </a>
                  <a 
                    href="https://github.com/SifatU360" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-white/5"
                  >
                    <GithubIcon className="w-6 h-6" />
                    <span>GitHub Profile</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-white/5"
                  >
                    <LinkedinIcon className="w-6 h-6" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}