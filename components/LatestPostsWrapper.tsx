'use client';

import { Suspense } from 'react';
import LatestPosts from './LatestPosts';

export default function LatestPostsWrapper() {
  return (
    <Suspense
      fallback={
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Načítavam najnovšie články...
              </h2>
            </div>
          </div>
        </section>
      }
    >
      <LatestPosts />
    </Suspense>
  );
} 