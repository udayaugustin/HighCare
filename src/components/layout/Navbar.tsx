import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import TreatmentsDropdown from './TreatmentsDropdown';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold text-healthcare-600">
            HighCare
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-healthcare-600">
              Home
            </Link>
            <Link to="/clinics" className="text-gray-600 hover:text-healthcare-600">
              Clinics
            </Link>
            <TreatmentsDropdown />
            <Link to="/doctors" className="text-gray-600 hover:text-healthcare-600">
              Doctors
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-healthcare-600">
              Blog
            </Link>
            <Link to="/membership" className="text-gray-600 hover:text-healthcare-600">
              Membership
            </Link>
            <Button variant="outline" asChild>
              <Link to="/login">Log In</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link to="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link to="/clinics" className="text-lg font-medium">
                  Clinics
                </Link>
                <Link to="/treatments" className="text-lg font-medium">
                  Treatments
                </Link>
                <Link to="/doctors" className="text-lg font-medium">
                  Doctors
                </Link>
                <Link to="/blog" className="text-lg font-medium">
                  Blog
                </Link>
                <Link to="/membership" className="text-lg font-medium">
                  Membership
                </Link>
                <Button className="w-full" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;