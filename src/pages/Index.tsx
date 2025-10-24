import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VisualResume from "@/resume/components/VisualResume"; // ✅ local import
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Interactive Resume Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Interactive Resume</h2>
        <div className="max-w-7xl mx-auto">
          <VisualResume />
        </div>
      </section>

      {/* Optional Button to Download PDF version */}
      <section className="flex justify-center my-12">
        <Button variant="outline" size="lg" asChild>
          <a
            href="/nathan-zukerman-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
