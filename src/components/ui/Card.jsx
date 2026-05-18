import React from 'react';

export function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true 
}) {
  const baseStyles = "relative rounded-3xl transition-all duration-500 overflow-hidden";
  
  const variants = {
    default: "bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]",
    blueAccent: "bg-gradient-to-b from-white via-white to-royal-50/30 border border-royal-100 shadow-[0_8px_30px_rgba(37,99,235,0.06)]",
    glass: "bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.04)]",
    goldAccent: "bg-navy-900 border border-gold-500/30 shadow-[0_8px_30px_rgba(212,175,55,0.1)] text-white",
    navy: "bg-navy-900 border border-navy-800 text-white shadow-xl"
  };

  const hoverStyles = hover ? "hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:border-royal-500/30" : "";

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
