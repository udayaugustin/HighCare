
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './button';

type ContactFormProps = {
  category: 'plan' | 'support' | 'business';
}

const ContactForm = ({ category }: ContactFormProps) => {
  const navigate = useNavigate();
  
  const getTitle = () => {
    switch(category) {
      case 'plan':
        return 'Plan Enquiry';
      case 'support':
        return 'Customer Support';
      case 'business':
        return 'Business Enquiry';
      default:
        return 'Contact Us';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/contact');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">{getTitle()}</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-healthcare-600 focus:border-healthcare-600"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-healthcare-600 focus:border-healthcare-600"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-healthcare-600 focus:border-healthcare-600"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-healthcare-600 focus:border-healthcare-600"
            rows={4}
            placeholder="How can we help you?"
          />
        </div>

        <div className="flex space-x-4">
          <Button 
            type="submit"
            className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white rounded-md font-semibold shadow-sm transition-colors duration-200"
          >
            Submit
          </Button>
          <Button 
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => navigate('/contact')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
