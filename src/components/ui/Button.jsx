import React from 'react';
import { Link } from 'react-router-dom';

export function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  href, 
  onClick, 
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-inter font-bold rounded-full transition-all duration-300 group px-8 py-3.5 text-sm cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-royal-600 to-royal-500 text-white hover:from-royal-700 hover:to-royal-600 shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.4)] hover:-translate-y-1",
    gold: "bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 hover:from-gold-600 hover:to-gold-500 shadow-[0_8px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_12px_25px_rgba(212,175,55,0.4)] hover:-translate-y-1",
    secondary: "bg-white/80 backdrop-blur-md border border-royal-600/30 text-royal-700 hover:bg-royal-600 hover:text-white hover:border-royal-600 shadow-sm hover:shadow-[0_8px_20px_rgba(37,99,235,0.2)] hover:-translate-y-1"
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} className="transition-transform group-hover:-translate-x-1" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} className="transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    if (isInternal) {
      return (
        <Link to={href} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
}
