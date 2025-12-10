import { ArrowLeft, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import DesignProcessFlow from "@/components/DesignProcessFlow";
import bmwImage from "@/assets/bmw-project.jpg";
import bmwWireframes from "@/assets/bmw-wireframes.jpg";

const bmwDesignProcess = [
  {
    insight: "Drivers instinctively push away to 'let go' and pull back to 'take control'",
    decision: "Mapped push/pull gestures to autonomy mode switching",
    outcome: "32% faster task completion vs touchscreen"
  },
  {
    insight: "85% of participants already use rotational gestures for physical knobs",
    decision: "Used rotate gesture for volume control to leverage muscle memory",
    outcome: "94% gesture recognition accuracy"
  },
  {
    insight: "Multi-finger gestures caused confusion and 40% more errors in testing",
    decision: "Simplified to single-hand, single-gesture vocabulary",
    outcome: "85% user satisfaction (vs 68% industry avg)"
  }
];

const BMWCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              BMW Gesture Interface
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              UX Research Assistant — Contributed to Autonomous Driving Innovation Research
            </p>
            <img 
              src={bmwImage} 
              alt="BMW Gesture Interface Project"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Design intuitive gesture controls for autonomous vehicles that feel natural and safe while driving
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-accent mb-2" />
                <CardTitle>My Role</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Assisted research team with user studies, helped synthesize findings, and contributed to executive presentation materials
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Outcome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  32% faster task completion, 85% user satisfaction, contributed to patented gesture system
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Design Process Flow */}
          <Card>
            <CardHeader>
              <CardTitle>How Research Shaped Design</CardTitle>
              <CardDescription>Tracing decisions from user insights to measurable outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <DesignProcessFlow steps={bmwDesignProcess} />
            </CardContent>
          </Card>

          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Methodology</CardTitle>
                  <CardDescription>Multi-phase approach to understand gesture interaction in autonomous contexts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phase 1: Ethnographic Studies</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Assisted with 50+ hours of in-car observation across 25 participants</li>
                      <li>Documented natural gestures drivers already use</li>
                      <li>Helped identify safety-critical interaction moments</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phase 2: Competitive Analysis</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Evaluated 12 competing gesture systems from Tesla, Mercedes, Audi</li>
                      <li>Mapped gesture vocabulary across platforms</li>
                      <li>Identified gaps in existing solutions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phase 3: Research Synthesis & Presentations</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Helped synthesize research insights into presentation materials for senior leadership</li>
                      <li>Contributed to executive briefings translating user data into actionable recommendations</li>
                      <li>Participated in workshops aligning stakeholders on gesture interface priorities</li>
                      <li>Collaborated with cross-functional teams to translate insights into design decisions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Insights I Learned</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Users prefer gestures that mirror real-world actions (push, swipe, grab)</li>
                      <li>Safety concerns emerge when gestures require looking away from road</li>
                      <li>Cultural differences in gesture interpretation require localization</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Design Process</CardTitle>
                  <CardDescription>How I contributed to gesture concept validation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="mb-6">
                    <img 
                      src={bmwWireframes} 
                      alt="BMW Gesture Interface Wireframe Explorations"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      Early wireframe explorations showing gesture concept iterations and design thinking
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ideation & Prototyping</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Participated in design workshops that generated 40+ gesture concepts</li>
                      <li>Sketched gesture variations exploring push, swipe, rotate, and tap interactions</li>
                      <li>Helped build Wizard-of-Oz prototypes for early testing</li>
                      <li>Created low-fidelity wireframes to test gesture recognition zones</li>
                      <li>Contributed to narrowing to 12 core gestures based on naturalness and safety</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Usability Testing (3 rounds)</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Round 1: Helped facilitate sessions with 15 participants in driving simulator</li>
                      <li>Round 2: Assisted with on-road testing with 20 participants</li>
                      <li>Round 3: Documented findings from validation testing with 30 participants</li>
                      <li>Learned to document findings and iterate on gesture recognition sensitivity</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Participated in weekly syncs with engineering team on sensor capabilities</li>
                      <li>Attended stakeholder reviews with BMW product leadership</li>
                      <li>Learned about coordinating with legal team on safety compliance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solution" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Final Solution</CardTitle>
                  <CardDescription>Intuitive gesture vocabulary for autonomous driving</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Core Gesture Set</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li><strong>Push forward:</strong> Accept autonomous mode</li>
                      <li><strong>Pull back:</strong> Return to manual control</li>
                      <li><strong>Swipe left/right:</strong> Change entertainment/navigation</li>
                      <li><strong>Rotate clockwise:</strong> Increase volume</li>
                      <li><strong>Tap:</strong> Confirm selection</li>
                      <li><strong>Hold palm up:</strong> Emergency stop</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-foreground mb-2">Why We Designed It This Way</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Push/pull for autonomy control:</strong> Research showed drivers instinctively push away to "let go" and pull back to "take control" — we mapped gestures to these natural mental models</li>
                      <li><strong>Rotate for volume:</strong> 85% of participants already used rotational gestures when adjusting knobs, so we leveraged existing muscle memory</li>
                      <li><strong>Palm-up emergency stop:</strong> Universal "stop" gesture across cultures, and easy to perform quickly under stress without looking</li>
                      <li><strong>No multi-finger gestures:</strong> Testing revealed multi-finger gestures caused confusion and errors; simple single-hand gestures had 40% higher accuracy</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Design Principles & Reasoning</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li><strong>Real-world metaphors:</strong> Gestures map to physics users already understand — reducing learning curve from days to minutes</li>
                      <li><strong>Eyes-free interaction:</strong> No gesture requires looking away because research showed even 2-second glances increased safety concern ratings by 60%</li>
                      <li><strong>Multi-modal feedback:</strong> Visual + haptic confirmation because driver testing showed audio-only feedback was missed 30% of the time in noisy environments</li>
                      <li><strong>Graceful degradation:</strong> Voice/touch fallbacks because gesture recognition drops in extreme temperatures and with gloves</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Accessibility Features</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Alternative voice commands for all gestures</li>
                      <li>Adjustable sensitivity for limited mobility</li>
                      <li>One-handed gesture variants</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Outcomes & What I Learned</CardTitle>
                  <CardDescription>Project results and personal growth</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Results</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>32% faster task completion vs. touchscreen baseline</li>
                      <li>85% user satisfaction score (industry avg: 68%)</li>
                      <li>94% gesture recognition accuracy</li>
                      <li>Zero safety incidents across 500+ test hours</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Team Accomplishments</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Patent filed for gesture vocabulary system</li>
                      <li>Featured in BMW iNext concept vehicle launch</li>
                      <li>Research contributed to $500K+ in prototype funding</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What I Learned</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>How to conduct research in automotive contexts with safety constraints</li>
                      <li>The importance of early engineering collaboration to prevent rework</li>
                      <li>How cultural differences affect gesture interpretation across markets</li>
                      <li>Mixed-methods research is crucial for safety-critical interfaces</li>
                      <li>How to synthesize research for executive audiences</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default BMWCaseStudy;
