import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { metrics } from '../../data/resume';

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useAnimatedCounter(target: number, shouldStart: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  const hasStarted = useRef(false);

  const animate = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const isDecimal = target % 1 !== 0;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const current = easedProgress * target;

      setValue(isDecimal ? parseFloat(current.toFixed(3)) : Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    }

    requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    if (shouldStart) {
      animate();
    }
  }, [shouldStart, animate]);

  return value;
}

function MetricCard({
  label,
  value,
  suffix,
  index,
  isInView,
}: {
  label: string;
  value: number;
  suffix: string;
  index: number;
  isInView: boolean;
}) {
  const animatedValue = useAnimatedCounter(value, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-seafoam mb-2">
        {animatedValue}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="metrics" className="py-32">
      <div className="bg-gradient-to-b from-seafoam/5 to-transparent py-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-seafoam font-mono text-sm tracking-widest uppercase">
              BY THE NUMBERS
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <MetricCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
