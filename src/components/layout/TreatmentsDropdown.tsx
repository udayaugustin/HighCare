
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Activity, Heart, Shield, Thermometer, Stethoscope } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const treatmentCategories = [
  {
    title: 'Chronic Diseases',
    icon: <Heart className="h-5 w-5" />,
    items: ['Thyroid Disorders', 'Dengue Treatment', 'Hypertension', 'Diabetes']
  },
  {
    title: 'Skin Conditions',
    icon: <Shield className="h-5 w-5" />,
    items: ['Acne', 'Dandruff', 'Allergic Reactions', 'Fungal Infections', 'Dermatitis Treatment']
  },
  {
    title: 'Acute Conditions',
    icon: <Thermometer className="h-5 w-5" />,
    items: ['Acidity', 'Headaches', 'Sore Throat', 'Fever, Cold & Cough']
  },
  {
    title: 'Pain Management',
    icon: <Activity className="h-5 w-5" />,
    items: ['Body Ache', 'Back Pain', 'Joint Pain']
  },
  {
    title: 'Infections',
    icon: <Stethoscope className="h-5 w-5" />,
    items: ['Stomach Ache', 'Diarrhea', 'Wound Infections', 'Respiratory Infections', 'Urinary Tract Infections (UTI)']
  }
];

export default function TreatmentsDropdown() {
  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                Treatments
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[800px] p-4 grid grid-cols-[250px_1fr] gap-4">
                  <div className="border-r pr-4">
                    {treatmentCategories.map((category, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                        onMouseEnter={() => {
                          const items = document.getElementById(`items-${idx}`);
                          const allItems = document.querySelectorAll('[id^="items-"]');
                          allItems.forEach(item => item.classList.add('hidden'));
                          items?.classList.remove('hidden');
                        }}
                      >
                        {category.icon}
                        <span className="font-medium">{category.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pl-4">
                    {treatmentCategories.map((category, idx) => (
                      <div
                        key={idx}
                        id={`items-${idx}`}
                        className={`space-y-2 ${idx !== 0 ? 'hidden' : ''}`}
                      >
                        {category.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            to={`/treatments/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-2 hover:bg-gray-50 rounded-md text-gray-700 hover:text-gray-900"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="treatments">
            <AccordionTrigger>Treatments</AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="w-full">
                {treatmentCategories.map((category, idx) => (
                  <AccordionItem value={`category-${idx}`} key={idx}>
                    <AccordionTrigger className="flex items-center gap-2">
                      {category.icon}
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-9">
                        {category.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            to={`/treatments/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block py-2 text-gray-700 hover:text-gray-900"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
