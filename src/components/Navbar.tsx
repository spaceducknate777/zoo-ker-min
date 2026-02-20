import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-base font-semibold text-foreground hover:text-accent transition-colors tracking-tight"
          >
            nathan zukerman
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("projects")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <a
              href="/resume/nathan-zukerman-resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground border border-border rounded-md px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
            >
              Resume
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-3">
            <button onClick={() => scrollToSection("projects")} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Case Studies
            </button>
            <button onClick={() => scrollToSection("experience")} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Experience
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              About
            </button>
            <a
              href="/resume/nathan-zukerman-resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-foreground py-2"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
