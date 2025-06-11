
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { MessageSquare, HeadphonesIcon, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ui/ContactForm';

const Contact = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  if (category) {
    return (
      <MainLayout>
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <ContactForm category={category as 'plan' | 'support' | 'business'} />
          </div>
        </div>
      </MainLayout>
    );
  }

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
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col min-h-[300px]">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Enquiry</h3>
              <p className="text-gray-600 mb-8">
                Interested in our healthcare plans? Our team will help you choose the right plan for you.
              </p>
              <Button 
                className="w-full bg-[#10B981] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#059669] transition-colors duration-200 shadow-sm mt-auto"
                onClick={() => navigate('/contact/plan')}
              >
                Contact Us
              </Button>
            </div>

            {/* Customer Support Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col min-h-[300px]">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <HeadphonesIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Support</h3>
              <p className="text-gray-600 mb-8">
                Need assistance? Our support team is available 24/7 to help you with any issues.
              </p>
              <Button 
                className="w-full bg-[#10B981] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#059669] transition-colors duration-200 shadow-sm mt-auto"
                onClick={() => navigate('/contact/support')}
              >
                Contact Us
              </Button>
            </div>

            {/* Business Enquiry Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col min-h-[300px]">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Enquiry</h3>
              <p className="text-gray-600 mb-8">
                Looking to partner with us? Let's discuss how we can work together.
              </p>
              <Button 
                className="w-full bg-[#10B981] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#059669] transition-colors duration-200 shadow-sm mt-auto"
                onClick={() => navigate('/contact/business')}
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
