import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import RevealOnScroll from '../ui/RevealOnScroll';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

export default function Testimonials() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback((dir) => {
    setCurrent(([prev]) => {
      const next = (prev + dir + testimonials.length) % testimonials.length;
      return [next, dir];
    });
  }, []);

  // Auto-play — pause on touch/hover
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate, paused]);

  const testimonial = testimonials[current];

  return (
    <section className="py-24 bg-light-blue/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-navy/10 text-navy text-xs font-bold uppercase tracking-wider">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-heading">
              ลูกค้าพูดถึงเรา
            </h2>
          </div>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto relative">
          {/* Quote card */}
          <div
            className="relative min-h-[280px] md:min-h-[240px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border-light"
              >
                <Quote size={32} className="text-golden/40 mb-4" />
                <blockquote className="text-lg md:text-xl text-text-dark leading-relaxed mb-8 font-heading">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-text-dark">{testimonial.name}</p>
                  <p className="text-text-muted text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:text-navy hover:border-navy transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrent([idx, idx > current ? 1 : -1])}
                  className={`h-2 rounded-full transition-colors ${
                    idx === current ? 'bg-navy' : 'bg-border-light hover:bg-navy/30'
                  }`}
                  animate={{ width: idx === current ? 24 : 8 }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:text-navy hover:border-navy transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
