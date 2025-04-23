
import React from 'react';
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<React.Suspense fallback={<div>Loading...</div>}>
          <Route path="/" element={<Index />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments/general-checkup" element={React.lazy(() => import('./pages/treatments/GeneralCheckup'))} />
          <Route path="/treatments/dental-care" element={React.lazy(() => import('./pages/treatments/DentalCare'))} />
          <Route path="/treatments/cardiology" element={React.lazy(() => import('./pages/treatments/Cardiology'))} />
          <Route path="/treatments/orthopedics" element={React.lazy(() => import('./pages/treatments/Orthopedics'))} />
          <Route path="/treatments/dermatology" element={React.lazy(() => import('./pages/treatments/Dermatology'))} />
          <Route path="/treatments/pediatrics" element={React.lazy(() => import('./pages/treatments/Pediatrics'))} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
