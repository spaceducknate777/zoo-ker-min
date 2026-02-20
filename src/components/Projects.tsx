import ProjectCard from "./ProjectCard";
import usaaImage from "@/assets/usaa-sketches-journey.jpg";
import boozAllenImage from "@/assets/booz-allen-wireframes.jpg";
import finavImage from "@/assets/finav-3d-floorplan.webp";

const Projects = () => {
  const projects = [
    {
      title: "Government Platform Redesign",
      role: "Senior UX Research Consultant",
      icon: "🏛️",
      metrics: "4 agencies | 100% WCAG | 45% avg. task improvement",
      description: "Accessibility-first redesign of mission-critical federal healthcare and government interfaces serving millions of users.",
      image: boozAllenImage,
      link: "/case-studies/booz-allen"
    },
    {
      title: "Enterprise Financial Tools",
      role: "Visual Language & Narrative Strategist",
      icon: "💰",
      metrics: "67% task completion boost | ↓52% support calls",
      description: "Reducing complexity across critical financial workflows for military families at scale.",
      image: usaaImage,
      link: "/case-studies/usaa"
    },
    {
      title: "Safety-Critical Systems Design",
      role: "UX Researcher & Interaction Designer",
      icon: "🔥",
      metrics: "AR navigation | Real-time vitals | SAGIS integration",
      description: "Designing life-saving AR interfaces for firefighter navigation, communication, and situational awareness in zero-visibility environments.",
      image: finavImage,
      link: "/case-studies/monster-aisle"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Professional Scale</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Enterprise & Government Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Proving I can handle complexity, compliance, and millions of users
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          {projects.map((project, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
