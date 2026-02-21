import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bmwImage from "@/assets/bmw-project.jpg";
import usaaImage from "@/assets/usaa-sketches-journey.jpg";
import boozAllenImage from "@/assets/dot-its-screenshot.png";
import finavImage from "@/assets/finav-3d-floorplan.webp";

type Category = "Featured" | "Product / UX" | "Creative";

interface Project {
  title: string;
  outcome: string;
  category: Category[];
  image: string;
  tag: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "BMW — Autonomous Gesture Interface",
    outcome: "Patented. 94% intuitive recognition. $500K+ prototype funding.",
    category: ["Featured", "Product / UX"],
    image: bmwImage,
    tag: "Interaction Design · Automotive",
    link: "/case-studies/bmw",
  },
  {
    title: "Booz Allen — Federal Platform Redesign",
    outcome: "5 agencies. 30% accessibility improvement. NIH search time −45%.",
    category: ["Featured", "Product / UX"],
    image: boozAllenImage,
    tag: "UX Research & Strategy · Gov",
    link: "/case-studies/booz-allen",
  },
  {
    title: "USAA — Financial Tools for Military Families",
    outcome: "Iconography adopted sitewide. 25% engagement lift. 12M+ users.",
    category: ["Product / UX"],
    image: usaaImage,
    tag: "Design Systems · Fintech",
    link: "/case-studies/usaa",
  },
  {
    title: "FiNav — Spatial Wayfinding UI",
    outcome: "3D floor plan interface for real-time indoor navigation.",
    category: ["Product / UX"],
    image: finavImage,
    tag: "Spatial UI · Prototype",
    link: "/case-studies/monster-aisle",
  },
  {
    title: "[AI Product] — AI-Native [Domain] Tool",
    outcome: "[Key metric placeholder — e.g. 40% faster task completion]",
    category: ["Featured", "Product / UX"],
    image: "",
    tag: "AI/ML · SaaS · 2025",
    link: "/case-studies/ai-product",
  },
];

const filters: Category[] = ["Featured", "Product / UX"];

const ProjectGrid = () => {
  const [active, setActive] = useState<Category>("Featured");

  const filtered = projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">selected work.</h2>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-sm px-4 py-1.5 rounded-md border transition-colors ${
                  active === f
                    ? "border-foreground text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <Link
              key={i}
              to={project.link}
              className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <span className="text-3xl">🧠</span>
                      <p className="text-sm text-muted-foreground font-medium">Coming Soon</p>
                    </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
