import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, CalendarCheck, UserCheck, Heart, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const features = [
  { icon: Lightbulb, title: 'Concept-Based Teaching', desc: 'Focus on root clarity rather than rote memorization.' },
  { icon: CalendarCheck, title: 'Weekly Test System', desc: 'Continuous evaluation to eliminate exam anxiety.' },
  { icon: UserCheck, title: 'Personal Attention', desc: 'Customized mentoring tailored to student strengths.' },
  { icon: Heart, title: 'Student-Friendly Environment', desc: 'A positive atmosphere encouraging active participation.' }
];

export function AboutAcademy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-white" ref={ref}>
      {/* Soft Background Gradients */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-royal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[45rem] h-[45rem] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Premium Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            {/* Elegant glowing shadow frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-royal-600 to-royal-400 rounded-[3rem] opacity-15 blur-2xl transform -translate-x-3 translate-y-3" />
            
            <Card variant="default" hover={false} className="relative rounded-[3rem] border-slate-200 shadow-2xl aspect-[4/5]">
              <img 
                src="/students/study.jpg" 
                alt="Disciplined students studying in a premium classroom" 
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </Card>
            
            {/* Floating Element */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] flex items-center gap-5 border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-royal-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-royal-600/30 font-outfit">
                100%
              </div>
              <div>
                <p className="text-navy-900 font-extrabold font-outfit text-lg leading-tight">Concept Clarity</p>
                <p className="text-slate-500 text-xs font-medium mt-0.5">Our supreme academic pillar</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="lg:col-span-7 order-1 lg:order-2 space-y-10"
          >
            <div className="space-y-4">
              <span className="inline-block text-royal-600 font-bold text-xs tracking-widest uppercase relative before:content-[''] before:absolute before:-left-12 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-royal-600 ml-12">
                About Academy
              </span>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight tracking-tight font-outfit">
                Building Strong <br/>
                <span className="text-gradient-royal">Academic Foundations</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed pt-2">
                Brain Fuse Academy is dedicated to helping SSC/GSEB students achieve academic excellence through concept clarity, disciplined learning methods, regular practice, and personal guidance.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              {features.map((feature, idx) => (
                <Card
                  key={idx}
                  variant="blueAccent"
                  className="p-6 group flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-royal-50 group-hover:bg-royal-600 flex items-center justify-center text-royal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 font-outfit text-lg mb-1.5 leading-tight group-hover:text-royal-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button href="#courses" variant="primary" icon={ArrowRight}>
                Explore Courses
              </Button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
