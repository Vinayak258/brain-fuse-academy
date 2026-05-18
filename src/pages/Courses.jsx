import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CalendarCheck, Target, Award, Clock, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { CoursesOffered } from '../components/sections/CoursesOffered';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

const testingFeatures = [
  { icon: CalendarCheck, title: 'Sunday Mega Tests', desc: 'Every Sunday is dedicated to rigorous board pattern examinations, covering the exact syllabus taught during the week.' },
  { icon: FileSpreadsheet, title: 'Detailed Analysis Reports', desc: 'Parents receive comprehensive marksheets within 48 hours highlighting subject-wise accuracy and areas needing attention.' },
  { icon: Target, title: 'Error Correction Sessions', desc: 'Monday lectures start with a thorough test paper discussion, ensuring students never repeat mistakes in final exams.' },
  { icon: Award, title: 'Topper Benchmark Ranking', desc: 'Healthy competitive ranking among batch peers motivates students to continuously improve their percentile scores.' }
];

const batchDetails = [
  { title: 'Morning Regular Batch', timing: '07:30 AM - 11:30 AM', focus: 'Ideal for afternoon/evening school students. Fresh morning energy focused on mathematics and intensive concept lectures.' },
  { title: 'Evening Regular Batch', timing: '04:00 PM - 08:00 PM', focus: 'Designed for morning school students. Well-paced evening sessions with daily doubt-solving counters.' },
  { title: 'Sunday Test Series Batch', timing: '08:00 AM - 12:00 PM', focus: 'Mandatory evaluation session for all enrolled students. Full-length mock papers under strict invigilation.' }
];

export function Courses() {
  return (
    <div className="w-full pt-40 lg:pt-48 pb-20 bg-white">
      
      {/* Page Banner */}
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-royal-500/30 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-royal-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-500/15 border border-royal-500/30 text-royal-400 font-extrabold text-xs tracking-widest uppercase">
              <BookOpen size={14} /> Comprehensive Curriculums
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-outfit leading-tight">
              Academic Batches & <br />
              <span className="text-gradient-royal">Specialized Programs</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed font-inter">
              Structured SSC and GSEB coaching designed to build rock-solid foundations and guarantee board exam success.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Courses Grid Section */}
      <CoursesOffered />

      {/* Weekly Testing System Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
          <SectionHeader
            badge="Rigorous Evaluation"
            badgeIcon={CalendarCheck}
            titlePre="Our Famous"
            titleHighlight="Weekly Testing System"
            subtitle="Testing is not an afterthought at Brain Fuse Academy — it is the cornerstone of our academic excellence and 98%+ board success rate."
            variant="royal"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingFeatures.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                <Card variant="blueAccent" className="p-8 flex flex-col h-full bg-white border-slate-100 shadow-lg group hover:border-royal-500/30">
                  <div className="w-14 h-14 rounded-2xl bg-royal-50 border border-royal-100 flex items-center justify-center text-royal-600 mb-6 group-hover:bg-royal-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <feat.icon size={26} />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy-900 font-outfit mb-3 group-hover:text-royal-600 transition-colors leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-inter flex-grow">
                    {feat.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Schedule & Timings */}
      <section className="py-24 bg-slate-50/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[35rem] h-[35rem] bg-royal-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
          <SectionHeader
            badge="Batch Timings & Schedule"
            badgeIcon={Clock}
            titlePre="Disciplined"
            titleHighlight="Learning Timetable"
            subtitle="We maintain strictly punctual and disciplined schedules to ensure optimum focus and balanced self-study hours."
            variant="royal"
          />

          <div className="space-y-6">
            {batchDetails.map((batch, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                <Card variant="default" className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white border border-slate-200/80 shadow-md hover:shadow-xl">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-gradient-to-r from-royal-600 to-royal-500 animate-pulse" />
                      <h3 className="text-2xl font-extrabold text-navy-900 font-outfit leading-tight">{batch.title}</h3>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed font-inter pl-6">{batch.focus}</p>
                  </div>

                  <div className="bg-royal-50 border border-royal-100 px-6 py-4 rounded-2xl flex items-center gap-3 shrink-0 ml-6 md:ml-0 shadow-inner">
                    <Clock size={22} className="text-royal-600" />
                    <span className="text-navy-900 font-extrabold font-outfit text-lg tracking-wide">{batch.timing}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
