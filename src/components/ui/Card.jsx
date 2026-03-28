import { motion } from 'framer-motion';

export default function Card({ children, className = "", onClick, interactive = true }) {
  return (
    <motion.div
      whileHover={interactive ? {
        y: -8,
        boxShadow: '0 20px 40px rgba(27, 79, 138, 0.12)',
        transition: { duration: 0.3, ease: 'easeOut' },
      } : undefined}
      whileTap={interactive && onClick ? { scale: 0.98 } : undefined}
      className={`bg-white rounded-2xl shadow-sm transition-colors duration-300 border border-border-light hover:border-navy/20 ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </motion.div>
  );
}
