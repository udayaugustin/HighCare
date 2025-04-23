
import React, { Suspense } from 'react';
import ScrollToTop from './components/utils/ScrollToTop';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Doctors from "./pages/Doctors";
import Clinics from "./pages/Clinics";
import Membership from "./pages/Membership";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import GeneralCheckup from "./pages/treatments/GeneralCheckup";
import DentalCare from "./pages/treatments/DentalCare";
import Cardiology from "./pages/treatments/Cardiology";
import Orthopedics from "./pages/treatments/Orthopedics";
import Dermatology from "./pages/treatments/Dermatology";
import Pediatrics from "./pages/treatments/Pediatrics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/clinics" element={<Clinics />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments/general-checkup" element={<Suspense fallback={<div>Loading...</div>}><GeneralCheckup /></Suspense>} />
            <Route path="/treatments/dental-care" element={<Suspense fallback={<div>Loading...</div>}><DentalCare /></Suspense>} />
            <Route path="/treatments/cardiology" element={<Suspense fallback={<div>Loading...</div>}><Cardiology /></Suspense>} />
            <Route path="/treatments/orthopedics" element={<Suspense fallback={<div>Loading...</div>}><Orthopedics /></Suspense>} />
            <Route path="/treatments/dermatology" element={<Suspense fallback={<div>Loading...</div>}><Dermatology /></Suspense>} />
            <Route path="/treatments/pediatrics" element={<Suspense fallback={<div>Loading...</div>}><Pediatrics /></Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
