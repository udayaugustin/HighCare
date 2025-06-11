import React from 'react';
import { Users, Heart, Shield, Award } from 'lucide-react';

interface SubscriberBannerProps {
  count?: number;
  className?: string;
}

const SubscriberBanner: React.FC<SubscriberBannerProps> = ({ 
  count = 5000, 
  className = '' 
}) => {
  // Format the count with commas for better readability
  const formatCount = (num: number) => {
    return num.toLocaleString();
  };

  const stats = [
    {
      icon: Users,
      label: 'Active Members',
      value: formatCount(count)
    },
    {
      icon: Heart,
      label: 'Lives Improved',
      value: formatCount(Math.floor(count * 1.2))
    },
    {
      icon: Shield,
      label: 'Trust Score',
      value: '98%'
    }
  ];

  return (
    <div className={`bg-gradient-to-r from-healthcare-800 to-healthcare-700 py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-healthcare-100 mb-2">
            Be part of <span className="font-bold text-white">{formatCount(count)}+</span> satisfied members
          </p>
          <p className="text-healthcare-200 max-w-2xl mx-auto">
            Experience exceptional healthcare services with our trusted network of medical professionals
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-healthcare-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button className="bg-white text-healthcare-700 hover:bg-healthcare-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Join Our Community
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-healthcare-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
          <p className="text-healthcare-200 text-sm mt-4">
            No commitment required • Free consultation available
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="flex items-center gap-2 text-healthcare-200 text-sm">
            <Shield className="w-4 h-4" />
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-healthcare-200 text-sm">
            <Award className="w-4 h-4" />
            <span>ISO Certified</span>
          </div>
          <div className="flex items-center gap-2 text-healthcare-200 text-sm">
            <Heart className="w-4 h-4" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriberBanner;