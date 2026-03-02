import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nathan Zukerman. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/nathan-zukerman/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:nathanzukerman@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <span className="text-xs text-muted-foreground">Based in Virginia</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
