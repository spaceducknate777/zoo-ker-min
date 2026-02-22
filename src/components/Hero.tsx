import portraitImage from "@/assets/nathan-profile.jpeg";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-border mb-6">
            <img
              src={portraitImage}
              alt="Nathan Zukerman"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-3">
            Available for mid-level roles
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2">
            nathan zukerman
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6">
            Product Designer — Interaction & Motion
          </p>

          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-6">
            I own interaction design end-to-end — from early research to shipped UI systems. 
            7+ years across automotive, fintech, and federal platforms. Shipped at scale: 
            patented gesture interface at BMW, design systems serving 12M+ users at USAA, 
            five federal agencies at Booz Allen.
          </p>

          {/* Skim-optimized proof bar */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground border-t border-border pt-6">
            <span><span className="text-foreground font-semibold">BMW</span> — Patented gesture system</span>
            <span className="text-border">|</span>
            <span><span className="text-foreground font-semibold">USAA</span> — 12M+ users</span>
            <span className="text-border">|</span>
            <span><span className="text-foreground font-semibold">Booz Allen</span> — 5 federal agencies</span>
            <span className="text-border">|</span>
            <span><span className="text-foreground font-semibold">SCAD</span> — 4.0 / Summa Cum Laude</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
