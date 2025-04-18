
import React from 'react';
import { Heart, Shield, Activity, Stethoscope, Pill, Baby } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import TreatmentCard from '@/components/ui/TreatmentCard';

const services = [
  {
    title: 'Preventive Care',
    description: 'Regular check-ups and screenings to prevent health issues before they occur.',
    icon: <Shield className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/preventive-care'
  },
  {
    title: 'Cardiology',
    description: 'Comprehensive heart care services from check-ups to advanced treatments.',
    icon: <Heart className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/cardiology'
  },
  {
    title: 'Internal Medicine',
    description: 'Diagnosis and treatment of diseases affecting adults across all body systems.',
    icon: <Activity className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/internal-medicine'
  },
  {
    title: 'General Medicine',
    description: 'Primary healthcare for all ages, from routine check-ups to chronic conditions.',
    icon: <Stethoscope className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/general-medicine'
  },
  {
    title: 'Pediatrics',
    description: 'Specialized healthcare for infants, children and adolescents.',
    icon: <Baby className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/pediatrics'
  },
  {
    title: 'Pharmacy Services',
    description: 'Prescription medications, over-the-counter products, and medication counseling.',
    icon: <Pill className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/pharmacy'
  }
];

const Services = () => {
  return (
    <section className="section bg-gray-50 py-24">
      <div className="container">
        <SectionHeading 
          title="Our Services" 
          subtitle="At HighCare Health, we provide a comprehensive range of healthcare services to meet all your medical needs."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <TreatmentCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
