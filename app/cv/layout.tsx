'use client';

import { useEffect } from 'react';

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Add class to body to identify CV page
    document.body.classList.add('cv-page');
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('cv-page');
    };
  }, []);

  return (
    <div>
      {children}
    </div>
  );
}
