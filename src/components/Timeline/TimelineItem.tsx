import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import type { Experience } from '../../data/resume';
import { useAppStore } from '../../store/useAppStore';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const theme = useAppStore((s) => s.theme);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`
        relative flex items-start gap-6
        md:gap-0
        ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
      `}
    >
      {/* Timeline node */}
      <div
        className={`
          absolute left-0 md:left-1/2 md:-translate-x-1/2
          w-4 h-4 rounded-full bg-seafoam border-4 z-10 mt-6
          ${
            theme === 'dark'
              ? 'border-navy-900'
              : 'border-white'
          }
          ${experience.current ? 'animate-pulse-glow' : ''}
        `}
      />

      {/* Spacer for mobile (left side line area) */}
      <div className="w-4 shrink-0 md:hidden" />

      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -50 : 50,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isLeft ? -50 : 50 }
        }
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          flex-1
          md:w-[calc(50%-2rem)]
          ${isLeft ? 'md:pr-12' : 'md:pl-12'}
        `}
      >
        <div
          className={`
            group relative rounded-xl p-6 transition-all duration-300
            backdrop-blur-xl border
            hover:-translate-y-0.5
            ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 hover:border-seafoam/30 hover:shadow-[0_0_30px_rgba(0,185,175,0.1)]'
                : 'bg-white/80 border-gray-200 hover:border-seafoam/40 hover:shadow-lg'
            }
          `}
        >
          {/* Header */}
          <div className="mb-3">
            <h3
              className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}
            >
              {experience.title}
            </h3>
            <p className="text-seafoam font-medium">
              {experience.company}
              {experience.division && (
                <span
                  className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}
                >
                  {' '}
                  &middot; {experience.division}
                </span>
              )}
            </p>
            <p
              className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
            >
              {experience.period}
              {experience.current && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-seafoam/10 text-seafoam">
                  Current
                </span>
              )}
            </p>
          </div>

          {/* Expand/collapse button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={`
              flex items-center gap-1 text-sm font-medium transition-colors mb-3
              ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-seafoam'
                  : 'text-gray-500 hover:text-seafoam'
              }
            `}
          >
            {expanded ? 'Hide Details' : 'View Details'}
            {expanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
          </button>

          {/* Bullets */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 mb-4">
                  {experience.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-seafoam mt-2 shrink-0" />
                      <span
                        className={`text-sm leading-relaxed ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs bg-seafoam/10 text-seafoam font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
