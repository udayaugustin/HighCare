
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
    title: 'Medical Camp for Corporates',
    description: 'Comprehensive health check-ups and wellness programs designed specifically for corporate employees. Includes preventive screenings and health education.',
    icon: <Activity className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/corporate-camps'
  },
  {
    title: 'Mental Health Services',
    description: 'Professional counseling and psychological support services with experienced therapists. Offering stress management, anxiety treatment, and mental wellness programs.',
    icon: <HeartPulse className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/mental-health'
  },
  {
    title: 'Other Services',
    description: 'Additional healthcare services including vaccination programs, physiotherapy, nutrition counseling, and specialized medical procedures.',
    icon: <Pill className="h-8 w-8 text-healthcare-600" />,
    href: '/treatments/other-services'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <TreatmentCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              className="group hover:bg-healthcare-50/50 hover:-translate-y-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
