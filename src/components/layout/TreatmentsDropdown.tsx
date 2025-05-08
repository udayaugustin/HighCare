
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Treatment {
  name: string;
  href: string;
}

interface TreatmentGroup {
  title: string;
  treatments: Treatment[];
}

const treatmentGroups: TreatmentGroup[] = [
  {
    title: 'Chronic Diseases',
    treatments: [
      { name: 'Thyroid Disorders', href: '/treatments/thyroid-disorders' },
      { name: 'Dengue Treatment', href: '/treatments/dengue' },
      { name: 'Hypertension', href: '/treatments/hypertension' },
      { name: 'Diabetes', href: '/treatments/diabetes' },
    ]
  },
  {
    title: 'Skin Conditions',
    treatments: [
      { name: 'Acne', href: '/treatments/acne' },
      { name: 'Dandruff', href: '/treatments/dandruff' },
      { name: 'Allergic Reactions', href: '/treatments/allergic-reactions' },
      { name: 'Fungal Infection', href: '/treatments/fungal-infection' },
      { name: 'Dermatitis', href: '/treatments/dermatitis' },
    ]
  },
  {
    title: 'Acute Conditions',
    treatments: [
      { name: 'Acidity', href: '/treatments/acidity' },
      { name: 'Headaches', href: '/treatments/headaches' },
      { name: 'Sore Throat', href: '/treatments/sore-throat' },
      { name: 'Fever, Cold & Cough', href: '/treatments/fever-cold-cough' },
    ]
  },
  {
    title: 'Pain Management',
    treatments: [
      { name: 'Body Ache', href: '/treatments/body-ache' },
      { name: 'Back Pain', href: '/treatments/back-pain' },
      { name: 'Joint Pain', href: '/treatments/joint-pain' },
    ]
  },
  {
    title: 'Infections',
    treatments: [
      { name: 'Stomach Ache', href: '/treatments/stomach-ache' },
      { name: 'Diarrhea', href: '/treatments/diarrhea' },
      { name: 'Wound Infections', href: '/treatments/wound-infections' },
      { name: 'Respiratory Infections', href: '/treatments/respiratory-infections' },
      { name: 'Urinary Tract Infections (UTI)', href: '/treatments/uti' },
    ]
  }
];

const TreatmentsDropdown = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg py-2 min-w-[240px]">
      {treatmentGroups.map((group) => (
        <div
          key={group.title}
          className="group relative hover:bg-gray-50"
        >
          <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-700 cursor-pointer">
            {group.title}
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
          
          <div className="absolute left-full top-0 hidden group-hover:block min-w-[240px] bg-white shadow-lg rounded-lg py-2">
            {group.treatments.map((treatment) => (
              <div
                key={treatment.name}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(treatment.href)}
              >
                {treatment.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TreatmentsDropdown;
