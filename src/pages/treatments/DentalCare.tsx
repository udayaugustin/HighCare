
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const DentalCare = () => {
  return (
    <MainLayout>
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-6">Dental Care Services</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">We provide comprehensive dental care services to maintain your oral health and give you a confident smile.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Services</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Regular Dental Checkups</li>
            <li>Teeth Cleaning</li>
            <li>Cavity Fillings</li>
            <li>Root Canal Treatment</li>
            <li>Teeth Whitening</li>
            <li>Dental Implants</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Expert Care</h2>
          <p>Our experienced dentists use the latest technology to provide the best dental care possible.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default DentalCare;
