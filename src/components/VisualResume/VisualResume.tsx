import { Mail, MapPin, Globe, Briefcase, GraduationCap, Award, TrendingUp, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const VisualResume = () => {
  const handleExportPDF = () => {
    toast.info("Opening print dialog - save as PDF for best ATS compatibility");
    window.print();
  };

  const experiences = [
    {
      title: "Senior Interaction Designer",
      company: "Pearl",
      location: "Remote",
      period: "02/2023 – 10/2023",
      achievements: [
        "Led end-to-end design for 3 product launches, reaching 50K+ users in first quarter",
        "Built comprehensive design system with 50+ components, reducing design-to-dev time by 40%",
        "Designed responsive interfaces for web and mobile, improving conversion rates by 25%",
        "Collaborated with cross-functional teams of 12+ engineers and PMs to drive product strategy"
      ],
      metrics: ["50K+ users", "40% faster delivery", "25% conversion boost"]
    },
    {
      title: "Senior UX Designer",
      company: "Booz Allen Hamilton",
      location: "Washington, DC",
      period: "09/2019 – 10/2021",
      achievements: [
        "Drove UX strategy for federal digital transformation initiatives across 5 government agencies",
        "Reduced user errors by 20% through inclusive style guide development for NIH's Library of Medicine",
        "Led DOT website redesign resulting in 15% increase in user engagement and 200K+ monthly visits",
        "Conducted 12+ usability studies with 150+ participants, informing $2M+ product roadmap decisions",
        "Championed WCAG 2.1 AA accessibility standards, achieving 100% compliance across projects"
      ],
      metrics: ["20% error reduction", "15% engagement lift", "$2M+ impact", "5 agencies"]
    },
    {
      title: "UX Research Lead (HCI)",
      company: "BMW Group",
      location: "Savannah, GA",
      period: "09/2019 – 11/2019",
      achievements: [
        "Conducted comprehensive user research study with 500+ participants across 3 markets",
        "Designed and validated BMW's first natural gesture interface using advanced HCI methodologies",
        "Led mixed-methods research combining ethnographic studies, usability testing, and A/B experiments",
        "Presented research findings to C-level executives, securing $500K+ for prototype development"
      ],
      metrics: ["500+ participants", "3 markets", "$500K+ secured"]
    },
    {
      title: "UI/UX Designer",
      company: "USAA",
      location: "San Antonio, TX",
      period: "06/2018 – 08/2018",
      achievements: [
        "Designed 3 icons adopted into official design library, used by 12M+ active users",
        "Contributed to service feature launch that increased app engagement by 15% and retention by 10%",
        "Collaborated in agile environment with daily standups and bi-weekly sprint reviews"
      ],
      metrics: ["12M+ users", "15% engagement", "10% retention"]
    }
  ];

  const skills = {
    design: ["Figma", "Adobe XD", "Sketch", "InVision", "Illustrator", "Photoshop", "Principle"],
    ux: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility (WCAG 2.1)", "Information Architecture", "Interaction Design", "Journey Mapping"],
    research: ["Usability Testing", "A/B Testing", "Contextual Inquiry", "Card Sorting", "Tree Testing", "Survey Design", "Ethnographic Studies", "Heuristic Evaluation"],
    technical: ["HTML/CSS", "Responsive Design", "Git/GitHub", "Design Tokens", "Component Libraries", "Figma API", "Web Performance"],
    collaboration: ["Agile/Scrum", "Cross-functional Leadership", "Stakeholder Management", "Design Reviews", "Remote Communication", "Mentorship"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Export Buttons */}
<div className="fixed top-4 right-4 z-50 print:hidden flex flex-col gap-3">
  {/* Visual PDF (print) */}
  <Button onClick={handleExportPDF} className="shadow-lg gap-2 bg-primary hover:bg-accent">
    <Download className="h-4 w-4" />
    Print/Visual PDF
  </Button>

  {/* ATS Version */}
  <Button onClick={() => window.location.href = '/ats'} variant="outline" className="shadow-lg gap-2">
    <Briefcase className="h-4 w-4" />
    ATS Version
  </Button>

  {/* Direct PDF download */}
  <Button asChild className="shadow-lg gap-2 bg-secondary hover:bg-accent/80">
    <a href="/nathan-zukerman-resume.pdf" target="_blank" rel="noopener noreferrer">
      <Download className="h-4 w-4" />
      Download PDF
    </a>
  </Button>
</div>


      {/* Header */}
      <header className="relative overflow-hidden print:overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-10 print:hidden" />
        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                Nathan Zukerman
              </h1>
              <p className="text-2xl text-muted-foreground font-medium">
                Senior UI/UX Designer & UX Research Lead
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="mailto:natezukerman@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                natezukerman@gmail.com
              </a>
              <a href="https://zoo-ker-min.framer.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
                zoo-ker-min.framer.ai
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Remote
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Summary */}
        <section>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Professional Summary
              </h2>
              <p className="text-lg leading-relaxed text-foreground">
                Senior UI/UX Designer and Research Lead with <span className="font-semibold text-primary">7+ years</span> of experience designing intuitive digital experiences for startups, government, and Fortune 500 clients. Specializing in <span className="font-semibold">design systems, accessibility (WCAG 2.1)</span>, and <span className="font-semibold">user research methodologies</span>. Proven ability to drive product strategy through data-driven design decisions, leading cross-functional teams to deliver measurable business impact. Expert in reducing user friction, improving conversion rates, and championing inclusive design across web and mobile platforms in remote and agile environments.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Achievements */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "User Impact", value: "500K+", description: "Users reached through designed products" },
              { label: "Research Scale", value: "650+", description: "Participants in user research studies" },
              { label: "Design Systems", value: "50+", description: "Components in production libraries" }
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-primary" />
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0 text-sm px-4 py-1">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.metrics.map((metric, i) => (
                      <Badge key={i} className="bg-primary/10 text-primary hover:bg-primary/20">
                        {metric}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 capitalize text-primary">
                    {category === "ux" ? "UX Methods" : category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            Education
          </h2>
          <Card className="border-0 shadow-md">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Bachelor of Fine Arts in User Experience Design</h3>
                  <p className="text-lg text-primary font-semibold">Savannah College of Art and Design</p>
                </div>
                <Badge variant="secondary" className="mt-2 md:mt-0">
                  Graduated
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>This resume demonstrates modern UI/UX design principles with enhanced content for senior-level positions.</p>
          <p className="mt-2">References and portfolio case studies available upon request.</p>
        </div>
      </footer>
    </div>
  );
};

export default VisualResume;
