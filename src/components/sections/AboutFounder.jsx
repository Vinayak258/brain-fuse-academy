import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen, Target, Award, Users, BookMarked, BrainCircuit } from 'lucide-react';
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

const cards = [
  {
    title: 'Education',
    icon: GraduationCap,
    items: ['B.Sc Mathematics (VNSGU)']
  },
  {
    title: 'Expertise',
    icon: BrainCircuit,
    items: ['Mathematics', 'Science', 'English Grammar']
  },
  {
    title: 'Teaching Philosophy',
    icon: BookOpen,
    items: ['Concept clarity', 'Regular practice', 'Weekly testing', 'Student mentoring']
  }
];

const achievements = [
  { icon: Award, label: '6+ Years', sub: 'Experience' },
  { icon: Users, label: '100+', sub: 'Students Guided' },
  { icon: Target, label: 'Weekly', sub: 'Tests Conducted' },
  { icon: BookMarked, label: 'SSC/GSEB', sub: 'Focused' }
];

export function AboutFounder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="founder" className="py-28 bg-gradient-to-b from-white via-royal-50/20 to-white relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[45rem] h-[45rem] bg-royal-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Circular Image with Subtle Gold Highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: -30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Outer Subtle Gold Ring */}
              <div className="absolute inset-0 rounded-full border border-gold-500/30 bg-gold-500/5 shadow-[0_0_40px_rgba(212,175,55,0.15)] animate-[spin_12s_linear_infinite]" />
              
              {/* Inner Ring */}
              <div className="absolute inset-4 rounded-full border border-royal-500/30 shadow-[0_0_30px_rgba(37,99,235,0.1)] animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-2xl relative group bg-navy-900">
                <img 
                  src="/founder.png" 
                  alt="Bhavesh Chandrabhushan Ojha Sir" 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 font-extrabold text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                Founder & Head Mentor
              </span>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold text-navy-900 leading-tight font-outfit tracking-tight">
                Bhavesh Chandrabhushan <br />
                <span className="text-gradient-royal">Ojha Sir</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed pt-2 max-w-2xl font-inter">
                Experienced educator with 6+ years of teaching experience in Mathematics, Science, and English for SSC/GSEB students. Known for concept-based teaching, disciplined learning methods, and personal mentoring.
              </p>
            </div>

            {/* Info Cards Grid */}
            <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-6 pt-2">
              {cards.map((card, idx) => (
                <Card key={idx} variant="blueAccent" className="p-6 hover:border-gold-500/30 flex flex-col gap-3 group bg-white shadow-md">
                  <div className="w-12 h-12 rounded-2xl bg-royal-50 flex items-center justify-center text-royal-600 mb-2 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm border border-royal-100">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-navy-900 font-bold font-outfit text-lg">{card.title}</h3>
                  <ul className="space-y-2 mt-auto">
                    {card.items.map((item, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-start gap-2.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </motion.div>

            {/* Achievements Strip */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-600 shrink-0">
                      <item.icon size={20} />
                    </div>
                    <span className="text-navy-900 font-extrabold font-outfit text-2xl tracking-tight">{item.label}</span>
                  </div>
                  <span className="text-slate-500 text-xs font-bold tracking-wider uppercase ml-12">{item.sub}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
