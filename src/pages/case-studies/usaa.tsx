import { ArrowLeft, Eye, ShieldCheck, Accessibility, Brain, CheckCircle, Wrench, BarChart3, CreditCard, Filter, Bell, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import usaaStoryboard from "@/assets/usaa-storyboard-illustrations.png";
import usaaIcons from "@/assets/usaa-icons.png";
import usaaWhiteboard from "@/assets/usaa-whiteboard-process.jpg";
import usaaWorkshop from "@/assets/usaa-workshop.jpg";
import usaaSketches from "@/assets/usaa-sketches.jpg";
import usaaIconProcess from "@/assets/usaa-icon-process.png";

const interfaces = [
  { icon: CreditCard, text: "Account overview dashboards" },
  { icon: BarChart3, text: "Money transfer & payment flows" },
  { icon: Filter, text: "Transaction history and filtering" },
  { icon: Bell, text: "Alerts, confirmations, and error states" },
];

const USAACaseStudy = () => {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              USAA Digital Banking Experience
            </h1>
            <p className="text-lg text-accent font-semibold">
              UI / UX Designer — Financial Product Interfaces
            </p>
            <img
              src={usaaStoryboard}
              alt="USAA storyboard illustrations showing the claims process user journey"
              className="w-full h-auto object-contain rounded-lg shadow-xl bg-white p-8 mt-6"
            />
          </header>

          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Redesigned and evaluated key digital banking UI flows for USAA members, focusing on clarity, accessibility, error prevention, and consistency across web and mobile platforms. Delivered reference-quality UI patterns suitable for large-scale systems and AI-driven evaluation.
            </p>
          </section>

          {/* What I Did */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">What I Did</h2>
            <ul className="space-y-3">
              {[
                "Evaluated and redesigned core financial interaction flows",
                "Defined component-level UI standards for forms, navigation, and data display",
                "Assessed interfaces across usability, accessibility, hierarchy, and trust",
                "Created high-fidelity reference screens used to validate design quality",
                "Documented rationale for UI decisions to support consistent implementation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Core Interface Problem */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Core Interface Problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              USAA members manage high-stakes financial tasks (payments, transfers, account monitoring) that require:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Eye, text: "Immediate clarity" },
                { icon: CheckCircle, text: "Zero ambiguity in system feedback" },
                { icon: Accessibility, text: "Strong accessibility support" },
                { icon: ShieldCheck, text: "High trust and predictability" },
              ].map((item, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="flex items-center gap-3 p-4">
                    <item.icon className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">
              Existing interfaces showed cognitive overload, inconsistent patterns, and avoidable errors.
            </p>
          </section>

          {/* Process images */}
          <section className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={usaaWhiteboard}
                  alt="Design workshop with storyboard cards pinned to whiteboard"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Workshop: Mapping the claims process with storyboard cards
                </p>
              </div>
              <div>
                <img
                  src={usaaWorkshop}
                  alt="Collaborative design session with team members"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Cross-functional collaboration during design review
                </p>
              </div>
            </div>
          </section>

          {/* UI System & Interaction Design */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">UI System & Interaction Design</h2>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Key Interfaces Addressed</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {interfaces.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/15">
                    <item.icon className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3 italic">
                Each screen was evaluated for scanability, hierarchy, and decision confidence.
              </p>
            </div>

            {/* Sketches */}
            <div>
              <img
                src={usaaSketches}
                alt="Hand-drawn storyboard sketches showing 10-step user journey"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Early sketches: 10-step user journey from FNOL through estimate delivery and repair scheduling
              </p>
            </div>

            {/* Design Decisions */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Visual Hierarchy</h3>
                <div className="space-y-2">
                  {[
                    "Primary actions visually dominant",
                    "Secondary actions consistently de-emphasized",
                    "Clear grouping of balances, actions, and history",
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Interaction Rules</h3>
                <div className="space-y-2">
                  {[
                    "One primary action per screen",
                    "Explicit confirmation for irreversible actions",
                    "Clear success, pending, and failure states",
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Accessibility Standards</h3>
                <div className="space-y-2">
                  {[
                    "WCAG-compliant contrast and text sizing",
                    "Screen-reader friendly labels",
                    "Error messaging tied directly to input fields",
                    "Reduced cognitive load for older and neurodivergent users",
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <Accessibility className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-muted-foreground italic">
                These criteria formed a repeatable scoring framework for judging UI quality.
              </p>
            </div>
          </section>

          {/* Prototyping & Validation */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Prototyping & Validation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={usaaIconProcess}
                  alt="Icon design iterations from rough concepts to final refined icons"
                  className="w-full h-auto rounded-lg shadow-lg bg-white p-4"
                />
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Icon design process: 4 iterations from concept to final
                </p>
              </div>
              <div>
                <img
                  src={usaaIcons}
                  alt="Final icon set showing signature document, truck, and SUV icons"
                  className="w-full h-auto rounded-lg shadow-lg bg-white p-4"
                />
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Final icons: Distinct vehicle silhouettes and document icons
                </p>
              </div>
            </div>
            <ul className="space-y-2">
              {[
                "Created high-fidelity Figma prototypes",
                "Tested flows with real member scenarios",
                "Iterated based on error rates and completion confidence",
                "Refined spacing, typography, and component consistency",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Wrench className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Outcomes */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Quantitative & Qualitative Outcomes</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: BarChart3, text: "Reduced task errors in payment flows" },
                { icon: CheckCircle, text: "Faster completion times for common banking tasks" },
                { icon: ShieldCheck, text: "Increased user confidence and trust signals" },
                { icon: Accessibility, text: "Improved accessibility compliance across tested screens" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/15">
                  <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium">{item.text}</span>
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
                "Clear UI ground truth for financial interfaces",
                "Well-defined error vs. success state distinctions",
                "Consistent component logic suitable for labeling and comparison",
                "Reliable patterns for evaluating AI-generated fintech designs",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Brain className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic">
              Financial UI is especially valuable for AI training due to its high precision and low tolerance for ambiguity.
            </p>
          </section>

          {/* Tools & Methods */}
          <section className="space-y-3 pb-8">
            <h2 className="text-2xl font-bold text-foreground">Tools & Methods</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Figma", "Design systems", "Accessibility heuristics", "UI evaluation",
                "Component libraries", "Usability testing",
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

export default USAACaseStudy;
