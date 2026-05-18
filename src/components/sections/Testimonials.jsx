import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const testimonials = [
  {
    id: 1,
    name: 'Ramesh Patel',
    role: 'Parent of SSC Topper',
    stars: 5,
    image: '/students/study.jpg',
    text: 'Brain Fuse Academy transformed my daughter\'s academic life. The weekly tests and personal attention gave her confidence she never had before. She scored 96% in her board exams!'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'SSC Batch Student',
    stars: 5,
    image: '/toppers/topper1.jpg',
    text: 'Sir explains every concept so clearly that even the toughest topics become easy. The study material is excellent. I topped my school only because of the concept clarity built here.'
  },
  {
    id: 3,
    name: 'Kavita Mehta',
    role: 'Parent of GSEB Student',
    stars: 5,
    image: '/students/library.jpg',
    text: 'My son\'s marks improved drastically in one year. The discipline and structured approach to weekly testing is unmatched. Regular parent communication kept us informed throughout.'
  },
  {
    id: 4,
    name: 'Arjun Desai',
    role: 'GSEB Science Student',
    stars: 5,
    image: '/toppers/topper2.jpg',
    text: 'The best decision I ever made was joining Brain Fuse. Sir gives personal attention and never lets you stay behind. My confidence in Mathematics has improved immensely!'
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-28 bg-gradient-to-b from-white via-royal-50/30 to-white relative overflow-hidden" ref={ref}>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] bg-royal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            badge="Student & Parent Reviews"
            badgeIcon={Star}
            titlePre="What Parents &"
            titleHighlight="Students Say"
            subtitle="Real stories of academic growth, built on a foundation of trust and dedicated mentorship."
            variant="royal"
          />
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            
            {/* Navigation Buttons */}
            <button 
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-royal-600 hover:bg-royal-600 hover:text-white transition-all duration-300 z-20 shadow-lg hidden md:flex cursor-pointer"
            >
              <ChevronLeft size={26} />
            </button>
            <button 
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-royal-600 hover:bg-royal-600 hover:text-white transition-all duration-300 z-20 shadow-lg hidden md:flex cursor-pointer"
            >
              <ChevronRight size={26} />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden px-4 py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white/90 backdrop-blur-2xl border border-slate-200/80 rounded-[3rem] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden"
                >
                  <Quote size={100} className="absolute -top-6 -right-6 text-royal-600/10 pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
                    
                    {/* Profile Avatar */}
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-royal-100 p-1.5 shrink-0 relative bg-white shadow-xl">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                      <div className="flex justify-center md:justify-start gap-1.5 mb-5">
                        {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                          <Star key={i} size={20} className="text-gold-400" fill="currentColor" />
                        ))}
                      </div>
                      
                      <p className="text-slate-700 text-xl md:text-2xl leading-relaxed italic mb-8 font-inter font-medium">
                        "{testimonials[currentIndex].text}"
                      </p>
                      
                      <div>
                        <h4 className="text-navy-900 font-extrabold text-2xl font-outfit mb-1 leading-tight">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-royal-600 text-sm font-bold tracking-wide uppercase">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === currentIndex 
                      ? 'bg-royal-600 w-10 shadow-md shadow-royal-600/30' 
                      : 'bg-royal-200 w-3 hover:bg-royal-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
