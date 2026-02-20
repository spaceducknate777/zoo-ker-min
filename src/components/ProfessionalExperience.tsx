const ProfessionalExperience = () => {
  const experiences = [
    {
      role: "Lead UX Researcher",
      company: "BMW Group",
      period: "Contract",
      location: "Woodcliff Lake, NJ",
      description:
        "Led gesture interaction research for autonomous vehicle interfaces. Developed patented gesture vocabulary, conducted on-road testing, and secured $500K+ in continued project funding through executive presentations.",
    },
    {
      role: "UX/UI Designer",
      company: "USAA",
      period: "2 years",
      location: "San Antonio, TX",
      description:
        "Designed mobile-first financial tools serving 13+ million military families. Created accessible icon systems and reduced support calls by 52% through streamlined task flows.",
    },
    {
      role: "Senior UX Research Consultant",
      company: "Booz Allen Hamilton",
      period: "3 years",
      location: "Washington, DC",
      description:
        "Delivered accessibility-first redesigns across 4 federal agencies (DOT, NIH, NLM, Treasury). Achieved 100% WCAG compliance and 45% average task improvement across all engagements.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-10">experience.</h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="border-b border-border pb-8 last:border-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h3 className="text-base font-semibold text-foreground">
                  {exp.role} <span className="text-accent">@ {exp.company}</span>
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
