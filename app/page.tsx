import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail , Instagram} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DownloadButton } from "@/components/downloadBtn"

export default function Home() {
  // Replace with your skills
  const skills = ["HTML","CSS","JavaScript","React", "Tailwind CSS","Next.js", "TypeScript", "Node.js", "Git/Github","MySQL","Python"]

  return (
    <div className="container px-4 md:px-6">
      <section className="py-12 md:py-16 lg:py-20 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
          <Image src="/profile.jpg?height=320&width=320" alt="Your Name" fill className="object-cover" priority />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Hi, I'm <span className="text-primary">Tsadkan Kelemework</span>
          </h1>
          <p className="text-xl text-muted-foreground">Software Engineering Student | Full Stack Developer</p>
          <p className="text-muted-foreground max-w-[600px]">
           Specialized in Frontend Development with aspirations in Full-Stack Engineering.Passionate about creating innovative solutions beatiful user interfaces and experiences through code.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div>
      <DownloadButton />
    </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Link href="https://github.com/tsadkankelemework2121" target="_blank" rel="noreferrer">
              <Github className="h-6 w-6 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/tsadkan-kelemework-11aa30345" target="_blank" rel="noreferrer">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:tsadkankelemeworktw@gmail.com">
              <Mail className="h-6 w-6 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="https://www.instagram.com/tsadkan_tk" target="_blank" rel="noreferrer">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        
      </section>

      <section className="py-12 border-t">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
             Hi, I'm Tsadkan Kelemework, a devoted and enthusiastic Software Engineering student at Bahir Dar University. I hold a diploma from Blessed Gebre Michiel Catholic Secondary and High School, and I’ve been actively building my skills through a mix of self-taught learning and formal education. I specialize in Frontend Development,to create aesthetically pleasing, responsive, and user-friendly interfaces using HTML, CSS, JavaScript, React, and Vue. I'm also diving into the world of Backend Development, expanding my knowledge with Node.js, Python ,Databases to become a well-rounded full-stack developer.I have a reputation as a hard worker who never stops learning, a creative thinker, and a problem-solver. Every project I work on benefits from my enthusiasm and accuracy, whether it's troubleshooting intricate problems or developing a new feature. At the moment, I looking for opportunities to develop and work with people that share my passion for technology and creativity. Together, let us create something truly remarkable.
            </p>
            <p className="text-muted-foreground">
              I'm always eager to learn and grow as a developer.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
