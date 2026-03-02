import { motion } from "framer-motion";
import portraitImage from "@/assets/nathan-profile.jpeg";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <motion.div
            className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-border mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img
              src={portraitImage}
              alt="Nathan Zukerman"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Available for mid-level roles
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            nathan zukerman
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Patented Interaction Designer — BMW, USAA & Booz Allen
          </motion.p>

          <motion.p
            className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            I design interaction systems end-to-end — from early research to shipped UI. 
            Patented gesture interface at BMW, design systems serving 
            12M+ users at USAA, five federal agencies at Booz Allen.
          </motion.p>

          {/* Skim-optimized proof bar */}
          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground border-t border-border pt-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <span><span className="text-foreground font-semibold">BMW</span> — Patented gesture system</span>
            <span className="text-border">|</span>
            <span><span className="text-foreground font-semibold">USAA</span> — 12M+ users</span>
            <span className="text-border">|</span>
            <span><span className="text-foreground font-semibold">Booz Allen</span> — 5 federal agencies</span>
            <span className="text-border">|</span>
            <span><span className="text-foreground font-semibold">SCAD</span> — 4.0 / Summa Cum Laude</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
