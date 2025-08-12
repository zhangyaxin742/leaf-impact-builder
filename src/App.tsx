import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Pages
import Dashboard from "./pages/Dashboard";
import Budget from "./pages/Budget";
import Invest from "./pages/Invest";
import Learn from "./pages/Learn";
import Profile from "./pages/Profile";

// Onboarding Pages
import Welcome from "./pages/onboarding/Welcome";
import AgeConsent from "./pages/onboarding/AgeConsent";
import Goals from "./pages/onboarding/Goals";
import Finish from "./pages/onboarding/Finish";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main App Pages */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/profile" element={<Profile />} />

          {/* Onboarding Flow */}
          <Route path="/onboarding/welcome" element={<Welcome />} />
          <Route path="/onboarding/age-consent" element={<AgeConsent />} />
          <Route path="/onboarding/goals" element={<Goals />} />
          <Route path="/onboarding/finish" element={<Finish />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
