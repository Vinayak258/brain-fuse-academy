import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="final-cta" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-royal-950 rounded-[3rem] p-12 md:p-16 text-center overflow-hidden border border-gold-500/30 shadow-2xl"
        >
          {/* Decorative Ambience */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-royal-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 font-extrabold text-xs tracking-widest uppercase mb-6 shadow-lg shadow-gold-500/20">
              <Calendar size={14} /> Admissions Open for 2026–2027
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white font-outfit mb-4 leading-tight tracking-tight">
              Book Your <span className="text-gradient-gold">Free Demo Class</span> Today
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg font-medium mb-10 font-inter">
              Join Gujarat's premier coaching institute. <br className="hidden md:block" /> 
              <span className="text-gold-400 font-bold">* Limited Batch Size for Personal Attention</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button href="/contact" variant="primary" icon={Phone} className="w-full sm:w-auto">
                Contact Us
              </Button>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-navy-950 px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.5)] hover:-translate-y-1 text-sm group cursor-pointer"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
