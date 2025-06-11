
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/SectionHeading';

const About = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <div className="bg-gradient-to-r from-healthcare-800 to-healthcare-900 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
            <p className="text-lg text-gray-200">
              Learn about our mission, vision, and the team behind HighCare Health Services.
            </p>
          </div>
        </div>
      </div>
      
      {/* Vision & Mission */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Our Vision & Mission"
              subtitle="At HighCare Health, we're committed to improving the healthcare experience for everyone."
              className="mb-8"
            />
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-healthcare-700 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading healthcare provider in India, setting new standards for quality, accessibility, and patient-centered care.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-healthcare-700 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide affordable, high-quality healthcare services to all communities, focusing on preventive care and health education to empower individuals to lead healthier lives.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-healthcare-700 mb-2">Our Values</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="font-semibold">Excellence:</span> Striving for the highest standards in all aspects of care</li>
                  <li><span className="font-semibold">Compassion:</span> Treating every patient with dignity and respect</li>
                  <li><span className="font-semibold">Innovation:</span> Embracing new technologies and approaches to healthcare</li>
                  <li><span className="font-semibold">Integrity:</span> Acting ethically and transparently in all we do</li>
                  <li><span className="font-semibold">Accessibility:</span> Making quality healthcare available to all</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="HighCare Health Mission Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <SectionHeading
            title="Our Story"
            subtitle="From humble beginnings to becoming a trusted healthcare provider."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              HighCare Health Services was founded in 2010 by a team of dedicated medical professionals who were passionate about transforming healthcare delivery in India. What started as a small clinic in Indiranagar, Bangalore, has now grown into a network of modern healthcare facilities across the city.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey has been driven by a simple belief: everyone deserves access to high-quality healthcare. Over the years, we have continuously expanded our services, invested in cutting-edge technology, and built a team of experienced healthcare professionals who share our vision.
            </p>
            <p className="text-gray-600">
              Today, HighCare Health Services is recognized for its patient-centered approach, comprehensive care, and commitment to making healthcare more accessible and affordable for all communities.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-healthcare-700 mb-2">2010</div>
              <p className="text-gray-600">Founded first clinic in Indiranagar</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-healthcare-700 mb-2">2015</div>
              <p className="text-gray-600">Expanded to 5 clinics across Bangalore</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-healthcare-700 mb-2">2018</div>
              <p className="text-gray-600">Launched membership program</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-healthcare-700 mb-2">2022</div>
              <p className="text-gray-600">Reached milestone of 50,000+ patients</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Leadership Team */}
      <div className="container py-16">
        <SectionHeading
          title="Leadership Team"
          subtitle="Meet the experienced professionals guiding HighCare Health Services."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 w-48 h-48 mx-auto rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                alt="Dr. Suresh Menon"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Dr. Suresh Menon</h3>
            <p className="text-healthcare-600 mb-2">Founder & CEO</p>
            <p className="text-gray-600">
              With over 30 years of experience in healthcare, Dr. Menon established HighCare with a vision to transform healthcare delivery.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 w-48 h-48 mx-auto rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Dr. Lakshmi Nair"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Dr. Lakshmi Nair</h3>
            <p className="text-healthcare-600 mb-2">Medical Director</p>
            <p className="text-gray-600">
              As Medical Director, Dr. Nair oversees all clinical operations and ensures the highest standards of patient care.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 w-48 h-48 mx-auto rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Arun Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Arun Sharma</h3>
            <p className="text-healthcare-600 mb-2">Chief Operating Officer</p>
            <p className="text-gray-600">
              Arun brings extensive experience in healthcare management and operations to ensure smooth functioning of all clinics.
            </p>
          </div>
        </div>
      </div>
      
      {/* Partners */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <SectionHeading
            title="Our Partners"
            subtitle="We collaborate with leading organizations to enhance our healthcare services."
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm w-48 h-24 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">Partner 1</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-48 h-24 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">Partner 2</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-48 h-24 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">Partner 3</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-48 h-24 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">Partner 4</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-48 h-24 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">Partner 5</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-48 h-24 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">Partner 6</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
