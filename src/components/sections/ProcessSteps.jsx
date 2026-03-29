import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { processSteps } from '../../data/services';
import { getIcon } from '../../data/icons';
import { staggerContainer, defaultViewport } from '../../data/animations';
import SectionHeading from '../ui/SectionHeading';

const milestoneStatuses = ['completed', 'completed', 'active', 'upcoming'];

const milestoneCardVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const milestoneDotVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

function MilestoneDot({ status, iconKey }) {
  if (status === 'completed') {
    return (
      <motion.div
        variants={milestoneDotVariant}
        className="relative z-10 flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-navy flex items-center justify-center shadow-sm"
      >
        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
      </motion.div>
    );
  }

  if (status === 'active') {
    return (
      <motion.div variants={milestoneDotVariant} className="relative z-10 flex-shrink-0">
        <motion.div
          className="absolute inset-[-4px] rounded-full bg-golden/20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative w-7 h-7 md:w-10 md:h-10 rounded-full bg-white border-[3px] border-golden flex items-center justify-center shadow-sm">
          {getIcon(iconKey, { className: 'w-3.5 h-3.5 md:w-5 md:h-5 text-golden' })}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={milestoneDotVariant}
      className="relative z-10 flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-white border-2 border-border-light flex items-center justify-center"
    >
      {getIcon(iconKey, { className: 'w-3.5 h-3.5 md:w-5 md:h-5 text-text-muted' })}
    </motion.div>
  );
}

function MilestoneCard({ item, status }) {
  const isPrimary = item.variant === 'primary';
  const bgColor = isPrimary ? 'bg-light-blue' : 'bg-warm-yellow';
  const iconColor = isPrimary ? 'text-navy' : 'text-golden';

  const isCompleted = status === 'completed';
  const isActive = status === 'active';

  return (
    <motion.div
      variants={milestoneCardVariant}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`flex-1 rounded-2xl border p-4 md:p-6 transition-all duration-300 cursor-default ${
        isActive
          ? 'bg-white border-golden/40 shadow-md'
          : isCompleted
            ? 'bg-white border-border-light hover:shadow-md hover:border-navy/20'
            : 'bg-off-white/50 border-border-light'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-xl ${bgColor} flex items-center justify-center`}>
          {getIcon(item.iconKey, { className: `w-5 h-5 ${iconColor}` })}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-text-muted tracking-wider">
              {item.step}
            </span>
            <h3 className="text-lg font-bold text-text-dark font-heading">{item.title}</h3>
            {isActive && (
              <span className="text-[10px] font-bold text-golden bg-warm-yellow px-2 py-0.5 rounded-full">
                In Progress
              </span>
            )}
          </div>
          <span className="text-navy text-sm font-semibold">{item.titleThai}</span>
        </div>
      </div>

      <p className="text-text-muted text-sm leading-relaxed mb-3">{item.desc}</p>

      <ul className="space-y-1.5">
        {item.deliverables.map((d, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
            <CheckCircle2
              size={14}
              className={`flex-shrink-0 ${isCompleted ? 'text-navy' : isActive ? 'text-golden' : 'text-border-light'}`}
            />
            {d}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          badge="Project Milestones"
          title="ติดตามทุกขั้นตอน ตั้งแต่เริ่มจนส่งมอบ"
          subtitle="ทุกโปรเจกต์มี Milestone ชัดเจน — คุณรู้ตลอดว่างานถึงไหน ไม่ต้องเดา"
        />

        {/* Progress bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex justify-between text-xs text-text-muted mb-2 font-semibold">
            <span>ความคืบหน้าตัวอย่าง</span>
            <span className="text-navy">3/4 Milestones</span>
          </div>
          <div className="h-1.5 bg-border-light rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-navy rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '75%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Vertical Timeline */}
        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline vertical line (background) */}
          <div className="absolute left-[13px] md:left-[19px] top-0 bottom-0 w-0.5 bg-border-light" />

          {/* Timeline vertical line (progress fill) */}
          <motion.div
            className="absolute left-[13px] md:left-[19px] top-0 w-0.5 bg-navy origin-top"
            initial={{ height: 0 }}
            whileInView={{ height: '62%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          />

          {processSteps.map((item, index) => {
            const status = milestoneStatuses[index];
            const isLast = index === processSteps.length - 1;

            return (
              <motion.div
                key={item.step}
                variants={{ hidden: {}, visible: {} }}
                className={`relative flex gap-4 md:gap-6 ${isLast ? '' : 'pb-8 md:pb-12'}`}
              >
                <MilestoneDot status={status} iconKey={item.iconKey} />
                <MilestoneCard item={item} status={status} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
