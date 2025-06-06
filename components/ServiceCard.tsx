
import React, { useLayoutEffect, useRef } from 'react';
import { Service } from '../types';
import { gsap } from 'gsap';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
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
          duration: 0.8,
          delay: index * 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, cardRef); 

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-[#131516] rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-[#e7ab09]/30 hover:scale-105 group h-full flex flex-col font-['Inter']" /* Darker card bg */
    >
      <img src={service.image} alt={service.title} className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-[22px] font-['Anton_SC'] font-normal text-[#e7ab09] mb-3">{service.title}</h3> {/* Adjusted font and size */}
        <p className="text-gray-200 text-[16px] leading-relaxed mb-4 font-normal flex-grow">{service.description}</p>
        {service.longDescription && (
             <p className="text-gray-400 text-[14px] italic leading-relaxed mb-4 font-normal">{service.longDescription}</p>
        )}
        <a href="#/contact" className="mt-auto inline-block text-[#e7ab09] hover:text-[#c79608] font-medium transition-colors duration-300 group-hover:translate-x-1 self-start text-[14px]">
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;