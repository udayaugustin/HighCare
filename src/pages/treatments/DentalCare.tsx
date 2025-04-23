
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';

const DentalCare = () => {
  return (
    <MainLayout>
      <div className="container py-16">
        <SectionHeading
          title="Dental Care"
          subtitle="Complete oral health services and dental procedures"
          centered
        />
        
        <div className="prose max-w-none mt-8">
          <h2>Our Dental Services</h2>
          <p>We provide comprehensive dental care services to maintain your oral health and give you a confident smile.</p>
          
          <h3>Services We Offer</h3>
          <ul>
            <li>Routine dental checkups</li>
            <li>Professional teeth cleaning</li>
            <li>Cavity treatment</li>
            <li>Root canal therapy</li>
            <li>Dental implants</li>
            <li>Orthodontic care</li>
          </ul>

          <h3>Why Choose Our Dental Care</h3>
          <ul>
            <li>Experienced dentists</li>
            <li>Modern dental equipment</li>
            <li>Comfortable environment</li>
            <li>Preventive care focus</li>
            <li>Emergency dental services</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default DentalCare;
