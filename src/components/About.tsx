import { User, Briefcase, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center animate-scale-in">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-4 border-accent/30 flex items-center justify-center">
              <User className="w-32 h-32 text-accent" />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-secondary leading-relaxed">
              I'm a passionate <span className="text-accent font-semibold">business analytics professional</span> and 
              AI-driven product builder with a mission to create solutions that matter.
            </p>
            
            <Card className="bg-card border-accent/20 p-6 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Desto</h3>
                  <p className="text-muted-foreground">
                    Founded an AI-powered QR code restaurant management platform revolutionizing the dining experience 
                    through intelligent automation and data-driven insights.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-accent/20 p-6 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Mental Health AI</h3>
                  <p className="text-muted-foreground">
                    Developed an innovative AI product focused on mental health support, leveraging machine learning 
                    to provide personalized care and early intervention.
                  </p>
                </div>
              </div>
            </Card>

            <p className="text-lg text-secondary leading-relaxed pt-4">
              I combine technical expertise with business acumen to build products that solve real problems 
              and create meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
