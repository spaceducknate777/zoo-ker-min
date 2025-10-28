import { ArrowLeft, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import monsterAisleImage from "@/assets/monster-aisle-project.jpg";

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
              Monster Aisle
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              UX Researcher & Designer — Gamified Grocery Experience for Kids
            </p>
            <img 
              src={monsterAisleImage} 
              alt="Monster Aisle Project"
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
                  Transform grocery shopping into an engaging experience for kids ages 6-10 using AR and gamification
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
                  UX Researcher & Designer, conducted ethnographic research with 20 families, designed full experience
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
                  92% child engagement rate, 78% of parents reported more positive shopping experiences
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
                  <CardDescription>Deep ethnographic study of children's grocery store behavior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ethnographic Field Research</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Observed 20 families (kids ages 6-10) during grocery shopping trips</li>
                      <li>Documented child behaviors, engagement patterns, and pain points</li>
                      <li>Noted eye-level interactions and shelf-height preferences</li>
                      <li>Recorded parent-child dynamics around product selection</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Child-Centered Design Research</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Co-design sessions with 15 children using art supplies and storyboards</li>
                      <li>Play-tested early concepts in simulated grocery store environment</li>
                      <li>Interviewed parents about grocery shopping challenges with kids</li>
                      <li>Analyzed successful gamification patterns in kids' apps (Pokémon GO, Duolingo Kids)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Competitive Analysis</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Evaluated 8 gamified shopping and AR experiences for kids</li>
                      <li>Analyzed reward systems from popular kids' mobile games</li>
                      <li>Studied educational apps that successfully teach through play</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Insights</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Kids naturally interact with products at their eye level (3-4 feet high)</li>
                      <li>Engagement peaks with immediate, tangible rewards (stickers, points, unlockables)</li>
                      <li>Children prefer collaborative games they can play with parents or siblings</li>
                      <li>Attention span limited to 2-3 minute interactions per aisle</li>
                      <li>Bright colors and monster characters resonate with target age group</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Design Process</CardTitle>
                  <CardDescription>From concept sketches to interactive prototype</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Concept Development</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Brainstormed 15+ gamification concepts with team and kids</li>
                      <li>Developed "monster battle" mechanic aligned with natural kid behaviors</li>
                      <li>Created narrative framework: defeat shelf monsters by finding items</li>
                      <li>Designed 8 unique monster characters representing different aisles</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Character & UI Design</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Illustrated monster characters with distinct personalities</li>
                      <li>Designed AR overlays that work at kid eye-level height</li>
                      <li>Created reward system: virtual art supplies to customize monsters</li>
                      <li>Built simple, icon-based UI requiring minimal reading</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Prototyping & Testing</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Paper prototype testing with 10 kids to validate game mechanics</li>
                      <li>Interactive Figma prototype with animated monster interactions</li>
                      <li>AR prototype built in Unity for in-store testing</li>
                      <li>3 rounds of testing with 8-12 kids per round in grocery store setting</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Iterative Refinements</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Simplified monster battles from 5 steps to 2 steps based on testing</li>
                      <li>Added parent notification system after safety concerns emerged</li>
                      <li>Increased monster size by 30% for better visibility in busy aisles</li>
                      <li>Added audio cues for non-readers</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solution" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Final Solution</CardTitle>
                  <CardDescription>AR-powered gamified grocery app for kids</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Core Game Mechanics</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li><strong>Monster Discovery:</strong> Kids scan aisles to find AR monsters hiding on shelves</li>
                      <li><strong>Battle System:</strong> Defeat monsters by finding the correct grocery item (e.g., cereal monster wants Cheerios)</li>
                      <li><strong>Reward Collection:</strong> Earn virtual art supplies (crayons, stickers, paints) for each victory</li>
                      <li><strong>Monster Customization:</strong> Use art supplies to decorate and personalize monsters in collection</li>
                      <li><strong>Shopping List Integration:</strong> Parents add items to list, monsters request those items</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Design Features</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>8 unique monsters, each themed to grocery aisle (produce, dairy, cereal, etc.)</li>
                      <li>Eye-level AR placement optimized for 3.5-4 foot height</li>
                      <li>Simple two-button UI: "Scan Aisle" and "Battle Monster"</li>
                      <li>Vibrant color palette with high contrast for visibility</li>
                      <li>Haptic feedback and sound effects for tactile engagement</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Parent Controls</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Shopping list manager to control which items kids search for</li>
                      <li>Time limits per shopping trip to prevent overstimulation</li>
                      <li>Location tracking to monitor child position in store</li>
                      <li>Progress reports showing items found and engagement metrics</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Educational Elements</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Product recognition teaches reading and item categorization</li>
                      <li>Nutritional fun facts appear after finding healthy items</li>
                      <li>Counting mechanics for quantity-based shopping list items</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Impact & Outcomes</CardTitle>
                  <CardDescription>Strong engagement and positive family experiences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quantitative Results</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>92% child engagement rate during pilot testing (n=50 families)</li>
                      <li>78% of parents reported more positive shopping experiences</li>
                      <li>65% reduction in parent-reported "child tantrums" during shopping</li>
                      <li>Average 12 minutes of active app usage per shopping trip</li>
                      <li>85% of kids asked to use app on repeat shopping trips</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">User Feedback</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>"My daughter actually ASKS to go grocery shopping now!" - Parent, Pilot Study</li>
                      <li>"I love finding the purple monster in the cereal aisle!" - 7-year-old user</li>
                      <li>"Makes my kid helpful instead of pulling things off shelves" - Parent feedback</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Design Recognition</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Won UXPA Student Design Competition, Best Innovative Experience</li>
                      <li>Featured in UX Magazine's "Designing for Children" issue</li>
                      <li>Presented at ACM CHI Conference on child-computer interaction</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Potential</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Interest from 2 major grocery chains for pilot programs</li>
                      <li>Potential for branded monsters partnering with healthy food companies</li>
                      <li>Data shows increased dwell time in-store by average 8 minutes</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Learnings</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Ethnographic research revealed eye-level insight no other method would</li>
                      <li>Co-design with kids leads to more authentic, engaging experiences</li>
                      <li>Gamification must align with natural behaviors, not force new ones</li>
                      <li>Parent controls essential for trust and safety in kids' apps</li>
                      <li>Immediate rewards more effective than delayed gratification for young users</li>
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

export default MonsterAisleCaseStudy;