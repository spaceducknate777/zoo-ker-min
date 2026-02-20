const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">about.</h2>

        <div className="max-w-3xl space-y-5">
          <p className="text-base text-muted-foreground leading-relaxed">
            I'm a Product Designer & Creative Strategist with 7+ years of post-grad experience bridging enterprise complexity and narrative-driven maker practices. SCAD Summa Cum Laude graduate with a 4.0 GPA.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            I own problems end-to-end — from ethnographic research and spatial reasoning to hand-built prototypes and high-fidelity interfaces. My sculpture and animation background gives me a maker's intuition that most designers simply don't have.
          </p>

          <div className="pt-6 border-t border-border">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">What I bring to product teams</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                End-to-end ownership from discovery through delivery
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                Clear communication with engineers and stakeholders
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                Experience navigating technical and organizational constraints
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                Focus on shipping work that holds up in real-world conditions
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-border">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Core Values</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                <span><strong className="text-foreground">Radical Empathy:</strong> Designing for military families, firefighters, and the underserved</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                <span><strong className="text-foreground">Maker's Integrity:</strong> Building prototypes by hand to ensure they work in the real world</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                <span><strong className="text-foreground">Innovation over Templates:</strong> Rejecting cookie-cutter UX for patented interaction models</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
