
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ClientLogoCarousel from '@/components/ui/ClientLogoCarousel';
import SubscriberBanner from '@/components/ui/SubscriberBanner';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${!isHomePage ? 'pt-20' : ''}`}>
        {children}
      </main>
      <ClientLogoCarousel />
      <SubscriberBanner count={1000} />
      <Footer />
    </div>
  );
};

export default MainLayout;
