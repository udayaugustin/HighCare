import { useNavigate } from 'react-router-dom';

const treatmentLinks: Treatment[] = [
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
  },
  { 
    name: 'Dental Care',
    href: '/treatments/dental-care',
    description: 'Complete oral health services and dental procedures',
    services: ['Teeth Cleaning', 'Cavity Treatment', 'Root Canal', 'Dental Implants']
  },
  { 
    name: 'Dermatology',
    href: '/treatments/dermatology',
    description: 'Skin, hair, and nail treatments',
    services: ['Skin Check', 'Acne Treatment', 'Laser Therapy', 'Dermal Fillers']
  }
];

const TreatmentsDropdown = () => {
  const navigate = useNavigate();

  const handleTreatmentClick = (href: string) => {
    navigate(href);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {treatmentLinks.map((treatment) => (
        <div
          key={treatment.name}
          onClick={() => handleTreatmentClick(treatment.href)}
          className="p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
        >
          <h3 className="text-lg font-semibold text-gray-900">{treatment.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{treatment.description}</p>
          <ul className="mt-2 space-y-1">
            {treatment.services.map((service) => (
              <li key={service} className="text-xs text-gray-500">{service}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TreatmentsDropdown;