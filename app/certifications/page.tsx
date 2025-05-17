import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"

export default function CertificationsPage() {
  
  const certifications = [
    {
      id: 1,
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      date: "May 2025",
      description: "Advanced React concepts including hoFreeCodeCamp’s Responsive Web Design certification is a great way to validate core front-end skills—even for experienced developers. I recently completed their rigorous project-based curriculum to test my proficiency, earning the certification in a short timeframe. The hands-on challenges (like building accessible, mobile-first layouts) align with real-world standards, making it a solid benchmark. While the credential is new, my expertise in responsive design isn’t.",
      image: "/freeCodeCamp-certificate.png?height=200&width=300&text=freeCodeCamp Certificate",
      link: "https://freecodecamp.org/certification/fcc7017f0f3-041c-4b66-9b96-052a1ecff69a/responsive-web-design",
    },
    {
      id: 2,
      title: "Certification Of Achievement",
      issuer: "BinLab",
      date: "May 2025",
      description: "1st Place Holder as a team for Gig Hackathon 2025",
      image: "/gighackathon.png?height=200&width=300&text=JavaScript+Certification",
      link: "/gighackathon.png",
    },
   
    {
      id: 3,
      title: "Certification Of Achievement",
      issuer: "",
      date: "March 2025",
      description: "1st place as a team at the She Codes Hackathon.",
      image: "/shecodeshackathon.jpg?height=200&width=300&text=Certification Of Achievement",
      link: "/shecodeshackathon.jpg?height=auto&width=auto",
    },
    {
      id: 4,
      title: "Gig-101 Business, Legal and Finance",
      issuer: "M-Academy",
      date: "November 2024",
      description: "This comprehensive certification program equips participants with essential knowledge in legal principles, business operations, and financial management. It covers key areas such as contracts and compliance, strategic planning, leadership, budgeting, and financial analysis. Ideal for aspiring professionals, the training enhances decision-making, legal awareness, and financial literacy, preparing individuals for success in a wide range of organizational and entrepreneurial roles",
      image: "/macademy.png?height=200&width=300&text=JavaScript+Certification",
      link: "macademy.png",
    },
    {
      id: 5,
      title: "Digital Litracy Training",
      issuer: "Kefta",
      date: "August 2024",
      description: "A program designed to equip individuals with the essential skills to confidently use digital tools, technologies, and the internet. It covers basic computer operations, online communication, internet safety, and the effective use of digital resources for work, education, and daily life. This training empowers participants to navigate the digital world efficiently and responsibly..",
      image: "/digitalcertificate.jpg?height=200&width=300&text=UI/UX+Certification",
      link: "/digitalcertificate.jpg",
    },
    {
      id: 6,
      title: "High School Diploma",
      issuer: "Blessed Gebre Michael Catholic School",
      date: "September 2022",
      description: ".",
      image: "/highschooldiploma.jpg?height=200&width=300&text=AWS+Certification",
      link: "/highschooldiploma.jpg",
    },
  
  ]

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="space-y-2 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">My Certifications</h1>
        <p className="text-muted-foreground max-w-[700px] mx-auto">
          Professional certifications and courses I've completed to enhance my skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="relative h-40 overflow-hidden">
              <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{cert.issuer}</Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {cert.date}
                </div>
              </div>
              <h2 className="font-semibold text-lg">{cert.title}</h2>
              <p className="text-sm text-muted-foreground mt-2">{cert.description}</p>
              <Button size="sm" variant="outline" className="mt-4" asChild>
                <Link href={cert.link} target="_blank">
                  <ExternalLink className="h-4 w-4 mr-1" /> View Certificate
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
