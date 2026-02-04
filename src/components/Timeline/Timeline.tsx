import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../../data/resume';
import { TimelineItem } from './TimelineItem';
import { useAppStore } from '../../store/useAppStore';

export default function Timeline() {
  const theme = useAppStore((s) => s.theme);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className={`py-20 md:py-32 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-navy-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-seafoam uppercase mb-3">
            Experience
          </p>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-navy-900'
            }`}
          >
            Where I&apos;ve Made Impact
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`
              absolute top-0 bottom-0 w-px
              left-[7px] md:left-1/2 md:-translate-x-px
            `}
            style={{
              background:
                theme === 'dark'
                  ? 'linear-gradient(to bottom, transparent, #00B9AF 15%, #00B9AF 85%, transparent)'
                  : 'linear-gradient(to bottom, transparent, #00B9AF40 15%, #00B9AF40 85%, transparent)',
            }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <TimelineItem key={`${exp.company}-${exp.title}`} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
