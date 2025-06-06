
import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import AnimatedHeading from '../components/AnimatedHeading';
import ParallaxBackground from '../components/ParallaxBackground';
import TestimonialCard from '../components/TestimonialCard';
import { Service, Testimonial, GalleryImageItem } from '../types';

const homeServices: Service[] = [
  { 
    id: 'weddings', 
    title: 'Enchanting Weddings', 
    description: 'From fairytale ceremonies to lavish receptions, we orchestrate every detail of your special day with elegance and precision, creating memories that last a lifetime.', 
    image: 'https://picsum.photos/seed/luxewedding/800/600',
    longDescription: "Our comprehensive wedding planning services cover venue scouting, bespoke design and decor, world-class vendor management, guest journey curation, and flawless on-the-day execution. We embrace your vision and elevate it with our expertise."
  },
  { 
    id: 'corporate', 
    title: 'Impactful Corporate Events', 
    description: 'We specialize in designing and executing sophisticated corporate events, including global conferences, high-profile product launches, prestigious award ceremonies, and executive galas.', 
    image: 'https://picsum.photos/seed/corpogala/800/600',
    longDescription: "MIMEVENTS helps your brand make a definitive statement. We manage complex logistics, cutting-edge AV & technology, captivating entertainment, and seamless branding integration to deliver engaging and memorable corporate experiences."
  },
  { 
    id: 'private', 
    title: 'Exclusive Private Soirées', 
    description: 'Celebrate life\'s milestones with uniquely designed private parties. From landmark birthdays and anniversaries to themed extravaganzas and exclusive gatherings, we craft personalized experiences that reflect your individual style.', 
    image: 'https://picsum.photos/seed/luxeparty/800/600',
    longDescription: "Our dedicated team excels in creating intimate and unforgettable private events. We handle every facet, from conceptualization and immersive design to gourmet catering and world-class entertainment, allowing you to indulge in your celebration."
  },
];

const homeTestimonials: Testimonial[] = [
  { id: 't1', quote: "MIMEVENTS transformed our wedding into an absolute fairytale. Their attention to detail was impeccable, and the team was a dream to work with. Truly unforgettable!", author: "Aisha & Karim R.", eventDate: "October 2023" },
  { id: 't2', quote: "Our annual corporate gala was the best one yet, thanks to MIMEVENTS. Professional, creative, and flawlessly executed. They exceeded all expectations.", author: "CEO, Levant Innovate Corp.", eventDate: "December 2023" },
  { id: 't3', quote: "The 50th anniversary party they planned for my parents was beyond stunning. Every element was thoughtfully curated. Our family is still talking about it!", author: "Layla S.", eventDate: "September 2023" },
];

const homeProjects: GalleryImageItem[] = [
    { id: 'hp1', src: 'https://picsum.photos/seed/projectA/600/600', alt: 'The Royal Garden Wedding', category: 'Weddings' },
    { id: 'hp2', src: 'https://picsum.photos/seed/projectB/600/600', alt: 'Innovate Summit 2023', category: 'Corporate' },
    { id: 'hp3', src: 'https://picsum.photos/seed/projectC/600/600', alt: 'Azure Coast Private Villa Party', category: 'Private Parties' },
    { id: 'hp4', src: 'https://picsum.photos/seed/projectD/600/600', alt: 'Grand Ballroom Charity Gala', category: 'Corporate' },
];


const HomePage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-text-animate", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, delay: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo(".hero-image-animate",
        { opacity:0, scale: 1.1 },
        { opacity:1, scale: 1, duration: 1.5, delay: 0.2, ease: 'power3.out'}
      );

      gsap.utils.toArray<HTMLElement>('.section-reveal').forEach(section => {
        gsap.fromTo(section.querySelectorAll('.reveal-content'), 
          { opacity: 0, y: 40 },
          { 
            opacity: 1, 
            y: 0, 
            stagger: 0.15, 
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

    }, pageRef); 

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="font-['Inter'] text-white bg-[#0e1011]">
      {/* Hero Section */}
      <section className="h-screen-dynamic flex flex-col md:flex-row bg-[#0e1011]">
        <div className="md:w-1/2 w-full h-1/2 md:h-full overflow-hidden hero-image-animate">
          <img src="https://picsum.photos/seed/mimhero1/1000/1200" alt="Luxurious event by MIMEVENTS" className="w-full h-full object-cover"/>
        </div>
        <div className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col justify-center items-start p-8 sm:p-12 md:p-16 lg:p-24 relative">
          <div className="relative z-10">
            <h1 className="font-['Anton_SC'] font-normal text-white uppercase tracking-normal hero-text-animate">
              <span className="block text-[80px] sm:text-[90px] lg:text-[112px]">MIM</span>
              <span className="block text-[80px] sm:text-[90px] lg:text-[112px] text-[#e7ab09] -mt-4 sm:-mt-5 md:-mt-6 lg:-mt-8">EVENTS</span> {/* Adjusted negative margin for Anton SC */}
            </h1>
            <p className="text-[18px] md:text-[20px] text-gray-300 mt-6 max-w-md font-normal hero-text-animate">
              A Beirut-Based House of Events.
            </p>
            <p className="text-[16px] md:text-[18px] text-gray-200 mt-4 max-w-md font-normal hero-text-animate">
              Crafting bespoke experiences for bold brands and iconic moments. We transform visions into unforgettable realities.
            </p>
            <Link
              to="/contact"
              className="hero-text-animate mt-10 inline-block bg-[#e7ab09] hover:bg-[#c79608] text-black font-semibold py-3 px-8 text-[16px] rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              PLAN YOUR MASTERPIECE
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Snippet Section */}
      <section className="py-16 md:py-24 bg-[#0e1011] section-reveal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-content">
              <span className="text-[#e7ab09] font-['Inter'] text-[12px] font-semibold tracking-wider uppercase reveal-content">(About Us)</span>
              <AnimatedHeading text="Creative Vision, Flawless Execution." as="h2" className="!font-['Anton_SC'] !font-normal text-[60px] md:text-[80px] text-white uppercase mt-2 !leading-tight" animationType="words" staggerAmount={0.05} />
              <p className="text-gray-200 text-[18px] leading-relaxed mt-6 font-normal reveal-content">
                At MIMEVENTS, we believe every event is a unique story waiting to be told. Based in the heart of Lebanon, we specialize in creating bespoke, luxurious events that leave lasting impressions.
              </p>
              <p className="text-gray-200 text-[18px] leading-relaxed mt-4 font-normal reveal-content">
                Our passion for perfection and dedication to our clients ensure a seamless and extraordinary experience from concept to memorable execution.
              </p>
              <Link to="/services" className="mt-8 inline-block text-[#e7ab09] hover:text-[#c79608] font-semibold text-[16px] transition-colors duration-300 group reveal-content">
                Discover Our Services <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
            <div className="mt-10 md:mt-0 reveal-content">
              <img src="https://picsum.photos/seed/aboutuscollage/600/700" alt="MIMEVENTS Team or Event Moodboard" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
            </div>
          </div>
          <div className="mt-16 md:mt-20 reveal-content">
            <span className="text-[#e7ab09] font-['Inter'] text-[12px] font-semibold tracking-wider uppercase reveal-content">(Our Partners)</span>
            <p className="text-gray-300 mt-3 font-normal text-[18px] reveal-content">We collaborate with Lebanon's finest artisans, vendors, and suppliers to bring unparalleled quality to your events.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-[#0a0c0d] section-reveal"> {/* Slightly darker bg for variation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left mb-12 md:mb-16">
                <span className="text-[#e7ab09] font-['Inter'] text-[12px] font-semibold tracking-wider uppercase reveal-content">(Selected Work)</span>
                <AnimatedHeading text="PROJECTS" as="h2" className="!font-['Anton_SC'] !font-normal text-[100px] sm:text-[120px] md:text-[140px] text-white uppercase mt-1 !leading-none" animationType="words" staggerAmount={0.03}/>
                <p className="text-gray-300 mt-4 max-w-xl font-normal text-[18px] mx-auto md:mx-0 reveal-content">Explore our recent projects showcasing creativity, innovation, and impactful design solutions.</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {homeProjects.map((project, index) => (
              <Link to="/gallery" key={project.id} className="group block reveal-content">
                <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
                  <img src={project.src} alt={project.alt} className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" />
                </div>
                <h3 className="text-white font-semibold mt-4 text-[18px] font-['Inter'] group-hover:text-[#e7ab09] transition-colors">{project.alt}</h3>
                <p className="text-gray-400 text-[12px] font-['Inter']">{project.category}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16 reveal-content">
            <Link
                to="/gallery"
                className="bg-[#e7ab09] hover:bg-[#c79608] text-black font-semibold py-3 px-8 text-[16px] rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
                VIEW FULL GALLERY
            </Link>
           </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#0e1011] section-reveal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 md:mb-16">
                <span className="text-[#e7ab09] font-['Inter'] text-[12px] font-semibold tracking-wider uppercase reveal-content">(What We Do)</span>
                <AnimatedHeading text="SERVICES" as="h2" className="!font-['Anton_SC'] !font-normal text-[100px] sm:text-[120px] md:text-[140px] text-white uppercase mt-1 !leading-none" animationType="words" staggerAmount={0.03}/>
                <p className="text-gray-300 mt-4 max-w-xl font-normal text-[18px] reveal-content">Discover our tailored services designed to elevate your brand and enhance user experience through unforgettable events.</p>
            </div>
          <div className="space-y-16 md:space-y-20">
            {homeServices.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 reveal-content ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 rounded-lg shadow-2xl overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-['Anton_SC'] font-normal text-[36px] lg:text-[48px] text-[#e7ab09] mb-4 leading-tight">{service.title}</h3> {/* Adjusted size */}
                  <p className="text-gray-200 text-[18px] leading-relaxed font-normal mb-3">{service.description}</p>
                  {service.longDescription && <p className="text-gray-300 text-[16px] leading-relaxed font-normal italic">{service.longDescription}</p>}
                   <Link to="/services" className="mt-6 inline-block text-[#e7ab09] hover:text-[#c79608] font-semibold text-[16px] transition-colors duration-300 group">
                    Learn More <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
       <ParallaxBackground imageUrl="https://picsum.photos/seed/luxurybgblur/1600/900" speed={0.1} minHeight="auto" className="py-16 md:py-24 section-reveal bg-[#0a0c0d]"> {/* Darker bg for parallax */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#e7ab09] font-['Inter'] text-[12px] font-semibold tracking-wider uppercase reveal-content">(Testimonials)</span>
            <AnimatedHeading text="WHAT OUR CLIENTS SAY" as="h2" className="!font-['Anton_SC'] !font-normal text-[60px] sm:text-[70px] md:text-[80px] text-white uppercase mt-1 !leading-tight" animationType="words" staggerAmount={0.04}/>
            <p className="text-gray-100 mt-4 max-w-xl font-normal text-[18px] mx-auto reveal-content">Hear about their success stories and experiences with MIMEVENTS.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </ParallaxBackground>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 text-center bg-[#0e1011] section-reveal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedHeading text="Ready to Create Magic?" as="h2" className="!font-['Anton_SC'] !font-normal text-[60px] md:text-[80px] text-[#e7ab09] mb-6 !leading-tight" animationType="words" />
          <p className="text-gray-200 text-[20px] mb-10 font-normal reveal-content">
            Let MIMEVENTS bring your dream event to life. Contact us today for a consultation and let's begin crafting your unforgettable story.
          </p>
          <Link
            to="/contact"
            className="reveal-content bg-[#e7ab09] hover:bg-[#c79608] text-black font-semibold py-4 px-10 rounded-md text-[18px] shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
