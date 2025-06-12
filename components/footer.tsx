import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Tsadkan Kelemework. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/tsadkankelemework2121" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">GitHub</span>
          </Link>
         {/*} <Link href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">Twitter</span>
          </Link>*/}
          <Link href="www.linkedin.com/in/tsadkan-kelemework-11aa30345" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:your.email@example.com">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">Email</span>
          
          </Link>
           <Link href="https://www.instagram.com/tsadkan_tk" target="_blank" rel="noreferrer">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">Instagram</span>
            </Link>

        </div>
      </div>
    </footer>
  )
}
