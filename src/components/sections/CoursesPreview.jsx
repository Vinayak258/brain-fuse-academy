import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Calculator, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const topCourses = [
  {
    id: 1,
    title: 'Grade 10 Board Preparation',
    desc: 'Intensive SSC board exam program designed for absolute concept mastery and maximum percentile scores.',
    subjects: ['Maths', 'Science', 'English', 'Social Science'],
    tests: 'Every Sunday',
    icon: BookOpen,
    image: '/students/classroom.jpg',
    popular: true
  },
  {
    id: 2,
    title: 'Grade 9 SSC Preparation',
    desc: 'The crucial foundation year program focusing on building strong core concepts for upcoming board exams.',
    subjects: ['Maths', 'Science', 'English'],
    tests: 'Weekly Assessment',
    icon: FileText,
    image: '/students/study.jpg',
    popular: false
  },
  {
    id: 4,
    title: 'Mathematics Coaching',
    desc: 'Specialized coaching focusing on problem-solving speed, formulas, geometry, and advanced algebra techniques.',
    subjects: ['Algebra', 'Geometry', 'Trigonometry'],
    tests: 'Chapter-wise Tests',
    icon: Calculator,
    image: '/students/library.jpg',
    popular: true
  }
];

export function CoursesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="courses-preview" className="py-28 bg-slate-50/60 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-royal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Featured Batches"
            badgeIcon={BookOpen}
            titlePre="Top Academic"
            titleHighlight="Programs"
            subtitle="Explore our most sought-after coaching programs structured for absolute academic success."
            variant="royal"
          />
        </motion.div>

        {/* 3 Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {topCourses.map((course, idx) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex flex-col h-full"
            >
              <Card variant="blueAccent" className="flex flex-col flex-grow border-slate-200/80 bg-white shadow-lg hover:shadow-2xl">
                {/* Image Header */}
                <div className="h-44 relative overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                  
                  {course.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-extrabold px-3 py-1 rounded-full text-[11px] shadow-lg font-outfit uppercase tracking-wider">
                      ★ Popular
                    </div>
                  )}

                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-royal-600 shadow-xl z-10 group-hover:-translate-y-1 transition-transform">
                    <course.icon size={22} />
                  </div>
                </div>

                <div className="p-8 pt-10 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-navy-900 font-outfit mb-3 group-hover:text-royal-600 transition-colors leading-snug">{course.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-inter">{course.desc}</p>
                  
                  <div className="flex items-center gap-2 text-slate-700 text-xs font-medium pt-4 border-t border-slate-100">
                    <CheckCircle2 size={16} className="text-royal-600 shrink-0" />
                    <span><strong>Tests:</strong> {course.tests}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center">
          <Button href="/courses" variant="primary" icon={ChevronRight}>
            View All Courses & Timings
          </Button>
        </div>
      </div>
    </section>
  );
}
