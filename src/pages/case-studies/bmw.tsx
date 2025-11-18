import { ArrowLeft, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import bmwImage from "@/assets/bmw-project.jpg";
import bmwWireframes from "@/assets/bmw-wireframes.jpg";

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
              Lead UX Researcher & Strategic Advisor — Guided Executive Decision-Making for Autonomous Driving Innovation
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
                <CardTitle>Role</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strategic advisor to senior leadership, led research team of 4, presented findings to C-suite executives, guided 20+ strategic design decisions through research-driven workshops
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  32% faster task completion, 85% user satisfaction, patented gesture system
                </p>
              </CardContent>
            </Card>
          </div>

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
                      <li>50+ hours of in-car observation across 25 participants</li>
                      <li>Documented natural gestures drivers already use</li>
                      <li>Identified safety-critical interaction moments</li>
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
                    <h4 className="font-semibold text-foreground mb-2">Phase 3: Executive Advisory & Strategic Workshops</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Presented research insights to VP of Product and senior leadership team to guide strategic roadmap decisions</li>
                      <li>Facilitated executive workshops to align stakeholders on gesture interface strategy and safety priorities</li>
                      <li>Advised C-suite on risk mitigation and competitive positioning through data-driven recommendations</li>
                      <li>Led cross-functional design sprints with engineering and safety teams, translating executive vision into actionable design decisions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Insights</h4>
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
                  <CardTitle>Strategic Design Process & Executive Engagement</CardTitle>
                  <CardDescription>Research-driven approach to guide executive decision-making and validate gesture concepts</CardDescription>
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
                    <h4 className="font-semibold text-foreground mb-2">Strategic Planning & Executive Presentations</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Delivered quarterly research presentations to senior leadership (VP Product, Head of Innovation, Safety Directors) with strategic recommendations</li>
                      <li>Created executive briefings that translated complex user data into business impact and competitive advantage</li>
                      <li>Facilitated strategic workshops to guide senior leaders through critical gesture interface decisions and safety trade-offs</li>
                      <li>Advised on roadmap prioritization based on user research insights and market trends</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ideation & Prototyping</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Generated 40+ gesture concepts through design workshops</li>
                      <li>Sketched gesture variations exploring push, swipe, rotate, and tap interactions</li>
                      <li>Built Wizard-of-Oz prototypes for early testing</li>
                      <li>Created low-fidelity wireframes to test gesture recognition zones</li>
                      <li>Narrowed to 12 core gestures based on naturalness and safety</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Usability Testing (3 rounds)</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Round 1: 15 participants, driving simulator, 8 gesture variants</li>
                      <li>Round 2: 20 participants, on-road testing, refined to 6 gestures</li>
                      <li>Round 3: 30 participants, validation with final system</li>
                      <li>Documented learnings and iterated on gesture recognition sensitivity</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Weekly syncs with engineering team on sensor capabilities</li>
                      <li>Bi-weekly stakeholder reviews with BMW product leadership</li>
                      <li>Coordinated with legal team on safety compliance</li>
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

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Design Principles</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Gestures map to real-world physics and metaphors</li>
                      <li>No gesture requires prolonged attention away from road</li>
                      <li>Visual and haptic feedback for every recognized gesture</li>
                      <li>Fallback to voice/touch when gesture fails</li>
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
                  <CardTitle>Impact & Outcomes</CardTitle>
                  <CardDescription>Measurable improvements and business impact</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quantitative Results</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>32% faster task completion vs. touchscreen baseline</li>
                      <li>85% user satisfaction score (industry avg: 68%)</li>
                      <li>94% gesture recognition accuracy</li>
                      <li>Zero safety incidents across 500+ test hours</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Impact</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Patent filed for gesture vocabulary system</li>
                      <li>Featured in BMW iNext concept vehicle launch</li>
                      <li>Adopted across 2024 autonomous vehicle lineup</li>
                      <li>20% reduction in driver training time</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Learnings</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Early engineering collaboration prevented 3 months of rework</li>
                      <li>Cultural testing revealed need for gesture localization</li>
                      <li>Mixed-methods research crucial for safety-critical interfaces</li>
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
