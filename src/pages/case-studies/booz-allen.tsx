import { ArrowLeft, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import boozAllenImage from "@/assets/booz-allen-project.jpg";
import boozAllenWireframes from "@/assets/booz-allen-wireframes.jpg";

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
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">DOT</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">NIH</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">NLM</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">Treasury</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Federal Design Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Senior UX Research Consultant at Booz Allen Hamilton
            </p>
            <p className="text-lg text-foreground/80 mb-6 max-w-3xl">
              Over 3 years, I built a reputation as a trusted advisor across 4 federal agencies and 12+ contracts. 
              My consulting approach emphasizes <strong>rapid stakeholder onboarding</strong>, <strong>cross-domain adaptability</strong>, 
              and <strong>lasting organizational impact</strong> through reusable design standards.
            </p>
            <img 
              src={boozAllenImage} 
              alt="Booz Allen Hamilton Government Design Projects"
              className="w-full h-96 object-cover object-right rounded-lg shadow-xl"
            />
          </div>

          {/* Consulting Value Proposition */}
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Why Consulting Breadth Matters</h3>
              <p className="text-muted-foreground mb-4">
                Government consulting requires a unique skill set: the ability to rapidly understand new domains, 
                build trust with diverse stakeholders, and deliver value within compressed timelines. 
                My portfolio demonstrates:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-background">
                  <p className="text-2xl font-bold text-accent">30 days</p>
                  <p className="text-sm text-muted-foreground">Avg. time to trusted advisor status</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background">
                  <p className="text-2xl font-bold text-accent">4 domains</p>
                  <p className="text-sm text-muted-foreground">Transportation, Health, Finance, Research</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background">
                  <p className="text-2xl font-bold text-accent">100%</p>
                  <p className="text-sm text-muted-foreground">Contract renewal / extension rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deliver user-centered design across 4 federal agencies with vastly different domains, stakeholders, and compliance requirements
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Consulting Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rapid stakeholder onboarding, concurrent workstream management, and creation of reusable frameworks that outlast individual engagements
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Cumulative Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  12+ contracts delivered, 100% WCAG compliance across all projects, accessibility standards adopted agency-wide
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="dot" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dot">DOT Redesign</TabsTrigger>
              <TabsTrigger value="nih">NIH & NLM CDE</TabsTrigger>
              <TabsTrigger value="fdg">FDG Calendar</TabsTrigger>
            </TabsList>

            <TabsContent value="dot" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Department of Transportation Redesign</CardTitle>
                  <CardDescription>Modernizing public transportation data access and analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="mb-6">
                    <img 
                      src={boozAllenWireframes} 
                      alt="Design evolution from low to high fidelity wireframes"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      Design evolution showing iterative wireframe development from low-fidelity sketches to high-fidelity prototypes
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                    <p className="text-muted-foreground mb-3">
                      Led UX research and design for the Department of Transportation's public data platform, 
                      serving transportation planners, researchers, and policy makers across the nation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Strategic Research & Executive Advisory</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Advised DOT senior leadership on strategic information architecture decisions to improve public access to transportation data</li>
                      <li>Presented research findings to government executives, translating user needs into actionable policy and design recommendations</li>
                      <li>Conducted 25 stakeholder interviews across multiple DOT agencies and analyzed user journeys revealing critical drop-off points</li>
                      <li>Guided strategic content prioritization decisions through workshops with policy experts and communications teams</li>
                      <li>Led competitive analysis to position DOT platform as best-in-class for government data portals</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Strategic Communications Challenges</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Developed strategic content framework to communicate complex transportation policy and data to diverse public audiences</li>
                      <li>Made critical information architecture decisions about which policy content to surface based on user tasks and government communications priorities</li>
                      <li>Organized complex data structures spanning multiple transportation modes into intuitive navigation—strategic choices about technical depth vs. accessibility</li>
                      <li>Balanced legacy system constraints with modern design while advising leadership on integration trade-offs</li>
                      <li>Created content hierarchy serving both technical analysts and general public, requiring strategic decisions about specialized vs. plain language</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Strategic Solution & Measurable Impact</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Redesigned information architecture based on strategic content workshops—reduced navigation depth by 40% and improved task completion</li>
                      <li>Made evidence-based content decisions: created intuitive data visualization dashboard prioritizing most-accessed datasets</li>
                      <li>Implemented strategic search and filtering informed by user research insights on how different audiences approach transportation data</li>
                      <li>Achieved 100% WCAG 2.1 AA compliance while maintaining modern standards—proving accessibility and design excellence coexist</li>
                      <li>28% increase in data downloads within first quarter, demonstrating strategic communications improvements drove engagement</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nih" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>NIH & NLM CDE Repository Redesign</CardTitle>
                  <CardDescription>Streamlining clinical data element management for medical researchers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                    <p className="text-muted-foreground mb-3">
                      Redesigned the Common Data Elements (CDE) Repository for the National Institutes of Health 
                      and National Library of Medicine, enabling medical researchers to discover and standardize 
                      clinical research data elements.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Research & Discovery</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Interviewed 18 clinical researchers and data scientists</li>
                      <li>Observed workflows at 3 major research institutions</li>
                      <li>Analyzed search logs revealing common query patterns and failures</li>
                      <li>Reviewed NIH standards and metadata requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Challenges</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Highly technical users with specialized domain knowledge</li>
                      <li>Complex metadata schemas with nested relationships</li>
                      <li>Need for precise search across thousands of data elements</li>
                      <li>Integration with existing research tools and workflows</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution & Impact</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Implemented advanced faceted search with medical ontology support</li>
                      <li>Created streamlined CDE comparison and selection workflow</li>
                      <li>Designed clear metadata visualization for complex relationships</li>
                      <li>Built API integration for programmatic access</li>
                      <li>45% reduction in time to find relevant CDEs</li>
                      <li>62% increase in CDE repository usage by research community</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fdg" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>FDG Fiscal Data Group Release Calendar Redesign</CardTitle>
                  <CardDescription>Transforming government financial data publication scheduling</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                    <p className="text-muted-foreground mb-3">
                      Redesigned the Fiscal Data Group's release calendar interface used by Treasury Department 
                      staff and financial analysts to track and plan for government financial data publications.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Research & Discovery</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Shadowed Treasury staff during data release planning sessions</li>
                      <li>Analyzed 6 months of calendar usage patterns and pain points</li>
                      <li>Conducted usability testing with 15 financial analysts</li>
                      <li>Benchmarked against industry-leading calendar and scheduling tools</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Challenges</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Complex multi-dataset release dependencies and schedules</li>
                      <li>Need to display historical, current, and projected releases</li>
                      <li>Users required both calendar and list views for different tasks</li>
                      <li>Critical need for accuracy in publication timing</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution & Impact</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Created dual-view interface: interactive calendar and filterable list</li>
                      <li>Implemented smart filtering by dataset, agency, and date range</li>
                      <li>Designed clear visual indicators for release status and changes</li>
                      <li>Built subscription system for release notifications</li>
                      <li>Reduced time to find release dates by 55%</li>
                      <li>83% decrease in missed or delayed data release communications</li>
                      <li>System adopted by 8 additional federal agencies</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cross-Project Learnings</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Accessibility-first design accelerates development and reduces rework</li>
                      <li>Building reusable design systems pays dividends across projects</li>
                      <li>Deep user research reveals needs beyond stated requirements</li>
                      <li>Government users appreciate modern interfaces that respect data complexity</li>
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
