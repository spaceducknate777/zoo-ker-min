import { ArrowRight, FileText, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import portraitImage from "@/assets/nathan-profile.jpeg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-sm font-medium text-foreground">Open to Opportunities</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/30">
                <GraduationCap className="h-4 w-4 text-success" />
                <span className="text-sm font-medium text-foreground">SCAD — Summa Cum Laude</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg font-semibold text-accent uppercase tracking-wide">
                Product Designer & Creative Strategist
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Designing at the intersection of craft, code & interaction
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Summa Cum Laude SCAD graduate specializing in the intersection of high-stakes enterprise systems and narrative-driven maker practices. From patented gesture interfaces to hand-built prototypes — every project is crafted frame-by-frame with obsessive attention to form, motion, and emotion.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => scrollToSection("featured-project")}
                className="group shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                See My Best Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                    className="border-2 hover:border-accent transition-all duration-300"
                  >
                    <a 
                      href="/resume/nathan-zukerman-resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download PDF resume</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl opacity-50" />
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] ring-1 ring-border/50 hover:ring-accent/50 transition-all duration-500 hover:shadow-[var(--shadow-glow)]">
              <img 
                src={portraitImage} 
                alt="Nathan Zukerman, Product Designer & Maker"
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
