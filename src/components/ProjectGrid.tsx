import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bmwImage from "@/assets/bmw-project.jpg";
import usaaImage from "@/assets/usaa-sketches-journey.jpg";
import boozAllenImage from "@/assets/dot-its-screenshot.png";
import finavImage from "@/assets/finav-project.jpg";
import pearlImage from "@/assets/pearl-profile-page.png";

type Category = "Featured" | "Product / UX" | "Creative";

interface Project {
  title: string;
  outcome: string;
  category: Category[];
  image: string;
  tag: string;
  link: string;
  video?: string;
  shipped?: string;
  featuredBadge?: string;
}

const projects: Project[] = [
  {
    title: "BMW — Autonomous Gesture Interface",
    outcome: "Patented. 94% intuitive recognition. $500K+ prototype funding.",
    category: ["Featured", "Product / UX"],
    image: bmwImage,
    tag: "Interaction Design · Automotive",
    link: "/case-studies/bmw",
    shipped: "Shipped 2019",
    featuredBadge: "⚡ Patented by BMW",
  },
  {
    title: "Pearl — Career Platform Redesign",
    outcome: "25% conversion lift. 50+ component design system. 40% faster handoff.",
    category: ["Featured", "Product / UX"],
    image: pearlImage,
    tag: "Product Design · Fintech",
    link: "/case-studies/pearl",
    shipped: "Shipped 2023",
  },
  {
    title: "Booz Allen — Federal Platform Redesign",
    outcome: "5 agencies. 30% accessibility improvement. NIH search time −45%.",
    category: ["Featured", "Product / UX"],
    image: boozAllenImage,
    tag: "UX Research & Strategy · Gov",
    link: "/case-studies/booz-allen",
    shipped: "Shipped 2022",
  },
  {
    title: "USAA — Financial Tools for Military Families",
    outcome: "Iconography adopted sitewide. 25% engagement lift. 12M+ users.",
    category: ["Product / UX"],
    image: usaaImage,
    tag: "Design Systems · Fintech",
    link: "/case-studies/usaa",
    shipped: "Shipped 2020",
  },
];

const filters: Category[] = ["Featured", "Product / UX"];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        to={project.link}
        className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              project.video && isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              preload="none"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
          {/* Shipped badge */}
          {project.shipped && (
            <div className="absolute top-3 right-3 z-10">
              <span className="px-2.5 py-1 bg-background/80 backdrop-blur-sm text-foreground text-[10px] font-bold uppercase tracking-wider rounded-full border border-border/50">
                {project.shipped}
              </span>
            </div>
          )}
          {/* Featured badge (e.g. Patent) */}
          {project.featuredBadge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                {project.featuredBadge}
              </span>
            </div>
          )}
        </div>
        <div className="p-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-accent font-medium mb-1">{project.outcome}</p>
            <p className="text-xs text-muted-foreground">{project.tag}</p>
          </div>
          <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors mt-0.5">
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProjectGrid = () => {
  const [active, setActive] = useState<Category>("Featured");

  const filtered = projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-baseline justify-between mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground">selected work.</h2>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-sm px-4 py-1.5 rounded-md border transition-all duration-200 font-medium ${
                  active === f
                    ? "bg-foreground text-background border-foreground shadow-sm"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
