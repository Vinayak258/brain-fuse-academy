import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const galleryItems = [
  {
    src: '/students/classroom.jpg',
    title: 'Classroom Teaching',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    src: '/students/study.jpg',
    title: 'Weekly Tests',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: '/students/library.jpg',
    title: 'Students Studying',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: '/students/study.jpg',
    title: 'Academic Activities',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: '/students/classroom.jpg',
    title: 'Learning Sessions',
    span: 'md:col-span-1 md:row-span-1'
  }
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-royal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[45rem] h-[45rem] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            badge="Campus Life"
            badgeIcon={ImageIcon}
            titlePre="Campus &"
            titleHighlight="Learning Environment"
            subtitle="Take a glimpse into our focused, disciplined, and student-friendly academy where academic champions are forged."
            variant="royal"
          />
        </motion.div>

        {/* Gallery Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[280px]"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 bg-navy-950 ${item.span}`}
            >
              {/* Image */}
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-royal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              
              {/* Border Illumination */}
              <div className="absolute inset-4 border border-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-extrabold font-outfit text-2xl mb-2 leading-tight">
                  {item.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-royal-500 to-royal-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
