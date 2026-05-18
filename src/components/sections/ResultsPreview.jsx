import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Star, ArrowRight, Award } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const topToppers = [
  { name: 'Hetvee Patel', score: '99.98 PR', exam: 'SSC Board Exam', image: '/toppers/topper1.jpg', rank: '1st in District' },
  { name: 'Sneha Sharma', score: '99.95 PR', exam: 'SSC Board Exam', image: '/toppers/topper2.jpg', rank: 'School Rank 1' },
  { name: 'Aarav Mehta', score: '99.91 PR', exam: 'SSC Board Exam', image: '/toppers/topper1.jpg', rank: 'Maths 100/100' }
];

const stats = [
  { value: '99.98', label: 'Highest Percentile Rank' },
  { value: '500+', label: 'District & School Ranks' },
  { value: '98%', label: 'Batch Passing Rate' },
  { value: '100%', label: 'Personal Mentoring' }
];

export function ResultsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="results-preview" className="py-28 bg-navy-950 text-white relative overflow-hidden" ref={ref}>
      {/* Opulent Gold Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-royal-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Supreme Excellence"
            badgeIcon={Trophy}
            titlePre="Celebrating Our"
            titleHighlight="Academic Champions"
            subtitle="Consistent top percentile scores achieved through rigorous weekly testing and concept clarity."
            variant="gold"
          />
        </motion.div>

        {/* 4 Achievement Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pt-4">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-6 rounded-3xl bg-navy-900/80 border border-gold-500/30 text-center shadow-xl backdrop-blur-md hover:border-gold-500/60 transition-colors"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-gradient-gold font-outfit mb-1">{s.value}</p>
              <p className="text-slate-400 text-xs font-semibold tracking-wider uppercase font-inter">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Top 3 Toppers Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {topToppers.map((topper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
              className="flex flex-col"
            >
              <Card variant="goldAccent" className="p-8 bg-navy-900/90 border border-gold-500/30 shadow-2xl hover:border-gold-500/80 flex flex-col items-center text-center relative overflow-hidden group">
                {/* Gold Glow behind avatar */}
                <div className="absolute top-8 w-32 h-32 bg-gold-500/20 rounded-full blur-xl group-hover:bg-gold-500/30 transition-colors" />

                <div className="relative w-36 h-36 mb-6">
                  <div className="absolute inset-0 rounded-full border border-gold-500 bg-gold-500/10 shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
                  <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-navy-950 shadow-inner">
                    <img src={topper.image} alt={topper.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-4 py-1 bg-gold-500/20 border border-gold-500/40 text-gold-400 rounded-full text-xs font-bold mb-4 font-outfit uppercase tracking-wider">
                  <Star size={12} className="fill-current" /> {topper.rank}
                </div>

                <h3 className="text-2xl font-extrabold text-white font-outfit mb-1">{topper.name}</h3>
                <p className="text-gold-400 font-extrabold text-xl font-outfit mb-1">{topper.score}</p>
                <p className="text-slate-400 text-xs font-inter">{topper.exam}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Results CTA */}
        <div className="text-center pt-4">
          <Button href="/results" variant="gold" icon={ArrowRight}>
            View Complete Toppers Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
