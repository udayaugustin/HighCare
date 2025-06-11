import React from 'react';

const ClientLogoCarousel = () => {
  // Healthcare partner logos using placeholder SVGs for consistent display
  const logos = [
    { name: "Apollo Hospitals", svg: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
    { name: "Fortis Healthcare", svg: "M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" },
    { name: "Max Healthcare", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" },
    { name: "Manipal Hospitals", svg: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" },
    { name: "Narayana Health", svg: "M14 6V4h-4v2c0 .55-.45 1-1 1s-1-.45-1-1V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2c0 .55-.45 1-1 1s-1-.45-1-1zM6 16v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H6z" },
    { name: "Columbia Asia", svg: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" },
    { name: "Aster DM Healthcare", svg: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
    { name: "Cloudnine Hospitals", svg: "M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" }
  ];

  return (
    <div className="bg-gray-50 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Trusted by Leading Healthcare Partners
        </h3>
        
        <div className="relative">
          {/* Main scrolling container */}
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            <div className="flex flex-nowrap space-x-8 md:space-x-12">
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 w-32 h-20 md:w-40 md:h-24"
                >
                  <svg 
                    width="48" 
                    height="48" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-healthcare-600 opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    <path 
                      d={logo.svg} 
                      fill="currentColor"
                    />
                  </svg>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex flex-nowrap space-x-8 md:space-x-12 ml-8 md:ml-12">
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 w-32 h-20 md:w-40 md:h-24"
                >
                  <svg 
                    width="48" 
                    height="48" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-healthcare-600 opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    <path 
                      d={logo.svg} 
                      fill="currentColor"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogoCarousel;