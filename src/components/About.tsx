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
            I'm a Product Designer with a strong UX foundation and experience working on complex, constraint-heavy systems.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I enjoy owning problems end-to-end, collaborating closely with engineers and stakeholders, and making thoughtful tradeoffs that lead to better products.
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

          <p className="text-base text-muted-foreground/80 text-center italic mt-8">
            Outside of design, I bring the same curiosity and creativity to stop-motion animation, sculpting, and world-building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
