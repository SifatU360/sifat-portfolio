import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">Personal Introduction</h3>
              <p className="text-gray-300 leading-relaxed">
                A passionate Full Stack Developer with expertise in modern web technologies. 
                I transform complex problems into elegant solutions through clean code and intuitive design.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                3+ years of experience in web development, specializing in React, Next.js, and Node.js.
                Proven track record of delivering scalable applications and optimizing performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">Key Achievements</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Led development of 10+ successful projects</li>
                  <li>Reduced loading time by 40% through optimization</li>
                  <li>Implemented CI/CD pipelines for automated deployment</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">Professional Goals</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Master cloud-native architectures</li>
                  <li>Contribute to open-source projects</li>
                  <li>Lead technical teams in innovative projects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}