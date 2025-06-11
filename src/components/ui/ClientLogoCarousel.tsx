import React, { useEffect, useRef } from 'react';
import upskillLogo from '@/assets/logos/upskill.jpg';
import staffmatrixLogo from '@/assets/logos/staffmatrix.jpeg';
import highsorceLogo from '@/assets/logos/highsorce.jpeg';
import instamartLogo from '@/assets/logos/instamart.png';
import blinkitLogo from '@/assets/logos/blinkit.png';
import zeptoLogo from '@/assets/logos/zepto.png';

interface ClientLogoCarouselProps {
  className?: string;
}

const ClientLogoCarousel: React.FC<ClientLogoCarouselProps> = ({ className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Client logos using actual images
  const clientLogos = [
    {
      name: 'Upskill Workforce Private Limited',
      logo: (
        <img 
          src={upskillLogo} 
          alt="Upskill Workforce Private Limited" 
          className="h-12 w-auto object-contain"
        />
      )
    },
    {
      name: 'Staffmatrix',
      logo: (
        <img 
          src={staffmatrixLogo} 
          alt="Staffmatrix" 
          className="h-12 w-auto object-contain"
        />
      )
    },
    {
      name: 'Highsorce',
      logo: (
        <img 
          src={highsorceLogo} 
          alt="Highsorce" 
          className="h-12 w-auto object-contain"
        />
      )
    },
    {
      name: 'Swiggy Instamart',
      logo: (
        <img 
          src={instamartLogo} 
          alt="Swiggy Instamart" 
          className="h-12 w-auto object-contain"
        />
      )
    },
    {
      name: 'Blinkit',
      logo: (
        <img 
          src={blinkitLogo} 
          alt="Blinkit" 
          className="h-12 w-auto object-contain"
        />
      )
    },
    {
      name: 'Zepto',
      logo: (
        <img 
          src={zeptoLogo} 
          alt="Zepto" 
          className="h-12 w-auto object-contain"
        />
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