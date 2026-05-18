import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Award, Medal, Trophy, Star, Search, X, ChevronRight, BookOpen, Users } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const toppers = [
  {
    id: 1,
    name: 'Priya Sharma',
    prScore: '99.98 PR',
    percentage: '97.8%',
    grade: 'A1',
    rank: 'City Topper',
    school: 'Sardar Patel Vidyalaya',
    board: 'SSC Board 2024-25',
    photo: '/toppers/topper1.jpg',
    marksheet: '/students/study.jpg'
  },
  {
    id: 2,
    name: 'Arjun Patel',
    prScore: '99.95 PR',
    percentage: '96.4%',
    grade: 'A1',
    rank: 'School Topper',
    school: 'GSEB Science Academy',
    board: 'GSEB Board 2024-25',
    photo: '/toppers/topper2.jpg',
    marksheet: '/students/study.jpg'
  },
  {
    id: 3,
    name: 'Sneha Mehta',
    prScore: '99.90 PR',
    percentage: '95.9%',
    grade: 'A1',
    rank: 'District Rank #3',
    school: 'Vidya Mandir',
    board: 'SSC Board 2024-25',
    photo: '/toppers/topper3.jpg',
    marksheet: '/students/study.jpg'
  }
];

const stats = [
  { icon: Trophy, value: '500+', label: 'Top Scores', sub: 'Top Results' },
  { icon: Award, value: '98%', label: 'Result Success', sub: 'SSC/GSEB Excellence' },
  { icon: BookOpen, value: '50+', label: 'Weekly Tests', sub: 'Weekly Testing Success' },
  { icon: Users, value: '10,000+', label: 'Students Guided', sub: 'Academic Growth' }
];

export function ToppersShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section id="results" className="py-28 bg-navy-950 relative overflow-hidden" ref={ref}>
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[45rem] h-[45rem] bg-royal-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Top Gold Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            badge="Our Proud Achievers"
            badgeIcon={Trophy}
            titlePre="Celebrating SSC/GSEB"
            titleHighlight="Academic Excellence"
            subtitle="Our students consistently outperform, setting new benchmarks of success across Gujarat's top board examinations."
            variant="gold"
          />
        </motion.div>

        {/* Toppers Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {toppers.map((topper) => (
            <motion.div key={topper.id} variants={fadeUp} className="flex flex-col h-full">
              <Card variant="goldAccent" className="p-8 flex flex-col flex-grow bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950 border border-gold-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-gold-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
                
                {/* Ribbon / Top Badge */}
                <div className="absolute top-6 left-0 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-extrabold px-4 py-1.5 rounded-r-xl shadow-lg shadow-gold-500/30 z-10 text-xs tracking-wider uppercase font-outfit flex items-center gap-1.5">
                  <Star size={14} fill="currentColor" /> {topper.rank}
                </div>

                {/* Content Layout */}
                <div className="pt-6 flex flex-col items-center text-center relative z-10 flex-grow">
                  
                  {/* Avatar Photo with Gold Ring */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full border-4 border-gold-500/80 p-1 shadow-[0_0_30px_rgba(212,175,55,0.3)] bg-navy-950 relative overflow-hidden flex items-center justify-center">
                      <img src={topper.photo} alt={topper.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-1 bg-navy-950 border-2 border-gold-500 rounded-full p-2 shadow-xl">
                      <Medal size={20} className="text-gold-400" />
                    </div>
                  </div>

                  {/* Student Info */}
                  <h3 className="text-3xl font-extrabold text-white font-outfit mb-1">{topper.name}</h3>
                  <p className="text-gold-400 text-sm font-semibold tracking-wide uppercase mb-6">{topper.board}</p>
                  
                  {/* Stats Grid */}
                  <div className="w-full grid grid-cols-2 gap-4 mb-8 bg-navy-950/80 rounded-2xl p-4 border border-gold-500/20 shadow-inner">
                    <div className="text-center border-r border-gold-500/20">
                      <p className="text-slate-400 text-xs uppercase tracking-wider mb-1 font-inter">Percentage</p>
                      <p className="text-3xl font-extrabold text-gradient-gold font-outfit">{topper.percentage}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-400 text-xs uppercase tracking-wider mb-1 font-inter">PR Score</p>
                      <p className="text-3xl font-extrabold text-gradient-gold font-outfit">{topper.prScore}</p>
                    </div>
                  </div>

                  {/* Marksheet Preview & Grade */}
                  <div className="mt-auto w-full flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gold-500/15 flex items-center justify-center border border-gold-500/30">
                        <span className="text-gold-400 font-extrabold text-xl font-outfit">{topper.grade}</span>
                      </div>
                      <div className="text-left text-xs">
                        <p className="text-slate-400 uppercase tracking-wider font-semibold">Final Grade</p>
                        <p className="text-white font-bold truncate w-28 mt-0.5">{topper.school}</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => setLightboxImage(topper.marksheet)}
                      className="w-14 h-14 rounded-2xl bg-gold-500/10 hover:bg-gold-500 border border-gold-500/40 hover:border-gold-500 text-gold-400 hover:text-navy-950 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer group"
                      title="View Marksheet"
                    >
                      <Search size={22} className="group-hover:scale-110 transition-transform" />
                    </button>
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="bg-gradient-to-r from-navy-900 via-navy-900 to-navy-900 border border-gold-500/30 rounded-3xl p-10 lg:p-14 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3 lg:border-r border-gold-500/20 last:border-0 px-4">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/15 flex items-center justify-center text-gold-400 border border-gold-500/30 mb-2 shadow-inner">
                  <stat.icon size={28} />
                </div>
                <h4 className="text-4xl md:text-5xl font-extrabold text-white font-outfit tracking-tight">{stat.value}</h4>
                <div>
                  <p className="text-gold-400 font-bold text-base">{stat.label}</p>
                  <p className="text-slate-400 text-xs tracking-wider uppercase mt-1 font-medium">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <Button href="#admission" variant="gold" icon={ChevronRight}>
            View More Results
          </Button>
        </motion.div>

      </div>

      {/* Lightbox / Modal for Marksheet Preview */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-navy-900 p-3 rounded-3xl border border-gold-500/30 shadow-2xl"
            >
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute -top-5 -right-5 w-12 h-12 bg-gold-400 text-navy-950 rounded-full flex items-center justify-center hover:bg-gold-300 font-bold transition-all shadow-xl z-10 cursor-pointer"
              >
                <X size={24} />
              </button>
              <div className="rounded-2xl overflow-hidden bg-navy-950 flex items-center justify-center min-h-[300px]">
                <img src={lightboxImage} alt="Marksheet Preview" className="w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
