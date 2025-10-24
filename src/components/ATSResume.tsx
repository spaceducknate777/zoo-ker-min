import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ATSResume = () => {
  const handleExportPDF = () => {
    toast.info("Opening print dialog - save as PDF");
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Export Button */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <Button onClick={handleExportPDF} className="shadow-lg gap-2">
          <Download className="h-4 w-4" />
          Export ATS PDF
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12 print:px-0 print:py-0">
        {/* Header */}
        <header className="mb-8 pb-4 border-b-2 border-black">
          <h1 className="text-4xl font-bold mb-2">Nathan Zukerman</h1>
          <p className="text-xl font-semibold mb-3">Senior UI/UX Designer | UX Research Lead | Web Specialist</p>
          <div className="text-sm space-y-1">
            <p>Email: natezukerman@gmail.com</p>
            <p>Portfolio: zoo-ker-min.framer.ai</p>
            <p>Location: Remote</p>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 border-b border-black pb-1">PROFESSIONAL SUMMARY</h2>
          <p className="leading-relaxed">
            Senior UI/UX Designer and Research Lead with 7+ years of experience designing intuitive digital experiences for startups, government, and Fortune 500 clients. Specializing in design systems, accessibility (WCAG 2.1), and user research methodologies. Proven ability to drive product strategy through data-driven design decisions, leading cross-functional teams to deliver measurable business impact. Expert in reducing user friction, improving conversion rates, and championing inclusive design across web and mobile platforms in remote and agile environments.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 border-b border-black pb-1">CORE COMPETENCIES</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <h3 className="font-bold mb-2">Design Tools</h3>
              <p className="text-sm">Figma, Adobe XD, Sketch, InVision, Illustrator, Photoshop, Principle</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">UX Methods</h3>
              <p className="text-sm">User Research, Wireframing, Prototyping, Design Systems, Accessibility (WCAG 2.1), Information Architecture, Interaction Design, Journey Mapping</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Research Methods</h3>
              <p className="text-sm">Usability Testing, A/B Testing, Contextual Inquiry, Card Sorting, Tree Testing, Survey Design, Ethnographic Studies, Heuristic Evaluation</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Technical Skills</h3>
              <p className="text-sm">HTML/CSS, Responsive Design, Git/GitHub, Design Tokens, Component Libraries, Figma API, Web Performance</p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 border-b border-black pb-1">PROFESSIONAL EXPERIENCE</h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold">Senior Interaction Designer</h3>
                <p className="font-semibold">Pearl | Remote</p>
              </div>
              <p className="font-semibold">02/2023 – 10/2023</p>
            </div>
            <p className="text-sm italic mb-2">Impact: 50K+ users, 40% faster delivery, 25% conversion boost</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Led end-to-end design for 3 product launches, reaching 50K+ users in first quarter</li>
              <li>Built comprehensive design system with 50+ components, reducing design-to-dev time by 40%</li>
              <li>Designed responsive interfaces for web and mobile, improving conversion rates by 25%</li>
              <li>Collaborated with cross-functional teams of 12+ engineers and PMs to drive product strategy</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold">Senior UX Designer</h3>
                <p className="font-semibold">Booz Allen Hamilton | Washington, DC</p>
              </div>
              <p className="font-semibold">09/2019 – 10/2021</p>
            </div>
            <p className="text-sm italic mb-2">Impact: 20% error reduction, 15% engagement lift, $2M+ product roadmap, 5 agencies</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Drove UX strategy for federal digital transformation initiatives across 5 government agencies</li>
              <li>Reduced user errors by 20% through inclusive style guide development for NIH's Library of Medicine</li>
              <li>Led DOT website redesign resulting in 15% increase in user engagement and 200K+ monthly visits</li>
              <li>Conducted 12+ usability studies with 150+ participants, informing $2M+ product roadmap decisions</li>
              <li>Championed WCAG 2.1 AA accessibility standards, achieving 100% compliance across projects</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold">UX Research Lead (Human-Computer Interaction)</h3>
                <p className="font-semibold">BMW Group | Savannah, GA</p>
              </div>
              <p className="font-semibold">09/2019 – 11/2019</p>
            </div>
            <p className="text-sm italic mb-2">Impact: 500+ participants, 3 markets, $500K+ secured</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Conducted comprehensive user research study with 500+ participants across 3 markets</li>
              <li>Designed and validated BMW's first natural gesture interface using advanced HCI methodologies</li>
              <li>Led mixed-methods research combining ethnographic studies, usability testing, and A/B experiments</li>
              <li>Presented research findings to C-level executives, securing $500K+ for prototype development</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold">UI/UX Designer</h3>
                <p className="font-semibold">USAA | San Antonio, TX</p>
              </div>
              <p className="font-semibold">06/2018 – 08/2018</p>
            </div>
            <p className="text-sm italic mb-2">Impact: 12M+ users, 15% engagement, 10% retention</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Designed 3 icons adopted into official design library, used by 12M+ active users</li>
              <li>Contributed to service feature launch that increased app engagement by 15% and retention by 10%</li>
              <li>Collaborated in agile environment with daily standups and bi-weekly sprint reviews</li>
            </ul>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 border-b border-black pb-1">KEY ACHIEVEMENTS</h2>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Reached 500K+ users through designed digital products across multiple platforms</li>
            <li>Conducted research with 650+ participants using diverse methodologies</li>
            <li>Built production design systems with 50+ reusable components</li>
            <li>Achieved measurable improvements: 40% faster delivery, 25% conversion increases, 20% error reduction</li>
            <li>Led cross-functional teams in remote and agile environments</li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 border-b border-black pb-1">EDUCATION</h2>
          <div>
            <h3 className="text-lg font-bold">Bachelor of Fine Arts in User Experience Design</h3>
            <p className="font-semibold">Savannah College of Art and Design</p>
          </div>
        </section>

        {/* Additional Information */}
        <section className="text-xs text-gray-700 print:text-black">
          <p>References and portfolio case studies available upon request.</p>
        </section>
      </div>
    </div>
  );
};

export default ATSResume;
