
import React, { useState, useMemo } from 'react';
import AnimatedHeading from '../components/AnimatedHeading';
import GalleryItem from '../components/GalleryItem';
import { GalleryImageItem } from '../types';
import ParallaxBackground from '../components/ParallaxBackground';

const allGalleryImages: GalleryImageItem[] = [
  { id: 'g1', src: 'https://picsum.photos/seed/gallerypage1/800/600', alt: 'Elegant Wedding Setup', category: 'Weddings' },
  { id: 'g2', src: 'https://picsum.photos/seed/gallerypage2/800/600', alt: 'Corporate Gala Dinner', category: 'Corporate' },
  { id: 'g3', src: 'https://picsum.photos/seed/gallerypage3/800/600', alt: 'Chic Birthday Celebration', category: 'Private Parties' },
  { id: 'g4', src: 'https://picsum.photos/seed/gallerypage4/800/600', alt: 'Outdoor Wedding Ceremony', category: 'Weddings' },
  { id: 'g5', src: 'https://picsum.photos/seed/gallerypage5/800/600', alt: 'Product Launch Event', category: 'Corporate' },
  { id: 'g6', src: 'https://picsum.photos/seed/gallerypage6/800/600', alt: 'Luxury Anniversary Party', category: 'Private Parties' },
  { id: 'g7', src: 'https://picsum.photos/seed/gallerypage7/800/600', alt: 'Wedding Table Setting', category: 'Weddings' },
  { id: 'g8', src: 'https://picsum.photos/seed/gallerypage8/800/600', alt: 'Conference Setup', category: 'Corporate' },
  { id: 'g9', src: 'https://picsum.photos/seed/gallerypage9/800/600', alt: 'Garden Party Decor', category: 'Private Parties' },
  { id: 'g10', src: 'https://picsum.photos/seed/gallerypage10/800/600', alt: 'Bridal Bouquet Detail', category: 'Weddings' },
  { id: 'g11', src: 'https://picsum.photos/seed/gallerypage11/800/600', alt: 'Networking Event', category: 'Corporate' },
  { id: 'g12', src: 'https://picsum.photos/seed/gallerypage12/800/600', alt: 'Themed Kids Party', category: 'Private Parties' },
];

const categories = ['All', 'Weddings', 'Corporate', 'Private Parties'];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') {
      return allGalleryImages;
    }
    return allGalleryImages.filter(image => image.category === selectedCategory);
  }, [selectedCategory]);

  const handleImageClick = (image: GalleryImageItem) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 font-['Inter'] bg-[#0e1011] text-white">
      <ParallaxBackground imageUrl="https://picsum.photos/seed/gallerypagehero/1920/1080" speed={0.1} minHeight="60vh" contentClassName="items-center justify-center text-center">
        <AnimatedHeading text="EVENT GALLERY" as="h1" className="!font-['Anton_SC'] !font-normal text-[80px] md:text-[100px] lg:text-[112px] text-white uppercase !leading-none" animationType="chars" staggerAmount={0.02} />
        <p className="mt-4 text-[20px] md:text-[22px] text-gray-100 max-w-3xl text-center font-normal">
          A glimpse into the unforgettable moments and meticulously crafted details of our events.
        </p>
      </ParallaxBackground>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 md:mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 text-[12px] sm:text-[14px] rounded-md font-semibold font-['Inter'] transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e7ab09] focus:ring-opacity-50 ${
                selectedCategory === category
                  ? 'bg-[#e7ab09] text-black shadow-lg'
                  : 'bg-[#1f2324] text-white hover:bg-[#2d3233] hover:text-[#e7ab09]' // Darker grey for inactive, lighter for hover
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <GalleryItem key={image.id} image={image} onImageClick={handleImageClick} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 text-[18px] col-span-full py-10">No images found for this category. Please check back later!</p>
        )}
      </div>

      {selectedImage && (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 cursor-pointer" 
            onClick={closeModal} 
            role="dialog"
            aria-modal="true"
            aria-labelledby="imageModalTitle"
        >
          <div 
            className="bg-[#0e1011] p-3 sm:p-4 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative cursor-default border border-[#1f2324]" // Added border
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
                src={selectedImage.src.replace('/800/600', '/1200/900')} 
                alt={selectedImage.alt} 
                className="w-full h-auto object-contain rounded-md block" 
            />
            <p id="imageModalTitle" className="text-center text-white mt-3 text-[18px] font-['Inter'] font-semibold">{selectedImage.alt}</p>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white bg-[#1f2324]/80 hover:bg-[#2d3233] rounded-full p-2 focus:outline-none z-10"
              aria-label="Close image modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;