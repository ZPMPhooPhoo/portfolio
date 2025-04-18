import image from "@/assets/images/images.jpg";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "My Portflio",
      description:
        "A fully responsive e-commerce platform with cart functionality and payment integration",
      image: "https://placehold.co/500x300",
      tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      liveUrl: "https://zinphoomon.vercel.app/",
      githubUrl: "https://github.com/ZPMPhooPhoo/portfolio",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      description:
        "Comprehensive admin dashboard with data visualization and user management features",
      image: "https://placehold.co/500x300",
      tags: ["React", "Tailwind UI", "Chart.js", "Firebase"],
      liveUrl: "https://example.com/dashboard",
      githubUrl: "https://github.com/username/dashboard",
    },
    {
      id: 3,
      title: "Mobile App",
      description:
        "Cross-platform mobile application with real-time messaging and notifications",
      image: "https://placehold.co/500x300",
      tags: ["React Native", "Expo", "Firebase", "Socket.io"],
      liveUrl: "https://example.com/mobile-app",
      githubUrl: "https://github.com/username/mobile-app",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Personal portfolio website with dark mode support and animations",
      image: "https://placehold.co/500x300",
      tags: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/username/portfolio",
    },
  ];

  return (
    <section className="py-20 bg-black md:px-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          MY PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-pink-500/50 transition-all duration-300 h-full flex flex-col rounded-lg">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-300 border border-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6 pt-0 flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center px-4 py-2 border border-pink-500/50 rounded-md text-white hover:bg-pink-500/20 hover:text-pink-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center px-4 py-2 border border-purple-500/50 rounded-md text-white hover:bg-purple-500/20 hover:text-purple-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Code
          </a>
        )}
      </div>
    </div>
  );
}
