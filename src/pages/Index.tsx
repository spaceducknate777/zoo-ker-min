import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickCredibility from "@/components/QuickCredibility";
import FeaturedProject from "@/components/FeaturedProject";
import CreativeWork from "@/components/CreativeWork";
import Projects from "@/components/Projects";
import HowIBuild from "@/components/HowIBuild";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <QuickCredibility />
      <FeaturedProject />
      <CreativeWork />
      <Projects />
      <HowIBuild />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
