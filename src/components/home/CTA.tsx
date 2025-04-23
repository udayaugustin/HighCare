
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-healthcare-800 py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 font-medium mb-0 leading-relaxed">
              Book an appointment today or become a member to access premium healthcare services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
