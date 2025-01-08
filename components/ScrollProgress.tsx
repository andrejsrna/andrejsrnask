'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateProgress = () => {
      const progress = progressRef.current;
      if (!progress) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      const scrollDelta = Math.abs(scrollTop - lastScrollY.current);
      
      requestAnimationFrame(() => {
        // Smooth transform transition
        progress.style.transition = 'transform 0.2s ease-out';
        progress.style.transform = `scaleX(${scrollPercentage / 100})`;
        
        // Show progress bar only when actively scrolling and past 2%
        if (scrollDelta > 5 || scrollPercentage > 2) {
          progress.style.opacity = '1';
        } else if (scrollPercentage < 2) {
          progress.style.opacity = '0';
        }
      });

      lastScrollY.current = scrollTop;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress(); // Initial call

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      ref={progressRef} 
      className="scroll-progress" 
      style={{ 
        opacity: 0,
        transform: 'scaleX(0)',
      }} 
    />
  );
} 