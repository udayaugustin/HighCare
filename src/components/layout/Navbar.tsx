import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white shadow-sm" 
        : "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">HighCare</span>
            <span className="hidden md:inline text-lg text-gray-200 ml-1 font-medium">Health Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/" className={cn("font-medium transition-colors", isScrolled ? "text-gray-800 hover:text-gray-600" : "text-white hover:text-gray-200")}>Home</Link>
            <Link to="/clinics" className={cn("font-medium transition-colors", isScrolled ? "text-gray-800 hover:text-gray-600" : "text-white hover:text-gray-200")}>Clinics</Link>
            <Link to="/doctors" className={cn("font-medium transition-colors", isScrolled ? "text-gray-800 hover:text-gray-600" : "text-white hover:text-gray-200")}>Doctors</Link>

            <div className="relative">
              <button 
                className="flex items-center text-white hover:text-gray-200 font-medium"
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" className="text-white hover:text-gray-200 font-medium">Blog</Link>
            <Link to="/membership" className="text-white hover:text-gray-200 font-medium">Membership</Link>
          </div>

          {/* Login & Book Appointment */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button 
              variant="outline" 
              className={cn(
                "transition-colors",
                isScrolled 
                  ? "text-gray-800 border-gray-800 hover:bg-gray-50" 
                  : "text-white border-white hover:bg-white/10"
              )}
            >
              Log In
            </Button>
            <Button 
              className={cn(
                "transition-colors",
                isScrolled 
                  ? "bg-healthcare-600 hover:bg-healthcare-700 text-white"
                  : "bg-healthcare-600 hover:bg-healthcare-700 text-white"
              )}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
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