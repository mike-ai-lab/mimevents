import React, { useLayoutEffect, useRef } from 'react';
import { Testimonial } from '../types';
import { gsap } from 'gsap';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  className?: string; // Added className prop
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, className }) => { // Destructure className
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!cardRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const baseClasses = "bg-[#131516]/70 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-[#2d3233]/50 relative overflow-hidden h-full flex flex-col font-['Inter']";

  return (
    <div 
      ref={cardRef} 
      className={`${baseClasses} ${className || ''}`.trim()}
    >
      <div className="absolute -top-3 -left-2 text-[80px] font-['Anton_SC'] text-[#e7ab09]/30 opacity-80 select-none" aria-hidden="true">
        “
      </div>
      <blockquote className="flex-grow">
        <p className="text-white italic text-[18px] leading-relaxed mb-6 font-normal">
          {testimonial.quote}
        </p>
      </blockquote>
      <div className="text-right mt-auto pt-4 border-t border-[#2d3233]/40">
        <p className="font-semibold text-[#e7ab09] text-[16px] font-['Inter']">{testimonial.author}</p>
        {testimonial.eventDate && <p className="text-[12px] text-gray-400 font-normal">{testimonial.eventDate}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;