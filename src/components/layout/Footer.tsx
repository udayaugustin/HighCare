
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-healthcare-800 to-healthcare-900 text-white">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-xl mb-6">HighCare Health</h4>
            <p className="text-gray-300 mb-6">
              Providing premium healthcare services to improve the quality of life for our patients. 
              Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-healthcare-accent transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-healthcare-accent transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-healthcare-accent transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-healthcare-accent transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/treatments" className="text-gray-300 hover:text-white transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link to="/clinics" className="text-gray-300 hover:text-white transition-colors">
                  Our Clinics
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-300 hover:text-white transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/treatments/preventive-care" className="text-gray-300 hover:text-white transition-colors">
                  Preventive Care
                </Link>
              </li>
              <li>
                <Link to="/treatments/dental-care" className="text-gray-300 hover:text-white transition-colors">
                  Dental Care
                </Link>
              </li>
              <li>
                <Link to="/treatments/cardiology" className="text-gray-300 hover:text-white transition-colors">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link to="/treatments/orthopedics" className="text-gray-300 hover:text-white transition-colors">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link to="/treatments/pediatrics" className="text-gray-300 hover:text-white transition-colors">
                  Pediatrics
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-healthcare-accent flex-shrink-0" />
                <span className="text-gray-300">
                  123 Healthcare Avenue, Bangalore, Karnataka 560001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-healthcare-accent flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-healthcare-accent flex-shrink-0" />
                <a href="mailto:info@highcarehealth.com" className="text-gray-300 hover:text-white transition-colors">
                  info@highcarehealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HighCare Health Services Pvt Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
