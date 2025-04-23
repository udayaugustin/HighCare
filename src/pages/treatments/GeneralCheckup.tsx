
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const GeneralCheckup = () => {
  return (
    <MainLayout>
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-6">General Health Checkup</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Regular health checkups are essential for maintaining good health and detecting potential issues early.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What's Included?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Complete Blood Count (CBC)</li>
            <li>Blood Pressure Check</li>
            <li>Blood Sugar Test</li>
            <li>Cholesterol Level Test</li>
            <li>BMI Measurement</li>
            <li>Physical Examination</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
          <p>Our comprehensive health checkup packages are designed to give you a complete picture of your health status.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default GeneralCheckup;
