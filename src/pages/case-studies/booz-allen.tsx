import { ArrowLeft, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import boozAllenImage from "@/assets/booz-allen-project.jpg";

const BoozAllenCaseStudy = () => {
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
              Booz Allen Hamilton — FTD Project
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Research Lead — Government Data Visualization Platform
            </p>
            <img 
              src={boozAllenImage} 
              alt="Booz Allen Hamilton FTD Project"
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
                  Redesign legacy government platform with complex data visualization and strict accessibility requirements
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
                  Research Lead, managed 3 researchers, conducted heuristic analysis, led accessibility compliance
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
                  15% increase in platform engagement, 100% WCAG 2.1 AA compliance, 40% faster data analysis
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
                  <CardDescription>Comprehensive analysis of complex government workflows</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Heuristic Evaluation</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Conducted comprehensive audit using Nielsen's 10 usability heuristics</li>
                      <li>Identified 87 usability violations across the platform</li>
                      <li>Prioritized issues using severity ratings (critical, major, minor)</li>
                      <li>Benchmarked against similar government platforms</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">User Research</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>30 interviews with government analysts and administrators</li>
                      <li>Shadowed 12 users performing daily workflows</li>
                      <li>Created 5 detailed personas representing user segments</li>
                      <li>Mapped current-state journey with 23 identified pain points</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Accessibility Audit</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Section 508 compliance testing across all modules</li>
                      <li>Screen reader testing with JAWS and NVDA</li>
                      <li>Keyboard navigation audit for all workflows</li>
                      <li>Color contrast analysis using automated and manual testing</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Insights</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Users struggled to find critical data due to poor information hierarchy</li>
                      <li>Complex charts lacked accessible alternatives for screen reader users</li>
                      <li>Inconsistent patterns across modules caused cognitive overload</li>
                      <li>Users needed to export and manipulate data externally due to limited visualization tools</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Design Process</CardTitle>
                  <CardDescription>Systematic approach to platform redesign</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Information Architecture Redesign</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Conducted card sorting study with 25 participants to reorganize content</li>
                      <li>Reduced navigation depth from 5 levels to 3 levels</li>
                      <li>Created role-based dashboards for different user types</li>
                      <li>Implemented persistent global search across all data types</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Data Visualization Design</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Researched best practices from Tufte, Few, and Cairo</li>
                      <li>Designed 8 chart types optimized for government data patterns</li>
                      <li>Created accessible alternatives (data tables, text summaries)</li>
                      <li>Built interactive prototypes for complex multi-dimensional data</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Iterative Testing</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Round 1: Low-fi wireframes with 8 users, validated IA changes</li>
                      <li>Round 2: Interactive prototype with 15 users, refined visualizations</li>
                      <li>Round 3: Beta testing with 50 users over 2 weeks, final adjustments</li>
                      <li>Accessibility testing in each round with assistive technology users</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Stakeholder Management</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Bi-weekly steering committee presentations to government clients</li>
                      <li>Managed competing priorities across 4 different agencies</li>
                      <li>Coordinated with security team for compliance requirements</li>
                      <li>Led design reviews with 12-person development team</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solution" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Final Solution</CardTitle>
                  <CardDescription>Accessible, modern government data platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Redesigned Information Architecture</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Role-based dashboards: Analyst, Administrator, Executive views</li>
                      <li>Unified global navigation with contextual breadcrumbs</li>
                      <li>Smart search with filters, suggestions, and recent history</li>
                      <li>Customizable widgets for personalized workspace</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Data Visualization Suite</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Interactive time-series charts with zoom and pan</li>
                      <li>Geographic heatmaps with drill-down capabilities</li>
                      <li>Comparison views for multi-agency data analysis</li>
                      <li>Export to CSV, PDF, and accessible HTML tables</li>
                      <li>All charts include text descriptions for screen readers</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Accessibility Features</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Full keyboard navigation with visible focus indicators</li>
                      <li>ARIA landmarks and live regions for dynamic content</li>
                      <li>High contrast mode with 7:1 color ratios</li>
                      <li>Resizable text up to 200% without loss of functionality</li>
                      <li>Alternative text for all visual data representations</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Design System</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Created 120+ components in shared Figma library</li>
                      <li>Comprehensive documentation with usage guidelines</li>
                      <li>Coded component library for development team</li>
                      <li>Automated accessibility testing in CI/CD pipeline</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Impact & Outcomes</CardTitle>
                  <CardDescription>Measurable improvements in usability and compliance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quantitative Results</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>15% increase in daily active users within 3 months</li>
                      <li>40% faster data analysis task completion</li>
                      <li>68% reduction in support tickets related to navigation</li>
                      <li>100% WCAG 2.1 AA compliance (up from 42%)</li>
                      <li>System Usability Scale (SUS) score: 82/100 (Grade A)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">User Feedback</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>"Finally feels like a modern tool, not stuck in 2005" - Government Analyst</li>
                      <li>"As a blind user, I can actually use all features now" - Accessibility Tester</li>
                      <li>89% of users preferred new design in preference testing</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Impact</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Met all Section 508 compliance requirements ahead of deadline</li>
                      <li>Design system reused across 3 additional government projects</li>
                      <li>Won UXPA Award for Best Government Platform Design</li>
                      <li>Client renewed contract for 3-year platform evolution</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Learnings</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Building accessibility from the start is easier than retrofitting</li>
                      <li>Government stakeholder management requires clear, frequent communication</li>
                      <li>Design systems dramatically accelerate consistency across large projects</li>
                      <li>User research with real government workflows revealed insights no heuristic analysis could</li>
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

export default BoozAllenCaseStudy;
