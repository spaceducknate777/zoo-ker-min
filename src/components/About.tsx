const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">about.</h2>

        <div className="max-w-3xl space-y-5">
          <p className="text-base text-muted-foreground leading-relaxed">
            I'm a Creative Technologist & Spatial Interaction Designer with 7+ years of post-grad experience bridging enterprise complexity and narrative-driven maker practices. SCAD Summa Cum Laude graduate with a 4.0 GPA.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            I own problems end-to-end — from ethnographic research and spatial reasoning to hand-built prototypes and high-fidelity interfaces. My sculpture and animation background gives me a maker's intuition that most designers simply don't have.
          </p>

          <div className="pt-6 border-t border-border">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Core Competencies</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <span className="text-foreground font-medium">Spatial & Interaction:</span>{" "}
                Spatial Computing, Haptic Interfaces, Gesture Systems, AR/VR Prototyping, Physical-Digital Systems, Nomad Sculpt, ZBrush
              </div>
              <div>
                <span className="text-foreground font-medium">Design & Strategy:</span>{" "}
                Design Systems, Design Tokens, Design Ops, Product Strategy, Service Design, Accessibility (WCAG 2.1 AA), Handoff Documentation
              </div>
              <div>
                <span className="text-foreground font-medium">Research & Insights:</span>{" "}
                Ethnographic Studies, Contextual Inquiry, Usability Testing, Jobs-to-be-Done (JTBD), Stakeholder Management, Agile/Scrum
              </div>
              <div>
                <span className="text-foreground font-medium">The Maker's Toolkit:</span>{" "}
                Figma (Auto Layout), Framer, Adobe CC, Electronic Prototyping (Sensors/Haptics), Stop-Motion Animation, Physical Form Studies, HTML/CSS, Git
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Why It Matters</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                <span><strong className="text-foreground">High Craft:</strong> Sculpture, stop-motion, and physical computing that AI cannot replicate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                <span><strong className="text-foreground">Professional Scale:</strong> BMW, USAA, and federal agencies prove I can handle millions of users</span>
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
