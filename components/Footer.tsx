
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0a0c0d] text-gray-300 py-16 md:py-20 border-t border-[#1f2324] font-['Inter']"> {/* Slightly darker footer bg, new border color */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Column 1: Logo & Blurb */}
          <div>
            <Link to="/" className="text-4xl font-normal font-['Anton_SC'] text-white hover:text-gray-200 transition-colors duration-300 tracking-normal">
              MIM<span className="text-[#e7ab09]">EVENTS</span>
            </Link>
            <p className="text-sm mt-4 text-gray-400 leading-relaxed font-normal">
              Crafting bespoke experiences for bold brands and iconic moments in Lebanon.
            </p>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4 font-['Inter']">Pages</h4> {/* Changed font, increased size */}
            <ul className="space-y-3 text-[14px]">
              <li><Link to="/" className="hover:text-[#e7ab09] transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#e7ab09] transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-[#e7ab09] transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#e7ab09] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Company/Explore */}
          <div>
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4 font-['Inter']">Explore</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#/contact" className="hover:text-[#e7ab09] transition-colors">About Us (Soon)</a></li>
              <li><a href="#/contact" className="hover:text-[#e7ab09] transition-colors">Blog (Soon)</a></li>
              <li><a href="mailto:info@mimevents.com" className="hover:text-[#e7ab09] transition-colors">info@mimevents.com</a></li>
              <li><a href="tel:+961000000" className="hover:text-[#e7ab09] transition-colors">+961 X XXX XXX</a></li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4 font-['Inter']">Social</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#e7ab09] transition-colors">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#e7ab09] transition-colors">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#e7ab09] transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1f2324]/50 text-[12px] text-gray-400">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} MIMEVENTS. All rights reserved.</p>
            <button 
              onClick={scrollToTop} 
              className="mt-4 sm:mt-0 hover:text-[#e7ab09] transition-colors flex items-center"
              aria-label="Back to top"
            >
              Back to Top 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;