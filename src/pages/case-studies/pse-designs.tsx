import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import hero from "@/assets/pse/hero.webp.asset.json";
import services from "@/assets/pse/services.webp.asset.json";
import banner from "@/assets/pse/values-banner.webp.asset.json";
import culture from "@/assets/pse/team-culture.webp.asset.json";
import values from "@/assets/pse/core-values.webp.asset.json";
import founder from "@/assets/pse/founder.webp.asset.json";
import projects from "@/assets/pse/projects.webp.asset.json";
import contrast from "@/assets/pse/contrast-audit.webp.asset.json";
import styleGuide from "@/assets/pse/style-guide.pdf.asset.json";
import logoGuide from "@/assets/pse/brand-guide-4.png.asset.json";
import typeGuide from "@/assets/pse/brand-guide-5.png.asset.json";
import colorGuide from "@/assets/pse/brand-guide-6.png.asset.json";

const screens = [
  { image: services, title: "Our Engineering Services", caption: "Civil, structural, mechanical, and electrical engineering services presented in a consistent grid." },
  { image: banner, title: "Guided by Values. Driven by Results.", caption: "A brand-led banner connecting engineering imagery with PSE’s values." },
  { image: culture, title: "Join Our Team / Our Culture", caption: "Team culture and benefits presented together in the homepage redesign." },
  { image: values, title: "Our Core Values", caption: "PSE’s core values, organized into a visual grid." },
  { image: founder, title: "About PSE Designs", caption: "The founder story and “13+ Years of Engineering Excellence.”" },
  { image: projects, title: "Our Projects", caption: "Commercial, industrial, and residential projects grouped into distinct categories." },
];

const PSEDesignsCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />Back to Portfolio
        </Button>
        <div className="space-y-16">
          <header className="space-y-4">
            <p className="text-sm text-muted-foreground">September 2025</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">PSE Designs — Website Redesign</h1>
            <p className="text-lg text-accent font-semibold">Research & Competitive Audit · Accessibility · Brand · Web Design & Coded Build</p>
            <figure>
              <img src={hero.url} alt="PSE homepage hero: Engineering Solutions That Build the Future" className="w-full h-auto rounded-lg shadow-lg border border-border" />
              <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">Engineering Solutions That Build the Future — redesigned homepage hero</figcaption>
            </figure>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">A website redesign for PSE Designs, moving from research and a competitive audit through a WCAG contrast audit, brand style guide, homepage redesign, and coded build.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Process</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">01 — Research & Competitive Audit</h3>
              <p className="text-muted-foreground leading-relaxed">The work began with research and a competitive audit to inform the website redesign.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">02 — WCAG Contrast Audit</h3>
              <p className="text-muted-foreground leading-relaxed">The WebAIM check found that gray #807F7F on navy #244676 produced a 2.37:1 contrast ratio, failing WCAG AA and AAA for both normal and large text. This documents an accessibility issue—not a claim of verified compliance for the final build.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">03 — Brand Style Guide</h3>
              <p className="text-muted-foreground leading-relaxed">The PSE style guide defines Titillium Web in Regular and Bold, a navy (#244676), gray (#807F7F), and white (#FFFFFF) palette, and logo clearspace equal to the height of the leftmost building in the skyline. It also documents suitable logo treatments for light and dark backgrounds.</p>
              <div className="space-y-6">
                {[
                  { image: logoGuide, caption: "Logo treatments and clearspace" },
                  { image: typeGuide, caption: "Titillium Web — Regular and Bold" },
                  { image: colorGuide, caption: "PSE brand color palette" },
                ].map(({ image, caption }) => (
                  <figure key={caption}>
                    <img src={image.url} alt={caption} loading="lazy" className="w-full h-auto rounded-lg shadow-lg border border-border" />
                    <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">{caption}</figcaption>
                  </figure>
                ))}
              </div>
              <Button variant="outline" asChild>
                <a href={styleGuide.url} target="_blank" rel="noopener noreferrer"><Download className="mr-2 h-4 w-4" />PSE Brand Style Guide (PDF)</a>
              </Button>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">04 — Homepage Redesign</h2>
            <p className="text-muted-foreground leading-relaxed">The redesigned homepage brings together engineering services, company values, team culture, the founder story, and project categories.</p>
            <div className="space-y-8">
              {screens.map(({ image, title, caption }) => (
                <figure key={title} className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <img src={image.url} alt={`PSE Designs website redesign — ${title}`} loading="lazy" className="w-full h-auto rounded-lg shadow-lg border border-border" />
                  <figcaption className="text-sm text-muted-foreground italic text-center">{caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Contrast Audit Evidence</h2>
            <figure>
              <img src={contrast.url} alt="WebAIM contrast checker: gray #807F7F on navy #244676 at 2.37:1, failing WCAG AA and AAA" loading="lazy" className="w-full h-auto rounded-lg shadow-lg border border-border" />
              <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">2.37:1 — the tested gray-on-navy combination fails WCAG AA and AAA.</figcaption>
            </figure>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">05 — Coded Build</h2>
            <p className="text-muted-foreground leading-relaxed">The work continued from the homepage redesign into a coded website build.</p>
          </section>

          <section className="space-y-4 pb-8">
            <h2 className="text-2xl font-bold text-foreground">Outcome</h2>
            <p className="text-lg text-accent font-semibold">This work landed Nathan the TDC Marketing job.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PSEDesignsCaseStudy;