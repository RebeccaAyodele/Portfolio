"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Mail, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/RebeccaAyodele", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
    { icon: Mail, href: "mailto:rebeccaayodele08@gmail.com", label: "Email" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
              Hi, I'm <span className="text-accent">Rebecca Ayodele</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">Frontend Developer</p>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Crafting engaging user experiences with modern web technologies. Passionate about clean code, beautiful
              design, and innovative solutions.
            </p>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <a
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
