
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import MembershipTeaser from '@/components/home/MembershipTeaser';
import FeaturedDoctors from '@/components/home/FeaturedDoctors';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <MembershipTeaser />
      <FeaturedDoctors />
      <Testimonials />
      <CTA />
    </MainLayout>
  );
};

export default Index;
