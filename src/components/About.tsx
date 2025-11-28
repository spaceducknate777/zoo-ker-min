import { Lightbulb, Users, BarChart, Layers, Figma, Palette, Building2 } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const About = () => {
  const skills = [
    { 
      icon: Lightbulb, 
      label: "Strategic Leadership", 
      description: "Executive advisory and research-driven decision-making",
      companies: ["BMW", "Booz Allen"]
    },
    { 
      icon: Users, 
      label: "User Research", 
      description: "Mixed methods research & usability testing",
      companies: ["BMW", "USAA", "Booz Allen"]
    },
    { 
      icon: Layers, 
      label: "Design Systems", 
      description: "Scalable component libraries & patterns",
      companies: ["USAA", "BMW"]
    },
    { 
      icon: BarChart, 
      label: "Enterprise UX", 
      description: "Complex workflows for B2B & government",
      companies: ["Booz Allen", "USAA"]
    },
    { 
      icon: Figma, 
      label: "Accessibility Expert", 
      description: "WCAG compliance, assistive tech (JAWS, NVDA, Dragon), cognitive & neurodiverse design",
      companies: ["Booz Allen", "USAA"]
    },
    { 
      icon: Palette, 
      label: "Strategic Communications", 
      description: "Information architecture & policy content strategy",
      companies: ["Booz Allen", "BMW"]
    },
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
            I'm a Strategic Design & Research Lead with 7+ years advising executives and leading UX initiatives across government, enterprise, and startups. I guide senior stakeholders through complex design decisions, combining research insights with strategic communications to create accessible experiences that drive measurable impact.
          </p>
          
          <p className="border-l-4 border-accent pl-6 italic text-foreground/80">
            Great design happens where strategic thinking meets user empathy—I translate research into executive recommendations, facilitate stakeholder workshops, and lead teams through evidence-based design decisions that improve lives.
          </p>

          <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
            <h4 className="font-semibold text-foreground mb-3">Accessibility Expertise Beyond Compliance</h4>
            <p className="text-muted-foreground mb-2">
              I design for universal access across the full spectrum of human ability—not just Section 508 checkboxes. My approach encompasses:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li><strong>Assistive Technology Testing:</strong> Hands-on experience with JAWS, NVDA, Dragon NaturallySpeaking, VoiceOver, and TalkBack to ensure real-world usability</li>
              <li><strong>Cognitive Accessibility:</strong> Designing for memory limitations, attention diversity, and information processing differences—clear language, progressive disclosure, consistent patterns</li>
              <li><strong>Neurodiverse Design:</strong> Creating interfaces that support users with ADHD, autism, dyslexia, and other cognitive differences through customizable interfaces, reduced sensory overload, and flexible interaction models</li>
              <li><strong>Strategic Accessibility Leadership:</strong> Advising stakeholders on accessibility as a design principle, not a compliance afterthought—embedding inclusive design into organizational strategy</li>
            </ul>
          </div>

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
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{skill.label}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.companies.map((company, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs px-2 py-0.5 bg-secondary/80"
                        >
                          {company}
                        </Badge>
                      ))}
                    </div>
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
