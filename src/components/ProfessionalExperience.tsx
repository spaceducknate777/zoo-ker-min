const ProfessionalExperience = () => {
  const experiences = [
    {
      role: "Creative R&D Residency",
      company: "Independent Lab",
      period: "Oct 2023 – Present",
      location: "Remote / Studio",
      description:
        "Leveraging Nomad Sculpt and ZBrush to bridge traditional sculpture with modern spatial computing prototyping. Conducting frame-by-frame stop-motion studies to master micro-interactions and sequential timing. Developing haptic input system architectures and interactive hardware prototypes using Arduino Mega and LED arrays.",
      highlight: true,
    },
    {
      role: "Senior Interaction Designer",
      company: "Pearl",
      period: "Feb 2023 – Oct 2023",
      location: "Remote",
      description:
        "Boosted conversion rates by 25% through comprehensive responsive redesign for a high-volume fintech platform. Architected a unified design system with 50+ reusable components, reducing handoff time by 40%.",
    },
    {
      role: "UX Research & Design Lead",
      company: "Booz Allen Hamilton",
      period: "Sept 2019 – Oct 2021",
      location: "Washington, DC",
      description:
        "Directed UX strategy for 5 federal agencies (NASA, NIH, DOT), achieving 30% average improvement in accessibility and usability scores. Redesigned the NIH CDE Repository, reducing search time by 45%.",
    },
    {
      role: "UX Innovation Apprentice",
      company: "BMW Group",
      period: "Sept 2019 – Nov 2019",
      location: "Woodcliff Lake, NJ",
      description:
        "Architected a patented natural gesture interface for autonomous vehicles, achieving 94% intuitive recognition. Secured $500K+ in prototype funding through C-suite presentations.",
    },
    {
      role: "UI/UX Design Intern",
      company: "USAA",
      period: "June 2018 – Aug 2018",
      location: "San Antonio, TX",
      description:
        "Created narrative-driven iconography system adopted into the official USAA library serving 12M+ users. Improved engagement by 25% through mobile-first financial tools for military families.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-10">experience.</h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`border-b border-border pb-8 last:border-0 last:pb-0 ${
                (exp as any).highlight ? "relative pl-4 border-l-2 border-l-accent" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h3 className="text-base font-semibold text-foreground">
                  {exp.role} <span className="text-accent">@ {exp.company}</span>
                  {(exp as any).highlight && (
                    <span className="ml-2 text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full font-medium">
                      Current
                    </span>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {exp.period} <span className="mx-1">|</span> {exp.location}
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
