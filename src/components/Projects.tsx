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
      description: "Developed gesture-based interactions for autonomous driving, combining human behavior insights with interface innovation. Result: validated 8 gestures with 94% intuitive recognition, reducing driver cognitive load by 40% and informing BMW's production HMI standards.",
      image: bmwImage,
      link: "/case-studies/bmw"
    },
    {
      title: "USAA Financial Tools",
      role: "UX/UI Designer",
      description: "Enhanced usability for military families by simplifying financial management workflows and improving accessibility. Result: boosted task completion by 67%, reduced support calls by 52%, and achieved WCAG 2.1 AA compliance for 15K+ users with disabilities.",
      image: usaaImage,
      link: "/case-studies/usaa"
    },
    {
      title: "Booz Allen Hamilton — Government Design Projects",
      role: "Research Lead",
      description: "Led UX research for three major government platform redesigns (DOT, NIH/NLM CDE, FDG Calendar), aligning accessibility, usability, and compliance at scale. Result: achieved 100% WCAG 2.1 AA compliance, increased task success by 45%, and standardized UX practices adopted across 12+ federal contracts.",
      image: boozAllenImage,
      link: "/case-studies/booz-allen"
    },
    {
      title: "FINAV Fire Management System",
      role: "UX Designer & Research Lead",
      description: "Designed an AR-assisted firefighter navigation and communication system for use in high-stress, low-visibility environments. Result: improved navigation accuracy by 89% in live-fire simulations and established a new framework for safety-critical wearable design.",
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
