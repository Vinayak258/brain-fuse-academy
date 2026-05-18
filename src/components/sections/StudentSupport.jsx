import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeartHandshake, BookCopy, Library, PiggyBank } from 'lucide-react';
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

const supportCards = [
  {
    icon: BookCopy,
    title: 'Affordable Notebooks',
    desc: 'High-quality notebooks provided at accessible prices to support consistent practice.'
  },
  {
    icon: Library,
    title: 'Study Material Assistance',
    desc: 'Comprehensive educational resources arranged to ensure no student is left behind.'
  },
  {
    icon: HeartHandshake,
    title: 'Student Welfare Initiative',
    desc: 'A caring approach focusing on reducing the overall financial burden of education.'
  },
  {
    icon: PiggyBank,
    title: 'Budget-Friendly Support',
    desc: 'Ensuring every family can access premium learning tools without financial strain.'
  }
];

export function StudentSupport() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="support" className="py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* Soft Elegant Background Gradients */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-royal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: -30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant glowing frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-royal-600 to-royal-400 rounded-[3rem] opacity-15 blur-2xl transform -translate-x-3 translate-y-3" />
            
            <Card variant="default" hover={false} className="relative rounded-[3rem] border-slate-200 shadow-2xl aspect-[4/5] bg-slate-50">
              <img 
                src="/students/library.jpg" 
                alt="Premium notebooks and educational study materials" 
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </Card>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-8 -right-4 sm:-right-8 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-xl flex items-center gap-5 border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-royal-50 flex items-center justify-center text-royal-600 border border-royal-100 shadow-sm shrink-0">
                <HeartHandshake size={26} />
              </div>
              <div>
                <p className="text-navy-900 font-extrabold font-outfit text-lg leading-tight">Supporting Families</p>
                <p className="text-slate-500 text-xs font-medium mt-0.5">Quality learning tools</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content & Cards */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-4">
              <span className="inline-block text-royal-600 font-bold text-xs tracking-widest uppercase relative before:content-[''] before:absolute before:-left-12 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-royal-600 ml-12">
                Student Welfare
              </span>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight font-outfit tracking-tight">
                Student Support <br/>
                <span className="text-gradient-royal">Program</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed pt-2 font-inter">
                We help students access quality notebooks and educational materials at affordable prices to support learning and reduce educational expenses for families.
              </p>
            </div>

            {/* Support Cards Grid */}
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6 pt-2">
              {supportCards.map((card, idx) => (
                <Card key={idx} variant="blueAccent" className="p-8 flex flex-col gap-4 bg-white border-slate-100 shadow-md group">
                  <div className="w-14 h-14 rounded-2xl bg-royal-50 group-hover:bg-royal-600 flex items-center justify-center text-royal-600 group-hover:text-white transition-all duration-300 shadow-sm border border-royal-100 shrink-0">
                    <card.icon size={26} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-navy-900 font-outfit text-xl mb-2 group-hover:text-royal-600 transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-inter">
                      {card.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
