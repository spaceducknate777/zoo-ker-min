const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full" />
        </div>

        <div className="animate-fade-in space-y-6">
          <p className="text-xl text-foreground/90 leading-relaxed text-center">
            I'm a Product Designer & Creative Strategist with 7+ years of post-grad experience bridging enterprise complexity and narrative-driven maker practices. SCAD Summa Cum Laude graduate with a 4.0 GPA.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I own problems end-to-end — from ethnographic research and spatial reasoning to hand-built prototypes and high-fidelity interfaces. My sculpture and animation background gives me a maker's intuition that most designers simply don't have.
          </p>

          <div className="bg-card border border-border rounded-xl p-6 mt-8">
            <h3 className="font-semibold text-foreground mb-4 text-center">What I bring to product teams:</h3>
            <ul className="space-y-3 text-muted-foreground max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
                <span>End-to-end ownership from discovery through delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
                <span>Clear communication with engineers and stakeholders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
                <span>Experience navigating technical and organizational constraints</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
                <span>Focus on shipping work that holds up in real-world conditions</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 mt-8">
            <h3 className="font-semibold text-foreground mb-4 text-center">Core Values</h3>
            <ul className="space-y-3 text-muted-foreground max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
                <span><strong className="text-foreground">Radical Empathy:</strong> Designing for military families, firefighters, and the underserved</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
                <span><strong className="text-foreground">Maker's Integrity:</strong> Building prototypes by hand to ensure they work in the real world</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
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
