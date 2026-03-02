import { ArrowLeft, Eye, ShieldCheck, Accessibility, Brain, CheckCircle, Wrench, BarChart3, Building2, Users, AlertTriangle, Keyboard, Palette, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import nihCdeScreenshot from "@/assets/nih-cde-screenshot.png";
import dotItsScreenshot from "@/assets/dot-its-screenshot.png";
import fiscalDataScreenshot from "@/assets/fiscal-data-screenshot.png";
import wireframeBefore from "@/assets/booz-allen-wireframe-before.png";
import wireframeLo from "@/assets/booz-allen-wireframe-lo.png";
import wireframeHi from "@/assets/booz-allen-wireframe-hi.png";

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
            <div className="grid grid-cols-3 gap-3 mt-6">
              <img src={nihCdeScreenshot} alt="NIH CDE Repository — healthcare data platform" className="w-full h-auto rounded-lg shadow-lg border border-border" />
              <img src={dotItsScreenshot} alt="DOT ITS Deployment Evaluation — transportation platform" className="w-full h-auto rounded-lg shadow-lg border border-border" />
              <img src={fiscalDataScreenshot} alt="Fiscal Data Treasury — government financial data" className="w-full h-auto rounded-lg shadow-lg border border-border" />
            </div>
          </header>

          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Rebuilt fragmented, non-compliant federal interfaces into an accessibility-first design system used across mission-critical platforms serving millions. Worked within extreme constraints — legacy systems, strict compliance mandates, and multi-agency approval cycles — to establish reference UI standards for high-stakes, regulated environments.
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Design Evolution</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <img src={wireframeLo} alt="Low-fidelity wireframe of Release Calendar redesign" className="w-full h-auto rounded-lg shadow-lg border border-border" />
                <p className="text-sm text-muted-foreground mt-2 italic text-center">Lo-fi wireframe</p>
              </div>
              <div>
                <img src={wireframeBefore} alt="Original Fiscal Data Release Calendar — before redesign" className="w-full h-auto rounded-lg shadow-lg border border-border" />
                <p className="text-sm text-muted-foreground mt-2 italic text-center">Before — Original interface</p>
              </div>
              <div>
                <img src={wireframeHi} alt="High-fidelity mockup of Release Calendar redesign" className="w-full h-auto rounded-lg shadow-lg border border-border" />
                <p className="text-sm text-muted-foreground mt-2 italic text-center">Hi-fi final design</p>
              </div>
            </div>
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

          {/* Constraints & Tradeoffs */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Constraints & Tradeoffs</h2>
            <p className="text-muted-foreground text-sm">Government UX has brutal constraints. Every decision balanced competing forces:</p>
            <div className="space-y-2">
              {[
                "Balancing WCAG compliance with dense data requirements",
                "Modernizing UI without breaking legacy workflows",
                "Navigating multi-agency approval cycles",
                "Improving clarity without oversimplifying policy language",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
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

          {/* Before → After */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">The Transformation</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-destructive/5 border border-destructive/20 space-y-3">
                <h3 className="text-sm font-semibold text-destructive uppercase tracking-wide">Before</h3>
                <ul className="space-y-2">
                  {[
                    "Inconsistent layouts across agencies",
                    "Poor accessibility — failed WCAG audits",
                    "High workflow error rates in critical tasks",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <AlertTriangle className="h-3.5 w-3.5 text-destructive shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-lg bg-accent/5 border border-accent/20 space-y-3">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">After</h3>
                <ul className="space-y-2">
                  {[
                    "20% improvement in accessibility scores",
                    "Reduced usability-related support issues",
                    "Design system adopted across multiple teams",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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

          {/* Accessibility Compliance */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Accessibility Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              All interfaces were designed and validated against Section 508 and WCAG 2.1 AA standards — a non-negotiable requirement for federal platforms.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Screen reader–optimized labeling and ARIA landmarks",
                "Full keyboard-only navigation on all critical workflows",
                "Color contrast ratios meeting AA minimums for low vision and color blindness",
                "Tested with assistive technologies including JAWS, NVDA, and VoiceOver",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/15">
                  <Accessibility className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="pb-8">
            <div className="flex flex-wrap gap-2">
              {["Figma", "Design Systems", "WCAG Audits", "Section 508", "JAWS", "NVDA", "Usability Testing"].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-full bg-secondary border border-border text-xs text-muted-foreground"
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
