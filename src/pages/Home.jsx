import React from 'react';
import { Hero } from '../components/sections/Hero';
import { AboutFounderCombinedPreview } from '../components/sections/AboutFounderCombinedPreview';
import { CoursesPreview } from '../components/sections/CoursesPreview';
import { ResultsPreview } from '../components/sections/ResultsPreview';
import { Testimonials } from '../components/sections/Testimonials';
import { GalleryPreview } from '../components/sections/GalleryPreview';
import { FinalCTA } from '../components/sections/FinalCTA';

export function Home() {
  return (
    <div className="w-full">
      <Hero />
      <AboutFounderCombinedPreview />
      <CoursesPreview />
      <ResultsPreview />
      <Testimonials />
      <GalleryPreview />
      <FinalCTA />
    </div>
  );
}
