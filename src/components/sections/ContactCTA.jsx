import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { pulseSlow } from '../../data/animations';
import RevealOnScroll from '../ui/RevealOnScroll';
import Button from '../ui/Button';

export default function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-light-blue via-white to-warm-yellow">
      {/* Animated blobs */}
      <motion.div
        {...pulseSlow}
        className="absolute top-0 right-0 w-72 h-72 bg-light-blue rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-warm-yellow rounded-full mix-blend-multiply filter blur-3xl translate-x-[-50%] translate-y-1/2"
      />

      <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
        <RevealOnScroll>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-text-dark mb-6 font-heading leading-tight"
          >
            พร้อมเปลี่ยนไอเดีย... <br />
            ให้กลายเป็นความจริงหรือยัง?
          </motion.h2>
          <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            อย่าปล่อยให้ความซับซ้อนหยุดยั้งการเติบโตของคุณ <br />
            เราพร้อมหาทางออกที่ดีที่สุดให้
          </p>
          <Button to="/contact" size="xl">
            เริ่มต้นพูดคุยกับเรา <MessageSquare size={22} />
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
