
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ClientLogoCarousel from '../ui/ClientLogoCarousel';
import SubscriberBanner from '../ui/SubscriberBanner';

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
      <SubscriberBanner />
      <Footer />
    </div>
  );
};

export default MainLayout;
