
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';

const GeneralCheckup = () => {
  return (
    <MainLayout>
      <div className="container py-16">
        <SectionHeading
          title="General Health Checkup"
          subtitle="Comprehensive health screening and preventive care"
          centered
        />
        
        <div className="prose max-w-none mt-8">
          <h2>Our General Checkup Services</h2>
          <p>Regular health checkups are essential for maintaining good health and detecting potential issues early. Our comprehensive health screening includes various tests and examinations.</p>
          
          <h3>What's Included</h3>
          <ul>
            <li>Physical examination</li>
            <li>Blood pressure check</li>
            <li>Blood sugar test</li>
            <li>Cholesterol screening</li>
            <li>BMI calculation</li>
            <li>Basic organ function tests</li>
          </ul>

          <h3>Why Regular Checkups Matter</h3>
          <p>Regular health checkups help in:</p>
          <ul>
            <li>Early detection of health issues</li>
            <li>Prevention of serious conditions</li>
            <li>Maintaining overall wellness</li>
            <li>Tracking health progress</li>
            <li>Updating vaccinations</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default GeneralCheckup;
