
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu,
  X, 
  ChevronDown, 
  Phone, 
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const treatmentLinks = [
  { name: 'General Checkup', href: '/treatments/general-checkup' },
  { name: 'Dental Care', href: '/treatments/dental-care' },
  { name: 'Cardiology', href: '/treatments/cardiology' },
  { name: 'Pediatrics', href: '/treatments/pediatrics' },
  { name: 'Orthopedics', href: '/treatments/orthopedics' },
  { name: 'Dermatology', href: '/treatments/dermatology' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-healthcare-700">HighCare</span>
            <span className="hidden md:inline text-lg text-healthcare-500 ml-1 font-medium">Health Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-healthcare-600 font-medium">Home</Link>
            
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-healthcare-600 font-medium"
                onClick={() => setIsTreatmentOpen(!isTreatmentOpen)}
              >
                Treatments
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isTreatmentOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => setIsTreatmentOpen(false)}
                >
                  {treatmentLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-healthcare-50 hover:text-healthcare-700"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/doctors" className="text-gray-700 hover:text-healthcare-600 font-medium">Doctors</Link>
            <Link to="/clinics" className="text-gray-700 hover:text-healthcare-600 font-medium">Clinics</Link>
            <Link to="/membership" className="text-gray-700 hover:text-healthcare-600 font-medium">Membership</Link>
            <Link to="/blog" className="text-gray-700 hover:text-healthcare-600 font-medium">Blog</Link>
            <Link to="/about" className="text-gray-700 hover:text-healthcare-600 font-medium">About Us</Link>
          </div>

          {/* Contact buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Button>
            <Button size="sm" className="flex items-center gap-2 bg-healthcare-600 hover:bg-healthcare-700">
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-healthcare-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-healthcare-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn("lg:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-healthcare-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          
          <div>
            <button
              onClick={() => setIsTreatmentOpen(!isTreatmentOpen)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-healthcare-600 hover:bg-gray-50"
            >
              Treatments
              <ChevronDown className={cn("h-5 w-5 transition-transform", isTreatmentOpen ? "transform rotate-180" : "")} />
            </button>
            
            {isTreatmentOpen && (
              <div className="pl-4 space-y-1">
                {treatmentLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-healthcare-600 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link
            to="/doctors"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-healthcare-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Doctors
          </Link>
          
          <Link
            to="/clinics"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-healthcare-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Clinics
          </Link>
          
          <Link
            to="/membership"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-healthcare-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Membership
          </Link>
          
          <Link
            to="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-healthcare-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-healthcare-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="space-y-2 px-3">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </Button>
              <Button size="sm" className="w-full flex items-center justify-center gap-2 bg-healthcare-600 hover:bg-healthcare-700">
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
