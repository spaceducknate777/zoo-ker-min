import { ArrowLeft, Users, Layers, BarChart3, Zap, CheckCircle, Target, Palette, Layout, GitBranch, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import pearlProfilePage from "@/assets/pearl-profile-page.png";
import pearlProfilePearls from "@/assets/pearl-profile-pearls.png";
import pearlProfileExperience from "@/assets/pearl-profile-experience.png";
import pearlProfileGoals from "@/assets/pearl-profile-goals.png";
import pearlFlowProfile from "@/assets/pearl-flow-profile.png";
import pearlFlowHome from "@/assets/pearl-flow-home.png";
import pearlFlowBuilder from "@/assets/pearl-flow-builder.png";
import pearlFlowOnboarding from "@/assets/pearl-flow-onboarding.png";
import pearlPersonaAlex from "@/assets/pearl-persona-alex.png";
import pearlPersonaSarah from "@/assets/pearl-persona-sarah.png";
import pearlPersonaMark from "@/assets/pearl-persona-mark.png";
import pearlPersonaEmily from "@/assets/pearl-persona-emily.png";

const outcomes = [
  { value: "25%", label: "Conversion Lift", context: "Profile completion rate" },
  { value: "50+", label: "Components Built", context: "Reusable design system" },
  { value: "40%", label: "Faster Handoff", context: "Dev implementation time" },
  { value: "3", label: "Platforms", context: "Web, iOS, Android" },
];

const designDecisions = [
  "Profile builder uses progressive disclosure to reduce cognitive load",
  "Card-based 'Pearl' system surfaces achievements without self-promotion friction",
  "Onboarding flow adapts based on user type (candidate vs. recruiter)",
  "Responsive breakpoints tested across 5 device classes",
  "Component library enforces accessibility and brand consistency at scale",
];

const PearlCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        {/* Hero */}
        <div className="mb-12">
          <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Case Study</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Pearl — Career Platform Redesign
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Helping pivot a career platform from job board to resume and work history previewer — redesigning the profile experience, defining new product direction, and building a scalable component system.
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden border border-border mb-12">
          <img
            src={pearlProfilePage}
            alt="Pearl profile page — designer portfolio view with experience, pearls, and career goals tabs"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <Card className="border-border">
              <CardContent className="pt-5">
                <p className="text-xs text-muted-foreground mb-1">Roles</p>
                <p className="text-sm font-semibold text-foreground">UX Designer · UI Designer · Product Strategist</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-5">
                <p className="text-xs text-muted-foreground mb-1">Engagement</p>
                <p className="text-sm font-semibold text-foreground">Part-time · 2023</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-5">
                <p className="text-xs text-muted-foreground mb-1">Tools</p>
                <p className="text-sm font-semibold text-foreground">Figma · Google Docs</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Pearl was pivoting from a traditional job board into a resume and work history previewer — a platform where professionals could showcase their career narrative, not just list open roles. I joined part-time to help define the product's new style and features, designing the profile experience that would become the core surface of the redesigned platform.
          </p>
        </section>

        {/* What I Did */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">What I Did</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Layout, title: "Profile System Design", desc: "Designed the end-to-end profile builder — from empty states to fully populated views across experience, portfolio, and career goals." },
              { icon: Layers, title: "Product Direction", desc: "Contributed to the strategic pivot from job board to work history previewer, helping define new features and visual style." },
              { icon: Users, title: "User Research", desc: "Collaborated on persona development and usability testing with early-career designers, recruiters, and hiring managers." },
              { icon: GitBranch, title: "Component System", desc: "Built 50+ reusable components in Figma with consistent spacing, typography, and interaction patterns for cross-platform use." },
            ].map((item, i) => (
              <Card key={i} className="border-border">
                <CardContent className="pt-5">
                  <item.icon className="h-5 w-5 text-accent mb-2" />
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Core Problem</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Designers struggle to present their professional value beyond a portfolio link. Recruiters need structured, scannable profiles to quickly assess fit. The existing Pearl profile was a blank page with no guidance — users dropped off before adding any content.
          </p>
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
            <p className="text-sm font-semibold text-accent mb-2">Key Insight</p>
            <p className="text-sm text-muted-foreground">
              Empty-state anxiety was the #1 barrier. Users didn't know what to add first, so they added nothing. The redesign needed to guide without constraining.
            </p>
          </div>
        </section>

        {/* Personas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Research & Personas</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Collaborated with the research lead on four personas spanning our core user types — early-career designers, experienced recruiters, hiring managers, and interns entering the workforce.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={pearlPersonaAlex} alt="Persona — Alex Mitchell, early-career designer seeking first professional role" className="w-full h-auto object-contain" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={pearlPersonaSarah} alt="Persona — Sarah Reynolds, experienced recruiter matching designers to roles" className="w-full h-auto object-contain" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={pearlPersonaMark} alt="Persona — Mark Johnson, hiring manager identifying top developer talent" className="w-full h-auto object-contain" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={pearlPersonaEmily} alt="Persona — Emily Parker, marketing intern seeking practical experience" className="w-full h-auto object-contain" />
            </div>
          </div>
        </section>

        {/* Design Process — User Flows */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Design Process</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mapped the full profile journey across builder/edit mode and view mode — from empty onboarding states through progressive content building to the final "success state" seen by recruiters.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={pearlFlowBuilder} alt="Pearl user flow — builder/edit mode vs view mode, showing empty and populated states" className="w-full h-auto object-contain bg-secondary/20" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-border">
                <img src={pearlFlowHome} alt="Pearl profile home — empty state vs populated state with interactions" className="w-full h-auto object-contain bg-secondary/20" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border">
                <img src={pearlFlowProfile} alt="Pearl profile flow — phase one-two with clicked pearl interaction" className="w-full h-auto object-contain bg-secondary/20" />
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={pearlFlowOnboarding} alt="Pearl onboarding flow — start state through setup help to populated profile" className="w-full h-auto object-contain bg-secondary/20" />
            </div>
          </div>
        </section>

        {/* UI System */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">UI System & Key Screens</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The profile surfaces three core views — Experience (work history with linked projects), Pearls (curated portfolio highlights), and Career Goals (prompt-based career direction). Each tab was designed as an independent module that renders consistently across web, iOS, and Android.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={pearlProfilePearls} alt="Pearl profile — Pearls tab showing project cards with company, description, and tech tags" className="w-full h-auto object-contain" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={pearlProfileGoals} alt="Pearl profile — Career Goals tab with prompt question and email input" className="w-full h-auto object-contain" />
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={pearlProfileExperience} alt="Pearl cross-platform experience view — project detail with platform tags and impact bullets" className="w-full h-auto object-contain" />
          </div>
        </section>

        {/* Design Decisions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Design Decisions</h2>
          <div className="space-y-3">
            {designDecisions.map((rule, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {outcomes.map((stat, i) => (
              <Card key={i} className="border-border">
                <CardContent className="pt-5 text-center">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs font-semibold text-foreground/80 mt-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.context}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why This Matters for Product Teams</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Target, text: "Demonstrates end-to-end product ownership from research through shipped UI" },
              { icon: Palette, text: "Shows scalable design system thinking across 50+ components" },
              { icon: BarChart3, text: "Proves measurable business impact — 25% conversion lift" },
              { icon: Brain, text: "Balances user empathy with business constraints in a fast-paced Agile team" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                <item.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Tools & Methods</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Figma", "Auto Layout", "Variables", "Dev Mode",
              "Prototyping", "User Personas", "Usability Testing",
              "Design Systems", "Responsive Design", "Cross-Platform",
              "Jira", "Agile / Scrum", "Dev Handoff",
            ].map((tool) => (
              <span key={tool} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-border">
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PearlCaseStudy;
