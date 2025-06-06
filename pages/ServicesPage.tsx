
import React from 'react';
import AnimatedHeading from '../components/AnimatedHeading';
import ParallaxBackground from '../components/ParallaxBackground';
import { Service } from '../types';
import { Link } from 'react-router-dom';

const servicesData: Service[] = [
  {
    id: 'weddings',
    title: 'Exquisite Wedding Planning',
    description: 'From intimate ceremonies to grand receptions, we orchestrate every detail of your special day with elegance and precision. Our comprehensive wedding planning services cover venue selection, vendor management, design and decor, guest coordination, and flawless execution.',
    longDescription: 'We understand that your wedding day is one of the most important moments of your life. Our team works closely with you to understand your vision, preferences, and cultural traditions, ensuring a personalized and unforgettable celebration. We handle everything, so you can cherish every moment.',
    image: 'https://picsum.photos/seed/weddingservicepage/1200/800',
  },
  {
    id: 'corporate',
    title: 'Professional Corporate Events',
    description: 'We specialize in designing and executing impactful corporate events, including conferences, seminars, product launches, award ceremonies, and galas. Our focus is on creating events that align with your brand identity and business objectives.',
    longDescription: 'MIMEVENTS helps you make a statement. We manage logistics, technology, entertainment, and branding to deliver seamless and engaging corporate experiences. Whether it’s an internal team-building event or a large-scale international conference, we ensure professionalism and sophistication.',
    image: 'https://picsum.photos/seed/corporateservicepage/1200/800',
  },
  {
    id: 'private',
    title: 'Bespoke Private Celebrations',
    description: 'Celebrate life\'s special moments with uniquely designed private parties. From milestone birthdays and anniversaries to themed gatherings and exclusive soirées, we craft personalized experiences that reflect your individual style.',
    longDescription: 'Our team excels in creating intimate and memorable private events. We take care of every aspect, from conceptualization and design to entertainment and catering, allowing you to relax and enjoy your celebration with your guests. Let us turn your private party into an extraordinary affair.',
    image: 'https://picsum.photos/seed/partyservicepage/1200/800',
  },
  {
    id: 'destination',
    title: 'Luxury Destination Events',
    description: 'Dreaming of an event in a breathtaking location? We plan and manage luxury destination events in Lebanon and beyond, handling all complexities from travel logistics to local vendor coordination.',
    longDescription: 'MIMEVENTS offers full-service planning for destination weddings, corporate retreats, and exclusive parties. We leverage our extensive network and local expertise to create seamless and stunning events in idyllic settings, ensuring an unforgettable experience for you and your guests.',
    image: 'https://picsum.photos/seed/destinationservicepage/1200/800',
  },
];

const ServiceItemDisplay: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center py-12 md:py-16`}>
      <div className={`rounded-lg overflow-hidden shadow-2xl ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <img src={service.image} alt={service.title} className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105" />
      </div>
      <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <AnimatedHeading text={service.title} as="h3" className="!font-['Anton_SC'] !font-normal text-[40px] md:text-[48px] text-[#e7ab09] mb-4 !leading-tight" animationType="words" staggerAmount={0.04}/> {/* Adjusted size */}
        <p className="text-gray-100 text-[18px] leading-relaxed mb-3 font-normal">{service.description}</p>
        {service.longDescription && <p className="text-gray-300 text-[16px] leading-relaxed font-normal italic">{service.longDescription}</p>}
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 font-['Inter'] bg-[#0e1011] text-white">
      <ParallaxBackground imageUrl="https://picsum.photos/seed/servicepagehero/1920/1080" speed={0.15} minHeight="60vh" contentClassName="items-center justify-center text-center">
        <AnimatedHeading text="OUR SERVICES" as="h1" className="!font-['Anton_SC'] !font-normal text-[80px] md:text-[100px] lg:text-[112px] text-white uppercase !leading-none" animationType="chars" staggerAmount={0.02} />
        <p className="mt-4 text-[20px] md:text-[22px] text-gray-100 max-w-3xl text-center font-normal">
          Tailored event planning solutions meticulously designed to surpass your every expectation and craft unforgettable moments.
        </p>
      </ParallaxBackground>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-[#1f2324]">
        {servicesData.map((service, index) => (
          <ServiceItemDisplay key={service.id} service={service} index={index} />
        ))}
      </div>

      <section className="mt-16 md:mt-24 py-16 bg-[#0a0c0d]"> {/* Slightly darker section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedHeading text="Why Choose MIMEVENTS?" as="h2" className="!font-['Anton_SC'] !font-normal text-[48px] md:text-[60px] text-[#e7ab09] mb-10 !leading-tight" animationType="words" />
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="p-6 bg-[#131516] rounded-lg shadow-xl hover:shadow-[#e7ab09]/20 transition-shadow duration-300">
                    <h4 className="text-[22px] font-semibold text-[#e7ab09] mb-2 font-['Inter']">Bespoke Designs</h4>
                    <p className="text-gray-300 text-[16px] font-normal">Every event is uniquely tailored to reflect your personal style, vision, and objectives with creative flair.</p>
                </div>
                <div className="p-6 bg-[#131516] rounded-lg shadow-xl hover:shadow-[#e7ab09]/20 transition-shadow duration-300">
                    <h4 className="text-[22px] font-semibold text-[#e7ab09] mb-2 font-['Inter']">Meticulous Execution</h4>
                    <p className="text-gray-300 text-[16px] font-normal">We manage every detail with precision and proactivity, ensuring a flawless and stress-free experience for you.</p>
                </div>
                <div className="p-6 bg-[#131516] rounded-lg shadow-xl hover:shadow-[#e7ab09]/20 transition-shadow duration-300">
                    <h4 className="text-[22px] font-semibold text-[#e7ab09] mb-2 font-['Inter']">Premium Network</h4>
                    <p className="text-gray-300 text-[16px] font-normal">Access to Lebanon's finest vendors, venues, and suppliers, guaranteeing unparalleled quality and service.</p>
                </div>
            </div>
             <Link
                to="/contact"
                className="mt-12 inline-block bg-[#e7ab09] hover:bg-[#c79608] text-black font-semibold py-3 px-8 text-[16px] rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
                START PLANNING TODAY
            </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;