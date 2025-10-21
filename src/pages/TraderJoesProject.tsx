import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import traderJoesImage from "@/assets/trader-joes-project.jpg";

const TraderJoesProject = () => {
  return (
    <ProjectDetailLayout
      title="Trader Joe's Supply Redesign"
      role="UX Researcher"
      timeline="5 months (2023)"
      client="Trader Joe's"
      heroImage={traderJoesImage}
      overview="Redesigned Trader Joe's internal supply chain management system to optimize in-store inventory workflows. This project focused on helping store employees efficiently manage product replenishment, reduce waste, and improve customer satisfaction by ensuring popular items stay in stock."
      problem="Store employees were using a confusing, legacy system that required extensive training and still led to frequent stockout situations and excess inventory waste. The interface was built for desktop computers, but employees needed mobile access while restocking shelves. Manual data entry errors were common, leading to ordering mistakes and customer disappointment. Employee surveys revealed the system was the #1 source of workplace frustration."
      solution="I conducted on-site ethnographic research at 5 Trader Joe's locations, shadowing employees during restocking shifts and peak hours. Using design thinking workshops with store managers and employees, we identified pain points and co-created solutions. The redesigned system featured a mobile-first interface with barcode scanning, predictive ordering based on historical sales patterns, and real-time inventory visibility. We implemented smart notifications for items approaching stockout thresholds and simplified the ordering workflow from 8 steps to 3."
      results={[
        "Reduced product stockout incidents by 34% in pilot stores",
        "Decreased food waste from overordering by 22%",
        "Cut average time for inventory management tasks by 47%",
        "Employee satisfaction with inventory system increased from 4.2 to 8.1 out of 10",
        "New hire training time reduced from 2 weeks to 3 days",
        "Customer satisfaction scores improved by 12% in stores using the new system",
        "System rolled out to 200+ stores nationwide following successful pilot"
      ]}
      keyTakeaways={[
        "On-site observation revealed workflow inefficiencies that employees had learned to work around and no longer even reported",
        "Involving end users (store employees) in the design process led to practical solutions that actually fit their workflow",
        "Mobile-first design isn't just a trend—it's essential for users who need access while moving around physical spaces",
        "Small UX improvements in frequently used systems have massive compound effects on efficiency and satisfaction"
      ]}
    />
  );
};

export default TraderJoesProject;
