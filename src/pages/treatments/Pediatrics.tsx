
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';

const Pediatrics = () => {
  return (
    <MainLayout>
      <div className="container py-16">
        <SectionHeading
          title="Pediatrics"
          subtitle="Specialized healthcare for children and adolescents"
          centered
        />
        
        <div className="prose max-w-none mt-8">
          <h2>Pediatric Care Services</h2>
          <p>Our pediatric department provides comprehensive healthcare services for infants, children, and adolescents. We focus on growth, development, and childhood illnesses.</p>
          
          <h3>Our Services</h3>
          <ul>
            <li>Well-child visits</li>
            <li>Vaccinations</li>
            <li>Growth monitoring</li>
            <li>Developmental assessments</li>
            <li>Treatment of childhood illnesses</li>
            <li>Behavioral health</li>
          </ul>

          <h3>Why Choose Our Pediatric Care</h3>
          <ul>
            <li>Child-friendly environment</li>
            <li>Experienced pediatricians</li>
            <li>Comprehensive care approach</li>
            <li>Emergency pediatric services</li>
            <li>Family-centered care</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pediatrics;
