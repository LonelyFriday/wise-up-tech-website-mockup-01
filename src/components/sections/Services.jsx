import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { getIcon } from '../../data/icons';
import { staggerContainer, staggerItem, defaultViewport } from '../../data/animations';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-light-blue/30">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          badge="Our Services"
          title="โซลูชันที่ตอบโจทย์ทุกสเตจธุรกิจ"
          subtitle="เราออกแบบบริการให้ครอบคลุม เพื่อให้คุณมั่นใจว่าทุกการลงทุนจะคุ้มค่าที่สุด"
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={staggerItem}>
              <Card
                className="h-full cursor-pointer relative overflow-hidden flex flex-col group"
                onClick={() => navigate('/solutions')}
              >
                {/* Illustration with zoom on hover */}
                <div className="h-52 w-full bg-off-white overflow-hidden relative flex items-center justify-center p-4">
                  <motion.img
                    src={service.illustration}
                    alt={service.title}
                    className="h-full w-auto object-contain"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-7 pt-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icon with bounce on card hover */}
                    <motion.div
                      className="p-2 rounded-xl bg-light-blue flex items-center justify-center"
                      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                    >
                      {getIcon(service.iconKey, { className: "w-6 h-6 text-navy" })}
                    </motion.div>
                    <h3 className="text-xl font-bold text-text-dark font-heading">
                      {service.title}
                    </h3>
                  </div>

                  <h4 className="text-navy font-semibold mb-3 text-sm">{service.titleThai}</h4>
                  <p className="text-text-muted text-sm leading-relaxed mb-5 flex-grow">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center bg-warm-yellow text-golden-muted px-4 py-2 rounded-full font-semibold text-sm w-fit group-hover:bg-golden group-hover:text-white transition-all duration-300">
                    ดูรายละเอียด
                    <motion.span
                      className="ml-1 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <ChevronRight size={16} />
                    </motion.span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
