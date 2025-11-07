const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full" />
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
          <p className="text-center font-medium text-xl text-foreground/90">
            I'm a UX Designer & Research Lead with 7+ years of experience across startups, government, and enterprise. My work blends research, design systems, and storytelling to create accessible experiences that make people's lives easier.
          </p>
          
          <p className="border-l-4 border-accent pl-6 italic text-foreground/80">
            I believe great design happens where empathy meets strategy — every project begins with listening deeply to users and ends with measurable improvement in their experience.
          </p>

          <p className="text-center">
            When I'm not designing, I'm building stop-motion animations, sculpting small worlds, or hiking with my Shiba-Chihuahua mix.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
