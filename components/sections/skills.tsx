"use client"

import { motion } from "framer-motion"
import SectionHeading from "../ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Server, Terminal, Figma } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["JavaScript", "TypeScript", "C#", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    skills: ["React.Js", "Angular", "Vue.js", "Tailwind CSS", "Framer Motion", "Redux","Bootstrap","Material UI","Admin UI Template"],
  },
  {
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: ["Node.js", "Express.Js", "NestJs", "REST API", "TypeORM"],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQL", "Oracle"],
  },
  {
    title: "Tools",
    icon: <Terminal className="h-5 w-5" />,
    skills: ["Git", "Docker", "Git Lens", "GitHub Actions"],
  },
  {
    title: "Design",
    icon: <Figma className="h-5 w-5" />,
    skills: ["Figma", "Responsive Design", "UI/UX"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
