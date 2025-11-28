import { Building2, TrendingUp, Users, Lightbulb, Layers, BarChart, Target, Presentation, FileCheck } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import bmwLogo from "@/assets/bmw-logo.png";
import usaaLogo from "@/assets/usaa-logo.png";
import boozAllenLogo from "@/assets/booz-allen-logo.png";

const ProfessionalExperience = () => {
  const experiences = [
    {
      company: "BMW Group",
      logo: bmwLogo,
      role: "Lead UX Researcher",
      duration: "Contract",
      industry: "Automotive Innovation",
      skills: [
        { label: "Executive Advisory", icon: Presentation },
        { label: "Strategic Research", icon: Lightbulb },
        { label: "Design Systems", icon: Layers },
        { label: "Stakeholder Workshops", icon: Users },
      ],
      achievements: [
        { metric: "94%", label: "Intuitive gesture recognition" },
        { metric: "40%", label: "Reduced cognitive load" },
        { metric: "$500K", label: "Project funding secured" },
      ],
      highlights: [
        "Led executive stakeholder workshops guiding senior leaders through strategic design decisions",
        "Delivered research presentations to C-suite that secured continued project investment",
        "Developed gesture interaction framework now integrated into autonomous vehicle roadmap"
      ]
    },
    {
      company: "USAA",
      logo: usaaLogo,
      role: "UX/UI Designer",
      duration: "2 years",
      industry: "Financial Services",
      skills: [
        { label: "Mobile-First Design", icon: Target },
        { label: "Design Systems", icon: Layers },
        { label: "Accessibility (WCAG)", icon: FileCheck },
        { label: "User Research", icon: Users },
      ],
      achievements: [
        { metric: "67%", label: "Task completion increase" },
        { metric: "52%", label: "Support call reduction" },
        { metric: "35+", label: "Icon system components" },
      ],
      highlights: [
        "Designed mobile-first financial tools serving 13+ million military families",
        "Created accessible icon system ensuring universal usability across all abilities",
        "Led cross-functional collaboration between design, development, and compliance teams"
      ]
    },
    {
      company: "Booz Allen Hamilton",
      logo: boozAllenLogo,
      role: "Senior UX Research Consultant",
      duration: "3 years • Government Portfolio",
      industry: "Federal Consulting",
      subtitle: "Multi-Agency Design Practice",
      agencies: ["DOT", "NIH", "NLM", "Treasury"],
      skills: [
        { label: "Rapid Stakeholder Onboarding", icon: Users },
        { label: "Strategic Communications", icon: BarChart },
        { label: "Cross-Agency Adaptability", icon: Target },
        { label: "Information Architecture", icon: Layers },
        { label: "Policy Content Strategy", icon: FileCheck },
        { label: "Executive Advisory", icon: Presentation },
      ],
      achievements: [
        { metric: "4", label: "Federal agencies served" },
        { metric: "12+", label: "Contracts delivered" },
        { metric: "100%", label: "WCAG compliance rate" },
        { metric: "45%", label: "Avg. task improvement" },
      ],
      highlights: [
        "Built reputation for rapid onboarding—became trusted advisor to new agency stakeholders within first 30 days on each engagement",
        "Led concurrent workstreams across DOT, NIH/NLM, and Treasury, demonstrating ability to context-switch across vastly different domains",
        "Established reusable accessibility standards adopted across multiple agencies, creating lasting organizational impact beyond individual projects",
        "Advised senior federal stakeholders on strategic content decisions, translating complex policy requirements into user-centered design",
        "Developed consulting methodologies for government UX that reduced client ramp-up time and improved cross-team collaboration"
      ]
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            7+ years driving strategic design impact across automotive, finance, and government sectors
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header: Logo + Company Info */}
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 p-3 rounded-xl bg-background border border-border flex items-center justify-center shrink-0">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                    <p className="text-lg text-accent font-semibold">{exp.role}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">{exp.industry}</Badge>
                      <span className="text-sm text-muted-foreground">• {exp.duration}</span>
                    </div>
                    {exp.agencies && (
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span className="text-xs text-muted-foreground">Agencies:</span>
                        {exp.agencies.map((agency, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs px-2 py-0.5 border-accent/40 bg-accent/10">
                            {agency}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Skills Used at This Company */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Skills Demonstrated</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="px-3 py-1.5 text-sm border-accent/30 bg-accent/5 hover:bg-accent/10 transition-colors"
                    >
                      <skill.icon className="w-3.5 h-3.5 mr-1.5 text-accent" />
                      {skill.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Impact & Results</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {exp.achievements.map((achievement, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-lg bg-accent/5 border border-accent/20 text-center"
                    >
                      <p className="text-3xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                        {achievement.metric}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Key Contributions</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <TrendingUp className="w-4 h-4 text-accent mt-1 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
