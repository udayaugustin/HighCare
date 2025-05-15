
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import TreatmentsDropdown from './TreatmentsDropdown';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        ? "bg-white/95 shadow-sm backdrop-blur-sm" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={cn(
              "text-2xl font-bold",
              isScrolled || !isHomePage ? "text-gray-800" : "text-white"
            )}>
              HighCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/" className={navLinkClasses}>Home</Link>
            <Link to="/clinics" className={navLinkClasses}>Clinics</Link>
            <Link to="/doctors" className={navLinkClasses}>Doctors</Link>
            <TreatmentsDropdown />
            <Link to="/blog" className={navLinkClasses}>Blog</Link>
            <Link to="/membership" className={navLinkClasses}>Membership</Link>
          </div>

          {/* Login Button */}
          <div className="hidden lg:flex lg:items-center">
            <Button 
              variant="outline" 
              className="ml-8 bg-white text-[#10B981] border border-[#10B981] hover:bg-[#ECFDF5]"
            >
              Log In
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-900">Home</Link>
            <Link to="/clinics" className="block px-3 py-2 text-gray-900">Clinics</Link>
            <Link to="/doctors" className="block px-3 py-2 text-gray-900">Doctors</Link>
            <div className="px-3 py-2">
              <TreatmentsDropdown />
            </div>
            <Link to="/blog" className="block px-3 py-2 text-gray-900">Blog</Link>
            <Link to="/membership" className="block px-3 py-2 text-gray-900">Membership</Link>
            <div className="pt-4 px-3">
              <Button variant="outline" className="w-full">Log In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
