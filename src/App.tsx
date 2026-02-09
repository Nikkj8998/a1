import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AgriEquipmentBank from "./pages/AgriEquipmentBank";
import OrganicFarming from "./pages/OrganicFarming";
import Swadhar from "./pages/Swadhar";
import SolarPower from "./pages/SolarPower";
import ERiksha from "./pages/ERiksha";
import BambooPlantationStudy from "./pages/BambooPlantationStudy";
import CSRActivities from "./pages/CSRActivities";
import Partners from "./pages/Partners";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agri-equipment-bank" element={<AgriEquipmentBank />} />
          <Route path="/organic-farming" element={<OrganicFarming />} />
          <Route path="/swadhar" element={<Swadhar />} />
          <Route path="/solar-power" element={<SolarPower />} />
          <Route path="/e-riksha" element={<ERiksha />} />
          <Route path="/bamboo-plantation-study" element={<BambooPlantationStudy />} />
          <Route path="/csr-activities" element={<CSRActivities />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
