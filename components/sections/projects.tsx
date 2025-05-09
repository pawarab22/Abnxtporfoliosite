"use client"

import { motion } from "framer-motion"
import SectionHeading from "../ui/section-heading"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "CBS ( Core Banking Application)",
    description:
      "A Software Application of Core banking system for Patseva banking web application.It provides daily transaction , report generation and maintain account of customer details with their daily maintain balance on accounts.It provides saving accounts, share accounts, pigmy accounts, loan accounts, cash credit accounts ..etc schemewise accounts.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Angular","Nest.js","PostgreSQL","TypeORM","NodeJs", "TypeScript", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
   {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills (this website).This site shows my information , skills, technology I have learnt and growing of knowledge.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript","lucide-react", "next-themes ","tailwindcss-animate"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Site for Pragati Hardware Vendor Shop",
    description: "A collaborative shop management application with real-time update products and  selling products with advertisements.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["ReactJs", "ExpressJs", "Redux", "Material UI", "Nodejs","MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "GYM Fitness Management system ",
    description: "A mobile-responsive fitness tracking application with workout plans and progress visualization.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Site For #7 Fashin Gallery Shop",
    description: "A site for shop management system.To buy and sell daily trending fashion products throgh online.It have access to add products and sell",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Angular", "ExpressJs", "Nodejs", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Online Voting Management System",
    description: "Online voting system for to choose their favourate candidate is win in election or voting for future activities.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["ASP.NET", "C#", "Access Database"],
    liveUrl: "#",
    githubUrl: "#",
  },
 
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="A selection of my recent work" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex items-center gap-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
