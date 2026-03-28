import { motion } from 'framer-motion';
import { processSteps } from '../../data/services';
import { getIcon } from '../../data/icons';
import { staggerContainer, defaultViewport } from '../../data/animations';
import RevealOnScroll from '../ui/RevealOnScroll';

const stepVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 200 } },
};

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 font-heading">
              ขั้นตอนการทำงานที่ "โปร่งใส"
            </h2>
            <p className="text-text-muted max-w-xl mx-auto text-lg">
              มาตรฐานการทำงาน เพื่อให้คุณมั่นใจว่าจะได้รับงานที่มีคุณภาพ ตรงเวลา และงบไม่บานปลาย
            </p>
          </div>
        </RevealOnScroll>

        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid md:grid-cols-4 gap-8 relative"
        >
          {/* Animated connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="hidden md:block absolute top-12 left-[14%] right-[14%] h-0.5 border-t-2 border-dashed border-border-light -z-0 origin-left"
          />

          {processSteps.map((item) => {
            const isPrimary = item.variant === 'primary';
            const bgColor = isPrimary ? 'bg-light-blue' : 'bg-warm-yellow';
            const borderColor = isPrimary ? 'border-light-blue' : 'border-warm-yellow';
            const iconColor = isPrimary ? 'text-navy' : 'text-golden';

            return (
              <motion.div
                key={item.step}
                variants={stepVariant}
                className="relative flex flex-col items-center text-center group z-10"
              >
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 },
                  }}
                  className={`w-24 h-24 bg-white ${borderColor} border-4 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-sm group-hover:shadow-lg transition-shadow duration-300 cursor-default`}
                >
                  <div className={`${bgColor} w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full flex items-center justify-center`}>
                    <div className={iconColor}>{getIcon(item.iconKey, { size: 26 })}</div>
                  </div>
                </motion.div>
                <h3 className="text-lg font-bold text-text-dark mb-1 font-heading">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
