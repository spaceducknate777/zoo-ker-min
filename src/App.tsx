import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
<<<<<<< HEAD
import NotFound from "./pages/NotFound";
import BMWProject from "./pages/BMWProject";
import USAAProject from "./pages/USAAProject";
import BoozAllenProject from "./pages/BoozAllenProject";
import TraderJoesProject from "./pages/TraderJoesProject";
=======
import ATS from "./pages/ATS";
import NotFound from "./pages/NotFound";
>>>>>>> glowup/main

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
<<<<<<< HEAD
          <Route path="/projects/bmw" element={<BMWProject />} />
          <Route path="/projects/usaa" element={<USAAProject />} />
          <Route path="/projects/booz-allen" element={<BoozAllenProject />} />
          <Route path="/projects/trader-joes" element={<TraderJoesProject />} />
=======
          <Route path="/ats" element={<ATS />} />
>>>>>>> glowup/main
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
