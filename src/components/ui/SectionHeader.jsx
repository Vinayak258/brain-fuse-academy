import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeader({
  badge,
  badgeIcon: BadgeIcon,
  titlePre,
  titleHighlight,
  titlePost,
  subtitle,
  centered = true,
  variant = 'royal', // 'royal' | 'gold' | 'white'
  className = ''
}) {
  const badgeStyles = {
    royal: "bg-royal-50 border-royal-200 text-royal-700",
    gold: "bg-gold-500/10 border-gold-500/20 text-gold-400",
    white: "bg-white/10 border-white/20 text-white"
  };

  const titleStyles = {
    royal: "text-navy-900",
    gold: "text-white",
    white: "text-white"
  };

  const highlightStyles = {
    royal: "text-gradient-royal",
    gold: "text-gradient-gold",
    white: "text-gradient-gold"
  };

  const subtitleStyles = {
    royal: "text-slate-600",
    gold: "text-slate-400",
    white: "text-slate-300"
  };

  return (
    <div className={`mb-16 ${centered ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-4 shadow-sm ${badgeStyles[variant]}`}>
          {BadgeIcon && <BadgeIcon size={14} />}
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight font-outfit mb-4 leading-tight ${titleStyles[variant]}`}>
        {titlePre}{' '}
        {titleHighlight && <span className={highlightStyles[variant]}>{titleHighlight}</span>}{' '}
        {titlePost}
      </h2>

      {subtitle && (
        <p className={`text-lg md:text-xl font-normal leading-relaxed ${subtitleStyles[variant]}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
