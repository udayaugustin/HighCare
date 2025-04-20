
import React from 'react';
import { Stethoscope, UserCog, Receipt } from 'lucide-react';

const services = [
  {
    title: "Health Hub First Care",
    description: "Start your healthcare journey at our modern Health Hubs with dedicated General Physicians available 24/7.",
    icon: <Stethoscope className="h-12 w-12 text-healthcare-600" />,
    imageShape: "rounded-xl",
    imageSrc: "https://images.unsplash.com/photo-1631217868264-e5b90bb4561c?auto=format&fit=crop&q=80&w=2791&ixlib=rb-4.0.3"
  },
  {
    title: "Specialist Referral Network",
    description: "Get seamless access to top specialists when needed, carefully matched to your specific health needs.",
    icon: <UserCog className="h-12 w-12 text-healthcare-600" />,
    imageShape: "rounded-full",
    imageSrc: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3"
  },
  {
    title: "Complete Care Coverage",
    description: "Enjoy unlimited consultations and medicine coverage with our comprehensive membership plan.",
    icon: <Receipt className="h-12 w-12 text-healthcare-600" />,
    imageShape: "clip-path-hexagon",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  }
];

const ServiceFlow = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`relative w-48 h-48 overflow-hidden ${
                  service.imageShape === 'rounded-full' ? 'rounded-full' :
                  service.imageShape === 'clip-path-hexagon' ? 'hexagon' :
                  'rounded-xl'
                }`}>
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 bg-healthcare-50 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 line-clamp-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFlow;
