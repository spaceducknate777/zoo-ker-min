import { Lightbulb, Users, BarChart, Layers, Figma, Palette } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const skills = [
    { icon: Lightbulb, label: "Product Thinking", description: "Strategic design that drives business impact" },
    { icon: Users, label: "User Research", description: "Mixed methods research & usability testing" },
    { icon: Layers, label: "Design Systems", description: "Scalable component libraries & patterns" },
    { icon: BarChart, label: "Enterprise UX", description: "Complex workflows for B2B & government" },
    { icon: Figma, label: "Figma Expert", description: "Advanced prototyping & design tooling" },
    { icon: Palette, label: "Creative Direction", description: "Visual design & brand storytelling" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in mb-16">
          <p className="text-center font-medium text-xl text-foreground/90">
            I'm a UX Designer & Research Lead with 7+ years of experience across startups, government, and enterprise. My work blends research, design systems, and storytelling to create accessible experiences that make people's lives easier.
          </p>
          
          <p className="border-l-4 border-accent pl-6 italic text-foreground/80">
            I believe great design happens where empathy meets strategy — each project begins with listening deeply to users and ends with measurable improvement in their experience.
          </p>

          <p className="text-center">
            Outside of design, I bring the same curiosity and creativity to stop-motion animation, sculpting, and world-building — exploring how storytelling and design intersect.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{skill.label}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
