import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Contact Form</h3>
            <form className="space-y-4">
              <Input placeholder="Name" className="bg-white/5" />
              <Input placeholder="Email" type="email" className="bg-white/5" />
              <Textarea placeholder="Message" className="bg-white/5" />
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="p-6 space-y-6">
            <h3 className="text-xl font-semibold text-blue-400">Connect With Me</h3>
            <div className="space-y-4">
              <a href="mailto:your@email.com" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400">
                <Mail className="w-5 h-5" />
                <span>your@email.com</span>
              </a>
              <a href="https://github.com/yourusername" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400">
                <Github className="w-5 h-5" />
                <span>GitHub Profile</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://twitter.com/yourusername" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
                <span>Twitter Profile</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}