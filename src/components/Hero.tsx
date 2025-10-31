import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold">
            Hi, I'm <span className="text-accent">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
            Business Analytics & AI-Driven Product Builder
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I turn data into decisions and build innovative AI-powered solutions for the modern world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105 glow"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
