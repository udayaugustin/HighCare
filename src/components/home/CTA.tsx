import React from 'react';
import { ArrowRight } from 'lucide-react';
//import { Button } from '@/components/ui/button'; //Removed because buttons are removed

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
        </div>
      </div>
    </section>
  );
};

export default CTA;