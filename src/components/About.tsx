const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">about.</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <div className="space-y-4">
            <p className="text-base text-muted-foreground leading-relaxed">
              SCAD graduate, Summa Cum Laude, 4.0 GPA. I've designed for scale — 12M+ users at USAA, 
              five federal agencies at Booz Allen, a patented gesture system at BMW. 
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My physical prototyping background (sculpture, stop-motion, hardware) isn't decorative. 
              It's why I'm precise about motion timing, tactile feedback, and the edge cases 
              that only show up when you build the thing for real.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I work best at early-to-mid-stage companies where design has real ownership — 
              small teams, high stakes, fast iteration.
            </p>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Core Tools</h3>
              <p className="text-muted-foreground leading-relaxed">
                Figma (Auto Layout, Variables), Framer, Adobe CC, Nomad Sculpt, ZBrush
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Disciplines</h3>
              <p className="text-muted-foreground leading-relaxed">
                Interaction Design, Motion Design, Design Systems, Research (JTBD, Contextual Inquiry, Usability Testing), Accessibility (WCAG 2.1 AA)
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Prototyping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Physical Computing (Arduino, Sensors, Haptics), Stop-Motion, HTML/CSS, Git
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
