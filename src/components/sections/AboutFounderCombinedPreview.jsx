import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, CalendarCheck, UserCheck, ArrowRight, Award, Users, Target } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const highlights = [
  { icon: Lightbulb, title: 'Concept Clarity', desc: 'Focusing on root understanding rather than rote memorization.' },
  { icon: CalendarCheck, title: 'Weekly Test System', desc: 'Regular board-pattern evaluation to eliminate exam fear.' },
  { icon: UserCheck, title: 'Personal Attention', desc: 'Customized mentoring tailored to individual student strengths.' }
];

const stats = [
  { value: '6+ Years', label: 'Teaching Experience' },
  { value: '100+', label: 'Students Guided' },
  { value: '100%', label: 'Board Success Rate' }
];

export function AboutFounderCombinedPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about-founder-preview" className="py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-royal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[45rem] h-[45rem] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Intro & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block text-royal-600 font-bold text-xs tracking-widest uppercase relative before:content-[''] before:absolute before:-left-12 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-royal-600 ml-12">
                Gujarat's Premier Coaching
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight tracking-tight font-outfit">
                Building Strong Foundations <br />
                <span className="text-gradient-royal">for Academic Success</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed pt-2 font-inter">
                Brain Fuse Academy is dedicated to helping SSC and GSEB students achieve extraordinary board exam scores through concept clarity, disciplined weekly evaluations, and personal mentorship.
              </p>
            </div>

            {/* 3 Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-6 pt-2">
              {highlights.map((h, idx) => (
                <Card key={idx} variant="blueAccent" className="p-6 flex flex-col gap-3 border border-slate-100 shadow-md bg-white hover:border-royal-500/30 group">
                  <div className="w-12 h-12 rounded-2xl bg-royal-50 flex items-center justify-center text-royal-600 group-hover:bg-royal-600 group-hover:text-white transition-all duration-300 shadow-sm border border-royal-100">
                    <h.icon size={22} />
                  </div>
                  <h3 className="text-navy-900 font-bold font-outfit text-base leading-snug group-hover:text-royal-600 transition-colors">{h.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-inter">{h.desc}</p>
                </Card>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <Button href="/about" variant="primary" icon={ArrowRight}>
                Learn More About Us
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Founder Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: 30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex flex-col items-center"
          >
            {/* Glowing Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500 to-royal-600 rounded-[3rem] opacity-15 blur-2xl transform translate-x-3 translate-y-3" />
            
            <Card variant="goldAccent" className="p-8 w-full max-w-md bg-navy-900 border border-gold-500/30 shadow-2xl flex flex-col items-center text-center relative z-10">
              
              <div className="relative w-40 h-40 mb-6">
                <div className="absolute inset-0 rounded-full border border-gold-500/40 bg-gold-500/10 shadow-[0_0_25px_rgba(212,175,55,0.2)] animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-xl bg-navy-950">
                  <img src="/founder.png" alt="Bhavesh Chandrabhushan Ojha Sir" className="w-full h-full object-cover object-top" />
                </div>
              </div>

              <span className="text-gold-400 font-extrabold text-xs uppercase tracking-widest block mb-1 font-outfit">Founder & Head Mentor</span>
              <h3 className="text-2xl font-extrabold text-white font-outfit mb-4">Bhavesh C. Ojha Sir</h3>
              
              {/* 3 Stats Grid */}
              <div className="w-full grid grid-cols-3 gap-3 pt-6 border-t border-white/10 mt-2">
                {stats.map((s, idx) => (
                  <div key={idx} className="text-center border-r border-white/10 last:border-0 px-1">
                    <p className="text-xl font-extrabold text-gradient-gold font-outfit">{s.value}</p>
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

            </Card>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
