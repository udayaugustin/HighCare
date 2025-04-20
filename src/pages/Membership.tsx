
import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Basic',
    price: '₹1,999',
    duration: 'per year',
    description: 'Essential healthcare coverage for individuals',
    features: [
      { name: 'Unlimited consultations at home clinic', included: true },
      { name: '4 specialist consultations', included: true },
      { name: '2 comprehensive health check-ups', included: true },
      { name: '10% discount on medications', included: true },
      { name: 'Access to all clinic locations', included: false },
      { name: 'Health insurance coverage (₹50,000)', included: false },
      { name: 'Home healthcare services', included: false },
      { name: 'Priority appointments', included: false },
    ],
    popular: false
  },
  {
    name: 'Premium',
    price: '₹4,999',
    duration: 'per year',
    description: 'Comprehensive coverage for individuals and families',
    features: [
      { name: 'Unlimited consultations at all clinics', included: true },
      { name: '12 specialist consultations', included: true },
      { name: '4 comprehensive health check-ups', included: true },
      { name: '20% discount on medications', included: true },
      { name: 'Access to all clinic locations', included: true },
      { name: 'Health insurance coverage (₹2,00,000)', included: true },
      { name: 'Home healthcare services', included: true },
      { name: 'Priority appointments', included: false },
    ],
    popular: true
  },
  {
    name: 'Elite',
    price: '₹9,999',
    duration: 'per year',
    description: 'Premium healthcare experience for the whole family',
    features: [
      { name: 'Unlimited consultations at all clinics', included: true },
      { name: 'Unlimited specialist consultations', included: true },
      { name: '6 comprehensive health check-ups', included: true },
      { name: '30% discount on medications', included: true },
      { name: 'Access to all clinic locations', included: true },
      { name: 'Health insurance coverage (₹5,00,000)', included: true },
      { name: 'Home healthcare services', included: true },
      { name: 'Priority appointments', included: true },
    ],
    popular: false
  }
];

const benefits = [
  {
    title: 'Comprehensive Health Check-ups',
    description: 'Regular check-ups to monitor your health and catch issues early.',
    icon: '🩺'
  },
  {
    title: 'Doctor Consultations',
    description: 'Unlimited access to our network of experienced doctors.',
    icon: '👨‍⚕️'
  },
  {
    title: 'Specialist Care',
    description: 'Access to specialists across multiple medical disciplines.',
    icon: '🏥'
  },
  {
    title: 'Health Insurance',
    description: 'Coverage for hospitalization and medical emergencies.',
    icon: '🛡️'
  },
  {
    title: 'Medication Discounts',
    description: 'Save on prescription and over-the-counter medications.',
    icon: '💊'
  },
  {
    title: 'Family Coverage',
    description: 'Plans that cover your entire family at affordable rates.',
    icon: '👨‍👩‍👧‍👦'
  }
];

const Membership = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-healthcare-800 to-healthcare-900 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-[#065F46] mt-10 mb-6">Membership Plans</h1>
            <p className="text-gray-600 md:text-lg mb-8">
              Join our membership program to access comprehensive healthcare services and insurance benefits at affordable prices.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-16">
        <SectionHeading
          title="Choose Your Plan"
          subtitle="Select a membership plan that suits your healthcare needs and budget."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={cn(
                "rounded-xl overflow-hidden border transition-all duration-300",
                plan.popular 
                  ? "border-healthcare-500 shadow-lg shadow-healthcare-100 transform scale-105 md:-translate-y-4" 
                  : "border-gray-200"
              )}
            >
              {plan.popular && (
                <div className="bg-healthcare-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.duration}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-healthcare-600 mr-2 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={cn(
                    "w-full",
                    plan.popular 
                      ? "bg-healthcare-600 hover:bg-healthcare-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  )}
                >
                  <span>Select Plan</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container">
          <SectionHeading
            title="Membership Benefits"
            subtitle="Our membership plans offer comprehensive healthcare services and financial protection."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ready to join our membership program?</h3>
            <Button size="lg" className="bg-healthcare-600 hover:bg-healthcare-700">
              <span>Get Started Today</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Membership;
