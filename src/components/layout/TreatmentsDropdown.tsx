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
  treatments: Treatment[];
}

const treatmentGroups: TreatmentGroup[] = [
  {
    title: 'General Checkup',
    treatments: [
      { name: 'Basic Health Check', href: '/treatments/basic-health-check' },
      { name: 'Blood Tests', href: '/treatments/blood-tests' },
      { name: 'Health Screening', href: '/treatments/health-screening' }
    ]
  },
  {
    title: 'Dental Care',
    treatments: [
      { name: 'Dental Cleaning', href: '/treatments/dental-cleaning' },
      { name: 'Root Canal', href: '/treatments/root-canal' },
      { name: 'Tooth Extraction', href: '/treatments/tooth-extraction' }
    ]
  },
  {
    title: 'Cardiology',
    treatments: [
      { name: 'Heart Health', href: '/treatments/heart-health' },
      { name: 'ECG', href: '/treatments/ecg' },
      { name: 'Blood Pressure', href: '/treatments/blood-pressure' }
    ]
  },
  {
    title: 'Pediatrics',
    treatments: [
      { name: 'Child Health', href: '/treatments/child-health' },
      { name: 'Vaccination', href: '/treatments/vaccination' },
      { name: 'Growth Monitoring', href: '/treatments/growth-monitoring' }
    ]
  },
  {
    title: 'Orthopedics',
    treatments: [
      { name: 'Joint Pain', href: '/treatments/joint-pain' },
      { name: 'Fracture Care', href: '/treatments/fracture-care' },
      { name: 'Spine Treatment', href: '/treatments/spine-treatment' }
    ]
  },
  {
    title: 'Dermatology',
    treatments: [
      { name: 'Skin Care', href: '/treatments/skin-care' },
      { name: 'Acne Treatment', href: '/treatments/acne-treatment' },
      { name: 'Hair Problems', href: '/treatments/hair-problems' }
    ]
  }
];

const TreatmentsDropdown = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
      {treatmentGroups.map((group) => (
        <div
          key={group.title}
          className="hover:bg-gray-50 cursor-pointer"
          onClick={() => navigate(`/treatments/${group.title.toLowerCase().replace(/\s+/g, '-')}`)}
        >
          <div className="px-4 py-2 text-sm text-gray-700">
            {group.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TreatmentsDropdown;