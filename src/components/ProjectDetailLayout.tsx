import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProjectDetailLayoutProps {
  title: string;
  role: string;
  timeline: string;
  client: string;
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  keyTakeaways: string[];
  children?: React.ReactNode;
}

const ProjectDetailLayout = ({
  title,
  role,
  timeline,
  client,
  heroImage,
  overview,
  problem,
  solution,
  results,
  keyTakeaways,
  children
}: ProjectDetailLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-xl text-accent font-medium mb-6">{role}</p>
            
            <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">Client:</span> {client}
              </div>
              <div>
                <span className="font-semibold text-foreground">Timeline:</span> {timeline}
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 animate-scale-in">
            <img 
              src={heroImage} 
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">{overview}</p>
          </div>

          {/* Problem Statement */}
          <div className="animate-fade-in bg-secondary/30 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">The Challenge</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">{problem}</p>
          </div>

          {/* Solution */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">My Approach</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">{solution}</p>
          </div>

          {/* Custom content if provided */}
          {children}

          {/* Results */}
          <div className="animate-fade-in bg-accent/5 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">Impact & Results</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-6" />
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Takeaways */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Takeaways</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-6" />
            <ul className="space-y-4">
              {keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to portfolio button */}
          <div className="pt-8 text-center">
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => navigate("/")}
              className="group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailLayout;
