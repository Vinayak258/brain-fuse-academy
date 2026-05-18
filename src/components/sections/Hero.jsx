import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, UserCheck, Target, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

const trustBadges = [
  { icon: Award, text: '6+ Years Teaching Experience' },
  { icon: Target, text: 'Weekly Test System' },
  { icon: UserCheck, text: 'Personal Attention' },
  { icon: BookOpen, text: 'SSC/GSEB Focused' }
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-40 lg:pt-48 pb-20 overflow-hidden bg-gradient-to-b from-white via-royal-50/30 to-white">
      {/* Premium Blue Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-royal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-royal-50 border border-royal-200 text-royal-700 font-bold text-xs tracking-widest uppercase shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-royal-600 animate-pulse" />
                Admissions Open 2026-27
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-900 leading-tight tracking-tight font-outfit">
                Excellence in <span className="text-gradient-royal">Learning.</span> <br />
                Excellence in <span className="text-gradient-royal">Results.</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-slate-700 font-semibold font-outfit leading-snug">
                Trusted SSC & GSEB Coaching for Academic Success
              </h2>
              
              <p className="text-slate-600 text-lg max-w-xl leading-relaxed">
                Brain Fuse Academy helps students build strong academic foundations through concept clarity, disciplined learning, weekly tests, and personal attention.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button href="#admission" variant="primary" icon={ArrowRight}>
                Admission Open
              </Button>
              <Button href="#admission" variant="secondary">
                Book Free Demo Class
              </Button>
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-2">
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold transition-colors group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
              {trustBadges.map((badge, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                  className="flex items-center gap-4 text-slate-700"
                >
                  <div className="w-12 h-12 rounded-2xl bg-royal-50 flex items-center justify-center text-royal-600 shrink-0 border border-royal-100 shadow-sm">
                    <badge.icon size={22} />
                  </div>
                  <span className="font-bold font-outfit text-sm leading-tight text-navy-900">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant glowing frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-royal-600 to-royal-400 rounded-[3rem] opacity-15 blur-2xl transform translate-x-4 translate-y-4" />
            
            <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(10,25,47,0.12)] bg-navy-900 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img 
                src="/hero.png" 
                alt="Students studying" 
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/20 to-transparent" />
              
              {/* Floating Achievement Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl border border-white/80 p-6 rounded-3xl flex items-center gap-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-navy-900 font-extrabold text-2xl shadow-lg shadow-gold-500/20 shrink-0 font-outfit">
                  A+
                </div>
                <div>
                  <h4 className="text-navy-900 font-extrabold font-outfit text-lg leading-tight mb-1">Top Performing Academy</h4>
                  <p className="text-slate-500 text-sm font-medium">Consistent 90%+ Results in SSC & GSEB</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
