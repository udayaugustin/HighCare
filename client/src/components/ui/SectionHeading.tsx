
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'mb-12',
      centered ? 'text-center mx-auto max-w-3xl' : '',
      className
    )}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
