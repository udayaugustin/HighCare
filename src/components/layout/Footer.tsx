
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#065F46] via-[#047857] to-[#10B981] text-white shadow-inner ring-1 ring-green-900/10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 mb-12">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">HighCare Health Services</h4>
            <p className="text-gray-100 mb-6">
              Providing premium healthcare services to improve the quality of life for our patients. 
              Your health is our priority.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                  <span className="sr-only">Social Media</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Treatments', 'Find a Doctor', 'Our Clinics', 'Membership Plans', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-100 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['Preventive Care', 'Dental Care', 'Cardiology', 'Orthopedics', 'Pediatrics'].map((service) => (
                <li key={service}>
                  <Link 
                    to={`/treatments/${service.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-100 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-white/80 flex-shrink-0" />
                <span className="text-gray-100">
                #59, 3rd Floor, Om Shakthi Complex, GarvebhaviPalya, Hosur Main Road, Bangalore - 560068.                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-white/80 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-100 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-white/80 flex-shrink-0" />
                <a href="mailto:info@highcarehealth.com" className="text-gray-100 hover:text-white transition-colors">
                  info@highcarehealth.com
                </a>
              </li>
            </ul>
            
            <div className="mt-8 space-y-4">
              <Button 
                className="w-full bg-white text-[#065F46] font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                className="w-full bg-white text-[#065F46] font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Membership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/50 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HighCare Health Services Pvt Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
