import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ScanLine } from 'lucide-react';
import { motion } from 'framer-motion';
import { showcaseItems } from '../../data/solutions';
import { staggerContainer, staggerItem, defaultViewport } from '../../data/animations';
import Button from '../ui/Button';
import Card from '../ui/Card';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function SolutionsShowcase() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-off-white">
      <div className="container mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-3 font-heading">
                โซลูชันที่เราพร้อมสร้างให้คุณ
              </h2>
              <p className="text-text-muted text-lg">นวัตกรรมที่จับต้องได้จริง</p>
            </div>
            <Button to="/solutions" variant="outline">
              ดูทั้งหมด <ArrowRight size={18} />
            </Button>
          </div>
        </RevealOnScroll>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid md:grid-cols-3 gap-8"
        >
          {showcaseItems.map((work, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <Card className="cursor-pointer overflow-hidden group" onClick={() => navigate('/solutions')}>
                {/* Image */}
                <div className={`relative overflow-hidden aspect-[4/3] m-3 rounded-xl ${work.qrCode ? 'bg-white flex items-center justify-center p-6' : ''}`}>
                  <motion.img
                    src={work.image}
                    alt={work.title}
                    className={`${work.qrCode ? 'h-full w-auto object-contain' : 'w-full h-full object-cover'}`}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Hover overlay */}
                  {!work.qrCode && (
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300 rounded-xl" />
                  )}
                  <div className="absolute top-3 left-3 bg-navy text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
                    {work.tag}
                  </div>
                </div>

                <div className="p-6 pt-3">
                  <h3 className="text-lg font-bold text-text-dark mb-2 font-heading">{work.title}</h3>
                  <p className="text-text-muted text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-golden flex-shrink-0" />
                    {work.result}
                  </p>

                  {/* QR Code */}
                  {work.qrCode && (
                    <div className="mt-4 pt-4 border-t border-border-light flex items-center gap-4">
                      <img
                        src={work.qrCode}
                        alt={`QR Code สำหรับ ${work.title}`}
                        className="w-20 h-20 rounded-lg"
                        loading="lazy"
                        decoding="async"
                      />
                      <div>
                        <p className="text-sm font-semibold text-navy flex items-center gap-1.5">
                          <ScanLine size={14} /> Scan เพื่อใช้งาน
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">เพิ่มเพื่อนใน LINE</p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
