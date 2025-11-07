import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectCard = ({ title, role, description, image, link }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-500 hover:shadow-[var(--shadow-elevated)] bg-card">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
            {role}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm font-semibold text-accent/80 mb-3">
            {role}
          </p>
        </div>
        
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>

        {link && (
          <Button 
            variant="outline" 
            className="group/button w-full mt-2 border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            asChild
          >
            <Link to={link}>
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
