import ProjectCard from "./ProjectCard";
import bmwImage from "@/assets/bmw-project.jpg";
import usaaImage from "@/assets/usaa-storyboard.png";
import boozAllenImage from "@/assets/booz-allen-project.jpg";
import monsterAisleImage from "@/assets/monster-aisle-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "BMW Gesture Interface",
      role: "Lead UX Researcher",
      description: "Developed gesture-based interactions for autonomous driving, combining human behavior insights with interface innovation.",
      image: bmwImage,
      link: "/case-studies/bmw"
    },
    {
      title: "USAA Financial Tools",
      role: "UX/UI Designer",
      description: "Enhanced usability for military families by simplifying financial management workflows and improving accessibility.",
      image: usaaImage,
      link: "/case-studies/usaa"
    },
    {
      title: "Booz Allen Hamilton — Government Design Projects",
      role: "Research Lead",
      description: "Led UX research for three major government platform redesigns (DOT, NIH/NLM CDE, FDG Calendar), achieving 100% WCAG compliance and improved efficiency across all platforms.",
      image: boozAllenImage,
      link: "/case-studies/booz-allen"
    },
    {
      title: "FINAV Fire Management System",
      role: "UX Designer & Research Lead",
      description: "Designed firefighter navigation and communication system with AR lenses, GPS mapping, and real-time vitals monitoring to enhance safety and coordination during emergencies.",
      image: monsterAisleImage,
      link: "/case-studies/monster-aisle"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across automotive, finance, government, and retail sectors
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
