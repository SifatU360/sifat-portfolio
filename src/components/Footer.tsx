import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-blue-400">Home</a>
            <a href="#about" className="text-gray-400 hover:text-blue-400">About</a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400">Contact</a>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" className="text-gray-400 hover:text-blue-400">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-blue-400">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-blue-400">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}