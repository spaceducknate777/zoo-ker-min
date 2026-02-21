import { ArrowLeft, Brain, Sparkles, MessageSquare, Users, CheckCircle, Wrench, BarChart3, AlertTriangle, ShieldCheck, Zap, Layers, GitBranch, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AIProductCaseStudy = () => {
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
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">AI / ML</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">SaaS</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              [Product Name] — AI-Native [Domain] Tool
            </h1>
            <p className="text-lg text-accent font-semibold">
              [Your Role Title] — [Duration, e.g. 3 months]
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              [One-sentence elevator pitch: what the product does, who it's for, and why it matters.]
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-full aspect-video rounded-xl border-2 border-dashed border-border bg-secondary/30 flex items-center justify-center mt-6">
              <div className="text-center space-y-2">
                <Layers className="h-10 w-10 text-muted-foreground mx-auto" />
                <p className="text-sm text-muted-foreground font-medium">Hero screenshot or product visual</p>
                <p className="text-xs text-muted-foreground">Recommended: 16:9 ratio, high-fidelity UI screenshot</p>
              </div>
            </div>
          </header>

          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              [2–3 sentences: What was the product? What problem did it solve? What was your scope of ownership?
              Example: "Designed and shipped the core AI-assisted workflow for [Product], a SaaS tool that helps [users] do [task] faster. Owned end-to-end UX from discovery through production launch."]
            </p>
          </section>

          {/* What I Did */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">What I Did</h2>
            <ul className="space-y-3">
              {[
                "[Led user research — interviews, surveys, or diary studies with target users]",
                "[Defined the AI interaction model — how users prompt, review, and correct AI output]",
                "[Designed the end-to-end workflow from empty state to completed task]",
                "[Built and tested prototypes — Figma, code, or both]",
                "[Collaborated with engineering on feasibility, latency, and error handling]",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Core Problem */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Core Design Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              [What made this problem hard? Why couldn't existing tools solve it? What were the unique constraints of designing with AI?]
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Brain, text: "[AI output is unpredictable — users need confidence signals]" },
                { icon: AlertTriangle, text: "[High cost of errors — wrong AI output has real consequences]" },
                { icon: Users, text: "[Users range from AI-savvy to AI-skeptical]" },
                { icon: Zap, text: "[Latency constraints — AI responses take 2-10 seconds]" },
              ].map((item, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="flex items-center gap-3 p-4">
                    <item.icon className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* AI-Specific Design Decisions */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">AI-Specific Design Decisions</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              [This section is what makes this case study modern. Detail the UX patterns specific to AI products:]
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-accent" />
                  Prompt & Input Design
                </h3>
                <div className="space-y-2">
                  {[
                    "[How did users express intent? Free-text prompt, structured form, or hybrid?]",
                    "[What guardrails prevented bad prompts? Templates, suggestions, constraints?]",
                    "[How did the UI teach users to prompt effectively?]",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-accent" />
                  Output & Confidence Display
                </h3>
                <div className="space-y-2">
                  {[
                    "[How was AI output presented? Streaming, batch, or progressive disclosure?]",
                    "[Did you show confidence scores, uncertainty indicators, or source attribution?]",
                    "[How did users differentiate AI-generated content from their own?]",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-accent" />
                  Human-in-the-Loop Controls
                </h3>
                <div className="space-y-2">
                  {[
                    "[How could users edit, reject, or refine AI output?]",
                    "[What was the feedback loop — did corrections improve future results?]",
                    "[How did you handle AI failures gracefully?]",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Design Evolution */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Design Evolution</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Early exploration", desc: "Lo-fi wireframe or sketch" },
                { label: "Mid-fidelity", desc: "Key interaction flow" },
                { label: "Final design", desc: "Shipped UI" },
              ].map((stage, i) => (
                <div key={i}>
                  <div className="w-full aspect-[4/3] rounded-lg border-2 border-dashed border-border bg-secondary/30 flex items-center justify-center">
                    <div className="text-center space-y-1 p-4">
                      <Layers className="h-6 w-6 text-muted-foreground mx-auto" />
                      <p className="text-xs text-muted-foreground">{stage.desc}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 italic text-center">{stage.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Prototyping & Validation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Prototyping & Validation</h2>
            <ul className="space-y-2">
              {[
                "[What did you prototype? Figma, coded prototype, Wizard-of-Oz?]",
                "[How many users did you test with? What were you measuring?]",
                "[Key insight from testing that changed the design]",
                "[How did you validate the AI interaction specifically — not just the UI?]",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Wrench className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Outcomes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Outcomes & Impact</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: BarChart3, text: "[Key metric — e.g. 40% faster task completion vs. manual workflow]" },
                { icon: Users, text: "[User adoption — e.g. 2K+ beta users in first month]" },
                { icon: Zap, text: "[Efficiency gain — e.g. 60% reduction in repetitive work]" },
                { icon: CheckCircle, text: "[Quality signal — e.g. shipped to production, adopted by team X]" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/15">
                  <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Business Impact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Business & Stakeholder Impact</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: BarChart3, text: "[Revenue or growth impact — e.g. contributed to Series A fundraise]" },
                { icon: Users, text: "[User retention or NPS improvement]" },
                { icon: ShieldCheck, text: "[Trust signal — e.g. reduced AI-related support tickets by X%]" },
                { icon: Sparkles, text: "[Differentiation — e.g. became a key selling point vs. competitors]" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                  <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Reflection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">What I Learned</h2>
            <p className="text-muted-foreground leading-relaxed">
              [2–3 sentences reflecting on what was unique about designing for AI. What would you do differently? What principles did you develop?
              Example: "The biggest lesson was that AI UX isn't about making the AI smarter — it's about making the human more confident. Every design decision came down to: does the user trust this output enough to act on it?"]
            </p>
          </section>

          {/* Tools & Methods */}
          <section className="space-y-3 pb-8">
            <h2 className="text-2xl font-bold text-foreground">Tools & Methods</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Figma", "Prototyping", "User Research", "Usability Testing",
                "AI/LLM Integration", "Design Systems", "Prompt Engineering",
                "Human-in-the-Loop Design", "Streaming UI Patterns",
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

export default AIProductCaseStudy;