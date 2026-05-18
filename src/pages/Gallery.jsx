import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Search, X, Sparkles, BookOpen, Users, Calendar } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';

const categories = ['All', 'Classroom Teaching', 'Weekly Tests', 'Library & Self-Study'];

const galleryItems = [
  { id: 1, src: '/students/classroom.jpg', title: 'Interactive Board Teaching', category: 'Classroom Teaching', desc: 'Engaging mathematics session focusing on formula derivations.' },
  { id: 2, src: '/students/study.jpg', title: 'Sunday Mega Evaluation', category: 'Weekly Tests', desc: 'Disciplined weekly test environment under strict supervision.' },
  { id: 3, src: '/students/library.jpg', title: 'Silent Library Study Hours', category: 'Library & Self-Study', desc: 'Well-equipped study area with premium reference materials.' },
  { id: 4, src: '/students/study.jpg', title: 'Concept Doubt Counters', category: 'Classroom Teaching', desc: 'One-on-one personal attention during post-lecture doubt sessions.' },
  { id: 5, src: '/students/classroom.jpg', title: 'Science Practical Demonstration', category: 'Classroom Teaching', desc: 'Understanding chemical equations through visual experiments.' },
  { id: 6, src: '/students/library.jpg', title: 'Board Exam Strategy Prep', category: 'Library & Self-Study', desc: 'Topper students preparing notes in a distraction-free zone.' }
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxData, setLightboxData] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full pt-40 lg:pt-48 pb-20 bg-white min-h-screen">
      
      {/* Page Banner */}
      <div className="container mx-auto px-4 lg:px-8 mb-16">
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
              <Sparkles size={16} /> Disciplined & Positive Atmosphere
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-outfit leading-tight tracking-tight">
              Campus & <br />
              <span className="text-gradient-royal">Learning Environment</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed font-inter">
              Take a virtual tour of our premium classrooms, rigorous test centers, and dedicated self-study facilities.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-royal-600 to-royal-500 text-white shadow-lg shadow-royal-600/30 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-royal-50 hover:text-royal-600 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-navy-950 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3] flex flex-col justify-end cursor-pointer"
                onClick={() => setLightboxData(item)}
              >
                {/* Image */}
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Inner Border Hover Highlight */}
                <div className="absolute inset-4 border border-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none" />

                {/* Content Overlay */}
                <div className="relative z-10 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-royal-600/90 text-white text-xs font-bold rounded-lg mb-3 shadow-sm uppercase tracking-wider font-outfit">
                    {item.category}
                  </span>
                  <h3 className="text-white font-extrabold text-2xl font-outfit mb-1 leading-tight group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs line-clamp-1 font-inter">{item.desc}</p>
                </div>

                {/* Search Magnifier Button */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Search size={20} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxData(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-navy-900 rounded-[3rem] overflow-hidden border border-gold-500/30 shadow-2xl"
            >
              <button 
                onClick={() => setLightboxData(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-xl border border-white/20 shadow-lg cursor-pointer"
              >
                <X size={24} />
              </button>

              <div className="relative aspect-[16/10] bg-navy-950 flex items-center justify-center">
                <img src={lightboxData.src} alt={lightboxData.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
              </div>

              <div className="p-8 md:p-10 bg-navy-950 relative z-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-gold-400 font-extrabold text-xs uppercase tracking-wider block mb-1 font-outfit">{lightboxData.category}</span>
                  <h3 className="text-3xl font-extrabold text-white font-outfit mb-2">{lightboxData.title}</h3>
                  <p className="text-slate-400 text-sm font-inter leading-relaxed max-w-xl">{lightboxData.desc}</p>
                </div>

                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl shrink-0">
                  <span className="text-royal-400 font-bold text-xs uppercase tracking-wider block">Academy Campus</span>
                  <span className="text-white font-extrabold font-outfit text-sm">Surat, Gujarat</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
