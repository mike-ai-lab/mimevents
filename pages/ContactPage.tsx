
import React from 'react';
import AnimatedHeading from '../components/AnimatedHeading';
import ContactForm from '../components/ContactForm';
import ParallaxBackground from '../components/ParallaxBackground';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 font-['Inter'] bg-[#0e1011] text-white">
       <ParallaxBackground imageUrl="https://picsum.photos/seed/contactpagehero/1920/1080" speed={0.05} minHeight="60vh" contentClassName="items-center justify-center text-center">
        <AnimatedHeading text="GET IN TOUCH" as="h1" className="!font-['Anton_SC'] !font-normal text-[80px] md:text-[100px] lg:text-[112px] text-white uppercase !leading-none" animationType="chars" staggerAmount={0.02}/>
        <p className="mt-4 text-[20px] md:text-[22px] text-gray-100 max-w-3xl text-center font-normal">
          Let's discuss how MIMEVENTS can transform your vision into an unforgettable, flawlessly executed event.
        </p>
      </ParallaxBackground>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="bg-[#131516]/70 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-2xl border border-[#2d3233]/50"> {/* Slightly lighter card bg */}
            <AnimatedHeading text="Send Us a Message" as="h2" className="!font-['Anton_SC'] !font-normal text-[48px] text-[#e7ab09] mb-8 !leading-tight" animationType="words" />
            <ContactForm />
          </div>
          
          <div className="space-y-10">
            <div>
              <AnimatedHeading text="Contact Information" as="h2" className="!font-['Anton_SC'] !font-normal text-[48px] text-[#e7ab09] mb-6 !leading-tight" animationType="words" />
              <div className="space-y-5 text-gray-100 text-[18px] font-normal">
                <p>
                  <strong className="font-semibold text-[#e7ab09] block mb-1">Address:</strong>
                  MIMEVENTS Headquarters,<br />
                  Beirut, Lebanon
                </p>
                <p>
                  <strong className="font-semibold text-[#e7ab09] block mb-1">Phone:</strong>
                  <a href="tel:+961000000" className="hover:text-[#c79608] transition-colors duration-200">+961 X XXX XXX</a>
                </p>
                <p>
                  <strong className="font-semibold text-[#e7ab09] block mb-1">Email:</strong>
                  <a href="mailto:info@mimevents.com" className="hover:text-[#c79608] transition-colors duration-200">info@mimevents.com</a>
                </p>
                <p>
                  <strong className="font-semibold text-[#e7ab09] block mb-1">Business Hours:</strong>
                  Monday - Friday: 9 AM - 6 PM<br />
                  Saturday: 10 AM - 3 PM (By Appointment)
                </p>
              </div>
            </div>
            
            <div>
              <AnimatedHeading text="Find Us" as="h3" className="!font-['Anton_SC'] !font-normal text-[28px] text-[#e7ab09] mb-4 !leading-tight" animationType="words" />
              
              <div className="aspect-w-16 aspect-h-9 bg-[#1f2324] rounded-lg shadow-md overflow-hidden border border-[#2d3233]"> {/* Darker map bg, new border */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211999.8809999908!2d35.37083401037466!3d33.889297200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MIMEVENTS Location Map - Beirut"
                ></iframe>
              </div>
              <p className="text-sm text-gray-400 mt-3 text-center font-normal">Our office is centrally located in the vibrant heart of Beirut.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;