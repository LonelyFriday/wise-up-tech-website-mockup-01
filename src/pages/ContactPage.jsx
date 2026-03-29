import { useState } from 'react';
import { MessageSquare, Send, MapPin, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight, defaultViewport } from '../data/animations';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import Button from '../components/ui/Button';

const serviceOptions = [
  "Digital Strategy / วางแผนกลยุทธ์",
  "Enterprise Software / พัฒนาระบบ",
  "Data & AI / ต่อยอดข้อมูล",
  "BI & Dashboard",
  "อื่นๆ",
];

function FormField({ label, id, required, children }) {
  return (
    <motion.div variants={staggerItem}>
      <label htmlFor={id} className="block text-sm font-semibold text-text-dark mb-2">
        {label} {required && <span className="text-golden">*</span>}
      </label>
      {children}
    </motion.div>
  );
}

const inputClasses = "w-full px-4 py-3 rounded-xl border border-border-light focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all duration-300 text-text-body placeholder:text-text-muted/50 hover:border-navy/30";

export default function ContactPage() {
  useDocumentTitle('ติดต่อเรา');

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend or Formspree
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-off-white">
      {/* Header */}
      <div className="bg-white py-20 border-b border-border-light relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-warm-yellow rounded-full mix-blend-multiply filter blur-3xl -translate-x-1/3 -translate-y-1/3"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-light-blue rounded-full mix-blend-multiply filter blur-3xl translate-x-1/3 translate-y-1/3"
        />
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-heading text-text-dark">
              ติดต่อเรา
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              พร้อมเริ่มต้นโปรเจกต์ใหม่? ปรึกษาฟรี ไม่มีค่าใช้จ่าย
            </p>
          </RevealOnScroll>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-8 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info — slide in from left */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-text-dark font-heading mb-6">ข้อมูลติดต่อ</h2>
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="space-y-6"
            >
              {[
                { icon: <MapPin size={20} />, label: "Location", value: "Bangkok, Thailand" },
                { icon: <Mail size={20} />, label: "Email", value: "contact@wiseuptech.co" },
                { icon: <MessageSquare size={20} />, label: "LINE", value: "@wiseuptech" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-10 h-10 bg-light-blue rounded-xl flex items-center justify-center text-navy flex-shrink-0"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm text-text-muted">{item.label}</p>
                    <p className="font-semibold text-text-dark">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Response time badge */}
            <motion.div
              variants={staggerItem}
              className="bg-warm-yellow/50 rounded-2xl p-5 border border-golden/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 size={18} className="text-golden" />
                <span className="font-semibold text-text-dark text-sm">ตอบกลับภายใน 24 ชม.</span>
              </div>
              <p className="text-text-muted text-sm">
                ทีมงานจะติดต่อกลับเพื่อพูดคุยรายละเอียดโปรเจกต์ของคุณ
              </p>
            </motion.div>
          </motion.div>

          {/* Form — slide in from right */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-2"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="bg-white rounded-2xl p-12 text-center shadow-sm border border-border-light"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                  className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Send size={28} className="text-navy" />
                </motion.div>
                <h3 className="text-2xl font-bold text-text-dark font-heading mb-3">
                  ส่งข้อมูลเรียบร้อย!
                </h3>
                <p className="text-text-muted mb-8">
                  ขอบคุณที่สนใจบริการของเรา ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>
                <Button to="/" variant="outline">
                  กลับหน้าหลัก
                </Button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                variants={staggerContainer(0.08, 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border-light space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="ชื่อ-นามสกุล" id="name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="สมชาย รักงาน"
                    />
                  </FormField>
                  <FormField label="อีเมล" id="email" required>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="you@company.com"
                    />
                  </FormField>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="บริษัท" id="company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="บริษัท ABC จำกัด"
                    />
                  </FormField>
                  <FormField label="บริการที่สนใจ" id="service">
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClasses} bg-white`}
                    >
                      <option value="">เลือกบริการ</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </FormField>
                </div>

                <FormField label="รายละเอียดโปรเจกต์" id="message" required>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    placeholder="อยากได้ระบบอะไร ปัญหาที่เจออยู่คืออะไร งบประมาณคร่าวๆ ฯลฯ"
                  />
                </FormField>

                <motion.div variants={staggerItem}>
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    ส่งข้อมูล <Send size={18} />
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
