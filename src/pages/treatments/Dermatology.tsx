
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';

const Dermatology = () => {
  return (
    <MainLayout>
      <div className="container py-16">
        <SectionHeading
          title="Dermatology"
          subtitle="Expert care for skin, hair, and nail conditions"
          centered
        />
        
        <div className="prose max-w-none mt-8">
          <h2>Dermatology Services</h2>
          <p>Our dermatology department offers comprehensive care for all types of skin conditions, cosmetic procedures, and preventive skin care.</p>
          
          <h3>Our Services</h3>
          <ul>
            <li>Skin cancer screening</li>
            <li>Acne treatment</li>
            <li>Laser therapy</li>
            <li>Hair loss treatment</li>
            <li>Dermal fillers</li>
            <li>Chemical peels</li>
          </ul>

          <h3>Common Conditions We Treat</h3>
          <ul>
            <li>Acne and rosacea</li>
            <li>Eczema</li>
            <li>Psoriasis</li>
            <li>Skin infections</li>
            <li>Age spots and wrinkles</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dermatology;
