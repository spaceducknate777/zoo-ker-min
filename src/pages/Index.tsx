import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import CreativeWork from "@/components/CreativeWork";
import HowIBuild from "@/components/HowIBuild";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <ProfessionalExperience />
      <HowIBuild />
      <CreativeWork />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
