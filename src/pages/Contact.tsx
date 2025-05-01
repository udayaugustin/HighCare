import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { MessageSquare, HeadphonesIcon, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to us through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Enquiry Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Enquiry</h3>
              <p className="text-gray-600 mb-8">
                Interested in our healthcare plans? Our team will help you choose the right plan for you.
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Contact Us
              </Button>
            </div>

            {/* Customer Support Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <HeadphonesIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Support</h3>
              <p className="text-gray-600 mb-8">
                Need assistance? Our support team is available 24/7 to help you with any issues.
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Contact Us
              </Button>
            </div>

            {/* Business Enquiry Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Enquiry</h3>
              <p className="text-gray-600 mb-8">
                Looking to partner with us? Let's discuss how we can work together.
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;