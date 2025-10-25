import { useEffect } from "react";

const ResumeRedirect = () => {
  useEffect(() => {
    window.location.href = "https://resume-ux-glow-up-vseh.vercel.app/";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Redirecting to resume… If nothing happens, <a href="https://resume-ux-glow-up-vseh.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">open the resume</a>.</p>
    </div>
  );
};

export default ResumeRedirect;
