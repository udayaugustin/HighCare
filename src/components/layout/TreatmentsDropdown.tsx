
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Heart, Shield, Thermometer, Activity, Stethoscope } from 'lucide-react';

const treatmentCategories = [
  {
    id: 'chronic',
    title: 'Chronic Diseases',
    icon: Heart,
    items: ['Thyroid Disorders', 'Dengue Treatment', 'Hypertension', 'Diabetes'],
  },
  {
    id: 'skin',
    title: 'Skin Conditions',
    icon: Shield,
    items: ['Acne', 'Dandruff', 'Allergic Reactions', 'Fungal Infections', 'Dermatitis Treatment'],
  },
  {
    id: 'acute',
    title: 'Acute Conditions',
    icon: Thermometer,
    items: ['Acidity', 'Headaches', 'Sore Throat', 'Fever, Cold & Cough'],
  },
  {
    id: 'pain',
    title: 'Pain Management',
    icon: Activity,
    items: ['Body Ache', 'Back Pain', 'Joint Pain'],
  },
  {
    id: 'infections',
    title: 'Infections',
    icon: Stethoscope,
    items: ['Stomach Ache', 'Diarrhea', 'Wound Infections', 'Respiratory Infections', 'UTI'],
  },
];

export default function TreatmentsDropdown() {
  const [activeCategory, setActiveCategory] = useState(treatmentCategories[0].id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger 
            className="bg-transparent hover:bg-transparent font-medium"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            Treatments
          </NavigationMenuTrigger>
          
          {isOpen && (
            <div 
              className="absolute top-full left-0 z-50 mt-1" 
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="w-[600px] p-3 bg-white rounded-lg shadow-md grid grid-cols-[220px_1fr] gap-2">
                {/* Categories Column */}
                <div className="border-r pr-4">
                  {treatmentCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div
                        key={category.id}
                        className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors ${
                          activeCategory === category.id ? 'bg-gray-50 text-emerald-600' : 'hover:bg-gray-50'
                        }`}
                        onMouseEnter={() => setActiveCategory(category.id)}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{category.title}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Items Column */}
                <div className="pl-4">
                  {treatmentCategories.find(c => c.id === activeCategory)?.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/treatments/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block p-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
