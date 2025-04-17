import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import image from "@/assets/images/images.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-pink-500/50 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={project.title}
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white">
          {project.title}
        </h3>
        <p className="text-gray-400">{project.description}</p>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-gray-800 text-gray-300 border-gray-700"
          >
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
