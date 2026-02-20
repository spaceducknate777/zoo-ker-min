import portraitImage from "@/assets/nathan-profile.jpeg";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-border mb-6">
            <img 
              src={portraitImage} 
              alt="Nathan Zukerman"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
            nathan zukerman
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-medium mb-4">
            Product Designer — Interaction & Motion
          </p>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            I design interaction-focused product experiences — from research through shipped UI systems. My background in physical prototyping and animation sharpens how I think about motion, accessibility, and real-world constraints.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
