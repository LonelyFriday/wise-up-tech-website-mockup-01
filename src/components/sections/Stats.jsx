import { motion } from 'framer-motion';
import { stats } from '../../data/stats';
import { staggerContainer, defaultViewport } from '../../data/animations';
import AnimatedCounter from '../ui/AnimatedCounter';

const dividerVariant = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="container mx-auto px-6 md:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative flex justify-center">
              {/* Divider between items (desktop only) */}
              {idx > 0 && (
                <motion.div
                  variants={dividerVariant}
                  className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-px bg-border-light origin-top"
                />
              )}
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
