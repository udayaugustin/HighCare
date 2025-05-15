
import React from 'react';
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
            className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-white"
          >
            Treatments
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] p-2">
              {treatmentCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="group relative"
                >
                  <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                    <span>
                      {category.icon} {category.title}
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div className="invisible group-hover:visible absolute left-full top-0 w-[250px] bg-white shadow-lg rounded-md p-2 -ml-1">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
                      >
                        {item}
                      </div>
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
