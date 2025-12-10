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
              UX Researcher at Booz Allen Hamilton
            </p>
            <p className="text-lg text-foreground/80 mb-6 max-w-3xl">
              Over 2 years, I contributed to user research and design across multiple federal agencies. 
              I learned to <strong>quickly understand new domains</strong>, <strong>work with diverse stakeholders</strong>, 
              and <strong>apply research methods</strong> in government contexts.
            </p>
            <img 
              src={boozAllenImage} 
              alt="Booz Allen Hamilton Government Design Projects"
              className="w-full h-96 object-cover object-right rounded-lg shadow-xl"
            />
          </div>

          {/* What I Learned Section */}
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">What I Learned in Government Consulting</h3>
              <p className="text-muted-foreground mb-4">
                Government consulting taught me valuable skills: how to rapidly understand new domains, 
                build trust with diverse stakeholders, and deliver research within compressed timelines.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-background">
                  <p className="text-2xl font-bold text-accent">4 agencies</p>
                  <p className="text-sm text-muted-foreground">Different domains I worked across</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background">
                  <p className="text-2xl font-bold text-accent">100+</p>
                  <p className="text-sm text-muted-foreground">User interviews conducted</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background">
                  <p className="text-2xl font-bold text-accent">WCAG 2.1</p>
                  <p className="text-sm text-muted-foreground">Accessibility compliance learned</p>
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
                  Support user-centered design across federal agencies with different domains, stakeholders, and compliance requirements
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
                  Conducted user interviews, usability testing, and research synthesis; learned to work across different government domains
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  100+ user interviews, WCAG compliance support, research documentation across multiple projects
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
                      Contributed to UX research for the Department of Transportation's public data platform, 
                      serving transportation planners, researchers, and policy makers across the nation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">My Research Contributions</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Conducted 25 stakeholder interviews across multiple DOT divisions</li>
                      <li>Helped analyze user journeys to identify drop-off points</li>
                      <li>Assisted with card sorting and tree testing exercises</li>
                      <li>Documented research findings and contributed to insight synthesis</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenges I Worked On</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Learned how to communicate complex transportation data to diverse public audiences</li>
                      <li>Helped organize data structures spanning multiple transportation modes into navigation</li>
                      <li>Worked on balancing legacy system constraints with modern design</li>
                      <li>Contributed to content hierarchy serving both technical analysts and general public</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-foreground mb-2">Why I Made These Design Decisions</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Flattened IA from 6 levels to 3:</strong> Card sorting revealed users expected content within 3 clicks — deep hierarchies caused 67% of users to abandon searches</li>
                      <li><strong>Progressive disclosure for data tables:</strong> Research showed technical analysts wanted raw data, but general public was overwhelmed — we designed expandable summaries with drill-down capability</li>
                      <li><strong>High-contrast color system:</strong> Many government employees work in older buildings with poor lighting — WCAG compliance wasn't just checkbox, it improved usability for everyone</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Results & What I Learned</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Information architecture changes reduced navigation depth by 40%</li>
                      <li>Learned to create intuitive data visualization dashboards</li>
                      <li>Achieved 100% WCAG 2.1 AA compliance</li>
                      <li>28% increase in data downloads within first quarter</li>
                      <li>Learned how research drives design decisions in government contexts</li>
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

                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-foreground mb-2">Why We Chose This Approach</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Faceted search over keyword-only:</strong> Researchers told us they think in categories (disease, study type, data format) — keyword search failed 70% of the time for complex queries</li>
                      <li><strong>Side-by-side CDE comparison:</strong> Contextual inquiry showed researchers constantly opened multiple tabs to compare elements — we brought comparison into one view</li>
                      <li><strong>Visual metadata trees:</strong> Nested relationships were invisible in flat lists; tree visualization reduced time to understand relationships by 50%</li>
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

                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-foreground mb-2">Design Rationale</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Dual calendar + list views:</strong> Usage analysis showed 60% preferred visual calendar for planning, 40% preferred searchable lists for specific lookups — we supported both workflows</li>
                      <li><strong>Color-coded release status:</strong> After observing confusion about "delayed" vs "rescheduled," we created distinct visual states with clear labels</li>
                      <li><strong>Email subscriptions:</strong> Analysts told us they set manual calendar reminders that frequently failed — automated notifications reduced missed releases by 83%</li>
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
                    <h4 className="font-semibold text-foreground mb-2">What I Learned Across Projects</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Accessibility-first design accelerates development and reduces rework</li>
                      <li>How to build reusable research templates and design patterns</li>
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
