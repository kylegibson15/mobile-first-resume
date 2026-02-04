import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../../data/resume';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Heading */}
        <motion.h2
          variants={childVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Let's Build Something Amazing
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={childVariants}
          className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          I'm always open to discussing new opportunities, collaborations, and interesting
          challenges.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={childVariants} className="flex justify-center gap-4 mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="bg-seafoam text-navy-900 font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Email Me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-seafoam text-seafoam px-8 py-3 rounded-full hover:bg-seafoam/10 transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={childVariants}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-seafoam transition-colors text-xl"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-seafoam transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={childVariants}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-600 text-sm"
        >
          <p>Built with React, Three.js &amp; Tailwind CSS</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} {profile.name}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
