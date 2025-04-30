
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import ServiceFlow from '@/components/home/ServiceFlow';
import Services from '@/components/home/Services';
import MembershipTeaser from '@/components/home/MembershipTeaser';
import FeaturedDoctors from '@/components/home/FeaturedDoctors';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import FAQ from '@/components/home/FAQ';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <ServiceFlow />
      <Services />
      <MembershipTeaser />
      <FeaturedDoctors />
      <Testimonials />
      <FAQ />
      <CTA />
    </MainLayout>
  );
};

export default Index;
