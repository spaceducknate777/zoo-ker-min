import ProjectCard from "./ProjectCard";
import bmwImage from "@/assets/bmw-project.jpg";
import usaaImage from "@/assets/usaa-storyboard.png";
import boozAllenImage from "@/assets/booz-allen-project.jpg";
import finavImage from "@/assets/finav-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "BMW Gesture Interface",
      role: "Lead UX Researcher",
      icon: "🚗",
      metrics: "94% intuitive recognition | ↓40% cognitive load | $500K funding secured",
      description: "Gesture-based interactions for autonomous driving.",
      image: bmwImage,
      link: "/case-studies/bmw"
    },
    {
      title: "USAA Financial Tools",
      role: "UX/UI Designer",
      icon: "💰",
      metrics: "67% task completion boost | ↓52% support calls | WCAG 2.1 AA compliance",
      description: "Enhanced usability for military families by simplifying financial management workflows and improving accessibility.",
      image: usaaImage,
      link: "/case-studies/usaa"
    },
    {
      title: "Federal Design Portfolio",
      role: "Senior UX Research Consultant",
      icon: "🏛️",
      metrics: "4 agencies | 12+ contracts | 100% WCAG | 45% avg. task improvement",
      description: "Built trusted advisor relationships across DOT, NIH, NLM, and Treasury. Delivered concurrent federal engagements with rapid stakeholder onboarding and reusable design standards.",
      image: boozAllenImage,
      link: "/case-studies/booz-allen"
    },
    {
      title: "FINAV Fire Management System",
      role: "UX Designer & Research Lead",
      icon: "🔥",
      metrics: "89% navigation accuracy improvement | Safety-critical design framework",
      description: "Designed an AR-assisted firefighter navigation and communication system for use in high-stress, low-visibility environments.",
      image: finavImage,
      link: "/case-studies/monster-aisle"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Designing innovative experiences for BMW, USAA, government agencies, and emergency response systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
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
