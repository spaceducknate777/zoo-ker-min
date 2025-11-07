import { Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="border-accent/50 hover:border-accent"
            >
              <a 
                href="/resume/nathan-zukerman-resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="border-accent/50 hover:border-accent"
            >
              <a 
                href="https://linkedin.com/in/nathanzukerman" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nathan Zukerman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
