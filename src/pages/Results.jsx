import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award, TrendingUp, Users, CheckCircle2, ChevronRight } from 'lucide-react';
import { ToppersShowcase } from '../components/sections/ToppersShowcase';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

const milestones = [
  { year: '2025', title: 'District & School Toppers', desc: 'Over 15 students scored 99+ PR in SSC and GSEB board exams, setting the highest success ratio in the city.' },
  { year: '2024', title: '100% Passing Record', desc: 'Every enrolled student successfully cleared the board examinations with an average batch score of 88.4%.' },
  { year: '2023', title: 'Mathematics Excellence Award', desc: 'Recognized for absolute concept clarity as 25+ students achieved perfect 100/100 scores in Board Mathematics.' },
  { year: '2022', title: 'Foundation Milestone', desc: 'Established our renowned weekly evaluation and personal mentoring framework that started our winning legacy.' }
];

const highlights = [
  { title: '99.98 Highest PR', subtitle: 'SSC Board Top Achiever' },
  { title: '500+ Top Ranks', subtitle: 'In School & District Exams' },
  { title: '98% Batch Success', subtitle: 'Consistent Year-on-Year Growth' },
  { title: '10,000+ Tests', subtitle: 'Evaluated Under Strict Board Rules' }
];

export function Results() {
  return (
    <div className="w-full pt-40 lg:pt-48 pb-20 bg-navy-950 text-white min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[45rem] h-[45rem] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[45rem] h-[45rem] bg-royal-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Page Banner */}
      <div className="container mx-auto px-4 lg:px-8 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-gold-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 font-extrabold text-xs tracking-widest uppercase shadow-lg shadow-gold-500/20">
              <Trophy size={16} className="text-gold-400" /> Legacy of Board Triumphs
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-outfit leading-tight tracking-tight">
              Celebrating Gujarat's <br />
              <span className="text-gradient-gold">Academic Champions</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed font-inter">
              Uncompromising hard work, rigorous weekly evaluations, and supreme concept clarity translate into record-breaking board results year after year.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Toppers Showcase Main Section */}
      <ToppersShowcase />

      {/* Quick Highlights Strip */}
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10 border-t border-gold-500/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl bg-navy-900/60 border border-gold-500/20 shadow-xl backdrop-blur-md"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-gradient-gold font-outfit mb-2 tracking-tight">{h.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm font-semibold tracking-wider uppercase font-inter">{h.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Year-on-Year Achievement Milestones */}
      <section className="py-24 relative z-10 border-t border-gold-500/20 bg-navy-900/30 backdrop-blur-xl">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <SectionHeader
            badge="Historical Excellence"
            badgeIcon={Medal}
            titlePre="Year-on-Year"
            titleHighlight="Success Milestones"
            subtitle="A journey of unwavering dedication to student excellence and consistent academic breakthroughs."
            variant="gold"
          />

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-gradient-to-b before:from-gold-500 before:via-gold-500/50 before:to-transparent">
            {milestones.map((m, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node / Circle */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-navy-950 border-4 border-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.5)] flex items-center justify-center text-gold-400 font-extrabold text-xs z-10 font-outfit">
                  {m.year}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                  <Card variant="goldAccent" className="p-8 bg-navy-900 border-gold-500/30 hover:border-gold-500 transition-all duration-500 shadow-2xl">
                    <span className="text-gold-400 font-extrabold font-outfit text-sm tracking-wider uppercase mb-2 block">Milestone {m.year}</span>
                    <h3 className="text-2xl font-extrabold text-white font-outfit mb-3">{m.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-inter">{m.desc}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
