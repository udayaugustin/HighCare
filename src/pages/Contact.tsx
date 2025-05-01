
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';

const Contact = () => {
  return (
    <MainLayout>
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            title="Get in Touch"
            subtitle="We're here to help and answer any questions you might have"
            className="text-center mb-12"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-healthcare-50 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-healthcare-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 Healthcare Avenue<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-healthcare-50 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-healthcare-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-healthcare-50 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-healthcare-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-600">contact@highcare.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-healthcare-50 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-healthcare-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-healthcare-600 focus:border-healthcare-600"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-healthcare-600 focus:border-healthcare-600"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-healthcare-600 focus:border-healthcare-600"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-healthcare-600 focus:border-healthcare-600"
                      placeholder="Type your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-healthcare-600 text-white py-3 px-6 rounded-md hover:bg-healthcare-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
