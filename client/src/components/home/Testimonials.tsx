
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';

const testimonials = [
  {
    name: 'Rahul Mehta',
    role: 'HighCare Member',
    content: 'The doctors at HighCare are truly exceptional. They took the time to listen to my concerns and provided personalized care that helped me recover quickly.',
    rating: 5,
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Meera Iyer',
    role: 'Patient',
    content: 'I\'ve been going to HighCare for my family\'s healthcare needs for over 5 years. The staff is friendly, the facilities are clean, and the doctors are knowledgeable.',
    rating: 5,
    imageSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  {
    name: 'Vikram Singh',
    role: 'Premium Member',
    content: 'The membership program at HighCare has been a game-changer for me. I get priority appointments, discounted medications, and regular health check-ups at an affordable cost.',
    rating: 5,
    imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-healthcare-50 py-24">
      <div className="container">
        <SectionHeading
          title="What Our Patients Say"
          subtitle="Read testimonials from our satisfied patients about their experience with HighCare Health Services."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
