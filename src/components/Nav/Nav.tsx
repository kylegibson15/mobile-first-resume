import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useAppStore } from '../../store/useAppStore';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Nav() {
  const { theme, toggleTheme } = useAppStore();
  const [activeSection, setActiveSection] = useState<string>('');
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Track scroll direction to show/hide navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Scroll progress bar */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-seafoam to-accent-orange origin-left"
          style={{ width: progressWidth }}
        />

        <div
          className={`
            backdrop-blur-xl border-b transition-colors duration-300
            ${
              theme === 'dark'
                ? 'bg-navy-900/70 border-white/10'
                : 'bg-white/70 border-gray-200'
            }
          `}
        >
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`
                w-10 h-10 rounded-lg border-2 border-seafoam flex items-center justify-center
                font-mono font-bold text-lg transition-colors
                ${theme === 'dark' ? 'text-white hover:bg-seafoam/10' : 'text-navy-900 hover:bg-seafoam/10'}
              `}
            >
              KG
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`
                    text-sm font-medium transition-colors duration-200 relative
                    ${
                      activeSection === id
                        ? 'text-seafoam'
                        : theme === 'dark'
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-500 hover:text-navy-900'
                    }
                  `}
                >
                  {label}
                  {activeSection === id && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-seafoam rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side: theme toggle + mobile menu */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`
                  w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                  ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-white/5'
                      : 'text-gray-500 hover:text-navy-900 hover:bg-gray-100'
                  }
                `}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                </motion.div>
              </motion.button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className={`
                  md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                  ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-white/5'
                      : 'text-gray-500 hover:text-navy-900 hover:bg-gray-100'
                  }
                `}
              >
                <FiMenu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`
                fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden
                backdrop-blur-xl border-l
                ${
                  theme === 'dark'
                    ? 'bg-navy-900/90 border-white/10'
                    : 'bg-white/90 border-gray-200'
                }
              `}
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className={`
                      w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                      ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-white hover:bg-white/5'
                          : 'text-gray-500 hover:text-navy-900 hover:bg-gray-100'
                      }
                    `}
                  >
                    <FiX size={22} />
                  </button>
                </div>

                {/* Nav links */}
                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map(({ label, id }, i) => (
                    <motion.button
                      key={id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => scrollTo(id)}
                      className={`
                        text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors
                        ${
                          activeSection === id
                            ? 'text-seafoam bg-seafoam/10'
                            : theme === 'dark'
                              ? 'text-gray-300 hover:text-white hover:bg-white/5'
                              : 'text-gray-600 hover:text-navy-900 hover:bg-gray-100'
                        }
                      `}
                    >
                      {label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
