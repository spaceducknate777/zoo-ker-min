import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickCredibility from "@/components/QuickCredibility";
import Projects from "@/components/Projects";
import HowIBuild from "@/components/HowIBuild";
import About from "@/components/About";
import CreativeWork from "@/components/CreativeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <QuickCredibility />
      <Projects />
      <HowIBuild />
      <About />
      <CreativeWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
