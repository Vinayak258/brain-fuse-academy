import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, FileText, UserCheck, Users, Lightbulb, Wallet, GraduationCap, Heart } from 'lucide-react';
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

const features = [
  { icon: Award, title: 'Proven SSC/GSEB Results', desc: 'Consistent 90%+ results year after year, with students regularly topping their schools.' },
  { icon: FileText, title: 'Weekly Test System', desc: 'Regular assessments to track progress, eliminate exam fear, and improve time management.' },
  { icon: UserCheck, title: 'Personal Attention', desc: 'Every student is unique. We focus on individual strengths and work closely on weaknesses.' },
  { icon: Users, title: 'Small Batch Sizes', desc: 'Limited students per batch to ensure interactive learning and personalized mentoring.' },
  { icon: Lightbulb, title: 'Concept Clarity', desc: 'Rote learning is discouraged. We build strong foundations for long-term academic success.' },
  { icon: Wallet, title: 'Affordable Fees', desc: 'Premium quality education structured at a highly accessible fee for all parents.' },
  { icon: GraduationCap, title: 'Experienced Faculty', desc: 'Learn directly from passionate, highly qualified educators with deep subject expertise.' },
  { icon: Heart, title: 'Student-Friendly', desc: 'A positive, disciplined, yet encouraging environment where students love to learn.' }
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why" className="py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* Subtle Blue Gradients */}
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-royal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            badge="Why Choose Us"
            badgeIcon={Award}
            titlePre="Why Students & Parents"
            titleHighlight="Trust Us"
            subtitle="We don't just teach — we build champions. Discover the core pillars that make Brain Fuse Academy the preferred choice."
            variant="royal"
          />
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col h-full">
              <Card variant="blueAccent" className="p-8 flex flex-col flex-grow bg-white border-slate-100 shadow-lg hover:shadow-2xl hover:border-royal-500/30 group">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-royal-50 border border-royal-100 flex items-center justify-center text-royal-600 mb-6 group-hover:bg-royal-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                  <feature.icon size={28} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-extrabold text-navy-900 font-outfit mb-3 group-hover:text-royal-600 transition-colors leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed flex-grow font-inter">
                  {feature.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
