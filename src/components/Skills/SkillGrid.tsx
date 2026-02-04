import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { skillCategories } from '../../data/resume';

const colorMap: Record<string, { text: string; border: string; glow: string }> = {
  seafoam: {
    text: 'text-seafoam',
    border: 'border-l-seafoam',
    glow: 'hover:shadow-[0_0_20px_rgba(0,185,175,0.3)]',
  },
  blue: {
    text: 'text-blue-400',
    border: 'border-l-blue-400',
    glow: 'hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]',
  },
  orange: {
    text: 'text-accent-orange',
    border: 'border-l-accent-orange',
    glow: 'hover:shadow-[0_0_20px_rgba(252,140,0,0.3)]',
  },
  yellow: {
    text: 'text-accent-yellow',
    border: 'border-l-accent-yellow',
    glow: 'hover:shadow-[0_0_20px_rgba(255,212,96,0.3)]',
  },
  pink: {
    text: 'text-accent-pink',
    border: 'border-l-accent-pink',
    glow: 'hover:shadow-[0_0_20px_rgba(235,89,110,0.3)]',
  },
  red: {
    text: 'text-accent-red',
    border: 'border-l-accent-red',
    glow: 'hover:shadow-[0_0_20px_rgba(234,84,85,0.3)]',
  },
};

const categories = ['All', ...skillCategories.map((c) => c.name)];

export default function SkillGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredSkills = skillCategories.flatMap((cat) =>
    activeFilter === 'All' || activeFilter === cat.name
      ? cat.skills.map((skill) => ({ name: skill, color: cat.color, category: cat.name }))
      : [],
  );

  return (
    <section id="skills" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-seafoam font-mono text-sm tracking-widest uppercase mb-3">
            SKILLS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Technologies &amp; Expertise
          </h2>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-12 pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? 'bg-seafoam text-navy-900'
                  : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {activeFilter === cat && (
                <motion.span
                  layoutId="skillTabIndicator"
                  className="absolute inset-0 bg-seafoam rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => {
              const colors = colorMap[skill.color] || colorMap.seafoam;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 0.8,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    opacity: { duration: 0.3, delay: isInView ? i * 0.03 : 0 },
                    scale: { duration: 0.3, delay: isInView ? i * 0.03 : 0 },
                    layout: { type: 'spring', stiffness: 300, damping: 25 },
                  }}
                  className={`backdrop-blur-md bg-white/5 dark:bg-white/5 bg-gray-50 border border-gray-200 dark:border-white/10 rounded-lg p-4 text-center
                    border-l-4 ${colors.border} ${colors.glow}
                    hover:-translate-y-1 transition-all duration-300 cursor-default`}
                >
                  <span className="text-gray-900 dark:text-white text-sm font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
