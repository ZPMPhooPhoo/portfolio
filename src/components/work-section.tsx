import { ProjectCard } from "@/components/project-card";

export function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce platform with cart functionality",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Dashboard UI",
      description:
        "Admin dashboard with data visualization and user management",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "shadcn/ui", "Chart.js"],
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Cross-platform mobile application with React Native",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "Expo", "Firebase"],
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website with dark mode support",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Content management system with markdown support",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "MDX", "Prisma"],
    },
    {
      id: 6,
      title: "Landing Page",
      description: "High-converting landing page with animations",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "GSAP", "Styled Components"],
    },
  ];

  return (
    <section className="py-20 bg-black md:px-20" id="work">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          WORK/PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
