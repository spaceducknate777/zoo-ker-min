import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import bmwImage from "@/assets/bmw-project.jpg";

const BMWProject = () => {
  return (
    <ProjectDetailLayout
      title="BMW Gesture Interface"
      role="Lead UX Researcher"
      timeline="8 months (2022-2023)"
      client="BMW Group"
      heroImage={bmwImage}
      overview="Led user research and interface design for BMW's next-generation autonomous driving gesture control system. This innovative project aimed to create intuitive, hands-free interaction methods for drivers transitioning between autonomous and manual driving modes."
      problem="As autonomous vehicles become more prevalent, drivers need seamless ways to interact with vehicle systems without traditional controls. The challenge was designing gesture-based interactions that feel natural, are easily discoverable, and work reliably in various lighting conditions and driving scenarios while maintaining safety as the top priority."
      solution="I conducted extensive ethnographic research and usability testing with 50+ participants to understand natural gesture patterns. Using motion capture technology and rapid prototyping, we developed a gesture library that mapped to users' mental models. The interface combined visual, haptic, and audio feedback to ensure drivers felt confident in their interactions. We iteratively tested prototypes in driving simulators before moving to real-world validation."
      results={[
        "Achieved 94% gesture recognition accuracy in varied lighting conditions",
        "Reduced average task completion time by 40% compared to touchscreen interactions",
        "User satisfaction scores increased from 6.2 to 8.7 out of 10",
        "System successfully integrated into BMW's iX autonomous concept vehicle",
        "Filed 3 patents for novel gesture interaction patterns"
      ]}
      keyTakeaways={[
        "Cross-functional collaboration between UX, engineering, and safety teams was essential for balancing innovation with regulatory requirements",
        "Extensive user testing in realistic driving conditions revealed insights that lab testing missed",
        "Combining multiple feedback modalities (visual, haptic, audio) significantly improved user confidence and system trust",
        "Designing for edge cases and accessibility from the start prevented costly redesigns later in development"
      ]}
    />
  );
};

export default BMWProject;
