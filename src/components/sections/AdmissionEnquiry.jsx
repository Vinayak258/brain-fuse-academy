import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, User, Users, Phone, BookOpen, GraduationCap, MessageSquare, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function AdmissionEnquiry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    class: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admission" className="py-28 bg-gradient-to-b from-white via-royal-50/40 to-white relative overflow-hidden" ref={ref}>
      {/* Premium Background Ambience */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-royal-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[45rem] h-[45rem] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionHeader
              badge="Admissions Open 2026–2027"
              badgeIcon={Calendar}
              titlePre="Book Your Free"
              titleHighlight="Demo Class Today"
              subtitle="Limited Batch Size for Better Personal Attention & Consistent Concept Mentoring"
              variant="royal"
            />
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card variant="glass" className="p-8 md:p-14 bg-white/90 shadow-[0_20px_60px_rgba(37,99,235,0.08)] border-slate-200">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-8 border border-emerald-200 shadow-md">
                    <CheckCircle size={44} className="text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-navy-900 font-outfit mb-4">Enquiry Submitted Successfully!</h3>
                  <p className="text-slate-600 text-lg max-w-md mx-auto leading-relaxed font-inter">
                    Thank you for showing interest in Brain Fuse Academy. Our team will contact you shortly to schedule your demo class.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-royal-600 hover:text-royal-700 font-bold underline underline-offset-4 cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    
                    {/* Student Name */}
                    <div className="space-y-2.5">
                      <label className="text-sm font-bold text-navy-900 flex items-center gap-2">
                        <User size={18} className="text-royal-600" /> Student Name
                      </label>
                      <input 
                        required 
                        value={form.studentName} 
                        onChange={e => setForm(p => ({ ...p, studentName: e.target.value }))}
                        placeholder="Enter student's full name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-navy-900 placeholder-slate-400 outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-600/20 focus:bg-white transition-all text-base font-medium shadow-xs" 
                      />
                    </div>

                    {/* Parent Name */}
                    <div className="space-y-2.5">
                      <label className="text-sm font-bold text-navy-900 flex items-center gap-2">
                        <Users size={18} className="text-royal-600" /> Parent Name
                      </label>
                      <input 
                        required 
                        value={form.parentName} 
                        onChange={e => setForm(p => ({ ...p, parentName: e.target.value }))}
                        placeholder="Enter parent's full name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-navy-900 placeholder-slate-400 outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-600/20 focus:bg-white transition-all text-base font-medium shadow-xs" 
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-2.5">
                      <label className="text-sm font-bold text-navy-900 flex items-center gap-2">
                        <Phone size={18} className="text-royal-600" /> Mobile Number
                      </label>
                      <input 
                        required 
                        type="tel"
                        value={form.mobile} 
                        onChange={e => setForm(p => ({ ...p, mobile: e.target.value }))}
                        placeholder="+91 Enter 10-digit number"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-navy-900 placeholder-slate-400 outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-600/20 focus:bg-white transition-all text-base font-medium shadow-xs" 
                      />
                    </div>

                    {/* Class/Standard */}
                    <div className="space-y-2.5">
                      <label className="text-sm font-bold text-navy-900 flex items-center gap-2">
                        <GraduationCap size={18} className="text-royal-600" /> Current Class
                      </label>
                      <select 
                        required 
                        value={form.class} 
                        onChange={e => setForm(p => ({ ...p, class: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-navy-900 outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-600/20 focus:bg-white transition-all text-base font-medium shadow-xs appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-slate-400">Select class</option>
                        <option value="8">Standard 8</option>
                        <option value="9">Standard 9</option>
                        <option value="10">Standard 10</option>
                      </select>
                    </div>

                    {/* Subject Interested */}
                    <div className="md:col-span-2 space-y-2.5">
                      <label className="text-sm font-bold text-navy-900 flex items-center gap-2">
                        <BookOpen size={18} className="text-royal-600" /> Subject Interested In
                      </label>
                      <select 
                        required 
                        value={form.subject} 
                        onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-navy-900 outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-600/20 focus:bg-white transition-all text-base font-medium shadow-xs appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-slate-400">Select primary subject/course</option>
                        <option value="ssc_all">SSC Complete Preparation (All Subjects)</option>
                        <option value="maths">Mathematics Special</option>
                        <option value="science">Science Special</option>
                        <option value="english">English Grammar Special</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 space-y-2.5">
                      <label className="text-sm font-bold text-navy-900 flex items-center gap-2">
                        <MessageSquare size={18} className="text-royal-600" /> Message / Specific Requirements (Optional)
                      </label>
                      <textarea 
                        value={form.message} 
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        placeholder="Any specific academic goals or areas where the student needs extra help?"
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-navy-900 placeholder-slate-400 outline-none focus:border-royal-600 focus:ring-2 focus:ring-royal-600/20 focus:bg-white transition-all text-base font-medium shadow-xs resize-none" 
                      />
                    </div>
                  </div>

                  {/* Action Buttons Grid */}
                  <div className="grid md:grid-cols-3 gap-5 pt-8 mt-8 border-t border-slate-100">
                    
                    {/* Submit Main - Gold CTA */}
                    <Button type="submit" variant="gold" className="md:col-span-1 py-4 text-base flex justify-center" icon={Send}>
                      Submit Enquiry
                    </Button>

                    {/* WhatsApp */}
                    <a 
                      href="https://wa.me/1234567890?text=Hello,%20I%20would%20like%20to%20enquire%20about%20admissions."
                      target="_blank"
                      rel="noreferrer"
                      className="md:col-span-1 bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/30 text-[#25D366] hover:text-white py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md group cursor-pointer"
                    >
                      <MessageCircle size={20} className="group-hover:scale-110 transition-transform" /> WhatsApp Enquiry
                    </a>

                    {/* Book Demo */}
                    <Button type="button" variant="primary" className="md:col-span-1 py-4 text-base flex justify-center" icon={Calendar}>
                      Book Free Demo
                    </Button>

                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
