
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ClinicCardProps {
  name: string;
  address: string;
  pincode?: string;
  timings?: string;
  phone?: string;
  imageSrc?: string;
  className?: string;
}

const ClinicCard = ({
  name,
  address,
  pincode,
  timings,
  phone,
  imageSrc,
  className,
}: ClinicCardProps) => {
  return (
    <div className={cn(
      "rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100",
      className
    )}>
      <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-healthcare-100">
            <span className="text-healthcare-600 font-semibold">No Image</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        
        <div className="flex items-start text-gray-600 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-healthcare-500" />
          <span>{address} {pincode && `- ${pincode}`}</span>
        </div>
        
        {timings && (
          <div className="flex items-start text-gray-600 text-sm mb-3">
            <Clock className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-healthcare-500" />
            <span>{timings}</span>
          </div>
        )}
        
        {phone && (
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-healthcare-500" />
            <span>{phone}</span>
          </div>
        )}
        
        <div className="flex space-x-3 mt-4">
          <Button variant="outline" className="flex-1 border-healthcare-300 text-healthcare-700 hover:bg-healthcare-50">
            Get Directions
          </Button>
          <Button className="flex-1 bg-healthcare-600 hover:bg-healthcare-700">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClinicCard;
