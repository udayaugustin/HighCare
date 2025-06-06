
import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import ClinicCard from '@/components/ui/ClinicCard';
import { Button } from '@/components/ui/button';

const clinics = [
  {
    name: 'HighCare Indiranagar',
    address: '100 Feet Road, Indiranagar',
    pincode: '560038',
    timings: 'Mon-Sat: 8:00 AM - 8:00 PM, Sun: 9:00 AM - 5:00 PM',
    phone: '+91 80 4567 8901',
    imageSrc: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80'
  },
  {
    name: 'HighCare Koramangala',
    address: '5th Block, Koramangala',
    pincode: '560095',
    timings: 'Mon-Sat: 8:00 AM - 9:00 PM, Sun: 9:00 AM - 6:00 PM',
    phone: '+91 80 4567 8902',
    imageSrc: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1653&q=80'
  },
  {
    name: 'HighCare HSR Layout',
    address: 'Sector 4, HSR Layout',
    pincode: '560102',
    timings: 'Mon-Sun: 8:00 AM - 8:00 PM',
    phone: '+91 80 4567 8903',
    imageSrc: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80'
  },
  {
    name: 'HighCare Whitefield',
    address: 'ITPL Main Road, Whitefield',
    pincode: '560066',
    timings: 'Mon-Sat: 9:00 AM - 8:00 PM, Sun: 9:00 AM - 5:00 PM',
    phone: '+91 80 4567 8904',
    imageSrc: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
  },
  {
    name: 'HighCare Jayanagar',
    address: '9th Block, Jayanagar',
    pincode: '560069',
    timings: 'Mon-Sun: 8:00 AM - 9:00 PM',
    phone: '+91 80 4567 8905',
    imageSrc: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1653&q=80'
  },
  {
    name: 'HighCare Malleshwaram',
    address: '8th Cross, Malleshwaram',
    pincode: '560003',
    timings: 'Mon-Sat: 8:00 AM - 8:00 PM, Sun: 9:00 AM - 6:00 PM',
    phone: '+91 80 4567 8906',
    imageSrc: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80'
  }
];

const Clinics = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pincodeSearch, setPincodeSearch] = useState('');

  // Filter clinics based on search term and pincode
  const filteredClinics = clinics.filter(clinic => {
    const matchesSearch = clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         clinic.address.toLowerCase().includes(searchTerm.toLowerCase());
                         
    const matchesPincode = pincodeSearch === '' || clinic.pincode.includes(pincodeSearch);
                           
    return matchesSearch && matchesPincode;
  });

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-healthcare-800 to-healthcare-900 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#065F46] mt-10 mb-6">Our Clinics</h1>
            <p className="text-gray-600 md:text-lg mb-8">
              Visit our state-of-the-art clinics across Bangalore for high-quality healthcare services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search clinic or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md shadow-sm focus:ring-[#10B981] focus:border-[#10B981] px-4 py-2 w-full pl-10"
                />
              </div>
              
              <div className="relative w-full sm:w-40">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pincode"
                  value={pincodeSearch}
                  onChange={(e) => setPincodeSearch(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md shadow-sm focus:ring-[#10B981] focus:border-[#10B981] px-4 py-2 w-full pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        {filteredClinics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredClinics.map((clinic, index) => (
              <ClinicCard
                key={index}
                name={clinic.name}
                address={clinic.address}
                pincode={clinic.pincode}
                timings={clinic.timings}
                phone={clinic.phone}
                imageSrc={clinic.imageSrc}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No clinics found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or pincode criteria</p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setPincodeSearch('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Clinics;
