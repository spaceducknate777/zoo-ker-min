import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BMWCaseStudy from "./pages/case-studies/bmw";
import USAACaseStudy from "./pages/case-studies/usaa";
import BoozAllenCaseStudy from "./pages/case-studies/booz-allen";
import MonsterAisleCaseStudy from "./pages/case-studies/monster-aisle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies/bmw" element={<BMWCaseStudy />} />
          <Route path="/case-studies/usaa" element={<USAACaseStudy />} />
          <Route path="/case-studies/booz-allen" element={<BoozAllenCaseStudy />} />
          <Route path="/case-studies/monster-aisle" element={<MonsterAisleCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
