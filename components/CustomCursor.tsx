'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth animation
      requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }
      });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHovering = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.hasAttribute('role') ||
        target.closest('a, button, [role="button"]') !== null;

      if (isHovering !== isHoveringRef.current) {
        isHoveringRef.current = isHovering;
        cursor.classList.toggle('hover', isHovering);
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', updateHoverState);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        transform: 'translate(-100%, -100%)',
        top: 0,
        left: 0,
      }}
    />
  );
} 