
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import DoctorCard from '@/components/ui/DoctorCard';

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
  }
];

const FeaturedDoctors = () => {
  return (
    <section className="section py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            title="Meet Our Specialists"
            subtitle="Our team of experienced doctors provide the highest quality healthcare services."
            className="mb-0"
          />
          
          <Button variant="outline" className="hidden md:flex items-center mt-6 md:mt-0">
            <span>View All Doctors</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doctor, index) => (
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
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline">
            <span>View All Doctors</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;
