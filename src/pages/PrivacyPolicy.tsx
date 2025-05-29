
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-healthcare-primary mb-8 border-b border-healthcare-light pb-4">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <div className="bg-healthcare-bg p-4 rounded-lg mb-6">
                <p className="font-medium text-center">Effective Date: 22/05/2025</p>
              </div>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">1. Introduction</h2>
                <p>
                  At HighCare Health Services, we prioritize your privacy and are committed to protecting your
                  personal and sensitive information. This policy outlines how we collect, use, share, and
                  protect data obtained through our website, mobile application, and associated services.
                </p>
                <p>
                  This Privacy Policy governs the use of our services and outlines our practices regarding the
                  handling of your data in accordance with the Information Technology Act, 2000, and
                  applicable data protection rules in India.
                </p>
                <p>
                  By using our services, you consent to the practices described in this policy.
                </p>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">2. Information We Collect</h2>
                <p>
                  We collect information to deliver safe, efficient, and customized healthcare services. This includes:
                </p>
                <div className="pl-4">
                  <p className="font-medium">A. Personally Identifiable Information (PII):</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Name</li>
                    <li>Contact details (email, phone number)</li>
                    <li>Address</li>
                  </ul>
                  
                  <p className="font-medium mt-3">B. Sensitive Personal Data or Information (SPDI):</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Passwords</li>
                    <li>Financial data (bank account, card details)</li>
                    <li>Medical records and history</li>
                    <li>Health conditions and physiological information</li>
                    <li>Sexual orientation (where applicable for care)</li>
                    <li>Biometric data</li>
                    <li>Other related information required to deliver healthcare services</li>
                  </ul>
                  
                  <p className="font-medium mt-3">C. Non-Personal Information:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Device identifiers</li>
                    <li>Browser type and IP address</li>
                    <li>Operating system</li>
                    <li>Usage statistics and analytics</li>
                  </ul>
                </div>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">3. Purpose of Data Collection</h2>
                <p>
                  We collect your data for the following reasons:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To provide and manage healthcare and wellness services</li>
                  <li>For diagnostic support and clinical consultations</li>
                  <li>To process transactions and insurance claims</li>
                  <li>To maintain medical records</li>
                  <li>To comply with legal obligations and regulatory requirements</li>
                  <li>To communicate important updates and health alerts</li>
                  <li>To enhance user experience and improve our offerings</li>
                </ul>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">4. Sharing of Information</h2>
                <p>
                  We may share your data with:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Internal teams and authorized employees for service delivery</li>
                  <li>External service providers for payment processing, technology, and diagnostic services</li>
                  <li>Legal or regulatory authorities, when mandated by law</li>
                </ul>
                <p className="mt-3">
                  We do not sell or rent your personal information to third parties for marketing purposes.
                </p>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">5. Data Protection Measures</h2>
                <p>
                  We implement industry-standard administrative, technical, and physical safeguards to
                  protect your information from unauthorized access, misuse, or loss. Measures include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Data encryption</li>
                  <li>Secure servers and firewalls</li>
                  <li>Restricted access to sensitive information</li>
                  <li>Regular security audits</li>
                </ul>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">6. Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access your personal data</li>
                  <li>Correct inaccuracies in your records</li>
                  <li>Withdraw consent at any time</li>
                  <li>Request deletion or restriction of your data (subject to legal retention requirements)</li>
                </ul>
                <p className="mt-3">
                  To exercise your rights, email us at: <a href="mailto:support@highcarehealthservices.com" className="text-healthcare-primary hover:text-healthcare-dark transition-colors">support@highcarehealthservices.com</a>
                </p>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">7. Retention of Information</h2>
                <p>
                  We retain personal information only as long as necessary to fulfill the purposes for which it
                  was collected, or as required by law.
                </p>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">8. Changes to the Policy</h2>
                <p>
                  HighCare Health Services reserves the right to update this policy periodically. Any changes
                  will be published on our website, and significant updates will be communicated to users.
                </p>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">9. Contact Us</h2>
                <p>
                  For questions, concerns, or to file a complaint regarding this policy, please contact:
                </p>
                <div className="mt-2">
                  <p className="font-medium">HighCare Health Services</p>
                  <p>Email: <a href="mailto:support@highcarehealthservices.com" className="text-healthcare-primary hover:text-healthcare-dark transition-colors">support@highcarehealthservices.com</a></p>
                  <p>Address: #59, 3rd Floor, Om Shakthi Complex, GarvebhaviPalya, Hosur Main Road, Bangalore - 560068.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
