import React from 'react';

const SubscriberBanner = () => {
  return (
    <div className="bg-healthcare-600 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white text-lg md:text-xl font-medium">
          Join our community of{' '}
          <span className="font-bold text-healthcare-100">1000+</span>{' '}
          subscribers
        </p>
      </div>
    </div>
  );
};

export default SubscriberBanner;