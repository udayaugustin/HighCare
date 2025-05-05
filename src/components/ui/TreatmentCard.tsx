
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TreatmentCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  className?: string;
}

const TreatmentCard = ({
  title,
  description,
  icon,
  href,
  className,
}: TreatmentCardProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "group block rounded-xl p-8 bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50 hover:border-healthcare-200 relative overflow-hidden",
        className
      )}
    >
      {icon && (
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-healthcare-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{description}</p>
      
      <div className="flex items-center text-healthcare-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
        <span>Learn more</span>
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </Link>
  );
};

export default TreatmentCard;
