import ProjectCard from "./ProjectCard";
import bmwImage from "@/assets/bmw-project.jpg";
import usaaImage from "@/assets/usaa-storyboard.png";
import boozAllenImage from "@/assets/booz-allen-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "BMW Autonomous Gesture Interface",
      role: "Lead UX Researcher",
      icon: "🚗",
      metrics: "94% intuitive recognition | ↓40% cognitive load | $500K funding secured",
      description: "Designing and validating interaction patterns for next-generation autonomous vehicles.",
      image: bmwImage,
      link: "/case-studies/bmw"
    },
    {
      title: "Government Platform Redesign",
      role: "Senior UX Research Consultant",
      icon: "🏛️",
      metrics: "4 agencies | 100% WCAG | 45% avg. task improvement",
      description: "Owning usability improvements in high-constraint, data-heavy federal systems.",
      image: boozAllenImage,
      link: "/case-studies/booz-allen"
    },
    {
      title: "Enterprise Financial Tools",
      role: "UX/UI Designer",
      icon: "💰",
      metrics: "67% task completion boost | ↓52% support calls",
      description: "Reducing complexity across critical financial workflows for military families.",
      image: usaaImage,
      link: "/case-studies/usaa"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Each case study shows goals, constraints, tradeoffs, and outcomes
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
