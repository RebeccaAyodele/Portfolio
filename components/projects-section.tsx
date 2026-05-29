"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Trace",
      description:
        "Trace turns invisible economic activity into a verifiable digital identity, giving traders, gig workers, and job seekers access to the financial services they've always deserved.",
      image: "/trace.png",
      technologies: [
        "Next.js 16",
        "React",
        "Typescript",
        "Tailwind CSS",
        "Framer Motion",
        "OpenRouter API",
        "REST API"
      ],
      liveUrl: "https://ai-career-app-five.vercel.app/",
      githubUrl: "https://github.com/PraiseKeyz/Trace/",
      featured: true,
    },
    {
      title: "CareerAI",
      description:
        "Complete job prep platform powered by AI. Identify skill gaps with Skill Analyzer, practice real interview scenarios with Interview Simulator (choose between coaching mode or strict mock interviews), and create polished resumes with Resume Generator",
      image: "/CareerAI.png",
      technologies: [
        "Next.js 16",
        "React",
        "Typescript",
        "Tailwind CSS",
        "Framer Motion",
        "OpenRouter API",
        "Nemotron AI",
        "REST API"
      ],
      liveUrl: "https://ai-career-app-five.vercel.app/",
      githubUrl: "https://github.com/RebeccaAyodele/",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with product filtering, cart and wishlist management, and user authentication. Features efficient API fetching and global state management for a smooth shopping experience",
      image: "/e-commerce.png",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "REST API",
        "Firebase",
        "Zustand",
        "ShadcnUI",
        "Framer Motion",
        "Tanstack",
        "React Hook Form",
      ],
      liveUrl: "https://e-commerce-pi-lac-80.vercel.app/",
      githubUrl: "https://github.com/RebeccaAyodele/e-commerce",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "An interactive task management app with drag-and-drop boards, progress tracking, and analytics. Users can manage tasks by category, view deadlines, and track progress with charts and a calendar view.",
      image: "/TaskFlowImage.png",
      technologies: [
        "React",
        "Typescript",
        "Tailwind CSS",
        "Zustand",
        "Recharts",
        "React Big Calendar",
      ],
      liveUrl: "https://kanban-board-six-eta.vercel.app/",
      githubUrl: "https://github.com/RebeccaAyodele/Kanban-Board",
      featured: true,
    },
    {
      title: "Hulu Landing page",
      description:
        "A responsive replica of Hulu’s landing page built with React and Tailwind CSS. Focused on clean layout structure, reusable components, and modern responsive design to match Hulu's visual style",
      image: "/landing_page.png",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
      liveUrl: "https://hulu-landing-page-six.vercel.app/",
      githubUrl: "https://github.com/RebeccaAyodele/hulu_landing_page",
      featured: true,
    },
    
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media management dashboard with analytics, post scheduling, and multi-platform integration.",
      image: "/public/professional-developer-portrait.png",
      technologies: [
        "Vue.js",
        "Express.js",
        "PostgreSQL",
        "Chart.js",
        "Vuetify",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false,
    },
    {
      title: "Learning Management System",
      description:
        "An educational platform with course management, progress tracking, and interactive learning modules.",
      image: "/online-learning-platform.png",
      technologies: ["React", "Firebase", "Stripe", "Tailwind CSS", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false,
    },
  ];

  // const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for frontend development.
          </p>
        </div>

        {/* Featured Projects */}
        {/*<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Other Projects */}
        <div>
          {/* <h3 className="text-2xl font-bold text-primary mb-8 text-center">Projects</h3> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="hover:border-accent transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-primary">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/RebeccaAyodele"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
