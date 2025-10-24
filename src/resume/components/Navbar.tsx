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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-foreground hover:text-accent transition-colors"
          >
            Nathan Zukerman
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("hero")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection("hero")} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
              Case Studies
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
