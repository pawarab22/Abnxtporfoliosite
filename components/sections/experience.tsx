"use client"

import { motion } from "framer-motion"
import SectionHeading from "../ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Junier Software Engineer",
    company: "Compserv Systems,Kolhapur",
    period: "Aug 2023 - Apr 2025",
    description:
      "Lead developer for CBS Core Banking web applications And Customer Application On Mobile App for patseva banking. managing a team of 5 developers. Implemented ATM/UPI and SMS utility and improved application performance by 40%.Query performing for filtrating data and showing needed records for report generation. Critical calculation creations and developing in CBS application.",
    technologies: ["Angular", "Node.js","NestJs","PHP","TypeORM", "FileZilla/Putty", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Developer Trainee",
    company: "I'Gaps Technology, Kolhapur",
    period: "Mar 2022 - Jun 2023",
    description:
      "Developed and maintained multiple client projects. Collaborated with design and product teams to deliver high-quality web applications.Mostly e-commerce sites for developing.",
    technologies: ["React.js", "Express", "MySql", "MongoDB", "Git Actions","NodeJs"],
  },
  // {
  //   title: "Frontend Developer",
  //   company: "WebCraft Agency",
  //   period: "2017 - 2019",
  //   description:
  //     "Created responsive and accessible user interfaces for various client websites. Worked closely with designers to implement pixel-perfect designs.",
  //   technologies: ["React", "SCSS", "JavaScript", "Webpack", "RESTful APIs"],
  // },
  // {
  //   title: "Junior Web Developer",
  //   company: "StartUp Ventures",
  //   period: "2016 - 2017",
  //   description:
  //     "Assisted in the development of web applications. Gained experience in modern web development practices and tools.",
  //   technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
  // },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{exp.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                        </div>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                            {tech}
                          </span>
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
