import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectCard = ({ title, role, description, image, link }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <Card className="group overflow-hidden border-border hover:border-accent transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm font-medium text-accent">
            {role}
          </p>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {link && (
          <Button 
            variant="ghost" 
            className="group/button p-0 h-auto font-medium text-accent hover:text-accent/80"
            onClick={handleClick}
          >
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
