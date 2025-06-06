
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ParallaxBackgroundProps {
  imageUrl: string;
  speed?: number; 
  children?: React.ReactNode;
  className?: string;
  minHeight?: string; 
  contentClassName?: string;
  /** Add a dark overlay. Default true. Set to false if image already has good contrast or using global dark bg. */
  overlay?: boolean; 
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  imageUrl,
  speed = 0.2,
  children,
  className = '',
  minHeight = 'auto', 
  contentClassName = 'items-center justify-center text-center', 
  overlay = true, // Default to having an overlay
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { backgroundPositionY: '40%' }, 
        { 
          backgroundPositionY: `${40 - speed * 40}%`, 
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom', 
            end: 'bottom top', 
            scrub: true, 
          },
        }
      );
    
      const contentElements = sectionRef.current!.querySelectorAll('.parallax-content-item');
      if (contentElements.length > 0) {
        gsap.fromTo(contentElements, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                stagger: 0.2, 
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%', 
                    toggleActions: 'play none none none'
                }
            }
        );
      }

    }, sectionRef); 

    return () => ctx.revert();
  }, [imageUrl, speed, minHeight]); // Removed children from deps as direct manipulation is tricky here. Content animation should be stable.

  return (
    <div
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden="true"
      />
      {overlay && <div className="absolute inset-0 bg-[#000000]/50" aria-hidden="true"></div>} {/* Adjusted overlay to be slightly less opaque black */}
      <div 
        className={`relative z-10 flex flex-col h-full p-8 md:p-12 lg:p-16 ${contentClassName}`}
        style={{ minHeight }} // Ensure this div also respects minHeight for content layout
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const currentChildProps = child.props as { className?: string; [key: string]: any };
            const existingClassName = currentChildProps.className || '';
            
            const isAnimatedHeading = typeof child.type !== 'string' && (child.type as any).name === 'AnimatedHeading';
            
            let newClassNameValue = existingClassName;
            if (!isAnimatedHeading) {
              const classParts = existingClassName.split(' ').filter(Boolean);
              if (!classParts.includes('parallax-content-item')) {
                classParts.push('parallax-content-item');
              }
              newClassNameValue = classParts.join(' ');
            }

            const clonedElementProps = {
              ...currentChildProps,
              className: newClassNameValue,
            };

            return React.cloneElement(child, clonedElementProps as any);
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default ParallaxBackground;
