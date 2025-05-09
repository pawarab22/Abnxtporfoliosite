"use client"

import { motion } from "framer-motion"
import SectionHeading from "../ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Heart, User } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about me and what drives my passion for development"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[750px] w-full overflow-hidden rounded-lg">
              <Image src="/Selfimg.jpg?height=500&width=500" alt="Abhi Pawar" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">2.5+</span>
              <span className="text-primary-foreground text-xs ml-1">
                Years
                <br />
                Exp.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="personal" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Personal</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Soft Skills</span>
                </TabsTrigger>
                <TabsTrigger value="hobbies" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Hobbies</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4">
                <p>
                  I'm a passionate Full Stack Developer with 2.5+ years of experience building web applications using
                  modern technologies. I specialize in creating responsive, accessible, and performant web experiences.
                </p>
                <p>
                  My journey in web development started when I was in college, and I've been hooked ever since. I love
                  the constant learning and problem-solving that comes with being a developer.
                </p>
                <p>
                  Based in Kolhapur, I've worked with startups and established companies to deliver high-quality
                  web applications that meet business goals and provide excellent user experiences.
                </p>
                <p>
                Developed and maintained CBS software modules for Patseva Banking.Integrated secure UPI/ATM systems using RESTful APIs.Collaborated with support teams, improving deployment efficiency by 30%.customer app development and support issue resolution.
                </p>
              </TabsContent>

              <TabsContent value="skills" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Communication</h3>
                      <p className="text-sm text-muted-foreground">
                        Clear and effective communication with team members and clients
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Problem Solving</h3>
                      <p className="text-sm text-muted-foreground">
                        Analytical thinking and creative solutions to complex problems
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Teamwork</h3>
                      <p className="text-sm text-muted-foreground">
                        Collaborative approach and ability to work in diverse teams
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Adaptability</h3>
                      <p className="text-sm text-muted-foreground">
                        Quick to learn new technologies and adapt to changing requirements
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="hobbies" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-start gap-2">
                      <div>
                        <h3 className="font-medium">Traveling</h3>
                        <p className="text-sm text-muted-foreground">
                          Bike Riding and exploring Natural Places and Peaceful Places
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-start gap-2">
                      <div>
                        <h3 className="font-medium">Hiking</h3>
                        <p className="text-sm text-muted-foreground">
                          Exploring nature trails and enjoying the outdoors
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-start gap-2">
                      <div>
                        <h3 className="font-medium">Reading</h3>
                        <p className="text-sm text-muted-foreground">
                          Science fiction, technology, Myth and personal development books
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-start gap-2">
                      <div>
                        <h3 className="font-medium">Playing Games</h3>
                        <p className="text-sm text-muted-foreground">Like to play Games like Football Outdoor and Video Games on PC</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
