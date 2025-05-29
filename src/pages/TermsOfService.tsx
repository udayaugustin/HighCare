
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const TermsOfService = () => {
  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-healthcare-primary mb-8 border-b border-healthcare-light pb-4">Terms of Use</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">1. Eligibility and Acceptance</h2>
                <p>
                  HighCare Health Services offers its membership and associated services exclusively to
                  individuals who are 18 years of age or older and legally capable of entering into binding
                  contracts under Indian law. If services are to be utilized for a minor, a parent or legal
                  guardian must agree to these terms on the minor's behalf. HighCare Health Services
                  reserves the right to terminate memberships if it is determined that the user does not meet
                  these eligibility criteria.
                </p>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">2. Membership Duration and Payment Options</h2>
                <p>
                  Memberships with HighCare Health Services are valid for one year from the date of
                  purchase. Members may choose from various payment plans, including monthly, quarterly,
                  semi-annual, or annual payments, depending on the specific membership selected. For
                  memberships priced below ₹15,000, setting up an auto-pay arrangement may be required.
                </p>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">3. Payment Timeliness</h2>
                <p>
                  Members are expected to pay their membership fees promptly, within seven days of the due
                  date. Failure to do so may result in suspension or termination of membership benefits.
                </p>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">4. Refund Policy</h2>
                <p>
                  Members who have made an annual payment are eligible for a full refund if they choose to
                  cancel within 15 days of membership activation, provided they have not utilized any services
                  or claimed insurance benefits during this period. To request a refund, members must submit
                  a written cancellation request or contact our support team. Refunds are not available for
                  memberships with flexible payment options (monthly, quarterly, or semi-annual) once
                  services have been accessed. Refunds related to insurance premiums are subject to the
                  terms and conditions set by the respective IRDAI-registered insurance provider.
                </p>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">5. Modifications to Terms</h2>
                <p>
                  HighCare Health Services reserves the right to modify or update these Terms of Use at any
                  time. Such changes will be posted on our website, and continued use of our services
                  constitutes acceptance of the revised terms.
                </p>
              </section>
              
              <section className="bg-healthcare-bg p-6 rounded-lg border-l-4 border-healthcare-primary">
                <h2 className="text-xl font-semibold text-healthcare-dark mb-3">6. Contact Information</h2>
                <p>
                  For any questions or concerns regarding these Terms of Use, please contact us at:
                </p>
                <p className="font-medium">Email: <a href="mailto:support@highcarehealthservices.com" className="text-healthcare-primary hover:text-healthcare-dark transition-colors">support@highcarehealthservices.com</a></p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;
