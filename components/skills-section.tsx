"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    "React/Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "LLM Integration",
    "Node.js",
    "Git & GitHub",
    "Responsive Design",
    "REST APIs",
    "Redux/Zustand",
  ];

  const tools = [
    "VS Code",
    "Figma",
    "Vite",
    "Vercel",
    "Netlify",
    "Firebase",
    "MongoDB",
    "Postman",
    "Chrome DevTools",
    "Prettier",
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Attention to Detail",
    "Continuous Learning",
    "Adaptability",
    "Critical Thinking",
    "Creativity",
    "User Empathy",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and
            technologies I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="default"
                    className={`transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-8">
                {tools.map((tool, index) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className={`transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {softSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className={`transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                  style={{
                    animationDelay: `${(technicalSkills.length + tools.length + index) * 0.1}s`,
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
