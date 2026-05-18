import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Heart, MessageCircle } from 'lucide-react';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Academy', path: '/about' },
  { name: 'Our Courses', path: '/courses' },
  { name: 'Toppers & Results', path: '/results' },
  { name: 'Campus Gallery', path: '/gallery' },
  { name: 'Contact & Admission', path: '/contact' }
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden pt-20 pb-10 border-t border-gold-500/30">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[35rem] h-[35rem] bg-royal-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Col 1: Brand & Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block group cursor-pointer">
              <img src="/logo.png" alt="Brain Fuse Academy Logo" className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300 bg-white/95 p-2 rounded-2xl border border-gold-500/30 shadow-lg" />
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-inter">
              Brain Fuse Academy is dedicated to building supreme academic foundations for SSC & GSEB students through concept clarity, disciplined weekly tests, and personal mentoring.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-navy-950 px-6 py-3 rounded-full font-extrabold transition-all duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.5)] hover:scale-105 group text-sm cursor-pointer"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-gold-400 font-extrabold font-outfit text-lg uppercase tracking-wider relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-8 before:h-[2px] before:bg-gold-500">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-300 hover:text-gold-400 transition-colors inline-flex items-center gap-2 group cursor-pointer">
                    <ArrowRight size={14} className="text-royal-500 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-gold-400 font-extrabold font-outfit text-lg uppercase tracking-wider relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-8 before:h-[2px] before:bg-gold-500">
              Popular Programs
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-300">
              <li className="hover:text-gold-400 transition-colors flex items-center gap-2 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Grade 10 Board Prep
              </li>
              <li className="hover:text-gold-400 transition-colors flex items-center gap-2 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Grade 9 SSC Prep
              </li>
              <li className="hover:text-gold-400 transition-colors flex items-center gap-2 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Mathematics Special
              </li>
              <li className="hover:text-gold-400 transition-colors flex items-center gap-2 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Science Practical Batch
              </li>
              <li className="hover:text-gold-400 transition-colors flex items-center gap-2 cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> English Grammar
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-gold-400 font-extrabold font-outfit text-lg uppercase tracking-wider relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-8 before:h-[2px] before:bg-gold-500">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-400 shrink-0 mt-1" />
                <span className="leading-relaxed">Surat, Gujarat, India. Prime location with disciplined facilities.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-400 shrink-0" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-400 shrink-0" />
                <span>contact@brainfuseacademy.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Brain Fuse Academy. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={14} className="text-red-500 fill-current" /> for supreme academic success.
          </p>
        </div>
      </div>
    </footer>
  );
}
