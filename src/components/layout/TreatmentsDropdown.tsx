
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from 'lucide-react';

const treatmentCategories = [
  {
    title: 'Chronic Diseases',
    icon: '🩺',
    items: ['Thyroid Disorders', 'Dengue Treatment', 'Hypertension', 'Diabetes']
  },
  {
    title: 'Skin Conditions',
    icon: '🧴',
    items: ['Acne', 'Dandruff', 'Allergic Reactions', 'Fungal Infections', 'Dermatitis Treatment']
  },
  {
    title: 'Acute Conditions',
    icon: '⚠️',
    items: ['Acidity', 'Headaches', 'Sore Throat', 'Fever, Cold & Cough']
  },
  {
    title: 'Pain Management',
    icon: '💢',
    items: ['Body Ache', 'Back Pain', 'Joint Pain']
  },
  {
    title: 'Infections',
    icon: '🦠',
    items: ['Stomach Ache', 'Diarrhea', 'Wound Infections', 'Respiratory Infections', 'Urinary Tract Infections (UTI)']
  }
];

export default function TreatmentsDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-inherit"
          >
            Treatments
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] p-2 bg-white rounded-lg shadow-lg">
              {treatmentCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="group relative"
                >
                  <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 cursor-pointer rounded-md">
                    <span className="flex items-center gap-2">
                      <span>{category.icon}</span>
                      <span className="font-medium">{category.title}</span>
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="invisible group-hover:visible absolute left-full top-0 w-[250px] bg-white shadow-lg rounded-lg p-2 -ml-1">
                    {category.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        to={`/treatments/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 hover:bg-gray-50 cursor-pointer rounded-md text-gray-700 hover:text-gray-900"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
