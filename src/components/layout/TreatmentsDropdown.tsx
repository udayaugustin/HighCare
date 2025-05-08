
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  Activity,
  Brain,
  Virus2,
  User,
  Thermometer,
  Stethoscope
} from 'lucide-react';

interface Treatment {
  name: string;
  href: string;
}

interface TreatmentGroup {
  title: string;
  icon: JSX.Element;
  treatments: Treatment[];
}

const treatmentGroups: TreatmentGroup[] = [
  {
    title: 'Chronic Diseases',
    icon: <Heart className="h-5 w-5 text-healthcare-600" />,
    treatments: [
      { name: 'Thyroid Disorders', href: '/treatments/thyroid-disorders' },
      { name: 'Dengue Treatment', href: '/treatments/dengue' },
      { name: 'Hypertension', href: '/treatments/hypertension' },
      { name: 'Diabetes', href: '/treatments/diabetes' }
    ]
  },
  {
    title: 'Skin Conditions',
    icon: <User className="h-5 w-5 text-healthcare-600" />,
    treatments: [
      { name: 'Acne', href: '/treatments/acne' },
      { name: 'Dandruff', href: '/treatments/dandruff' },
      { name: 'Allergic Reactions', href: '/treatments/allergic-reactions' },
      { name: 'Fungal Infections', href: '/treatments/fungal-infections' },
      { name: 'Dermatitis', href: '/treatments/dermatitis' }
    ]
  },
  {
    title: 'Acute Conditions',
    icon: <Thermometer className="h-5 w-5 text-healthcare-600" />,
    treatments: [
      { name: 'Acidity', href: '/treatments/acidity' },
      { name: 'Headaches', href: '/treatments/headaches' },
      { name: 'Sore Throat', href: '/treatments/sore-throat' },
      { name: 'Fever, Cold & Cough', href: '/treatments/fever-cold-cough' }
    ]
  },
  {
    title: 'Pain Management',
    icon: <Activity className="h-5 w-5 text-healthcare-600" />,
    treatments: [
      { name: 'Body Ache', href: '/treatments/body-aches' },
      { name: 'Back Pain', href: '/treatments/back-pain' },
      { name: 'Joint Pain', href: '/treatments/joint-pain' }
    ]
  },
  {
    title: 'Infections',
    icon: <Virus2 className="h-5 w-5 text-healthcare-600" />,
    treatments: [
      { name: 'Stomach Ache', href: '/treatments/stomach-ache' },
      { name: 'Diarrhea', href: '/treatments/diarrhea' },
      { name: 'Wound Infections', href: '/treatments/wound-infections' },
      { name: 'Respiratory Infections', href: '/treatments/respiratory-infections' },
      { name: 'UTI', href: '/treatments/uti' }
    ]
  }
];

const TreatmentsDropdown = () => {
  const navigate = useNavigate();

  const handleTreatmentClick = (href: string) => {
    navigate(href);
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-white rounded-xl shadow-lg w-[1000px] max-h-[600px] overflow-y-auto">
      {treatmentGroups.map((group) => (
        <div key={group.title} className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            {group.icon}
            <h3 className="font-semibold text-gray-900">{group.title}</h3>
          </div>
          <div className="space-y-2">
            {group.treatments.map((treatment) => (
              <div
                key={treatment.name}
                onClick={() => handleTreatmentClick(treatment.href)}
                className="p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200 text-gray-600 hover:text-healthcare-600"
              >
                <span className="text-sm">{treatment.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TreatmentsDropdown;
