import { ArrowLeft, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import DesignProcessFlow from "@/components/DesignProcessFlow";
import usaaStoryboard from "@/assets/usaa-storyboard-illustrations.png";
import usaaIcons from "@/assets/usaa-icons.png";
import usaaWhiteboard from "@/assets/usaa-whiteboard-process.jpg";
import usaaWorkshop from "@/assets/usaa-workshop.jpg";
import usaaSketches from "@/assets/usaa-sketches.jpg";
import usaaIconProcess from "@/assets/usaa-icon-process.png";

const usaaDesignProcess = [
  {
    insight: "Military families manage finances during deployments with limited connectivity",
    decision: "Mobile-first design optimized for low-bandwidth environments",
    outcome: "25% increase in mobile engagement"
  },
  {
    insight: "Spouses managing finances weren't financial experts — jargon confused them",
    decision: "Plain language replacing financial terminology throughout",
    outcome: "40% improvement in comprehension scores"
  },
  {
    insight: "Generic car icons caused confusion between vehicle categories",
    decision: "Differentiated silhouettes for car, truck, SUV categories",
    outcome: "35% faster navigation in user testing"
  }
];

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
              Designing Scalable and Trustworthy Financial Solutions for USAA
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              UX Designer — Mobile-First Financial Tools & Icon Design for Military Families
            </p>
            <img 
              src={usaaStoryboard} 
              alt="USAA Storyboard illustrations showing claims process user journey"
              className="w-full h-auto object-contain rounded-lg shadow-xl bg-white p-8"
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
                  Design mobile-first tools and intuitive icon systems to improve financial well-being and internal site navigation for military families and employees
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
                  UX Designer across two projects: mobile financial tools and icon design for internal automotive site
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
                  25% increase in engagement with financial tools, 30% improvement in accessibility and usability scores
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Design Process Flow */}
          <Card>
            <CardHeader>
              <CardTitle>How Research Shaped Design</CardTitle>
              <CardDescription>Tracing decisions from military family insights to measurable outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <DesignProcessFlow steps={usaaDesignProcess} />
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
                  <CardDescription>Understanding military families and internal user needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project 1: Mobile-First Financial Tools</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Conducted user research through surveys and interviews with military families</li>
                      <li>Performed usability testing to understand unique financial challenges</li>
                      <li>Identified pain points in financial decision-making during deployments</li>
                      <li>Analyzed user behavior patterns and trust-building requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project 2: Icon Design for Internal Site</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Worked with internal team to understand employee and user needs</li>
                      <li>Identified key areas for improvement in visual language and navigation</li>
                      <li>Analyzed existing iconography and site usability challenges</li>
                      <li>Researched best practices for automotive-related icon design</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Insights</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Military families need simple, trustworthy interfaces for complex financial decisions</li>
                      <li>Internal users require intuitive visual cues for quick navigation</li>
                      <li>Accessibility and clarity are critical for both external and internal audiences</li>
                      <li>Consistent visual language improves user confidence and efficiency</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Design Process</CardTitle>
                  <CardDescription>Collaborative approach across two distinct projects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <img 
                        src={usaaWhiteboard} 
                        alt="Design workshop - storyboard cards pinned to whiteboard with user flow annotations"
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                      <p className="text-sm text-muted-foreground mt-3 italic">
                        Workshop session: Mapping the claims process with illustrated storyboard cards
                      </p>
                    </div>
                    <div>
                      <img 
                        src={usaaWorkshop} 
                        alt="Collaborative design session with team members discussing user flows"
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                      <p className="text-sm text-muted-foreground mt-3 italic">
                        Cross-functional collaboration during design review
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <img 
                      src={usaaSketches} 
                      alt="Hand-drawn storyboard sketches showing 10-step user journey from FNOL to repair scheduling"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      Early sketches: 10-step user journey from First Notice of Loss (FNOL) through estimate delivery and repair scheduling
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mobile Financial Tools Design</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Synthesized user research through affinity mapping and journey mapping</li>
                      <li>Created personas representing military family financial needs</li>
                      <li>Designed intuitive, trust-building UI patterns for financial decision-making</li>
                      <li>Focused on simplicity and ease of use for complex financial actions</li>
                      <li>Created mobile-first wireframes and high-fidelity prototypes</li>
                      <li>Conducted iterative usability testing with military families</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-foreground mb-2">Why I Made These Design Decisions</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Mobile-first approach:</strong> Research showed military families often manage finances during deployments with limited access — mobile had to work perfectly in low-connectivity environments</li>
                      <li><strong>Progressive confirmation for large transactions:</strong> Interviews revealed anxiety around financial mistakes while deployed — multi-step confirmation reduced errors and built trust</li>
                      <li><strong>Simplified language over financial jargon:</strong> Many spouses managing finances weren't financial experts — plain language tested 40% better for comprehension</li>
                      <li><strong>Distinct vehicle category icons:</strong> User testing showed generic car icons caused confusion — differentiated silhouettes for car/truck/SUV improved navigation speed by 35%</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Icon System Design & Storyboarding</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Created detailed storyboards illustrating user scenarios with automotive services</li>
                      <li>Designed cohesive icon set for car, truck, and SUV categories with clear visual hierarchy</li>
                      <li>Developed storytelling through visual narratives showing real-world use cases</li>
                      <li>Ensured icons were scalable, intuitive, and accessible across all touchpoints</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Design Artifacts</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      The storyboard above showcases the narrative approach to icon design, illustrating how users interact with automotive features through mobile devices. Each frame represents a key touchpoint in the customer journey, from vehicle selection to financial transactions.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>7 distinct scenarios covering user journey from browsing to purchase</li>
                      <li>Consistent visual language connecting physical and digital interactions</li>
                      <li>Clear iconography for immediate recognition and understanding</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cross-functional Collaboration</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Worked closely with product managers to align design with business goals</li>
                      <li>Collaborated with engineers to ensure technical feasibility and constraints</li>
                      <li>Partnered with development team for effective icon implementation</li>
                      <li>Regular stakeholder reviews to ensure alignment and buy-in</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solution" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Final Solutions</CardTitle>
                  <CardDescription>Mobile-first financial tools and cohesive icon system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={usaaIconProcess} 
                        alt="Icon design iterations showing evolution from rough concepts to final refined icons for truck, SUV, and signature categories"
                        className="w-full h-auto rounded-lg shadow-lg bg-white p-4"
                      />
                      <p className="text-sm text-muted-foreground mt-3 italic">
                        Icon design process: 4 iterations from concept to final refined iconography
                      </p>
                    </div>
                    <div>
                      <img 
                        src={usaaIcons} 
                        alt="Final icon set showing signature document, truck, and SUV icons"
                        className="w-full h-auto rounded-lg shadow-lg bg-white p-4"
                      />
                      <p className="text-sm text-muted-foreground mt-3 italic">
                        Final icons: Signature documents and vehicle categories with distinct silhouettes
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mobile Financial Tools Features</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li><strong>Trust-Building UI Patterns:</strong> Designed interfaces that build confidence in financial decisions</li>
                      <li><strong>Simplified Workflows:</strong> Streamlined complex financial actions into intuitive steps</li>
                      <li><strong>Mobile-First Approach:</strong> Optimized for on-the-go access during deployments</li>
                      <li><strong>Accessible Design:</strong> WCAG compliant patterns for inclusive user experience</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Icon Design System</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li><strong>Visual Storytelling:</strong> Storyboards illustrating real-world customer scenarios</li>
                      <li><strong>Automotive Categories:</strong> Distinctive icons for car, truck, and SUV with unique personalities</li>
                      <li><strong>User Journey Mapping:</strong> Visual narratives from browsing to financial decisions</li>
                      <li><strong>Scalable Design:</strong> Icons optimized for multiple sizes and contexts</li>
                      <li><strong>Brand Alignment:</strong> Consistent with USAA visual identity and trust-building elements</li>
                      <li><strong>Improved Navigation:</strong> Enhanced site usability through intuitive, recognizable iconography</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Design Deliverables</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>High-fidelity mobile app prototypes and specifications</li>
                      <li>Comprehensive icon library with usage guidelines</li>
                      <li>Design system documentation for both projects</li>
                      <li>Accessibility compliance reports and recommendations</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Impact & Outcomes</CardTitle>
                  <CardDescription>Measurable improvements across both projects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quantitative Results</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>25% improvement in engagement with financial tools</li>
                      <li>30% increase in accessibility and usability scores</li>
                      <li>Simplified complex financial decisions for military families</li>
                      <li>Enhanced internal site navigation and user satisfaction</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Contributions</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Delivered inclusive design solutions improving accessibility by 30%</li>
                      <li>Created cohesive icon sets enhancing internal site usability</li>
                      <li>Designed trust-building UI patterns for financial decision-making</li>
                      <li>Improved brand consistency through thoughtful visual design</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Skills Applied</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>UX Research and usability testing with military families</li>
                      <li>Icon design and scalable visual systems</li>
                      <li>Mobile-first design and responsive interfaces</li>
                      <li>Cross-functional collaboration with engineers and stakeholders</li>
                      <li>Accessibility compliance and inclusive design practices</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Learnings</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Simple, trustworthy interfaces are essential for financial tools</li>
                      <li>Cohesive visual language improves user confidence and efficiency</li>
                      <li>Collaboration across teams ensures designs meet technical and business needs</li>
                      <li>Accessibility improvements benefit all users, not just those with disabilities</li>
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
