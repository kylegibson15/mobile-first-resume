import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { profile } from '../../data/resume';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 dark:bg-navy-900 bg-gray-50"
    >
      <motion.div
        className="max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section label */}
        <motion.span
          variants={itemVariants}
          className="block text-sm font-mono text-seafoam uppercase tracking-widest mb-4"
        >
          About
        </motion.span>

        {/* Main heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
        >
          {profile.subtitle}
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          {profile.bio}
        </motion.p>
      </motion.div>
    </section>
  );
}
