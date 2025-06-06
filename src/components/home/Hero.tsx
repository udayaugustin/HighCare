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
        <div className="flex items-center h-full">
          <div className="max-w-2xl pt-20">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;