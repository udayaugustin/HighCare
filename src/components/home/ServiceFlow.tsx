
import React from 'react';
import { Stethoscope, UserCog, Receipt } from 'lucide-react';

const services = [
  {
    title: "Walk In or Book at Our Health Hub",
    description: "No queues. Visit general doctors anytime at our in-house Health Hubs.",
    icon: <Stethoscope className="h-12 w-12 text-healthcare-600" />,
    imageShape: "rounded-2xl",
    imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80"
  },
  {
    title: "Specialist Access via Referrals",
    description: "Get referred to top specialists only when truly needed.",
    icon: <UserCog className="h-12 w-12 text-healthcare-600" />,
    imageShape: "rounded-full",
    imageSrc: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80"
  },
  {
    title: "Unlimited Consultations & Savings",
    description: "Enjoy unlimited visits and discounts on select medicines.",
    icon: <Receipt className="h-12 w-12 text-healthcare-600" />,
    imageShape: "hexagon",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80"
  }
];

const ServiceFlow = () => {
  return (
    <section className="relative bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-16">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg"></div>
      
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-center text-[#065F46] mb-12">
          We are a different kind of healthcare company
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-healthcare-light/30"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`relative w-48 h-48 overflow-hidden ${
                  service.imageShape === 'rounded-full' ? 'rounded-full' :
                  service.imageShape === 'hexagon' ? 'hexagon' :
                  'rounded-2xl'
                }`}>
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 bg-green-50 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFlow;
