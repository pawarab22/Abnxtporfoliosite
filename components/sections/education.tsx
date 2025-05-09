"use client"

import { motion } from "framer-motion"
import SectionHeading from "../ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const educations = [
  {
    degree: "Master In Computer Application (MCA)",
    institution: "Bharati Vidyapeeth Deemed To Be Pune University",
    period: "2021 - 2023",
    description:
      "Specialized in Web Technologies and Distributed Systems. Thesis on 'Optimizing Web Applications for Performance'. Gaining knowledge of Business Analysis In IT Industry. Software development Life cycle Knowledge and implementation",
    achievements: ["GPA: 9.5/10.0", "Project Implementation and Presentation", "Research Paper Published","Business Management Knowledge","NPTEL Courses Study","Seminar On IT Industry"],
  },
  {
    degree: "Bachelor of Science in Computer Science (BSc.)",
    institution: "Shivaji University , Kolhapur",
    period: "2018 - 2021",
    description:
      "Focused on Software Science and Computer Architecture. Participated in multiple hackathons and coding competitions.",
    achievements: ["GPA: 8.0/10.0", "Programming Skills", "Teaching Assistant for Web Development course","Project Development","Seminar On Presentation"],
  },
  {
    degree: "Web Development Course",
    institution: "E-Max IT & Industrial Training Board",
    period: "Summer 2019",
    description: "Intensive 12-week program covering modern web development technologies and practices.",
    achievements: ["Best Final Project Award", "Perfect Attendance","Distinction Grade"],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Education" subtitle="My academic background and qualifications" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>

          {/* Education items */}
          <div className="space-y-12">
            {educations.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <GraduationCap className="h-3 w-3 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{edu.degree}</CardTitle>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        </div>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{edu.description}</p>
                      <div className="space-y-1">
                        {edu.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
