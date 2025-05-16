import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
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
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 100);
    setTimeoutId(id);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={cn(
        "font-medium transition-colors duration-300 flex items-center",
        (isScrolled || !isHomePage)
          ? "text-gray-800 hover:text-gray-600" 
          : "text-white hover:text-gray-200"
      )}>
        Treatments
        <svg 
          className="h-4 w-4 ml-1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1">
          <div className="w-[600px] p-3 bg-white rounded-lg shadow-md grid grid-cols-[220px_1fr] gap-2">
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
    </div>
  );
}