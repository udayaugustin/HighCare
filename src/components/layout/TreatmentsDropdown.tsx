
import React from 'react';
import { Link } from 'react-router-dom';

interface Treatment {
  name: string;
  href: string;
  description: string;
  services: string[];
}

const treatmentLinks: Treatment[] = [
  { 
    name: 'General Checkup',
    href: '/treatments/general-checkup',
    description: 'Comprehensive health assessment and preventive care',
    services: ['Annual Physical Exam', 'Blood Tests', 'Health Screening', 'Vaccination']
  },
  { 
    name: 'Dental Care',
    href: '/treatments/dental-care',
    description: 'Complete oral health services and dental procedures',
    services: ['Teeth Cleaning', 'Cavity Treatment', 'Root Canal', 'Dental Implants']
  },
  { 
    name: 'Cardiology',
    href: '/treatments/cardiology',
    description: 'Expert heart care and cardiovascular treatments',
    services: ['ECG', 'Echo Test', 'Stress Test', 'Heart Surgery']
  },
  { 
    name: 'Pediatrics',
    href: '/treatments/pediatrics',
    description: 'Specialized healthcare for children and adolescents',
    services: ['Child Checkup', 'Vaccination', 'Growth Monitoring', 'Pediatric Surgery']
  },
  { 
    name: 'Orthopedics',
    href: '/treatments/orthopedics',
    description: 'Treatment for bones, joints, and musculoskeletal conditions',
    services: ['Joint Replacement', 'Fracture Care', 'Sports Medicine', 'Spine Surgery']
  }
];

interface TreatmentsDropdownProps {
  isOpen: boolean;
  onMouseLeave: () => void;
}

const TreatmentsDropdown = ({ isOpen, onMouseLeave }: TreatmentsDropdownProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl py-4 z-50"
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-2 gap-4 p-4">
        {treatmentLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="group p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="text-lg font-semibold text-gray-900 mb-1">{link.name}</div>
            <p className="text-sm text-gray-500 mb-3">{link.description}</p>
            <div className="flex flex-wrap gap-2">
              {link.services.map((service) => (
                <span 
                  key={service} 
                  className="text-xs px-2 py-1 bg-healthcare-50 text-healthcare-600 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TreatmentsDropdown;
