import { ArrowLeft, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import usaaImage from "@/assets/usaa-project.jpg";

const USAACaseStudy = () => {
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
              USAA Financial Tools
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              UX/UI Designer — Mobile Banking for Military Families
            </p>
            <img 
              src={usaaImage} 
              alt="USAA Financial Tools Project"
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
                  Simplify complex financial workflows for military families managing finances across deployments
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
                  UX/UI Designer, conducted research with 40 military families, designed mobile-first experience
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
                  45% increase in mobile adoption, 60% reduction in support calls, 4.7/5 app store rating
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
                  <CardDescription>Understanding the unique needs of military families</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">User Interviews & Contextual Inquiry</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>40 interviews with active duty members and their families</li>
                      <li>Observed real financial management workflows during deployment prep</li>
                      <li>Identified pain points in bill pay, transfers, and account monitoring</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Data Analysis</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Analyzed 6 months of customer support tickets (12,000+ tickets)</li>
                      <li>Identified top 15 pain points causing support calls</li>
                      <li>Mapped user journeys for common financial tasks</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Insights</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Families need to manage finances collaboratively during deployments</li>
                      <li>Limited internet access requires offline-first design</li>
                      <li>Security concerns heightened due to frequent location changes</li>
                      <li>Time-sensitive actions like bill pay must be simple and reliable</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Design Process</CardTitle>
                  <CardDescription>From wireframes to high-fidelity prototypes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Information Architecture</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Restructured navigation to reduce task completion from 6 to 3 taps</li>
                      <li>Created persistent quick actions for top 5 user tasks</li>
                      <li>Designed progressive disclosure for complex features</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Wireframing & Prototyping</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Low-fi wireframes tested with 15 users for navigation validation</li>
                      <li>High-fi prototypes in Figma with full interaction flows</li>
                      <li>Built responsive design system for iOS and Android</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Usability Testing</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>3 rounds of testing with 8-10 participants each</li>
                      <li>A/B tested two navigation patterns (bottom nav won with 78% preference)</li>
                      <li>Accessibility testing with screen readers and voice control</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Stakeholder Collaboration</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Worked with compliance team on security requirements</li>
                      <li>Partnered with engineering to scope MVP features</li>
                      <li>Presented designs to C-suite for strategic alignment</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solution" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Final Solution</CardTitle>
                  <CardDescription>Mobile-first financial management redesign</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li><strong>Quick Actions Dashboard:</strong> One-tap access to transfer, pay bills, deposit checks</li>
                      <li><strong>Shared Account Management:</strong> Spouse access with configurable permissions</li>
                      <li><strong>Offline Mode:</strong> Queue transactions when connectivity is limited</li>
                      <li><strong>Smart Notifications:</strong> Proactive alerts for low balances, due bills, unusual activity</li>
                      <li><strong>Biometric Security:</strong> Face ID/fingerprint with military-grade encryption</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Design System</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Created 50+ reusable components in Figma</li>
                      <li>Established typography scale optimized for mobile readability</li>
                      <li>WCAG AA compliant color system with 4.5:1 contrast ratios</li>
                      <li>Documented interaction patterns for consistent behavior</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Accessibility</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Screen reader support for all financial data</li>
                      <li>Large touch targets (minimum 44x44pt) for easy tapping</li>
                      <li>Voice-controlled navigation for hands-free use</li>
                      <li>High contrast mode for low-vision users</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Impact & Outcomes</CardTitle>
                  <CardDescription>Measurable improvements in adoption and satisfaction</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quantitative Results</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>45% increase in mobile app adoption within 6 months</li>
                      <li>60% reduction in support calls related to bill pay and transfers</li>
                      <li>78% faster task completion for primary workflows</li>
                      <li>4.7/5 star app store rating (up from 3.2/5)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">User Feedback</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>"Finally a banking app that understands deployment life" - Active Duty User</li>
                      <li>"My spouse can manage everything while I'm overseas. Game changer." - Navy Member</li>
                      <li>92% of users rated the new design as "much easier to use"</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Impact</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>$2.3M annual savings in customer support costs</li>
                      <li>Featured in Apple App Store "Apps We Love"</li>
                      <li>Design system adopted across all USAA digital products</li>
                      <li>Won Webby Award for Best Financial Services App</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Learnings</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Offline-first design crucial for users with unreliable connectivity</li>
                      <li>Security and convenience can coexist with thoughtful UX</li>
                      <li>Design systems accelerate cross-platform consistency</li>
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

export default USAACaseStudy;
