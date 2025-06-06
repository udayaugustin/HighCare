
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';

const features = [
  'Unlimited doctor consultations',
  'Comprehensive health check-ups',
  'Priority appointments',
  'Health insurance coverage',
  'Discounted medications',
  'Access to all clinic locations'
];

const MembershipTeaser = () => {
  return (
    <section className="section py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 mb-3 bg-healthcare-50 text-healthcare-600 text-sm font-medium rounded-full">
                HighCare Membership
              </span>
            </div>
            
            <SectionHeading
              title="Complete Healthcare Solution for You and Your Family"
              subtitle="Get comprehensive coverage with our membership plans designed for individuals and families."
              className="mb-8"
            />
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="rounded-full bg-healthcare-50 p-1 mr-3">
                    <Check className="h-4 w-4 text-healthcare-600" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="bg-healthcare-600 hover:bg-healthcare-700">
              <span>View Membership Plans</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="lg:pl-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-healthcare-200 to-healthcare-400 opacity-50 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/attached_assets/healthcare-patient-doctor-blood-pressure-600nw-2304754935_1747369677924.webp"
                  alt="HighCare Membership"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipTeaser;
