import { Search, Target, PenTool, CheckCircle } from "lucide-react";

const HowIBuild = () => {
  const steps = [
    { icon: Search, title: "Frame", description: "Research and stakeholder alignment to define the real problem." },
    { icon: Target, title: "Define", description: "Set clear goals, constraints, and measurable success criteria." },
    { icon: PenTool, title: "Explore", description: "Wireframes, prototypes, and UI systems — physical and digital." },
    { icon: CheckCircle, title: "Validate", description: "Test with real users and refine before handoff." },
  ];

  return (
    <section id="process" className="py-16 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">how I build.</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-3 p-4 rounded-xl border border-border hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-2">
                <step.icon className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
