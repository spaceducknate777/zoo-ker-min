import { Search, Target, PenTool, CheckCircle } from "lucide-react";

const HowIBuild = () => {
  const steps = [
    { icon: Search, title: "Frame", description: "Frame problems through research and stakeholder alignment" },
    { icon: Target, title: "Define", description: "Define goals, constraints, and success criteria" },
    { icon: PenTool, title: "Explore", description: "Explore solutions through wireframes, prototypes, and UI systems" },
    { icon: CheckCircle, title: "Validate", description: "Test, refine, and validate decisions before handoff" },
  ];

  return (
    <section id="process" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-10">how I build.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group border border-border rounded-xl p-5 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <step.icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
