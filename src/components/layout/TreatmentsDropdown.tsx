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
    items: ['Thyroid Disorders', 'Dengue Treatment', 'Hypertension', 'Diabetes']
  },
  {
    id: 'skin',
    title: 'Skin Conditions',
    icon: Shield,
    items: ['Acne', 'Dandruff', 'Allergic Reactions', 'Fungal Infections', 'Dermatitis Treatment']
  },
  {
    id: 'acute',
    title: 'Acute Conditions',
    icon: Thermometer,
    items: ['Acidity', 'Headaches', 'Sore Throat', 'Fever, Cold & Cough']
  },
  {
    id: 'pain',
    title: 'Pain Management',
    icon: Activity,
    items: ['Body Ache', 'Back Pain', 'Joint Pain']
  },
  {
    id: 'infections',
    title: 'Infections',
    icon: Stethoscope,
    items: ['Stomach Ache', 'Diarrhea', 'Wound Infections', 'Respiratory Infections', 'UTI']
  }
];

export default function TreatmentsDropdown() {
  const [activeCategory, setActiveCategory] = useState(treatmentCategories[0].id);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
            Treatments
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[800px] p-4 bg-white rounded-lg shadow-lg grid grid-cols-[300px_1fr] gap-4">
              {/* Categories Column */}
              <div className="border-r pr-4">
                {treatmentCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div
                      key={category.id}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                        activeCategory === category.id ? 'bg-gray-100' : 'hover:bg-gray-50'
                      }`}
                      onMouseEnter={() => setActiveCategory(category.id)}
                    >
                      <Icon className="h-5 w-5 text-[#10B981]" />
                      <span className="font-medium">{category.title}</span>
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
                    className="block p-2 text-gray-600 hover:text-[#10B981] hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}