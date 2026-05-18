import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Map } from 'lucide-react';
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

const contactInfo = [
  {
    icon: MapPin,
    title: 'Academy Location',
    details: ['Surat, Gujarat, India'],
    sub: 'Prime location with easy accessibility'
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['+91 12345 67890'],
    sub: 'Available 8:00 AM to 8:00 PM'
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['contact@brainfuseacademy.com'],
    sub: '24/7 online query response'
  },
  {
    icon: Clock,
    title: 'Operating Hours',
    details: ['Mon - Sat: 8:00 AM - 8:00 PM', 'Sunday: Special Test Batches'],
    sub: 'Disciplined weekly timetable'
  }
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* Subtle Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[45rem] h-[45rem] bg-royal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            badge="Get in Touch"
            badgeIcon={Map}
            titlePre="Contact & Location"
            titleHighlight="Information"
            subtitle="Visit our academy or reach out via phone and email. We are always ready to answer your questions and guide your academic journey."
            variant="royal"
          />
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {contactInfo.map((info, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col h-full">
              <Card variant="blueAccent" className="p-8 flex flex-col flex-grow bg-white border border-slate-100 shadow-md group">
                <div className="w-14 h-14 rounded-2xl bg-royal-50 flex items-center justify-center text-royal-600 mb-6 group-hover:bg-royal-600 group-hover:text-white transition-all duration-300 shadow-sm border border-royal-100 shrink-0">
                  <info.icon size={26} />
                </div>
                
                <h3 className="font-extrabold text-navy-900 font-outfit text-xl mb-2 group-hover:text-royal-600 transition-colors leading-tight">
                  {info.title}
                </h3>
                
                <div className="space-y-1 mb-4 flex-grow">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-slate-700 font-medium text-sm font-inter">
                      {detail}
                    </p>
                  ))}
                </div>

                <p className="text-slate-400 text-xs font-semibold tracking-wider uppercase mt-auto pt-4 border-t border-slate-100">
                  {info.sub}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Preview Container */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Card variant="default" hover={false} className="p-4 bg-slate-50 border border-slate-200 shadow-xl rounded-[3rem] overflow-hidden">
            <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden relative bg-navy-900 flex items-center justify-center">
              {/* Map Illustration Placeholder */}
              <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: 'url("/students/classroom.jpg")' }} />
              <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-xs" />
              
              <div className="relative z-10 text-center max-w-lg mx-auto p-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white">
                <div className="w-16 h-16 rounded-full bg-royal-50 border border-royal-200 flex items-center justify-center text-royal-600 mx-auto mb-4 shadow-md">
                  <MapPin size={32} className="animate-bounce" />
                </div>
                <h4 className="text-2xl font-extrabold text-navy-900 font-outfit mb-2">Brain Fuse Academy</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Surat, Gujarat. Easily accessible by local transport. Our classrooms are fully equipped for disciplined, high-quality learning.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-700 hover:to-royal-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-royal-600/30 hover:shadow-xl transition-all duration-300 group text-sm"
                >
                  <Map size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}
