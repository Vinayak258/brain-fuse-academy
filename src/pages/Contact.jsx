import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageCircle, MapPin, Send } from 'lucide-react';
import { Contact as ContactSection } from '../components/sections/Contact';
import { AdmissionEnquiry } from '../components/sections/AdmissionEnquiry';

export function Contact() {
  return (
    <div className="w-full pt-40 lg:pt-48 pb-20 bg-white">
      
      {/* Page Banner */}
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-navy-950 via-navy-900 to-royal-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-royal-500/30"
        >
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-royal-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-royal-500/15 border border-royal-500/30 text-royal-400 font-extrabold text-xs tracking-widest uppercase">
              <PhoneCall size={16} /> 24/7 Enquiry Response
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-outfit leading-tight tracking-tight">
              Get in Touch & <br />
              <span className="text-gradient-royal">Book Your Demo</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed font-inter">
              We are excited to guide your child towards academic success. Reach out to our mentors or visit our campus today.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Contact Info & Google Maps Section */}
      <ContactSection />

      {/* Admission Enquiry Form Section */}
      <div className="border-t border-slate-100">
        <AdmissionEnquiry />
      </div>

    </div>
  );
}
