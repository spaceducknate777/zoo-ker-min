const ProfessionalExperience = () => {
  const experiences = [
    {
      role: "Interaction Designer",
      company: "Pearl",
      period: "Feb – Oct 2023",
      location: "Remote",
      description:
        "Improved conversion 25% via responsive redesign of a high-volume fintech platform. Built a unified design system with 50+ components, cutting handoff time 40%.",
    },
    {
      role: "UX Designer",
      company: "Booz Allen Hamilton",
      period: "Sept 2019 – Oct 2021",
      location: "Washington, DC",
      description:
        "Designed UX for 5 federal agencies including NASA, NIH, and DOT. 30% average accessibility improvement. Redesigned NIH CDE Repository — search time down 45%.",
    },
    {
      role: "UX Design Intern",
      company: "BMW Group",
      period: "Sept – Nov 2019",
      location: "Savannah, GA",
      description:
        "Designed a natural gesture interface for autonomous vehicles with 94% intuitive recognition. Contributed to $500K+ prototype funding via C-suite presentation.",
    },
    {
      role: "UI/UX Design Intern",
      company: "USAA",
      period: "June – Aug 2018",
      location: "San Antonio, TX",
      description:
        "Designed an iconography system adopted into the official USAA library, used by 12M+ members. Contributed to 25% engagement increase through mobile-first financial tools.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl font-bold text-foreground">experience.</h2>
          <a
            href="/resume/nathan-zukerman-resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            View full résumé →
          </a>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {experiences.map((exp, i) => (
            <div key={i} className="py-7 first:pt-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-base font-semibold text-foreground">
                  {exp.role}{" "}
                  <span className="text-accent font-normal">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period} · {exp.location}
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* R&D note — frames the gap without making it the lead */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
            <span className="text-foreground font-medium">2021 – Present (Independent R&D):</span>{" "}
            Physical computing prototypes (Arduino, haptics), 3D sculpting in Nomad Sculpt & ZBrush, 
            and stop-motion animation studies — all feeding directly into how I think about 
            motion, tactile feedback, and interaction timing. Visible in{" "}
            <button
              onClick={() => document.getElementById("creative")?.scrollIntoView({ behavior: "smooth" })}
              className="text-accent underline underline-offset-2 hover:no-underline cursor-pointer"
            >
              The Lab
            </button>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
