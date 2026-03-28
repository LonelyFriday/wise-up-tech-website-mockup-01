import { motion } from 'framer-motion';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

export default function AnimatedCounter({ value, suffix = "", prefix = "", label, duration = 2000 }) {
  const { ref, count } = useAnimatedCounter(value, duration);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="text-4xl md:text-5xl font-bold text-navy font-heading mb-2"
      >
        {prefix}{count}{suffix}
      </motion.div>
      <p className="text-text-muted text-sm font-medium">{label}</p>
    </div>
  );
}
