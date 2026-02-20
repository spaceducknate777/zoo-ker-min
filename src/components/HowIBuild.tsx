const HowIBuild = () => {
  const steps = [
    { num: "01", title: "Frame", description: "Research and stakeholder alignment. Find the real problem before touching the design." },
    { num: "02", title: "Define", description: "Set goals, constraints, and how you'll know it worked. No ambiguous success criteria." },
    { num: "03", title: "Explore", description: "Wireframes, physical prototypes, UI systems. Move fast at low fidelity, deliberate at high." },
    { num: "04", title: "Ship", description: "Validated, documented, and handed off clean. Design doesn't end at Figma." },
  ];

  return (
    <section id="process" className="py-16 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">how I work.</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {steps.map((step, index) => (
            <div key={index} className="bg-background p-6 flex flex-col gap-3">
              <span className="text-xs font-semibold text-accent tracking-wider">{step.num}</span>
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
