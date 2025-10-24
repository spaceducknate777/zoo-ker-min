import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import boozAllenImage from "@/assets/booz-allen-project.jpg";

const BoozAllenProject = () => {
  return (
    <ProjectDetailLayout
      title="Booz Allen Hamilton — FTD Project"
      role="Research Lead"
      timeline="10 months (2020-2021)"
      client="Booz Allen Hamilton (Government Contract)"
      heroImage={boozAllenImage}
      overview="Led the UX research and design for a federal government data visualization platform used by policy analysts and decision-makers. The platform consolidates complex datasets from multiple agencies to support evidence-based policy decisions. This project required balancing security requirements, accessibility mandates, and the need for sophisticated data analysis tools."
      problem="Government analysts were using outdated, disconnected systems that made it difficult to identify trends and patterns across datasets. The existing platform had poor data visualization, confusing navigation, and failed to meet Section 508 accessibility requirements. Users spent an average of 45 minutes searching for specific data points that should have been immediately available. The system's complexity also led to a 40% error rate in data interpretation."
      solution="I led comprehensive user research including contextual inquiries with 25+ government analysts, created detailed user journey maps, and conducted card sorting exercises to improve information architecture. We redesigned the platform with an emphasis on intuitive data visualization, implementing interactive charts and dashboards that made patterns immediately visible. The new design included customizable workspaces, saved searches, and collaborative annotation features. Every component was designed to exceed Section 508 accessibility requirements."
      results={[
        "Increased user engagement by 15% within first quarter of deployment",
        "Reduced average time to find critical data points from 45 minutes to 8 minutes (82% improvement)",
        "Data interpretation error rate decreased from 40% to 12%",
        "Achieved 100% Section 508 compliance, exceeding federal accessibility mandates",
        "Platform expanded from pilot program (200 users) to full deployment (2,000+ users) across 8 agencies",
        "Received Federal IT Excellence Award for accessibility innovation"
      ]}
      keyTakeaways={[
        "Government users have unique constraints (security clearances, regulatory compliance) that require creative UX solutions",
        "Accessibility requirements, when embraced early, lead to better design for everyone—not just users with disabilities",
        "Complex data visualization requires extensive user validation to ensure insights are clear and actionable",
        "Building trust with government users means demonstrating security and reliability at every step of the design process"
      ]}
    />
  );
};

export default BoozAllenProject;
