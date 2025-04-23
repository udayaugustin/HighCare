
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';

const Orthopedics = () => {
  return (
    <MainLayout>
      <div className="container py-16">
        <SectionHeading
          title="Orthopedics"
          subtitle="Specialized care for bones, joints, and muscles"
          centered
        />
        
        <div className="prose max-w-none mt-8">
          <h2>Orthopedic Services</h2>
          <p>Our orthopedic department provides comprehensive care for musculoskeletal conditions, from diagnosis to treatment and rehabilitation.</p>
          
          <h3>Our Specialties</h3>
          <ul>
            <li>Joint replacement surgery</li>
            <li>Sports medicine</li>
            <li>Spine surgery</li>
            <li>Fracture care</li>
            <li>Arthroscopy</li>
            <li>Physical therapy</li>
          </ul>

          <h3>Common Conditions We Treat</h3>
          <ul>
            <li>Arthritis</li>
            <li>Sports injuries</li>
            <li>Back and neck pain</li>
            <li>Joint pain</li>
            <li>Bone fractures</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Orthopedics;
