import React from 'react';
import { UserGroupIcon, HeartIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    value: '24/7',
    label: 'Expert Support'
  },
  {
    value: '50+',
    label: 'Healthcare Specialists'
  },
  {
    value: '99%',
    label: 'Patient Satisfaction'
  }
];

const CommunitySection = () => {
  return (
    <section className="relative overflow-hidden bg-[#047857] py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="w-12 h-12 rounded-full bg-white/20 p-3 backdrop-blur-sm">
            <UserGroupIcon className="w-full h-full text-white" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 p-3 backdrop-blur-sm">
            <HeartIcon className="w-full h-full text-white" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 p-3 backdrop-blur-sm">
            <AcademicCapIcon className="w-full h-full text-white" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join our community of 1K+ subscribers
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Be part of India's fastest-growing healthcare community. Get exclusive health tips, 
            expert advice, and early access to our premium services.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="px-8 py-3 bg-white text-[#047857] rounded-full font-semibold hover:bg-green-50 transition-colors duration-300">
            Join Our Community
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
