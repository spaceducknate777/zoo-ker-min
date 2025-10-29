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
              Booz Allen Hamilton — Government Design Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Research Lead — Three Major Government Platform Redesigns
            </p>
            <img 
              src={boozAllenImage} 
              alt="Booz Allen Hamilton Government Design Projects"
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
                  Modernize three complex government platforms (DOT, NIH/NLM, FDG) with strict accessibility and compliance requirements
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
                  Research Lead across three parallel projects, managed research team, led UX strategy and accessibility compliance
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
                  Successfully delivered 3 major redesigns, achieved 100% WCAG compliance, improved efficiency across all platforms
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
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
                    <p className="text-muted-foreground mb-3">
                      Led UX research and design for the Department of Transportation's public data platform, 
                      serving transportation planners, researchers, and policy makers across the nation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Research & Discovery</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Conducted 25 stakeholder interviews across multiple DOT agencies</li>
                      <li>Performed heuristic evaluation identifying 65+ usability issues</li>
                      <li>Analyzed analytics data revealing key user journeys and drop-off points</li>
                      <li>Competitive analysis of state and international transportation portals</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Challenges</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Complex data structures spanning multiple transportation modes</li>
                      <li>Legacy system constraints and integration requirements</li>
                      <li>Diverse user base from technical analysts to general public</li>
                      <li>Strict Section 508 accessibility compliance requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution & Impact</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Redesigned information architecture reducing navigation depth by 40%</li>
                      <li>Created intuitive data visualization dashboard for complex datasets</li>
                      <li>Implemented advanced search with faceted filtering</li>
                      <li>Achieved 100% WCAG 2.1 AA compliance</li>
                      <li>28% increase in data downloads within first quarter post-launch</li>
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
