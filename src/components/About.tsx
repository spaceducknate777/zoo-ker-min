const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">about.</h2>

        <div className="max-w-4xl">
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Interaction Designer specialized in high-scale systems. From patented gesture tech at BMW to systems serving 12M+ users at USAA, I focus on the intersection of physical haptics and digital logic. SCAD — Summa Cum Laude, 4.0 GPA.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Tools</h3>
              <p className="text-muted-foreground leading-relaxed">
                Figma · Framer · Adobe CC
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Craft</h3>
              <p className="text-muted-foreground leading-relaxed">
                Interaction · Motion · Design Systems · Accessibility (WCAG 2.1 AA)
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Shipping</h3>
              <p className="text-muted-foreground leading-relaxed">
                HTML/CSS · Git · Jira · Dev Handoff
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
