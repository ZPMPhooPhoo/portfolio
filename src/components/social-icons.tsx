import { Github, Twitter, Linkedin, Instagram, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialIcons() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com", label: "YouTube" },
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full bg-gray-800/50 hover:bg-pink-500/20 hover:text-pink-500 transition-colors"
          >
            {social.icon}
          </Button>
        </a>
      ))}
    </div>
  )
}
