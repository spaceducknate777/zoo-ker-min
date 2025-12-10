import { ArrowLeft, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import DesignProcessFlow from "@/components/DesignProcessFlow";
import finavImage from "@/assets/finav-project.jpg";
import finavSketches from "@/assets/finav-sketches.jpg";

const finavDesignProcess = [
  {
    insight: "Firefighters can't look at handheld devices in dense smoke",
    decision: "AR overlay keeping information in peripheral vision, hands-free",
    outcome: "Enabled eyes-forward navigation in zero-visibility"
  },
  {
    insight: "Walkie-talkies fail in basements and attics where reception is weakest",
    decision: "Firetruck-boosted communication hub maintaining connectivity",
    outcome: "Reliable audio in previously dead zones"
  },
  {
    insight: "Chiefs make withdrawal decisions based on unreliable radio silence",
    decision: "Real-time vitals monitoring providing objective safety data",
    outcome: "Data-driven safety decisions for team"
  }
];

const MonsterAisleCaseStudy = () => {
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
              FINAV Fire Management System
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              UX Design Student — Academic Project on Firefighter Navigation & Communication
            </p>
            <img 
              src={finavImage} 
              alt="FINAV Fire Management System"
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
                  Address critical safety challenges firefighters face: poor visibility in smoke, communication failures, and lack of situational awareness
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
                  Team member responsible for user interviews, research synthesis, and contributing to stakeholder presentations
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
                  Concept received recognition from stakeholders with interest in potential real-world application
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Duration:</strong> September 6, 2019 - November 15, 2019 (10 Weeks)</p>
                <p><strong>Course:</strong> UX Design Senior Studio I & II</p>
                <p><strong>Instructor:</strong> Byeong Cheol (BC) Hwang</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team Members</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <p>Dylan Jackson</p>
                <p>Sherry Wu</p>
                <p>Nathan Zukerman</p>
                <p>Chris Bailey</p>
              </CardContent>
            </Card>
          </div>

          {/* Design Process Flow */}
          <Card>
            <CardHeader>
              <CardTitle>How Research Shaped Design</CardTitle>
              <CardDescription>Tracing decisions from firefighter interviews to solution concepts</CardDescription>
            </CardHeader>
            <CardContent>
              <DesignProcessFlow steps={finavDesignProcess} />
            </CardContent>
          </Card>

          <Tabs defaultValue="problem" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="problem">Problem</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="outcome">Outcome</TabsTrigger>
            </TabsList>

            <TabsContent value="problem" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What's the Problem</CardTitle>
                  <CardDescription>Critical challenges identified through interviews with Savannah, GA firefighters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Research Approach</h4>
                    <p className="text-muted-foreground mb-3">
                      Through comprehensive interviews with local firefighters in Savannah, GA, we identified four critical insights 
                      that underscore the magnitude of the challenges they face in their life-saving work.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Critical Safety Challenges</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>
                        <strong>Lack of Visibility & Navigation:</strong> Firefighters face extreme difficulty navigating inside burning 
                        buildings due to dense smoke and poor navigation tools, putting their lives at risk
                      </li>
                      <li>
                        <strong>Health Hazards in Hoarded Homes:</strong> Scattered medical needles, toxic substances, and cluttered 
                        environments create additional dangers that are invisible until encountered
                      </li>
                      <li>
                        <strong>Communication Failures:</strong> Poor walkie-talkie reception hampers team communication, especially 
                        in attics and basements where reception is weakest
                      </li>
                      <li>
                        <strong>Equipment Limitations:</strong> Infrared blockages and non-puncture proof suits compromise firefighters' 
                        safety and ability to detect and respond to fires effectively
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Urgency</h4>
                    <p className="text-muted-foreground">
                      These challenges require urgent attention to ensure firefighters' safety and effectiveness in saving lives and 
                      properties. Every second counts in a fire emergency, and current tools are not providing the support teams need.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solution" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Why Use FINAV?</CardTitle>
                  <CardDescription>A state-of-the-art fire management system enhancing communication, navigation, and coordination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="mb-6">
                    <img 
                      src={finavSketches} 
                      alt="FINAV AR Interface Design Sketches"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      Conceptual design sketches showing AR interface development, heads-up display wireframes, and user interaction flows
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">System Overview</h4>
                    <p className="text-muted-foreground mb-3">
                      The FINAV Fire Management System allows firefighting chiefs to coordinate their team's efforts with a higher 
                      level of situational awareness. Our system provides high-fidelity audio transmission, clear mapping and navigation, 
                      and real-time monitoring of team members' vitals and locations.
                    </p>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-foreground mb-2">Why We Designed It This Way</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>AR over traditional screens:</strong> Firefighters told us they can't look at handheld devices in smoke — AR overlay keeps hands free and information in peripheral vision</li>
                      <li><strong>Firetruck as communication hub:</strong> Interviews revealed walkie-talkies fail in basements and attics; a boosted signal from the truck maintains connectivity where it matters most</li>
                      <li><strong>SAGIS integration:</strong> Firefighters mentioned they often enter buildings blind — existing public data on floor plans could save critical seconds during rescue</li>
                      <li><strong>Vitals monitoring for chiefs:</strong> Research showed chiefs make withdrawal decisions based on radio silence, which is unreliable — real-time vitals provide objective safety data</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Core System Components</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>
                        <strong>Hub Boost:</strong> Digital communication methods ensure high-quality audio transmission and personalized 
                        one-on-one communication. The firetruck's wireless communication hub boosts signal strength and prevents disconnects
                      </li>
                      <li>
                        <strong>Behind the Mask:</strong> Augmented Reality lenses and heat sensor wireless antenna provide enhanced 
                        visibility and thermal detection capabilities
                      </li>
                      <li>
                        <strong>Navigate:</strong> Clear mapping and navigation using modern GPS, mapping software, and publicly available 
                        housing data gives firefighters better awareness of their surroundings
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">SAGIS Integration</h4>
                    <p className="text-muted-foreground">
                      Leveraging the Savannah Area Geographic Information System (SAGIS) to access geospatial data, floor plans, and 
                      property information on a standardized platform, enabling firefighters to plan ahead and assess situations accurately.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                  <CardDescription>Comprehensive tools for enhanced firefighter safety and coordination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Dispatch Call Assistance</h4>
                    <p className="text-muted-foreground">
                      Services designed to help those in need with efficient emergency response coordination.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Easy Access Control</h4>
                    <p className="text-muted-foreground mb-2">
                      Experience complete control with a quick menu providing:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Real-time floor plans</li>
                      <li>Live camera feeds</li>
                      <li>Firefighter information and vitals</li>
                      <li>Communication tools</li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      Empowering chiefs and crews to respond swiftly and effectively to emergencies.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Less Guesswork</h4>
                    <p className="text-muted-foreground">
                      By providing real-time visual information before arriving at the dispatch scene, our system enables the chief 
                      and crew to accurately assess the situation and avoid guesswork and delays.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Enhanced Communication</h4>
                    <p className="text-muted-foreground">
                      The system provides the firefighter chief with full access to the team's thermal feeds, house locations, and 
                      vitals for efficient coordination during intense situations. This gives the chief a higher situational awareness 
                      level and tools to minimize missteps that could shorten the operability window.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Plan Ahead with Data</h4>
                    <p className="text-muted-foreground mb-2">
                      Through SAGIS integration, firefighters can:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Access complete data history on local properties</li>
                      <li>View detailed floor plans before entering buildings</li>
                      <li>Review property hazards and structural information</li>
                      <li>Utilize geospatial data on a standardized platform</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="outcome" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Outcome & Impact</CardTitle>
                  <CardDescription>Strong stakeholder recognition and investment interest</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Final Presentation</h4>
                    <p className="text-muted-foreground">
                      After several weeks of dedicated effort, I had the honor of presenting our team's final deliverable. The concept 
                      we presented received great recognition from future stakeholders who expressed a strong interest in investing in it.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Stakeholder Response</h4>
                    <p className="text-muted-foreground">
                      Stakeholders recognized the significant benefits FINAV could offer to their organization and were enthusiastic 
                      about its potential to assist firefighters in life-saving situations. The system's comprehensive approach to 
                      addressing critical safety challenges resonated strongly with decision-makers.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Contributions</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Completed 10-week design studio project as part of team</li>
                      <li>Conducted interviews with active firefighters to understand needs</li>
                      <li>Contributed to AR and communication solution concepts</li>
                      <li>Helped integrate existing geospatial data systems (SAGIS)</li>
                      <li>Participated in final stakeholder presentation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What I Learned</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>How to conduct primary research with specialized users (firefighters)</li>
                      <li>The importance of understanding real-world constraints before designing</li>
                      <li>How to collaborate effectively in a team design environment</li>
                      <li>How user-centered design can address life-or-death challenges</li>
                      <li>How to present design concepts to stakeholders</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Reflection</h4>
                    <p className="text-muted-foreground">
                      This academic project taught me the power of user-centered design in addressing real-world safety challenges. 
                      Working with actual firefighters gave me experience conducting research with specialized user groups and 
                      understanding their unique needs and constraints.
                    </p>
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

export default MonsterAisleCaseStudy;
