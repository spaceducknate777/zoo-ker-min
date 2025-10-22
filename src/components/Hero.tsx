import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImage from "/assets/nathan-profile.jpeg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Nathan Zukerman
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                UX Designer • Creative Strategist
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Designing intuitive, research-driven interfaces for BMW, USAA, Booz Allen Hamilton, and Trader Joe's — creating experiences that bridge strategy, empathy, and innovation.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <a href="/nathan-zukerman-resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={portraitImage} 
                alt="Nathan Zukerman, UX Designer" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
