
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Thermometer, Activity, Stethoscope } from 'lucide-react';

const treatmentCategories = [
  {
    id: 'chronic',
    title: 'Chronic Diseases',
    icon: Heart,
    items: ['Thyroid Disorders', 'Diabetes', 'Hypertension', 'Arthritis']
  },
  {
    id: 'preventive',
    title: 'Preventive Care',
    icon: Shield,
    items: ['Annual Checkup', 'Vaccinations', 'Health Screening', 'Wellness Consult']
  },
  {
    id: 'acute',
    title: 'Acute Care',
    icon: Thermometer,
    items: ['Fever & Cold', 'Infections', 'Minor Injuries', 'Allergies']
  },
  {
    id: 'specialized',
    title: 'Specialized Care',
    icon: Activity,
    items: ['Physiotherapy', 'Dermatology', 'ENT Care', 'Eye Care']
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic Services',
    icon: Stethoscope,
    items: ['Blood Tests', 'X-Ray', 'ECG', 'Ultrasound']
  }
];

export default function TreatmentsDropdown() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setActiveCategory(null);
      }}
    >
      <button className="font-medium transition-colors duration-300 text-gray-800 hover:text-gray-600 py-2">
        Treatments
      </button>

      {isHovering && (
        <div className="absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-lg overflow-hidden z-50 grid grid-cols-[250px_1fr]">
          {/* Categories */}
          <div className="bg-gray-50">
            {treatmentCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  onMouseEnter={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 p-3 cursor-pointer transition-colors ${
                    activeCategory === category.id 
                      ? 'bg-white text-[#10B981]' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{category.title}</span>
                </div>
              );
            })}
          </div>

          {/* Sub-items */}
          <div className="py-2">
            {activeCategory && (
              <div className="p-3 space-y-2">
                {treatmentCategories
                  .find(c => c.id === activeCategory)
                  ?.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/treatments/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block p-2 text-gray-600 hover:text-[#10B981] hover:bg-gray-50 rounded-md transition-colors"
                    >
                      {item}
                    </Link>
                  ))
                }
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
