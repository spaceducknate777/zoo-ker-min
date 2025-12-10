import { ArrowRight, Lightbulb, PenTool, CheckCircle } from "lucide-react";

interface ProcessStep {
  insight: string;
  decision: string;
  outcome: string;
}

interface DesignProcessFlowProps {
  title?: string;
  steps: ProcessStep[];
}

const DesignProcessFlow = ({ title = "Research → Design → Outcome", steps }: DesignProcessFlowProps) => {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-foreground text-lg">{title}</h4>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr,auto,1fr] gap-3 items-stretch"
          >
            {/* Insight */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-blue-500" />
                <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Research Insight</span>
              </div>
              <p className="text-sm text-foreground/80 flex-1">{step.insight}</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
            </div>

            {/* Decision */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <PenTool className="h-4 w-4 text-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">Design Decision</span>
              </div>
              <p className="text-sm text-foreground/80 flex-1">{step.decision}</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
            </div>

            {/* Outcome */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-xs font-semibold text-green-500 uppercase tracking-wide">Outcome</span>
              </div>
              <p className="text-sm text-foreground/80 flex-1">{step.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignProcessFlow;
