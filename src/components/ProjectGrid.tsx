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
  category: Category[];
  image: string;
  tag: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "BMW Autonomous Gesture Interface",
    category: ["Featured", "Product / UX"],
    image: bmwImage,
    tag: "Product / UX",
    link: "/case-studies/bmw",
  },
  {
    title: "Government Platform Redesign",
    category: ["Featured", "Product / UX"],
    image: boozAllenImage,
    tag: "Product / UX",
    link: "/case-studies/booz-allen",
  },
  {
    title: "Enterprise Financial Tools",
    category: ["Product / UX"],
    image: usaaImage,
    tag: "Product / UX",
    link: "/case-studies/usaa",
  },
  {
    title: "Safety-Critical Systems Design",
    category: ["Product / UX"],
    image: finavImage,
    tag: "Product / UX",
    link: "/case-studies/monster-aisle",
  },
];

const filters: Category[] = ["Featured", "Product / UX", "Creative"];

const ProjectGrid = () => {
  const [active, setActive] = useState<Category>("Featured");

  const filtered = projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Filter tabs */}
        <div className="flex gap-2 mb-8">
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <Link
              key={i}
              to={project.link}
              className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{project.tag}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {active === "Creative" && filtered.length === 0 && (
          <p className="text-muted-foreground text-center py-12">Creative work is showcased in The Lab section below.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
