import { ArrowRight, Download } from "lucide-react";
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Open to Opportunities</span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                👋 Hi, I'm Nathan Zukerman
              </h1>
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                Senior UX Designer & Research Lead
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I craft inclusive, research-driven digital experiences for BMW, Booz Allen, and USAA — helping over 500K+ users through accessible, data-informed design systems.
            </p>
            
            <p className="text-base font-semibold text-foreground/90 max-w-lg">
              Currently open to senior UX design or research roles where human-centered design drives measurable impact.
            </p>
            
            <p className="text-sm text-muted-foreground/80 max-w-lg italic">
              Available for full-time remote or hybrid roles.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Contact Me Button */}
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Resume Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
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
                        <Download className="mr-2 h-4 w-4" />
                        Resume (PDF)
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Standard PDF resume for viewing and printing</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="lg"
                      asChild
                      className="border-2 hover:border-accent transition-all duration-300"
                    >
                      <a 
                        href="/resume/nathan-zukerman-resume-ats-optimized.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        ATS Resume
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Optimized for Applicant Tracking Systems (ATS)</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl opacity-50" />
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] ring-1 ring-border/50 hover:ring-accent/50 transition-all duration-500 hover:shadow-[var(--shadow-glow)]">
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
