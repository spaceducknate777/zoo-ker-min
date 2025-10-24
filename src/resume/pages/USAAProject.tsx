import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import usaaImage from "@/assets/usaa-project.jpg";

const USAAProject = () => {
  return (
    <ProjectDetailLayout
      title="USAA Financial Tools"
      role="UX/UI Designer"
      timeline="6 months (2021-2022)"
      client="USAA (United Services Automobile Association)"
      heroImage={usaaImage}
      overview="Redesigned USAA's mobile financial management tools to better serve military families dealing with frequent relocations, deployments, and unique financial situations. The project focused on simplifying complex financial workflows while maintaining the robust functionality that USAA members rely on."
      problem="Military families face unique financial challenges including frequent moves, deployment-related banking needs, and managing finances across different time zones. The existing USAA mobile app had a steep learning curve, poor information hierarchy, and lacked features specifically designed for deployed service members. User research revealed an average task completion time 60% higher than industry benchmarks."
      solution="I led a complete UX redesign starting with extensive user interviews with 40+ military families and active service members. We created user personas representing different military branches and life situations. The new design featured a simplified dashboard with smart prioritization of urgent tasks, offline-capable core features for deployed members, and streamlined money transfer flows. We implemented WCAG 2.1 AA accessibility standards throughout."
      results={[
        "Reduced average task completion time by 55% for common financial operations",
        "Increased user engagement by 32% month-over-month post-launch",
        "Accessibility score improved from 68% to 98% WCAG compliance",
        "Customer satisfaction ratings increased from 3.8 to 4.6 stars in app stores",
        "Support ticket volume decreased by 28% for mobile banking issues",
        "Feature was highlighted in USAA's annual member report as a key innovation"
      ]}
      keyTakeaways={[
        "Deep user empathy and understanding of unique user contexts (military life) was critical to designing truly helpful features",
        "Accessibility isn't just about compliance—it significantly improved usability for all users",
        "Simplifying complex workflows requires ruthless prioritization based on real user data, not assumptions",
        "Working closely with customer support teams provided invaluable insights into pain points that analytics alone missed"
      ]}
    />
  );
};

export default USAAProject;
