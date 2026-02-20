import { ArrowLeft, Eye, ShieldCheck, Accessibility, Brain, CheckCircle, Wrench, BarChart3, Building2, Users, AlertTriangle, Keyboard, Palette, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import boozAllenImage from "@/assets/booz-allen-project.jpg";
import boozAllenWireframes from "@/assets/booz-allen-wireframes.jpg";

const BoozAllenCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        <div className="space-y-16">
          {/* Hero */}
          <header className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">DOT</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">NIH</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">NLM</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">Treasury</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Booz Allen Hamilton — Federal Healthcare & Government Platforms
            </h1>
            <p className="text-lg text-accent font-semibold">
              UI / UX Designer — Large-Scale, Accessibility-First Systems
            </p>
            <img
              src={boozAllenWireframes}
              alt="Booz Allen Hamilton Government Design Projects — wireframe evolution"
              className="w-full h-auto object-contain rounded-lg shadow-xl mt-6"
            />
          </header>

          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Designed and evaluated mission-critical government and healthcare interfaces used by millions of users, prioritizing accessibility, consistency, error prevention, and policy compliance. Established reference UI standards suitable for high-stakes, regulated environments and AI-driven quality evaluation.
            </p>
          </section>

          {/* What I Did */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">What I Did</h2>
            <ul className="space-y-3">
              {[
                "Evaluated and redesigned complex data-heavy government interfaces",
                "Defined UI consistency rules across multiple tools and teams",
                "Created gold-standard reference screens for accessibility and usability",
                "Assessed interfaces across clarity, hierarchy, accessibility, and compliance",
                "Documented decision logic to support scalable implementation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Core Interface Problem */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Core Interface Problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              Federal and healthcare platforms must serve:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Users, text: "Diverse user abilities" },
                { icon: AlertTriangle, text: "High cognitive and emotional load" },
                { icon: ShieldCheck, text: "Strict policy and compliance requirements" },
                { icon: Building2, text: "Long-term maintainability across teams" },
              ].map((item, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="flex items-center gap-3 p-4">
                    <item.icon className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Existing tools suffered from:</p>
              <ul className="space-y-2">
                {[
                  "Inconsistent layouts and components",
                  "Poor accessibility support",
                  "High error rates in critical workflows",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Wireframes */}
          <section>
            <img
              src={boozAllenWireframes}
              alt="Design evolution from low to high fidelity wireframes"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-muted-foreground mt-2 italic">
              Iterative wireframe development from low-fidelity sketches to high-fidelity prototypes
            </p>
          </section>

          {/* UI System & Design Standards */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">UI System & Design Standards</h2>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Key Interfaces</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Building2, text: "Public-facing healthcare tools" },
                  { icon: BarChart3, text: "Internal government dashboards" },
                  { icon: FileCheck, text: "Data entry and reporting workflows" },
                  { icon: Eye, text: "Date, time, and system-status components" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/15">
                    <item.icon className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3 italic">
                Each interface was evaluated for readability, predictability, and accessibility under stress.
              </p>
            </div>

            {/* Accessibility */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Accessibility (Non-Negotiable)</h3>
              <div className="space-y-2">
                {[
                  { icon: Accessibility, text: "WCAG 2.1 AA compliance" },
                  { icon: Keyboard, text: "Keyboard-only navigation support" },
                  { icon: Eye, text: "Screen-reader optimized labeling" },
                  { icon: Palette, text: "Color contrast safe for low vision and color blindness" },
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <rule.icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{rule.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hierarchy & Layout */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Hierarchy & Layout</h3>
              <div className="space-y-2">
                {[
                  "Clear information grouping",
                  "Consistent placement of primary actions",
                  "Reduced visual noise in data-dense views",
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Error Prevention */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Error Prevention</h3>
              <div className="space-y-2">
                {[
                  "Inline validation for forms",
                  "Explicit system feedback for submissions",
                  "Clear recovery paths for mistakes",
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic">
              These rules formed a scoring rubric used to judge interface quality across teams.
            </p>
          </section>

          {/* Prototyping & Validation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Prototyping & Validation</h2>
            <ul className="space-y-2">
              {[
                "Built high-fidelity Figma prototypes",
                "Conducted usability testing with real government users",
                "Iterated on spacing, typography, and interaction clarity",
                "Validated designs with accessibility audits",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Wrench className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Quantitative & Organizational Impact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Quantitative & Organizational Impact</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: BarChart3, text: "20% improvement in accessibility scores" },
                { icon: CheckCircle, text: "Reduced usability-related support issues" },
                { icon: Users, text: "Design system adopted across multiple teams" },
                { icon: Building2, text: "Interfaces remain live and in active use" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/15">
                  <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Business & Stakeholder Impact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Business & Stakeholder Impact</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: Users, text: "Improved user satisfaction across public-facing tools" },
                { icon: ShieldCheck, text: "Increased stakeholder trust through clarity and predictability" },
                { icon: Wrench, text: "Reduced rework by aligning UI standards early" },
                { icon: BarChart3, text: "Accelerated development through shared components" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                  <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Why This Matters for AI */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Why This Matters for AI Systems</h2>
            <p className="text-muted-foreground leading-relaxed">This work produced:</p>
            <ul className="space-y-2">
              {[
                "High-quality accessibility-labeled UI examples",
                "Clear distinctions between compliant vs. non-compliant designs",
                "Consistent component logic across tools",
                "A repeatable framework for evaluating AI-generated government interfaces",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Brain className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic">
              Government and healthcare UIs are ideal training environments for AI quality judgment because they demand precision, clarity, and zero ambiguity.
            </p>
          </section>

          {/* Tools & Methods */}
          <section className="space-y-3 pb-8">
            <h2 className="text-2xl font-bold text-foreground">Tools & Methods</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Figma", "Design systems", "Accessibility audits", "Usability testing",
                "UI evaluation", "Government design standards",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BoozAllenCaseStudy;
