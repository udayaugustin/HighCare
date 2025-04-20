
import React from 'react';
import { Stethoscope, UserCog, Receipt } from 'lucide-react';

const services = [
  {
    title: "Walk In or Book at Our Health Hub",
    description: "No queues. Visit general doctors anytime at our in-house Health Hubs.",
    icon: <Stethoscope className="h-12 w-12 text-healthcare-600" />,
    imageShape: "rounded-2xl",
    imageSrc: "https://via.placeholder.com/200x200"
  },
  {
    title: "Specialist Access via Referrals",
    description: "Get referred to top specialists only when truly needed.",
    icon: <UserCog className="h-12 w-12 text-healthcare-600" />,
    imageShape: "rounded-full",
    imageSrc: "https://via.placeholder.com/200x200"
  },
  {
    title: "Unlimited Consultations & Savings",
    description: "Enjoy unlimited visits and discounts on select medicines.",
    icon: <Receipt className="h-12 w-12 text-healthcare-600" />,
    imageShape: "hexagon",
    imageSrc: "https://via.placeholder.com/200x200"
  }
];

const ServiceFlow = () => {
  return (
    <section className="bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#065F46] mb-12">
          Experience Modern Healthcare
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
