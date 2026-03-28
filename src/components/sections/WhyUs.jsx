import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { whyUsPoints } from '../../data/services';
import { fadeInLeft, staggerContainer, defaultViewport } from '../../data/animations';
import RevealOnScroll from '../ui/RevealOnScroll';

const pointVariant = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function WhyUs() {
  return (
    <section className="py-24 bg-warm-yellow/50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image — slides in from left */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="order-2 lg:order-1"
          >
            <motion.div
              className="relative p-6 bg-white rounded-3xl shadow-lg"
              whileHover={{ rotate: -1, transition: { duration: 0.3 } }}
            >
              <img
                src="/hero-illustration.png"
                alt="Team collaborating"
                className="relative rounded-2xl w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-8 order-1 lg:order-2">
            <RevealOnScroll delay={100}>
              <div className="inline-block px-3 py-1 mb-3 rounded-lg bg-warm-yellow text-golden-muted text-xs font-bold uppercase tracking-wider">
                Why Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5 font-heading leading-tight">
                เราเข้าใจว่า... <br />
                <span className="text-navy">เทคโนโลยีที่ยาก คือเทคโนโลยีที่ไร้ค่า</span>
              </h2>
              <p className="text-text-muted text-lg mb-6 leading-relaxed">
                เราจึงไม่แค่รับโจทย์แล้วไปทำ แต่เราจะถามจนกว่าจะมั่นใจว่าสิ่งที่คุณจะได้ คือสิ่งที่แก้ปัญหาให้คุณได้จริงๆ
              </p>
            </RevealOnScroll>

            <motion.div
              className="space-y-4"
              variants={staggerContainer(0.12, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {whyUsPoints.map((item, idx) => {
                const isPrimary = item.variant === 'primary';
                return (
                  <motion.div key={idx} variants={pointVariant}>
                    <motion.div
                      className="flex gap-4 items-center group p-4 rounded-2xl bg-white hover:shadow-md transition-shadow border border-transparent hover:border-border-light cursor-default"
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    >
                      <motion.div
                        className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${isPrimary ? 'bg-light-blue' : 'bg-warm-yellow'}`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <CheckCircle2 size={22} className={isPrimary ? 'text-navy' : 'text-golden'} />
                      </motion.div>
                      <div>
                        <h4 className="text-text-dark font-bold text-base mb-0.5">{item.title}</h4>
                        <p className="text-text-muted text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
