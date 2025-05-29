import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from '@/components/ui/SectionHeading';

const FAQs = [
  {
    question: "What services does HighCare provide?",
    answer: "HighCare provides comprehensive healthcare services including primary care, specialist consultations, preventive health checkups, chronic disease management, and more. Our clinics are equipped with modern facilities and experienced doctors."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website, mobile app, or by calling our helpline. Members get priority booking and can schedule appointments instantly."
  },
  {
    question: "What are the benefits of HighCare membership?",
    answer: "HighCare membership includes unlimited doctor consultations, comprehensive health checkups, priority appointments, health insurance coverage, discounted medications, and access to all clinic locations."
  },
  {
    question: "Are your doctors available for online consultation?",
    answer: "Yes, our doctors are available for both in-person and online consultations. Members can access virtual consultations 24/7 through our platform."
  },
  {
    question: "Do you have multiple clinic locations?",
    answer: "Yes, we have multiple clinics across Bangalore. All our clinics are equipped with modern facilities and staffed with experienced healthcare professionals."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services and membership benefits"
          centered
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;