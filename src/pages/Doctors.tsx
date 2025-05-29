
import React from 'react';
import { Search } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import DoctorCard from '@/components/ui/DoctorCard';
import { Button } from '@/components/ui/button';

const doctors = [
  {
    name: 'Dr. Ananya Sharma',
    specialty: 'Cardiologist',
    experience: '15+ years',
    location: 'Indiranagar, Bangalore',
    imageSrc: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'Pediatrician',
    experience: '12+ years',
    location: 'Koramangala, Bangalore',
    imageSrc: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  {
    name: 'Dr. Priya Patel',
    specialty: 'Dermatologist',
    experience: '10+ years',
    location: 'HSR Layout, Bangalore',
    imageSrc: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Dr. Arjun Reddy',
    specialty: 'Orthopedic Surgeon',
    experience: '14+ years',
    location: 'Whitefield, Bangalore',
    imageSrc: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
  },
  {
    name: 'Dr. Neha Gupta',
    specialty: 'Gynecologist',
    experience: '11+ years',
    location: 'Jayanagar, Bangalore',
    imageSrc: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Dr. Karthik Rao',
    specialty: 'ENT Specialist',
    experience: '9+ years',
    location: 'Malleshwaram, Bangalore',
    imageSrc: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  {
    name: 'Dr. Sarita Desai',
    specialty: 'Neurologist',
    experience: '13+ years',
    location: 'Electronic City, Bangalore',
    imageSrc: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80'
  },
  {
    name: 'Dr. Vivek Joshi',
    specialty: 'General Physician',
    experience: '8+ years',
    location: 'BTM Layout, Bangalore',
    imageSrc: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }
];

const specialties = [
  'All Specialties',
  'Cardiology',
  'Pediatrics', 
  'Dermatology',
  'Orthopedics',
  'Gynecology',
  'ENT',
  'Neurology',
  'General Medicine'
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSpecialty, setSelectedSpecialty] = React.useState('All Specialties');

  // Filter doctors based on search term and selected specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doctor.location.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || 
                             doctor.specialty === selectedSpecialty;
                             
    return matchesSearch && matchesSpecialty;
  });

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-healthcare-800 to-healthcare-900 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#065F46] mt-10 mb-6">Our Doctors</h1>
            <p className="text-gray-600 md:text-lg mb-8">
              Meet our team of experienced doctors who provide the highest quality healthcare services.
            </p>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, specialty or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white border border-gray-300 text-gray-700 placeholder-gray-400 rounded-md shadow-sm focus:ring-[#10B981] focus:border-[#10B981] px-4 py-2 w-full pl-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2 min-w-max">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ease-in-out hover:scale-105 ${
                  selectedSpecialty === specialty
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
        
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredDoctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                name={doctor.name}
                specialty={doctor.specialty}
                experience={doctor.experience}
                location={doctor.location}
                imageSrc={doctor.imageSrc}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No doctors found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('All Specialties');
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

export default Doctors;
