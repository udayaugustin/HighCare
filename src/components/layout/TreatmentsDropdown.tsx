
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Heart, Brain, Stethoscope, Bone, Activity, Bacteria } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const treatmentCategories = [
  {
    title: 'Chronic Diseases',
    icon: <Heart className="h-5 w-5" />,
    items: ['Diabetes', 'Hypertension', 'Thyroid Disorders', 'Asthma']
  },
  {
    title: 'Skin Conditions',
    icon: <Activity className="h-5 w-5" />,
    items: ['Acne', 'Eczema', 'Psoriasis', 'Hair Loss']
  },
  {
    title: 'Acute Conditions',
    icon: <Stethoscope className="h-5 w-5" />,
    items: ['Fever', 'Cough & Cold', 'Diarrhea', 'Allergies']
  },
  {
    title: 'Pain Management',
    icon: <Brain className="h-5 w-5" />,
    items: ['Back Pain', 'Joint Pain', 'Headache', 'Muscle Pain']
  },
  {
    title: 'Orthopedic',
    icon: <Bone className="h-5 w-5" />,
    items: ['Arthritis', 'Sports Injuries', 'Fractures', 'Sprains']
  },
  {
    title: 'Infections',
    icon: <Bacteria className="h-5 w-5" />,
    items: ['UTI', 'Respiratory Infections', 'Skin Infections', 'Dengue']
  }
];

const TreatmentsDropdown = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="text-gray-600 hover:text-healthcare-600 bg-transparent hover:bg-transparent"
          >
            <span className="flex items-center gap-1">
              Treatments
              <ChevronDown className="h-4 w-4" />
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-[200px,1fr] w-[600px] p-4">
              <div className="border-r">
                {treatmentCategories.map((category, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 p-3 cursor-pointer transition-colors
                      ${hoveredCategory === idx ? 'bg-gray-50 text-healthcare-600' : 'text-gray-600'}
                    `}
                    onMouseEnter={() => setHoveredCategory(idx)}
                  >
                    {category.icon}
                    <span>{category.title}</span>
                  </div>
                ))}
              </div>
              <div className="p-3">
                {hoveredCategory !== null && (
                  <div className="grid grid-cols-2 gap-2">
                    {treatmentCategories[hoveredCategory].items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={`/treatments/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="p-2 text-gray-600 hover:text-healthcare-600 hover:bg-gray-50 rounded"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default TreatmentsDropdown;
