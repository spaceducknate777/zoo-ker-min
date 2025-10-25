import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Dynamically import VisualResume to avoid SSR issues
const VisualResume = dynamic(
  () => import("@/resume/components/VisualResume"),
  { ssr: false }
);

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Interactive Resume Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Interactive Resume
        </h2>
        <div className="max-w-7xl mx-auto">
          <VisualResume />
        </div>
      </section>

      {/* Download PDF Button */}
      <section className="flex justify-center my-12">
        <a
          href="/nathan-zukerman-resume.pdf" // Make sure this is in public/
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="lg" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default App;
