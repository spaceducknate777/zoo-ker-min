import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisualResume = () => {
  const handleExportPDF = () => {
    alert("Opening print dialog - save as PDF for best ATS compatibility");
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Nathan Zukerman Resume</h1>
      <p className="mb-6 text-center">This is a test to see if VisualResume renders.</p>

      {/* Export buttons */}
      <div className="flex flex-col gap-3">
        <Button onClick={handleExportPDF} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
          <Download className="h-4 w-4" />
          Print/Visual PDF
        </Button>

        <Button asChild className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded">
          <a href="/nathan-zukerman-resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>
    </div>
  );
};

export default VisualResume;
