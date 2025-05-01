import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const technicalSkills = [
    { name: "React/Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 88 },
    // Add more skills
  ]

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Project Management"
  ]

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}