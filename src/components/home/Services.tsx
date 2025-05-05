
import React from 'react';
import { Stethoscope, Shield, Tag, Activity, HeartPulse, Pill } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import TreatmentCard from '@/components/ui/TreatmentCard';

const services = [
  {
    title: 'Free Unlimited OPD Consultations',
    description: 'Unlimited access to outpatient consultations with our experienced doctors.',
    icon: <Stethoscope className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/opd-consultations'
  },
  {
    title: 'Medical Insurance Claim for Higher Treatments',
    description: 'Comprehensive insurance coverage for advanced medical treatments.',
    icon: <Shield className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/insurance-claims'
  },
  {
    title: 'Discount in Medicines and Lab Tests',
    description: 'Special discounts on prescribed medications and diagnostic tests.',
    icon: <Tag className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/discounts'
  },
  {
    title: '',
    description: '',
    icon: <Activity className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/service-4'
  },
  {
    title: '',
    description: '',
    icon: <HeartPulse className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/service-5'
  },
  {
    title: '',
    description: '',
    icon: <Pill className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/service-6'
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
