import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Compass, Heart, Award, ShieldCheck, Users, BookOpen } from 'lucide-react';
import { AboutAcademy } from '../components/sections/AboutAcademy';
import { AboutFounder } from '../components/sections/AboutFounder';
import { StudentSupport } from '../components/sections/StudentSupport';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

const pillars = [
  { icon: Target, title: 'Our Mission', desc: 'To provide supreme academic mentorship, eliminate the fear of board exams through conceptual clarity, and build disciplined habits that empower students for lifetime success.' },
  { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted educational institution in Gujarat, recognized for uncompromising teaching standards, ethical guidance, and consistently producing top board achievers.' },
  { icon: Heart, title: 'Core Values', desc: 'Student-first approach, absolute transparency with parents, rigorous academic discipline, and a nurturing environment that encourages curiosity.' }
];

const philosophyItems = [
  { icon: BookOpen, title: 'Concept over Memorization', desc: 'We dissect complex mathematical theorems and scientific laws into relatable real-world principles so students truly understand the "why" behind every concept.' },
  { icon: ShieldCheck, title: 'Disciplined Evaluation', desc: 'Our weekly Sunday test series replicates exact board exam conditions, removing exam-day anxiety and perfecting student time-management skills.' },
  { icon: Users, title: 'Individual Mentorship', desc: 'With strictly limited batch sizes, our educators identify each student\'s unique learning curve, offering customized practice sheets to strengthen weak areas.' },
  { icon: Award, title: 'Holistic Academic Growth', desc: 'Beyond marks, we foster logical reasoning, confident communication, and resilient study habits that prepare students for competitive examinations ahead.' }
];

export function About() {
  return (
    <div className="w-full pt-40 lg:pt-48 pb-20 bg-white">
      
      {/* Page Banner */}
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-navy-950 via-navy-900 to-royal-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-royal-500/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 font-extrabold text-xs tracking-widest uppercase">
              <Compass size={14} /> Established Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-outfit leading-tight">
              Empowering Minds, <br />
              <span className="text-gradient-gold">Shaping Futures.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed font-inter">
              Discover the core philosophy, dedicated mentors, and unwavering commitment that makes Brain Fuse Academy Gujarat's premier coaching institute.
            </p>
          </div>
        </motion.div>
      </div>

      {/* About Academy Section */}
      <AboutAcademy />

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-b from-white via-royal-50/30 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeader
            badge="Purpose & Direction"
            badgeIcon={Compass}
            titlePre="Our Mission,"
            titleHighlight="Vision & Values"
            subtitle="The fundamental pillars guiding every classroom lecture, test paper, and mentorship session at our academy."
            variant="royal"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                <Card variant="blueAccent" className="p-10 flex flex-col h-full bg-white border-slate-100 shadow-xl group hover:border-gold-500/40">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-royal-600 to-royal-500 flex items-center justify-center text-white mb-6 group-hover:from-gold-500 group-hover:to-gold-400 group-hover:text-navy-950 transition-all duration-500 shadow-lg shadow-royal-600/30">
                    <pillar.icon size={30} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-900 font-outfit mb-4 group-hover:text-royal-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed font-inter flex-grow">
                    {pillar.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <AboutFounder />

      {/* Teaching Philosophy Deep Dive */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
          <SectionHeader
            badge="Academic Rigor"
            badgeIcon={BookOpen}
            titlePre="Our 4-Pillar"
            titleHighlight="Teaching Philosophy"
            subtitle="How we consistently transform average students into top board achievers through structured academic discipline."
            variant="royal"
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {philosophyItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card variant="default" className="p-8 md:p-10 flex flex-col gap-5 border border-slate-200/80 shadow-md hover:shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-royal-50 border border-royal-100 flex items-center justify-center text-royal-600 shrink-0">
                      <item.icon size={26} />
                    </div>
                    <h3 className="text-xl font-extrabold text-navy-900 font-outfit leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-inter">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relocated Student Support Section */}
      <div className="border-t border-slate-100">
        <StudentSupport />
      </div>

    </div>
  );
}
