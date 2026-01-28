import { ArrowRight, FileText, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-8" />
          
          <p className="text-xl text-muted-foreground mb-10">
            Interested in working together or learning more about my process?
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

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
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:natezukerman@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <span className="hidden sm:inline">Email</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/nathanzukerman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </div>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
