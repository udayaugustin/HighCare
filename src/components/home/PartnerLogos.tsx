import React, { useEffect, useRef } from 'react';

// Duplicate partners to ensure continuous scrolling
const partners = [
  // First set
  
  {
    name: 'Staff Matrix',
    logo: '/partners/staff_matrix.jpeg',
  },
  {
    name: 'Swiggy',
    logo: '/partners/swiggy.jpeg',
  },
  {
    name: 'Blinkit',
    logo: '/partners/blinkit.jpeg',
  },
  {
    name: 'Zepto',
    logo: '/partners/zepto.jpeg',
  },
  {
    name: 'Up Skill',
    logo: '/partners/upskill.jpeg',
  },
  // Duplicate set for continuous scrolling
  {
    name: 'Staff Matrix 2',
    logo: '/partners/staff_matrix.jpeg',
  },
  {
    name: 'Swiggy 2',
    logo: '/partners/swiggy.jpeg',
  },
  {
    name: 'Blinkit 2',
    logo: '/partners/blinkit.jpeg',
  },
  {
    name: 'Zepto 2',
    logo: '/partners/zepto.jpeg',
  },
  {
    name: 'Up Skill 2',
    logo: '/partners/upskill.jpeg',
  }
];

const PartnerLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout | null = null;
    let isPaused = false;

    const startScroll = () => {
      if (scrollInterval) return;
      scrollInterval = setInterval(() => {
        if (!scrollContainer || isPaused) return;
        
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 20);
    };

    const stopScroll = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
      }
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    startScroll();

    return () => {
      stopScroll();
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  return (
    <section className="w-full bg-[#f8fafd] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Trusted by Leading Partners
          </h2>
          <p className="text-gray-600">
            Collaborating with top organizations across various industries
          </p>
        </div>

        {/* Partners Logo Carousel */}
        <div className="relative">
          <div ref={scrollRef} className="overflow-x-auto no-scrollbar -mx-4 px-4">
            <div className="flex space-x-16 pb-4" style={{ width: 'max-content', minWidth: '250%' }}>
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex items-center justify-center"
                  style={{ minWidth: '240px', height: '120px' }}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
