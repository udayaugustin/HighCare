
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import TreatmentsDropdown from './TreatmentsDropdown';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const treatmentLinks = [
  { 
    name: 'General Checkup',
    href: '/treatments/general-checkup',
    description: 'Comprehensive health assessment and preventive care',
    services: ['Annual Physical Exam', 'Blood Tests', 'Health Screening', 'Vaccination']
  },
  { 
    name: 'Dental Care',
    href: '/treatments/dental-care',
    description: 'Complete oral health services and dental procedures',
    services: ['Teeth Cleaning', 'Cavity Treatment', 'Root Canal', 'Dental Implants']
  },
  { 
    name: 'Cardiology',
    href: '/treatments/cardiology',
    description: 'Expert heart care and cardiovascular treatments',
    services: ['ECG', 'Echo Test', 'Stress Test', 'Heart Surgery']
  },
  { 
    name: 'Pediatrics',
    href: '/treatments/pediatrics',
    description: 'Specialized healthcare for children and adolescents',
    services: ['Child Checkup', 'Vaccination', 'Growth Monitoring', 'Pediatric Surgery']
  },
  { 
    name: 'Orthopedics',
    href: '/treatments/orthopedics',
    description: 'Treatment for bones, joints, and musculoskeletal conditions',
    services: ['Joint Replacement', 'Fracture Care', 'Sports Medicine', 'Spine Surgery']
  },
  { 
    name: 'Dermatology',
    href: '/treatments/dermatology',
    description: 'Comprehensive skin care and treatment',
    services: ['Skin Check', 'Acne Treatment', 'Skin Cancer Screening', 'Cosmetic Procedures']
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = cn(
    "font-medium transition-colors duration-300",
    (isScrolled || !isHomePage)
      ? "text-gray-800 hover:text-gray-600" 
      : "text-white hover:text-gray-200"
  );

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled || !isHomePage
        ? "bg-white/95 shadow-sm backdrop-blur-sm border-b border-gray-100" 
        : isHomePage 
          ? "bg-gradient-to-b from-healthcare-dark/30 to-transparent backdrop-blur-sm"
          : "bg-white shadow-sm"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={cn(
              "text-2xl font-bold transition-colors duration-300",
              isScrolled || !isHomePage ? "text-gray-800" : "text-white"
            )}>HighCare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/" className={navLinkClasses}>Home</Link>
            <Link to="/clinics" className={navLinkClasses}>Clinics</Link>
            <Link to="/doctors" className={navLinkClasses}>Doctors</Link>

            <div className="relative">
              <button 
                className={navLinkClasses}
                onMouseEnter={() => setIsTreatmentOpen(true)}
              >
                <span className="flex items-center">
                  Treatments
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </button>
              <TreatmentsDropdown 
                isOpen={isTreatmentOpen} 
                onMouseLeave={() => setIsTreatmentOpen(false)} 
              />
            </div>

            <Link to="/blog" className={navLinkClasses}>Blog</Link>
            <Link to="/membership" className={navLinkClasses}>Membership</Link>
          </div>

          {/* Login & Book Appointment */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button 
              variant="outline" 
              className="bg-white text-[#10B981] border border-[#10B981] px-5 py-2 rounded-md font-semibold hover:bg-[#ECFDF5] transition-colors duration-200"
            >
              Log In
            </Button>
            <Button 
              className="bg-[#10B981] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#059669] transition-colors duration-200 shadow-sm"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors duration-300",
              isScrolled || !isHomePage ? "text-gray-800" : "text-white"
            )}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700">Home</Link>
            <Link to="/clinics" className="block px-3 py-2 text-gray-700">Clinics</Link>
            <Link to="/doctors" className="block px-3 py-2 text-gray-700">Doctors</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700">Blog</Link>
            <Link to="/membership" className="block px-3 py-2 text-gray-700">Membership</Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">Log In</Button>
              <Button className="w-full">Book Appointment</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
