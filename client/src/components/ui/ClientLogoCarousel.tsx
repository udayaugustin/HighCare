import React, { useEffect, useRef } from 'react';

interface ClientLogoCarouselProps {
  className?: string;
}

const ClientLogoCarousel: React.FC<ClientLogoCarouselProps> = ({ className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sample client logos - using SVG placeholders
  const clientLogos = [
    {
      name: 'TechCorp',
      logo: (
        <svg className="w-20 h-12" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="8" fill="#065F46" fillOpacity="0.1"/>
          <text x="40" y="28" textAnchor="middle" className="fill-healthcare-700 text-sm font-semibold">TechCorp</text>
        </svg>
      )
    },
    {
      name: 'MediPlus',
      logo: (
        <svg className="w-20 h-12" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="8" fill="#10B981" fillOpacity="0.1"/>
          <circle cx="40" cy="24" r="8" fill="#10B981"/>
          <text x="40" y="40" textAnchor="middle" className="fill-healthcare-600 text-xs font-medium">MediPlus</text>
        </svg>
      )
    },
    {
      name: 'HealthFlow',
      logo: (
        <svg className="w-20 h-12" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="8" fill="#065F46" fillOpacity="0.1"/>
          <path d="M30 20 L40 16 L50 20 L40 32 Z" fill="#065F46"/>
          <text x="40" y="42" textAnchor="middle" className="fill-healthcare-700 text-xs font-medium">HealthFlow</text>
        </svg>
      )
    },
    {
      name: 'CarePlus',
      logo: (
        <svg className="w-20 h-12" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="8" fill="#22c55e" fillOpacity="0.1"/>
          <rect x="36" y="16" width="8" height="16" fill="#22c55e"/>
          <rect x="30" y="20" width="20" height="8" fill="#22c55e"/>
          <text x="40" y="42" textAnchor="middle" className="fill-healthcare-600 text-xs font-medium">CarePlus</text>
        </svg>
      )
    },
    {
      name: 'WellnessHub',
      logo: (
        <svg className="w-20 h-12" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="8" fill="#16a34a" fillOpacity="0.1"/>
          <ellipse cx="40" cy="20" rx="12" ry="8" fill="#16a34a"/>
          <text x="40" y="38" textAnchor="middle" className="fill-healthcare-700 text-xs font-medium">WellnessHub</text>
        </svg>
      )
    },
    {
      name: 'MedTech',
      logo: (
        <svg className="w-20 h-12" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="8" fill="#065F46" fillOpacity="0.1"/>
          <polygon points="40,16 48,28 32,28" fill="#065F46"/>
          <text x="40" y="40" textAnchor="middle" className="fill-healthcare-700 text-xs font-medium">MedTech</text>
        </svg>
      )
    },
    {
      name: 'LifeCare',
      logo: (
        <svg className="w-20 h-12" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="8" fill="#10B981" fillOpacity="0.1"/>
          <path d="M40 16 C46 16 50 20 50 26 C50 32 40 36 40 36 C40 36 30 32 30 26 C30 20 34 16 40 16 Z" fill="#10B981"/>
          <text x="40" y="44" textAnchor="middle" className="fill-healthcare-600 text-xs font-medium">LifeCare</text>
        </svg>
      )
    },
    {
      name: 'HealthNet',
      logo: (
        <svg className="w-20 h-12" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="8" fill="#22c55e" fillOpacity="0.1"/>
          <circle cx="32" cy="20" r="4" fill="#22c55e"/>
          <circle cx="48" cy="20" r="4" fill="#22c55e"/>
          <line x1="36" y1="20" x2="44" y2="20" stroke="#22c55e" strokeWidth="2"/>
          <text x="40" y="36" textAnchor="middle" className="fill-healthcare-600 text-xs font-medium">HealthNet</text>
        </svg>
      )
    }
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed as needed

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled past half the content
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`bg-gray-50 py-12 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-healthcare-700 mb-2">
            Trusted by Healthcare Leaders
          </h3>
          <p className="text-gray-600">
            Join thousands of satisfied clients who trust our healthcare services
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-hidden scrollbar-hide"
          style={{ 
            scrollBehavior: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {duplicatedLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              style={{ minWidth: '120px' }}
            >
              {client.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoCarousel;