const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">about.</h2>

        <div className="max-w-3xl space-y-5">
          <p className="text-base text-muted-foreground leading-relaxed">
            SCAD Summa Cum Laude, 4.0 GPA. 7+ years designing complex product experiences across enterprise, federal government, and automotive. I've shipped at scale — 12M+ users at USAA, five federal agencies at Booz Allen, and a patented gesture interface at BMW.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            My background in physical prototyping, stop-motion, and sculpture isn't a side hobby — it's what makes me precise about motion, timing, and tactile feedback in digital interfaces. I think in systems and feel in materials.
          </p>

          <div className="pt-6 border-t border-border">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Skills</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <span className="text-foreground font-medium">Product & Interaction:</span>{" "}
                Figma (Auto Layout), Design Systems, Design Tokens, Motion Design, Accessibility (WCAG 2.1 AA), Handoff Documentation
              </div>
              <div>
                <span className="text-foreground font-medium">Research:</span>{" "}
                Ethnographic Studies, Contextual Inquiry, Usability Testing, Jobs-to-be-Done, Stakeholder Management, Agile/Scrum
              </div>
              <div>
                <span className="text-foreground font-medium">Prototyping:</span>{" "}
                Physical Computing (Arduino, Sensors, Haptics), Nomad Sculpt, ZBrush, Framer, Stop-Motion Animation, HTML/CSS, Git
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
