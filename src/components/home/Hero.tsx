import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Healthcare Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 md:px-6">
        <div className="flex items-center h-full">
          <div className="max-w-2xl pt-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Our members say we treat them like family
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-healthcare-primary hover:bg-healthcare-dark text-white px-8 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Consult a doctor
              </Button>
              <Button 
                size="lg"
                className="bg-pink-200 text-gray-900 hover:bg-pink-300 px-8"
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