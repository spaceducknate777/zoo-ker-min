const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
          <p>
            As a UX Designer and Creative Strategist, I specialize in creating intuitive, 
            research-driven interfaces that solve real user problems. My work spans across 
            automotive innovation, financial services, government platforms, and retail logistics.
          </p>
          
          <p>
            I believe great design happens at the intersection of user research, strategic thinking, 
            and creative problem-solving. Each project I undertake begins with deep empathy for users 
            and ends with measurable improvements in their experience.
          </p>

          <p>
            With experience working for industry leaders like BMW, USAA, Booz Allen Hamilton, and 
            Trader Joe's, I've developed a comprehensive understanding of how to design solutions 
            that balance user needs, business goals, and technical constraints.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
