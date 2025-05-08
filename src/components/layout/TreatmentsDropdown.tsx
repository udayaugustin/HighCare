
import { useNavigate } from 'react-router-dom';
import { Heart, Bandage, Stethoscope, HeartPulse, Virus2, Bone } from 'lucide-react';

interface Treatment {
  name: string;
  href: string;
  description: string;
  services: string[];
}

interface TreatmentGroup {
  title: string;
  icon: JSX.Element;
  treatments: Treatment[];
}

const treatmentGroups: TreatmentGroup[] = [
  {
    title: 'Primary Care',
    icon: <Stethoscope className="h-5 w-5 text-healthcare-600" />,
    treatments: [
      {
        name: 'General Checkup',
        href: '/treatments/general-checkup',
        description: 'Comprehensive health screening and preventive care',
        services: ['Physical Examination', 'Blood Tests', 'Health Assessment', 'Preventive Care']
      }
    ]
  },
  {
    title: 'Chronic Conditions',
    icon: <HeartPulse className="h-5 w-5 text-healthcare-600" />,
    treatments: [
      {
        name: 'Cardiology',
        href: '/treatments/cardiology',
        description: 'Expert heart and cardiovascular care',
        services: ['Heart Disease', 'Blood Pressure', 'ECG', 'Cardiac Consultation']
      }
    ]
  },
  {
    title: 'Specialized Care',
    icon: <Bone className="h-5 w-5 text-healthcare-600" />,
    treatments: [
      {
        name: 'Orthopedics',
        href: '/treatments/orthopedics',
        description: 'Treatment for bones, joints and muscles',
        services: ['Joint Pain', 'Fractures', 'Sports Injuries', 'Arthritis']
      },
      {
        name: 'Pediatrics',
        href: '/treatments/pediatrics',
        description: 'Specialized healthcare for children',
        services: ['Child Growth', 'Vaccinations', 'Pediatric Illness', 'Development Check']
      }
    ]
  },
  {
    title: 'Other Treatments',
    icon: <Bandage className="h-5 w-5 text-healthcare-600" />,
    treatments: [
      {
        name: 'Dental Care',
        href: '/treatments/dental-care',
        description: 'Complete oral health services',
        services: ['Dental Cleaning', 'Cavity Treatment', 'Root Canal', 'Dental Surgery']
      },
      {
        name: 'Dermatology',
        href: '/treatments/dermatology',
        description: 'Skin, hair and nail treatments',
        services: ['Skin Problems', 'Hair Loss', 'Acne Treatment', 'Skin Cancer Screening']
      }
    ]
  }
];

const TreatmentsDropdown = () => {
  const navigate = useNavigate();

  const handleTreatmentClick = (href: string) => {
    navigate(href);
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6 bg-white rounded-xl shadow-lg w-[600px]">
      {treatmentGroups.map((group) => (
        <div key={group.title} className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            {group.icon}
            <h3 className="font-semibold text-gray-900">{group.title}</h3>
          </div>
          <div className="space-y-3">
            {group.treatments.map((treatment) => (
              <div
                key={treatment.name}
                onClick={() => handleTreatmentClick(treatment.href)}
                className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
              >
                <h4 className="text-base font-medium text-gray-900">{treatment.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{treatment.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {treatment.services.map((service) => (
                    <span
                      key={service}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TreatmentsDropdown;
