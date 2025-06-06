
import React, { useLayoutEffect, useRef } from 'react';
import { GalleryImageItem } from '../types';
import { gsap } from 'gsap';

interface GalleryItemProps {
  image: GalleryImageItem;
  onImageClick: (image: GalleryImageItem) => void;
  index: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onImageClick, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!itemRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, scale: 0.8, y:30 },
        {
          opacity: 1,
          scale: 1,
          y:0,
          duration: 0.5,
          delay: index * 0.05, 
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: itemRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, itemRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer aspect-square bg-[#1f2324]" // Added a subtle bg for image loading
      onClick={() => onImageClick(image)}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
        <p className="text-white text-[16px] font-semibold font-['Inter'] text-center">{image.alt}</p>
      </div>
    </div>
  );
};

export default GalleryItem;