import { motion } from 'framer-motion';
import { ScanLine } from 'lucide-react';
import { portfolioSections } from '../data/solutions';
import { getIcon } from '../data/icons';
import { staggerContainer, staggerItem, defaultViewport } from '../data/animations';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import RevealOnScroll from '../components/ui/RevealOnScroll';

export default function SolutionsPage() {
  useDocumentTitle('Solutions');

  return (
    <div className="pt-24 pb-20 min-h-screen bg-off-white">
      {/* Header */}
      <div className="bg-white py-20 border-b border-border-light relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-light-blue rounded-full mix-blend-multiply filter blur-3xl translate-x-1/3 -translate-y-1/3"
        />
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-heading text-text-dark">Our Solutions</h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              โซลูชันที่ยืดหยุ่น พร้อมปรับแต่งให้เข้ากับเป้าหมายของคุณที่สุด
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-6 md:px-8 space-y-20 mt-16">
        {portfolioSections.map((section, idx) => (
          <div key={idx} className="space-y-8">
            <RevealOnScroll delay={idx * 80}>
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`h-1.5 rounded-full ${idx % 2 === 0 ? 'bg-navy' : 'bg-golden'}`}
                />
                <h2 className="text-2xl md:text-3xl font-bold text-text-dark font-heading">
                  {section.category}
                </h2>
              </div>
            </RevealOnScroll>

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {section.items.map((item, itemIdx) => (
                <motion.div key={itemIdx} variants={staggerItem}>
                  <Card className="p-7 group h-full cursor-default relative overflow-hidden">
                    <div className="flex justify-between items-start mb-5 relative z-10">
                      {item.logo ? (
                        <motion.img
                          src={item.logo}
                          alt={item.title}
                          className="w-14 h-14 rounded-xl object-contain"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <motion.div
                          className={`w-13 h-13 rounded-xl flex items-center justify-center p-3 ${
                            idx % 2 === 0
                              ? 'bg-light-blue text-navy'
                              : 'bg-warm-yellow text-golden'
                          }`}
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {getIcon(item.iconKey, { size: 26 })}
                        </motion.div>
                      )}
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-text-dark mb-3 font-heading">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIdx) => (
                          <Badge
                            key={tagIdx}
                            className={tag === "LINE OA" ? "bg-[#06C755]/10 text-[#06C755] border-[#06C755]/20" : ""}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.desc}
                      </p>

                      {/* QR Code for services with LINE OA */}
                      {item.qrCode && (
                        <div className="mt-5 pt-4 border-t border-border-light flex items-center gap-4">
                          <img
                            src={item.qrCode}
                            alt={`QR Code สำหรับ ${item.title}`}
                            className="w-24 h-24 rounded-lg"
                            loading="lazy"
                            decoding="async"
                          />
                          <div>
                            <p className="text-sm font-semibold text-navy flex items-center gap-1.5">
                              <ScanLine size={14} /> Scan เพื่อใช้งาน
                            </p>
                            <p className="text-xs text-text-muted mt-1">เพิ่มเพื่อน LINE OA<br />เริ่มแปลภาษาได้ทันที</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-light-blue/0 to-light-blue/0 group-hover:from-light-blue/5 group-hover:to-warm-yellow/5 transition-all duration-500 rounded-2xl" />
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
