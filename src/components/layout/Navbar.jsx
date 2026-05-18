import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Results', path: '/results' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] py-3.5'
          : 'bg-white/70 backdrop-blur-md py-6 border-b border-slate-100/50'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group py-1">
            <img src="/logo.png" alt="Brain Fuse Academy" className="h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-inter font-medium text-sm tracking-wide transition-all relative py-1 cursor-pointer ${
                    isActive ? 'text-royal-600 font-bold' : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500 to-gold-400 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)] z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/30 text-[#25D366] hover:text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(37,211,102,0.25)] group cursor-pointer"
            >
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 rounded-full bg-royal-50 border border-royal-100 flex items-center justify-center text-royal-600 hover:bg-royal-600 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-lg font-outfit tracking-wide py-3 flex items-center justify-between border-b border-slate-100 transition-colors cursor-pointer ${
                      isActive ? 'text-royal-600 font-extrabold border-royal-200' : 'text-slate-600 hover:text-navy-900'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.8)] animate-pulse" />}
                  </Link>
                );
              })}
              
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold mt-4 shadow-[0_8px_25px_rgba(37,211,102,0.3)] cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
