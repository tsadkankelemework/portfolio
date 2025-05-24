import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  // Replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "🏆 AI Agent Recruiter System (SheCodes 2025 Hackathon – Winner Team)",
      description:
        "An intelligent recruitment platform powered by AI agents that streamline candidate matching, automate screening, and enhance hiring decisions. Designed to reduce bias and accelerate the recruitment process using NLP and smart decision logic.",
      image: "/ai-recruiter.png?height=300&width=600&text=E-commerce+Website",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "💰 Finance Manager – Budget Control System",
      description:
        "A smart budgeting app designed to help students, small businesses, and individuals manage expenses, track income, and set financial goals. Offers real-time insights, category-based tracking, and user-friendly dashboards for better money control.",
      image: "/finance.png?height=300&width=600&text=Task+Management+App",
      technologies: ["React", "TypeScript", "Redux", "Firebase"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information.",
      image: "/portfolio.png?height=300&width=600&text=Portfolio+Website",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: " 🥗 Smart Nutrition Guide",
      description: "A smart web application that helps users take control of their health by tracking daily calorie intake, meals, water consumption, and fitness goals. NutriTrack offers personalized food and exercise recommendations based on real-time input, with intelligent reminders and progress insights to support weight loss, gain, or maintenance..",
      image: "/nutrition.png?height=300&width=600&text=Weather+Dashboard",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "PawMates (🏆 1st Place – Gig Hackathon Challenge 2025, hosted by BinLab)",
      description: "An AI-powered 3D companion experience designed to foster emotional well-being through interactive virtual pets. PawMates uses advanced behavioral AI and real-time 3D rendering to create lifelike digital companions that adapt to user interactions.Developed as part of a collaborative team effort, showcasing strong teamwork in AI integration, 3D design, and user experience innovation.",
      image: "/placeholder.svg?height=300&width=600&text=Blog+Platform",
      technologies: ["Next.js", "MongoDB", "NextAuth.js"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="space-y-2 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">My Projects</h1>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          A collection of my recent work, personal projects, and experiments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={300}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-xl">{project.title}</h2>
              <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-2 py-0.5 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" asChild>
                  <Link href={project.demo} target="_blank">
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="h-4 w-4 mr-1" /> Code
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
