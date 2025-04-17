import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { ProjectSection } from "@/components/project-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
