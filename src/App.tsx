import { useEffect, useRef, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import { Helmet } from 'react-helmet-async';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import CustomCursor from './components/Hero/CustomCursor';
import { useKonamiCode } from './hooks/useKonamiCode';

const About = lazy(() => import('./components/About/About'));
const Timeline = lazy(() => import('./components/Timeline/Timeline'));
const SkillGrid = lazy(() => import('./components/Skills/SkillGrid'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Metrics = lazy(() => import('./components/Metrics/Metrics'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  useKonamiCode();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Kyle Gibson — Software Engineering Lead | AI Infrastructure</title>
        <meta
          name="description"
          content="Senior Software Engineer specializing in MLOps, Distributed Systems & AI Infrastructure. 8+ years building large-scale systems at Blue Origin and Alteryx."
        />
      </Helmet>

      <CustomCursor />
      <Nav />

      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Timeline />
          <SkillGrid />
          <Projects />
          <Metrics />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App;
