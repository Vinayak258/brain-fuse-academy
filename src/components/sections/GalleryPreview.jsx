import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const previewImages = [
  { id: 1, src: '/students/classroom.jpg', title: 'Interactive Lecture Halls', category: 'Classrooms' },
  { id: 2, src: '/students/study.jpg', title: 'Disciplined Test Centers', category: 'Evaluations' },
  { id: 3, src: '/students/library.jpg', title: 'Silent Library & Self-Study', category: 'Infrastructure' },
  { id: 4, src: '/students/study.jpg', title: 'One-on-One Doubt Counters', category: 'Mentorship' }
];

export function GalleryPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery-preview" className="py-28 bg-white relative overflow-hidden border-t border-slate-100" ref={ref}>
      <div className="absolute bottom-0 right-1/3 w-[35rem] h-[35rem] bg-royal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Campus Tour"
            badgeIcon={Sparkles}
            titlePre="Experience Our"
            titleHighlight="Learning Atmosphere"
            subtitle="Take a glimpse inside our premium classrooms, rigorous evaluation halls, and disciplined study facilities."
            variant="royal"
          />
        </motion.div>

        {/* 4 Images Clean Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16 pt-4">
          {previewImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-navy-950 border border-slate-200/80 shadow-md hover:shadow-2xl transition-shadow"
            >
              <img src={img.src} alt={img.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-royal-600 text-white text-[10px] font-extrabold rounded-md mb-2 uppercase tracking-wider font-outfit">
                  {img.category}
                </span>
                <h3 className="text-white font-extrabold text-2xl font-outfit leading-tight group-hover:text-gold-400 transition-colors">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="text-center pt-4">
          <Button href="/gallery" variant="primary" icon={ArrowRight}>
            View Complete Campus Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
