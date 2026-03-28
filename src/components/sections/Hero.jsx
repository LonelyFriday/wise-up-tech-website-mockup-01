import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '../ui/Button';
import { pulseSlow, floatSlow, floatFast } from '../../data/animations';

const textReveal = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <header ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />
      </motion.div>

      {/* Floating Decorative Blobs */}
      <motion.div
        {...pulseSlow}
        className="absolute top-20 right-[10%] w-64 h-64 bg-light-blue rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"
      />
      <motion.div
        {...floatSlow}
        className="absolute bottom-32 left-[5%] w-48 h-48 bg-warm-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"
      />
      <motion.div
        {...floatFast}
        className="absolute top-1/3 left-[15%] w-32 h-32 bg-golden/20 rounded-full filter blur-2xl opacity-30 pointer-events-none"
      />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto py-32"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-navy text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-golden"
            />
            Make Complexity, Simple
          </div>
        </motion.div>

        {/* Title — word-by-word reveal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight tracking-tight mb-6 font-heading drop-shadow-sm overflow-hidden">
          {'Wise Up Tech'.split(' ').map((word, i) => (
            <motion.span
              key={i}
              custom={0.15 + i * 0.12}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={textReveal}
          custom={0.5}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-text-dark/80 max-w-xl mx-auto leading-relaxed mb-10"
        >
          เปลี่ยนความซับซ้อนของเทคโนโลยี<br />
          ให้เป็นพลังขับเคลื่อนธุรกิจที่เรียบง่าย
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button to="/contact" size="lg">
            ปรึกษาโปรเจกต์ฟรี <ArrowRight size={20} />
          </Button>
          <Button to="/solutions" variant="secondary" size="lg">
            ดูโซลูชันของเรา
          </Button>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </header>
  );
}
