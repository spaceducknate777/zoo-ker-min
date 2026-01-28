import { Search, Target, PenTool, CheckCircle } from "lucide-react";

const HowIBuild = () => {
  const steps = [
    {
      icon: Search,
      title: "Frame",
      description: "Frame problems through research and stakeholder alignment"
    },
    {
      icon: Target,
      title: "Define",
      description: "Define goals, constraints, and success criteria"
    },
    {
      icon: PenTool,
      title: "Explore",
      description: "Explore solutions through wireframes, prototypes, and UI systems"
    },
    {
      icon: CheckCircle,
      title: "Validate",
      description: "Test, refine, and validate decisions before handoff"
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How I Build Products
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I approach product design as a balance of user needs, system constraints, and iteration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-accent uppercase tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
