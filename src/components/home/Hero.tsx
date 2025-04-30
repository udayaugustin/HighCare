import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/attached_assets/home.jpg"
          alt="HighCare Doctor Consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/80 via-[#10B981]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-full">
          <div className="max-w-xl pt-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              With us, every member feels like Family
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-white text-healthcare-800 hover:bg-white/90 px-8 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105"
              >
                Consult a doctor
              </Button>
              <Button 
                size="lg"
                className="bg-healthcare-700/20 hover:bg-healthcare-700/30 text-white border-2 border-white/80 px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                See plan benefits
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block max-w-md bg-white/95 backdrop-blur p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Book an Appointment</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Enter your mobile number"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Request Appointment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;