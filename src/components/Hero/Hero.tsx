import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiChevronDown } from 'react-icons/hi';
import { profile } from '../../data/resume';
import Scene from './Scene';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Three.js 3D Background */}
      <Scene />

      {/* Content Layer */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name with glitch effect */}
        <motion.h1
          variants={childVariants}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-6"
        >
          <span
            className="glitch inline-block cursor-default"
            data-text={profile.name.toUpperCase()}
          >
            {profile.name.toUpperCase()}
          </span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          variants={childVariants}
          className="h-10 sm:h-12 flex items-center justify-center mb-8"
        >
          <span className="text-lg sm:text-2xl font-mono text-seafoam">
            <TypeAnimation
              sequence={[
                'Distributed Systems & Platform Engineering',
                2000,
                '',
                500,
                'MLOps | Kubernetes | Cloud Infrastructure',
                2000,
                '',
                500,
                'Scalable Systems for Mission-Critical Programs',
                2000,
                '',
                500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </motion.div>

        {/* Tagline with animated gradient */}
        <motion.p
          variants={childVariants}
          className="text-gradient text-lg sm:text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* Location */}
        <motion.p
          variants={childVariants}
          className="text-gray-500 text-sm font-mono tracking-wider uppercase"
        >
          {profile.location}
        </motion.p>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiChevronDown className="w-6 h-6 text-seafoam" />
        </motion.div>
      </motion.div>
    </section>
  );
}
