
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience?: string;
  location?: string;
  imageSrc?: string;
  className?: string;
}

const DoctorCard = ({
  name,
  specialty,
  experience,
  location,
  imageSrc,
  className,
}: DoctorCardProps) => {
  return (
    <div className={cn(
      "rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100",
      className
    )}>
      <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden">
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
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-healthcare-600 font-medium mb-3">{specialty}</p>
        
        {experience && (
          <p className="text-gray-600 text-sm mb-2">
            {experience} of experience
          </p>
        )}
        
        {location && (
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
        )}
        
        <Button className="w-full bg-healthcare-600 hover:bg-healthcare-700 mt-2">
          <Calendar className="h-4 w-4 mr-2" />
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
