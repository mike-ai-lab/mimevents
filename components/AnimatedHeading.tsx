
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

type AnimatedHeadingAsTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

interface AnimatedHeadingProps {
  text: string;
  as?: AnimatedHeadingAsTags;
  className?: string;
  animationType?: 'chars' | 'words' | 'lines';
  staggerAmount?: number;
  duration?: number;
  delay?: number;
  y?: number;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  as: ElementTag = 'h1',
  className = '',
  animationType = 'chars',
  staggerAmount = 0.03,
  duration = 0.8,
  delay = 0,
  y = 30, 
}) => {
  const headingRef = useRef<HTMLElement>(null);

  const defaultBaseFont = ElementTag.startsWith('h') ? "font-['Anton_SC']" : "font-['Inter']";
  const defaultWeight = ElementTag.startsWith('h') ? 'font-normal' : 'font-normal'; // Anton SC usually comes in one weight, Inter default is 400
  
  // Prioritize className for font family and weight if provided
  const hasCustomFontFamily = className.includes('font-[');
  const hasCustomFontWeight = className.match(/font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/);

  let combinedClassName = className;
  if (!hasCustomFontFamily) {
    combinedClassName = `${defaultBaseFont} ${combinedClassName}`;
  }
  if (!hasCustomFontWeight) {
    combinedClassName = `${defaultWeight} ${combinedClassName}`;
  }
  combinedClassName = combinedClassName.trim();


  useLayoutEffect(() => {
    if (!headingRef.current) return;

    const ctx = gsap.context(() => {
      let elementsToAnimate: NodeListOf<Element> | HTMLElement[] = [];
      if (animationType === 'chars') {
         headingRef.current!.innerHTML = text.split('').map(char => 
            `<span class="anim-element" style="display: inline-block; opacity:0; transform: translateY(${y}px);">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');
        elementsToAnimate = headingRef.current!.querySelectorAll('.anim-element');
      } else if (animationType === 'words') {
        headingRef.current!.innerHTML = text.split(' ').map(word => 
            `<span class="anim-element" style="display: inline-block; opacity:0; transform: translateY(${y}px); margin-right: 0.25em;">${word}</span>` // Anton SC might need more spacing if words are too close
        ).join('');
        elementsToAnimate = headingRef.current!.querySelectorAll('.anim-element');
      } else { 
        headingRef.current!.innerHTML = `<span class="anim-element" style="display: inline-block; opacity:0; transform: translateY(${y}px);">${text}</span>`;
        elementsToAnimate = headingRef.current!.querySelectorAll('.anim-element');
      }
      
      if (elementsToAnimate.length === 0) return;

      gsap.to(elementsToAnimate, {
        opacity: 1,
        y: 0,
        duration,
        stagger: staggerAmount,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 90%', 
          toggleActions: 'play none none none',
        },
      });
    }, headingRef); 

    return () => {
        if (headingRef.current) { 
            headingRef.current.innerHTML = text; // Restore original text content to allow re-animation if props change
        }
        ctx.revert();
    }
  }, [text, animationType, staggerAmount, duration, delay, y, ElementTag, className]);

  return (
    <ElementTag ref={headingRef as React.Ref<any>} className={combinedClassName}>
      {text} {/* Initial text for SSR/non-JS, effect will replace it */}
    </ElementTag>
  );
};

export default AnimatedHeading;