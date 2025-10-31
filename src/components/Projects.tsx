import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import destoImage from "@/assets/desto-project.jpg";
import mentalHealthImage from "@/assets/mental-health-project.jpg";
import portfolioImage from "@/assets/portfolio-project.jpg";

const projects = [
  {
    title: "Desto",
    description: "AI-powered QR code restaurant management platform that revolutionizes dining experiences through intelligent automation, real-time analytics, and seamless customer engagement.",
    tech: ["React", "Node.js", "MongoDB", "AI/ML", "QR Technology"],
    image: destoImage,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mental Health AI",
    description: "Innovative AI-driven mental health support platform providing personalized care, early intervention, and therapeutic guidance through advanced machine learning algorithms.",
    tech: ["Python", "TensorFlow", "React", "NLP", "Cloud Services"],
    image: mentalHealthImage,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern, minimalist personal portfolio showcasing projects and skills with a focus on clean design, smooth animations, and optimal user experience.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: portfolioImage,
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card border-border hover:border-accent/50 transition-all hover:scale-[1.02] hover:glow-hover animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
