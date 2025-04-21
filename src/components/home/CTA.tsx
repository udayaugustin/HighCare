
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="bg-healthcare-600 py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-lg text-white/90 mb-0">
              Book an appointment today or become a member to access premium healthcare services.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-healthcare-600 hover:bg-gray-100">
              <span>Book Appointment</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" className="bg-white text-healthcare-600 hover:bg-gray-100">
              <span>Join Membership</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
