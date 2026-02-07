import { ArrowLeft, Zap, Shield, Eye, Hand, Volume2, Play, Square, ChevronRight, Wrench, CheckCircle, AlertTriangle, Accessibility, BarChart3, Building2, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import bmwGestureUI from "@/assets/bmw-gesture-ui-concept.jpg";
import bmwGestureShapes from "@/assets/bmw-gesture-shapes.jpg";
import bmwHapticPrototype from "@/assets/bmw-haptic-prototype-testing.png";
import bmwGestureTaxonomy from "@/assets/bmw-gesture-taxonomy.jpg";
import bmwArmrestConcept from "@/assets/bmw-armrest-concept.png";
import bmwPrototypeCloseup from "@/assets/bmw-prototype-closeup.png";
import bmwUserTesting from "@/assets/bmw-user-testing.png";

const gestures = [
  { action: "Push forward", result: "Enter autonomous mode", icon: ChevronRight },
  { action: "Pull back", result: "Return to manual control", icon: ChevronRight },
  { action: "Swipe left / right", result: "Navigate media or maps", icon: ChevronRight },
  { action: "Rotate clockwise", result: "Increase volume", icon: Volume2 },
  { action: "Tap", result: "Confirm selection", icon: Play },
  { action: "Hold palm up", result: "Emergency stop", icon: Square },
];

const designRules = [
  "Gestures map to real-world physical metaphors",
  "No gesture requires sustained visual attention",
  "Immediate visual + haptic confirmation",
  "Clear failure states with voice/touch fallback",
  "One-handed and limited-mobility variants supported",
];

const outcomes = [
  { value: "32%", label: "Faster task completion", context: "vs. touchscreen baseline" },
  { value: "85%", label: "User satisfaction", context: "industry avg: 68%" },
  { value: "94%", label: "Gesture recognition accuracy", context: "across all test conditions" },
  { value: "0", label: "Safety incidents", context: "across 500+ test hours" },
];

const BMWCaseStudy = () => {
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

        <div className="space-y-16">
          {/* Hero */}
          <header className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              BMW Autonomous Gesture Interface
            </h1>
            <p className="text-lg text-accent font-semibold">
              Lead UX Researcher & Interface Designer — Autonomous Systems
            </p>
            <img
              src={bmwGestureUI}
              alt="BMW Gesture Interface - Hand gesture interactions with iDrive radial menu"
              className="w-full h-auto object-contain rounded-lg shadow-xl bg-white p-8 mt-6"
            />
          </header>

          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Designed and validated a gesture-based UI system for BMW autonomous vehicles, defining a gold-standard gesture vocabulary optimized for safety, usability, and real-world driving conditions. The system established clear interaction patterns, feedback rules, and accessibility fallbacks suitable for both human use and machine training.
            </p>
          </section>

          {/* What I Did */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">What I Did</h2>
            <ul className="space-y-3">
              {[
                "Defined a core gesture interaction system for autonomous driving contexts",
                "Evaluated gesture clarity, hierarchy, and error tolerance across multiple environments",
                "Created reference interaction patterns used as ground truth for implementation",
                "Assessed gesture quality across usability, safety, accessibility, and consistency dimensions",
                "Collaborated with engineering to align sensor constraints with interaction design",
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
              Autonomous vehicles require non-visual, low-cognitive-load interactions that:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Eye, text: "Work without prolonged eye contact" },
                { icon: Hand, text: "Are culturally interpretable" },
                { icon: Shield, text: "Remain safe under real driving conditions" },
                { icon: Zap, text: "Provide immediate feedback and recovery paths" },
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
              Touchscreens and voice alone failed to meet these constraints.
            </p>
          </section>

          {/* Research artifacts image grid */}
          <section className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={bmwGestureTaxonomy}
                  alt="Gesture taxonomy documenting 24 natural hand positions observed during ethnographic research"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Gesture taxonomy: 24 natural hand positions from ethnographic research
                </p>
              </div>
              <div>
                <img
                  src={bmwGestureShapes}
                  alt="Shape primitives and gesture testing with paper prototypes"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Testing gesture recognition zones with shape primitives
                </p>
              </div>
            </div>
          </section>

          {/* Gesture System Design */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">Gesture System Design</h2>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Golden Dataset Focus</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Final Gesture Vocabulary</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Each gesture was evaluated and selected based on recognition accuracy, semantic clarity, and safety risk.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {gestures.map((g, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/15"
                  >
                    <g.icon className="h-4 w-4 text-accent shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold text-foreground">{g.action}</span>
                      <span className="text-muted-foreground"> → {g.result}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3 italic">
                These gestures became reference examples for training and evaluation.
              </p>
            </div>

            {/* Armrest concept */}
            <div>
              <img
                src={bmwArmrestConcept}
                alt="Armrest concept sketch with embedded click wheel and haptic feedback annotations"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground mt-2 italic">
                Design concept: Embedded armrest control with haptic feedback
              </p>
            </div>

            {/* Design Rules */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Design Rules & Evaluation Criteria</h3>
              <p className="text-sm text-muted-foreground mb-3">Used consistently across testing and implementation:</p>
              <div className="space-y-2">
                {designRules.map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{rule}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3 italic">
                These rules formed a repeatable evaluation framework for judging new gesture concepts.
              </p>
            </div>
          </section>

          {/* Prototyping & Validation */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Prototyping & Validation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={bmwHapticPrototype}
                  alt="Haptic prototype board with tactile feedback elements"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Physical haptic prototype for tactile feedback testing
                </p>
              </div>
              <div>
                <img
                  src={bmwUserTesting}
                  alt="User testing session with BMW stakeholders"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 italic">
                  User testing with BMW stakeholders evaluating interactions
                </p>
              </div>
            </div>
            <ul className="space-y-2">
              {[
                "Generated 40+ gesture concepts, reduced to 12, then finalized to 6",
                "Built Wizard-of-Oz and simulator prototypes",
                "Tested recognition zones, sensitivity thresholds, and false-positive rates",
                "Iterated across 3 usability testing rounds (simulator + on-road)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Wrench className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={bmwPrototypeCloseup}
                  alt="Close-up of haptic feedback elements with illuminated touch zones"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Illuminated touch zones with integrated haptic feedback
                </p>
              </div>
            </div>
          </section>

          {/* Accessibility */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Accessibility & Edge Case Handling</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: Accessibility, text: "Voice alternatives for all gestures" },
                { icon: Hand, text: "Adjustable sensitivity for motor limitations" },
                { icon: AlertTriangle, text: "Error recovery when gestures are partially detected" },
                { icon: Shield, text: "Redundant confirmation for safety-critical actions" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                  <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Quantitative Outcomes */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Quantitative Outcomes</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {outcomes.map((o, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-accent">{o.value}</p>
                    <p className="text-sm font-semibold text-foreground mt-1">{o.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{o.context}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Business & Product Impact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Business & Product Impact</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: Building2, text: "Gesture system patented by BMW" },
                { icon: Zap, text: "Featured in BMW iNext concept vehicle" },
                { icon: BarChart3, text: "Adopted across BMW's 2024 autonomous lineup" },
                { icon: CheckCircle, text: "20% reduction in driver onboarding time" },
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
            <p className="text-muted-foreground leading-relaxed">This project produced:</p>
            <ul className="space-y-2">
              {[
                "Clearly labeled interaction intent → system response mappings",
                "High-confidence ground-truth gesture examples",
                "A scalable framework for evaluating gesture quality",
                "Consistent criteria for ranking interaction effectiveness",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Brain className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic">
              These artifacts are directly applicable to training, validating, and auditing AI-driven interface systems.
            </p>
          </section>

          {/* Tools & Methods */}
          <section className="space-y-3 pb-8">
            <h2 className="text-2xl font-bold text-foreground">Tools & Methods</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Figma", "Sketching", "Driving simulators", "Wizard-of-Oz prototyping",
                "Usability testing", "Comparative evaluation", "Accessibility heuristics",
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

export default BMWCaseStudy;
