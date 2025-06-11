
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  rating?: number;
  imageSrc?: string;
  className?: string;
}

const TestimonialCard = ({
  name,
  role,
  content,
  rating = 5,
  imageSrc,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "rounded-2xl bg-white p-6 shadow-md border border-gray-100",
      className
    )}>
      <div className="flex items-center gap-4 mb-4">
        {imageSrc && (
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
            <img
              src={imageSrc}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          {role && <p className="text-sm text-gray-600">{role}</p>}
        </div>
      </div>
      
      {rating > 0 && (
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
              )}
            />
          ))}
        </div>
      )}
      
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default TestimonialCard;
