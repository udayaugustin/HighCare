
import React from 'react';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F3E7FF] to-[#E7F6FF] opacity-90" />
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our members say we treat them like family
          </h1>
          <div className="flex gap-4 mt-8">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Consult a doctor
            </button>
            <button className="bg-white/80 backdrop-blur-sm border border-gray-200 px-8 py-3 rounded-full hover:bg-white transition-all">
              See plan benefits
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-healthcare-800 to-healthcare-900 py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-healthcare-600"></div>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-healthcare-500"></div>
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 mb-5 bg-white/10 text-white text-sm font-medium rounded-full">
              Healthcare Redefined
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 animate-fade-in">
              Your Health, Our <span className="text-healthcare-accent">Priority</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-in">
              Experience premium healthcare services with HighCare Health. Our expert doctors and state-of-the-art facilities ensure the best care for you and your family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-healthcare-500 hover:bg-healthcare-600 text-white">
                <Search className="mr-2 h-5 w-5" />
                Find a Doctor
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-healthcare-800 hover:bg-gray-100 border-none">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </div>
          </div>
          
          {/* Hero image or illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-white/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                  alt="HighCare Health Services"
                  className="w-full h-auto max-w-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-6 bg-white/10 backdrop-blur-md rounded-xl">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
            <div className="text-sm md:text-base text-gray-200 mt-1">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
            <div className="text-sm md:text-base text-gray-200 mt-1">Specialist Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
            <div className="text-sm md:text-base text-gray-200 mt-1">Clinic Locations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">50K+</div>
            <div className="text-sm md:text-base text-gray-200 mt-1">Happy Patients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
