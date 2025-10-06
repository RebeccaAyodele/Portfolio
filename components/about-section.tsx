"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Heart, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that follows best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and cross-browser compatibility.",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "I genuinely love what I do and bring enthusiasm to every project.",
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Every line of code I write is with the end user's experience in mind.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to problems.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate frontend developer who believes in the power of code to create meaningful digital
            experiences that connect people and solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">My Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    I'm at the beginning of an exciting journey in frontend development, driven by curiosity and a
                    desire to create digital experiences that make a difference. Every day brings new learning
                    opportunities and challenges that fuel my growth.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    My foundation in React, Next.js, TypeScript, and modern CSS frameworks gives me the tools to bring
                    ideas to life. I'm committed to writing clean, accessible code and staying current with industry
                    best practices and emerging technologies.
                  </p>
                  <p className="text-muted-foreground">
                    Beyond coding, I'm fascinated by design psychology, user behavior, and how thoughtful interfaces can
                    create delightful experiences. I believe the best websites don't just function well—they inspire and
                    connect with users.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20 rounded-full flex items-center justify-center">
                      <img
                        src="/professional-developer-portrait.png"
                        alt="Your Name"
                        className="w-48 h-48 rounded-full object-cover shadow-lg"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/30 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-4">What Drives Me</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core values guide my approach to development and shape how I collaborate with others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center group hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
