import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "University of Global Village",
      year: "2024-2027",
    },
    // Add more education entries
  ]

  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
                <Badge variant="secondary" className="mt-2 md:mt-0">
                  {edu.year}
                </Badge>
              </div>
              <p className="text-gray-300 mb-4">{edu.institution}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}