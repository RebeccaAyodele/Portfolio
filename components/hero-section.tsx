"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/RebeccaAyodele",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rebecca-ayodele-012065298",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ayodelerebeccaayomide?igsh=OWJyMmkzdHUzM3A=",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:rebeccaayodele08@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background py-12 sm:py-0"
    >
      {/* Geometric accent shapes - responsive sizes */}
      <div className="absolute top-4 sm:top-10 left-4 sm:left-12 w-16 sm:w-32 h-16 sm:h-32 bg-accent opacity-20 rounded-3xl transform -rotate-12 hidden sm:block" />
      <div className="absolute -bottom-12 sm:bottom-20 -left-12 sm:left-0 w-24 sm:w-48 h-24 sm:h-48 bg-accent opacity-15 rounded-full" />
      <div className="absolute top-1/3 sm:top-1/4 -right-20 sm:right-0 w-40 sm:w-96 h-40 sm:h-96 bg-accent opacity-10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 sm:bottom-0 right-0 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 bg-accent opacity-10 transform rotate-45 hidden sm:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-1000 order-first lg:order-first text-center sm:text-left ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block">
                <span className="text-foreground">Rebecca</span>{" "}
                <span className="text-accent">Ayodele</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-md leading-relaxed">
              Frontend engineer by craft, builder by nature. I make things that connect with people.
            </p>

            {/* Image - Mobile only, positioned before social links */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-none overflow-hidden border-2 sm:border-accent/50 border-transparent mb-8 sm:mb-12 sm:hidden">
              <Image
                src="/developer-potrait.png"
                alt="Rebecca Ayodele"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center sm:justify-start">
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-card border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-8 sm:mb-12 flex justify-center sm:justify-start">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-accent text-black hover:bg-accent/90 w-4/5 sm:w-auto" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right image with accent frame */}
          <div
            className={`relative hidden md:block transition-all duration-1000 delay-300 mt-8 sm:mt-0 order-last lg:order-last ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Accent geometric background */}
            <div className="hidden sm:block absolute -inset-6 bg-accent opacity-20 rounded-3xl transform -rotate-3" />
            <div className="hidden sm:block absolute inset-0 bg-accent opacity-10 rounded-3xl" />

            {/* Image container */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-none overflow-hidden border-2 sm:border-accent/50 border-transparent">
              <Image
                src="/developer-potrait.png"
                alt="Rebecca Ayodele"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Floating accent circle - responsive position */}
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-20 sm:w-32 h-20 sm:h-32 border-2 border-accent rounded-full flex items-center justify-center bg-background/50 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-accent mb-0 sm:mb-1">15+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
