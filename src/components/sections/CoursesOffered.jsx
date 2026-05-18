import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Calculator, Atom, FileText, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const courses = [
  {
    id: 1,
    title: 'Grade 10 Board Preparation',
    desc: 'Intensive SSC board exam preparation program designed to maximize scores and ensure absolute concept mastery.',
    subjects: ['Maths', 'Science', 'English', 'Social Science'],
    tests: 'Every Sunday',
    batch: 'Morning & Evening',
    icon: BookOpen,
    popular: true,
    image: '/students/classroom.jpg'
  },
  {
    id: 2,
    title: 'Grade 9 SSC Preparation',
    desc: 'The crucial foundation year program focusing on building strong core concepts for the upcoming board exams.',
    subjects: ['Maths', 'Science', 'English'],
    tests: 'Weekly Assessment',
    batch: 'Evening Batch',
    icon: FileText,
    popular: false,
    image: '/students/study.jpg'
  },
  {
    id: 3,
    title: 'Grade 8 Foundation Batch',
    desc: 'Early start program to bridge learning gaps and build a strong academic base for higher secondary education.',
    subjects: ['Maths', 'Science'],
    tests: 'Fortnightly',
    batch: 'Evening Batch',
    icon: BookOpen,
    popular: false,
    image: '/students/library.jpg'
  },
  {
    id: 4,
    title: 'Mathematics Coaching',
    desc: 'Specialized coaching focusing on problem-solving speed, formulas, geometry, and advanced algebra techniques.',
    subjects: ['Algebra', 'Geometry', 'Trigonometry'],
    tests: 'Chapter-wise Tests',
    batch: 'Weekend & Regular',
    icon: Calculator,
    popular: true,
    image: '/students/study.jpg'
  },
  {
    id: 5,
    title: 'Science Coaching',
    desc: 'In-depth science program emphasizing practical understanding, physics numericals, and chemical equations.',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    tests: 'Weekly Practicals',
    batch: 'Regular Batch',
    icon: Atom,
    popular: false,
    image: '/students/classroom.jpg'
  },
  {
    id: 6,
    title: 'English Grammar Coaching',
    desc: 'Targeted grammar and writing skills program to secure maximum marks in language papers.',
    subjects: ['Grammar', 'Writing', 'Comprehension'],
    tests: 'Weekly Writing Test',
    batch: 'Weekend Batch',
    icon: FileText,
    popular: false,
    image: '/students/library.jpg'
  }
];

export function CoursesOffered() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="courses" className="py-28 bg-slate-50/60 relative overflow-hidden" ref={ref}>
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-royal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            badge="Programs & Courses"
            badgeIcon={BookOpen}
            titlePre="Structured Learning Programs"
            titleHighlight="for SSC/GSEB Students"
            subtitle="Choose from our comprehensive selection of specialized batches designed to nurture excellence and guarantee board success."
            variant="royal"
          />
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={fadeUp} className="flex flex-col h-full">
              <Card variant="blueAccent" className="flex flex-col flex-grow border-slate-200/80 bg-white shadow-lg hover:shadow-2xl">
                {/* Image Banner */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                  
                  {/* Popular Badge */}
                  {course.popular && (
                    <div className="absolute top-5 right-5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-extrabold px-3.5 py-1 rounded-full text-xs shadow-lg shadow-gold-500/20 font-outfit uppercase tracking-wider">
                      ★ Popular Course
                    </div>
                  )}

                  {/* Icon Circle */}
                  <div className="absolute -bottom-6 left-8 w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-royal-600 shadow-xl z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <course.icon size={26} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-extrabold text-navy-900 font-outfit mb-3 group-hover:text-royal-600 transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {course.desc}
                  </p>

                  {/* Subjects Tag List */}
                  <div className="mb-6">
                    <p className="text-royal-600 text-xs font-bold uppercase tracking-wider mb-2.5 font-outfit">Subjects Covered</p>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((sub, i) => (
                        <span key={i} className="bg-royal-50/80 border border-royal-100 text-royal-700 font-medium text-xs px-3 py-1 rounded-lg shadow-xs font-inter">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Info List */}
                  <ul className="space-y-3 mb-8 pt-6 border-t border-slate-100">
                    <li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <CheckCircle2 size={18} className="text-royal-600 shrink-0" />
                      <span><strong className="text-navy-900 font-bold">Tests:</strong> {course.tests}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <Clock size={18} className="text-royal-600 shrink-0" />
                      <span><strong className="text-navy-900 font-bold">Batch:</strong> {course.batch}</span>
                    </li>
                  </ul>

                  {/* Enroll Button */}
                  <div className="mt-auto pt-2">
                    <Button href="#admission" variant="secondary" className="w-full flex justify-center py-3" icon={ChevronRight}>
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
