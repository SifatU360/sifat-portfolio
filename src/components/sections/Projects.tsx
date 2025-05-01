import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Globe } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Project Name",
      description: "A brief description of the project and its impact.",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com/username/repo"
    },
    // Add more projects
  ]

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-white/5 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="space-x-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" /> Live Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}