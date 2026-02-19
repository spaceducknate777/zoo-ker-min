import { ArrowRight, Award, Zap, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bmwImage from "@/assets/bmw-project.jpg";
import bmwGestureShapes from "@/assets/bmw-gesture-shapes.jpg";

const FeaturedProject = () => {
  const navigate = useNavigate();

  return (
    <section id="featured-project" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Featured Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            BMW Autonomous Gesture Interface
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A patented natural gesture system for autonomous vehicles — designed, prototyped, and validated from hand sketches to on-road testing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12 animate-fade-in">
          {/* Lead visual */}
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] ring-1 ring-border/50 hover:ring-accent/50 transition-all duration-500 group">
            <img 
              src={bmwImage} 
              alt="BMW Gesture Interface — interaction prototype"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-semibold text-accent mb-1">Lead UX Researcher & Interface Designer</p>
              <p className="text-xs text-muted-foreground">Human-Machine Interaction Design · Autonomous Systems</p>
            </div>
          </div>

          {/* Key highlights */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, value: "94%", label: "Gesture Recognition", sub: "Accuracy rate" },
                { icon: DollarSign, value: "$500K+", label: "Funding Secured", sub: "Prototype investment" },
                { icon: Award, value: "Patented", label: "Gesture Vocabulary", sub: "BMW iNext concept" },
                { icon: Zap, value: "32%", label: "Faster Tasks", sub: "vs. touchscreen baseline" },
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-all duration-300">
                  <stat.icon className="h-5 w-5 text-accent mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs font-semibold text-foreground/80">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Sketches teaser */}
            <div className="relative rounded-xl overflow-hidden ring-1 ring-border/50 h-48">
              <img 
                src={bmwGestureShapes} 
                alt="Hand-drawn gesture sketches — BMW project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent flex items-center pl-6">
                <p className="text-sm font-semibold text-foreground max-w-[200px]">
                  Designed from pen-and-paper sketches to on-road validation
                </p>
              </div>
            </div>

            <Button
              variant="accent"
              size="lg"
              onClick={() => navigate("/case-studies/bmw")}
              className="group w-fit shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              Read Full Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
