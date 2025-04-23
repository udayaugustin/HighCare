
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';

const Cardiology = () => {
  return (
    <MainLayout>
      <div className="container py-16">
        <SectionHeading
          title="Cardiology"
          subtitle="Expert heart care services and treatments"
          centered
        />
        
        <div className="prose max-w-none mt-8">
          <h2>Our Cardiology Services</h2>
          <p>Our cardiology department provides comprehensive care for heart and cardiovascular conditions. Our expert cardiologists use state-of-the-art technology for diagnosis and treatment.</p>
          
          <h3>Services We Offer</h3>
          <ul>
            <li>Cardiac Consultation</li>
            <li>ECG (Electrocardiogram)</li>
            <li>Echocardiography</li>
            <li>Stress Testing</li>
            <li>Holter Monitoring</li>
            <li>Cardiac Rehabilitation</li>
          </ul>

          <h3>When to See a Cardiologist</h3>
          <p>You should consider seeing a cardiologist if you experience:</p>
          <ul>
            <li>Chest pain or discomfort</li>
            <li>Shortness of breath</li>
            <li>Irregular heartbeat</li>
            <li>High blood pressure</li>
            <li>Dizziness or fainting</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cardiology;
