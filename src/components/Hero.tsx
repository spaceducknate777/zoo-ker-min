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
            Creative Technologist & Spatial Interaction Designer
          </p>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            SCAD-trained designer specializing in the intersection of high-stakes enterprise systems and narrative-driven maker practices. I bridge traditional craftsmanship and digital innovation — from patented gesture interfaces to hand-built prototypes — designing frame-by-frame with obsessive focus on form, motion, and human emotion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
