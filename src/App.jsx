import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ArrowRight, Cpu, MessageSquare, ChevronRight, CheckCircle2,
  Briefcase, Code2, BrainCircuit, Database, Bot, Globe, ShieldCheck,
  BarChart3, ShoppingBag, Eye, FileText, Zap, MonitorSmartphone,
  Lightbulb, PenTool, Rocket, Sparkles
} from 'lucide-react';

/* ========== Scroll Reveal ========== */
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ========== MAIN APP ========== */
const WiseUpTech = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  /* ========== NAVBAR ========== */
  const Navbar = () => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('home')}>
          <img src="/logo.png" alt="WiseUp Tech Logo" className="h-10 w-auto object-contain drop-shadow-sm" />
          <span className="text-xl font-heading font-bold tracking-tight text-[#1B4F8A]">
            Wise Up Tech
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Home', page: 'home' },
            { label: 'Services', page: 'home' },
            { label: 'Solutions', page: 'portfolio' }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigateTo(item.page)}
              className="px-5 py-2 text-sm font-semibold rounded-full transition-all text-[#4A5568] hover:bg-[#E8F1FA] hover:text-[#1B4F8A]"
            >
              {item.label}
            </button>
          ))}
          <div className="pl-3">
            <button className="bg-[#1B4F8A] hover:bg-[#143D6B] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2 text-sm">
              <Sparkles size={16} /> Get Consultation
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#4A5568] p-2 rounded-full hover:bg-[#E8F1FA] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white fixed inset-x-0 top-[70px] shadow-xl border-t border-[#E2E8F0] transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}>
        <div className="p-4 flex flex-col gap-2">
          <button onClick={() => navigateTo('home')} className="text-left px-4 py-3 rounded-xl text-[#4A5568] font-semibold hover:bg-[#E8F1FA] hover:text-[#1B4F8A] transition-colors">Home</button>
          <button onClick={() => navigateTo('home')} className="text-left px-4 py-3 rounded-xl text-[#4A5568] font-semibold hover:bg-[#E8F1FA] hover:text-[#1B4F8A] transition-colors">Services</button>
          <button onClick={() => navigateTo('portfolio')} className="text-left px-4 py-3 rounded-xl text-[#4A5568] font-semibold hover:bg-[#E8F1FA] hover:text-[#1B4F8A] transition-colors">Solutions</button>
          <div className="h-px bg-[#E2E8F0] my-1"></div>
          <button className="bg-[#1B4F8A] text-white w-full py-3.5 rounded-xl font-semibold shadow-sm active:scale-[0.98] transition-transform">
            Get Consultation
          </button>
        </div>
      </div>
    </nav>
  );

  /* ========== FOOTER ========== */
  const Footer = () => (
    <footer className="bg-[#1B3A5C] text-[#CBD5E0] py-16">
      <div className="container mx-auto px-6 md:px-8 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 rounded-lg p-1.5 flex items-center">
              <img src="/logo.png" alt="WiseUp Tech Logo" className="h-8 w-auto object-contain" />
            </div>
            <span className="text-xl font-bold font-heading text-white">Wise Up Tech</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#E2E8F0]">
            Tech Consulting Partner ที่พร้อมเดินเคียงข้างธุรกิจของคุณ เปลี่ยนความซับซ้อนของเทคโนโลยี ให้เป็นพลังขับเคลื่อนธุรกิจที่เรียบง่าย
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white">Services</h4>
          <ul className="space-y-3 text-sm text-[#E2E8F0]">
            {['AI Solutions', 'BI & Data', 'Web Development'].map((item) => (
              <li key={item}>
                <button onClick={() => navigateTo('portfolio')} className="hover:text-[#F5A623] transition-colors text-left">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-[#E2E8F0]">
            <li className="flex items-center gap-2">
              <Globe size={16} className="text-[#F5A623]" />
              <span>Bangkok, Thailand</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare size={16} className="text-[#F5A623]" />
              <span>contact@wiseuptech.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-8 mt-12 pt-8 border-t border-[#2D4A6A] text-center text-sm text-[#CBD5E0]">
        © {new Date().getFullYear()} Wise Up Tech. All rights reserved.
      </div>
    </footer>
  );

  /* ========== HOME VIEW ========== */
  const HomeView = () => {
    const services = [
      {
        id: 1,
        title: "Digital Strategy",
        titleThai: "วางแผนกลยุทธ์",
        description: "ให้คำปรึกษาและวาง Roadmap เพื่อให้การลงทุนเทคโนโลยีคุ้มค่าที่สุด",
        icon: <Briefcase className="w-6 h-6 text-[#1B4F8A]" />,
        illustration: "/strategy-illustration.png"
      },
      {
        id: 2,
        title: "Enterprise Software",
        titleThai: "พัฒนาระบบ",
        description: "สร้าง Web/App และเชื่อมต่อระบบ API ที่ซับซ้อนให้ทำงานราบรื่น",
        icon: <Code2 className="w-6 h-6 text-[#1B4F8A]" />,
        illustration: "/development-illustration.png"
      },
      {
        id: 3,
        title: "Data & AI",
        titleThai: "ต่อยอดข้อมูล",
        description: "Dashboard, BI และ AI Chatbot เพื่อช่วยตัดสินใจและลดงานคน",
        icon: <BrainCircuit className="w-6 h-6 text-[#F5A623]" />,
        illustration: "/data-ai-illustration.png"
      }
    ];

    return (
      <>
        {/* ===== 1. HERO — Full-width Background Image ===== */}
        <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-bg.png"
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Warm overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto py-32">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[#1B4F8A] text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
                Make Complexity, Simple
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1B4F8A] leading-tight tracking-tight mb-6 font-heading drop-shadow-sm">
                Wise Up Tech
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-lg md:text-xl text-[#2D3748]/80 max-w-xl mx-auto leading-relaxed mb-10">
                เปลี่ยนความซับซ้อนของเทคโนโลยี<br />
                ให้เป็นพลังขับเคลื่อนธุรกิจที่เรียบง่าย
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#1B4F8A] hover:bg-[#143D6B] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-2 text-base backdrop-blur-sm">
                  ปรึกษาโปรเจกต์ฟรี <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => navigateTo('portfolio')}
                  className="bg-white/80 backdrop-blur-sm text-[#1B4F8A] border border-[#1B4F8A]/20 hover:bg-white hover:border-[#1B4F8A]/40 px-8 py-4 rounded-full font-semibold transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-base"
                >
                  ดูโซลูชันของเรา
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </header>

        {/* ===== 2. TECH STACK BAR ===== */}
        <section className="py-8 bg-[#FAFBFD] border-y border-[#E2E8F0]">
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
              {[
                { icon: <Cpu size={22} />, label: "Cloud Native" },
                { icon: <Database size={22} />, label: "Big Data" },
                { icon: <BrainCircuit size={22} />, label: "AI Engine" },
                { icon: <ShieldCheck size={22} />, label: "Security" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#64748B] font-medium text-sm">
                  <span className="text-[#1B4F8A]">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. SERVICES ===== */}
        <section className="py-24 bg-[#E8F1FA]/30">
          <div className="container mx-auto px-6 md:px-8">
            <RevealOnScroll>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-bold uppercase tracking-wider">Our Services</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-5 font-heading">
                  โซลูชันที่ตอบโจทย์ทุกสเตจธุรกิจ
                </h2>
                <p className="text-[#64748B] text-lg">
                  เราออกแบบบริการให้ครอบคลุม เพื่อให้คุณมั่นใจว่าทุกการลงทุนจะคุ้มค่าที่สุด
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <RevealOnScroll key={service.id} delay={index * 120}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group h-full cursor-pointer border border-[#E2E8F0] hover:border-[#1B4F8A]/20 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                    {/* Illustration */}
                    <div className="h-52 w-full bg-[#FAFBFD] overflow-hidden relative flex items-center justify-center p-4">
                      <img
                        src={service.illustration}
                        alt={service.title}
                        className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-7 pt-5 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-[#E8F1FA] flex items-center justify-center">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#2D3748] font-heading">
                          {service.title}
                        </h3>
                      </div>

                      <h4 className="text-[#1B4F8A] font-semibold mb-3 text-sm">{service.titleThai}</h4>
                      <p className="text-[#64748B] text-sm leading-relaxed mb-5 flex-grow">
                        {service.description}
                      </p>

                      <div className="inline-flex items-center bg-[#FFF8E1] text-[#B07D10] px-4 py-2 rounded-full font-semibold text-sm w-fit group-hover:bg-[#F5A623] group-hover:text-white transition-all">
                        ดูรายละเอียด <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. WHY US (EMPATHY) ===== */}
        <section className="py-24 bg-[#FFF8E1]/50 overflow-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <RevealOnScroll className="order-2 lg:order-1">
                <div className="relative p-6 bg-white rounded-3xl shadow-lg">
                  <img
                    src="/hero-illustration.png"
                    alt="Team collaborating"
                    className="relative rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </RevealOnScroll>

              <div className="space-y-8 order-1 lg:order-2">
                <RevealOnScroll delay={100}>
                  <div className="inline-block px-3 py-1 mb-3 rounded-lg bg-[#FFF8E1] text-[#B07D10] text-xs font-bold uppercase tracking-wider">Why Us</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-5 font-heading leading-tight">
                    เราเข้าใจว่า... <br />
                    <span className="text-[#1B4F8A]">เทคโนโลยีที่ยาก คือเทคโนโลยีที่ไร้ค่า</span>
                  </h2>
                  <p className="text-[#64748B] text-lg mb-6 leading-relaxed">
                    เราจึงไม่แค่รับโจทย์แล้วไปทำ แต่เราจะถามจนกว่าจะมั่นใจว่าสิ่งที่คุณจะได้ คือสิ่งที่แก้ปัญหาให้คุณได้จริงๆ
                  </p>
                </RevealOnScroll>

                <div className="space-y-4">
                  {[
                    { title: "คุยภาษาคน ไม่ต้องแปล", desc: "แปลงศัพท์ Tech ยากๆ ให้เป็นภาษาธุรกิจ", color: "bg-[#E8F1FA]", iconColor: "text-[#1B4F8A]" },
                    { title: "ไม่ทิ้งงาน คือมาตรฐาน", desc: "วางแผนชัดเจน อัปเดตงานสม่ำเสมอ", color: "bg-[#FFF8E1]", iconColor: "text-[#F5A623]" },
                    { title: "คิดเผื่ออนาคตเสมอ", desc: "ระบบรองรับการเติบโต ไม่ต้องรื้อทำใหม่", color: "bg-[#E8F1FA]", iconColor: "text-[#1B4F8A]" }
                  ].map((item, idx) => (
                    <RevealOnScroll key={idx} delay={200 + (idx * 100)}>
                      <div className="flex gap-4 items-center group p-4 rounded-2xl bg-white hover:shadow-md transition-all border border-transparent hover:border-[#E2E8F0]">
                        <div className={`w-11 h-11 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 size={22} className={item.iconColor} />
                        </div>
                        <div>
                          <h4 className="text-[#2D3748] font-bold text-base mb-0.5">{item.title}</h4>
                          <p className="text-[#64748B] text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. SOLUTIONS SHOWCASE ===== */}
        <section className="py-24 bg-[#FAFBFD]">
          <div className="container mx-auto px-6 md:px-8">
            <RevealOnScroll>
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-3 font-heading">
                    โซลูชันที่เราพร้อมสร้างให้คุณ
                  </h2>
                  <p className="text-[#64748B] text-lg">นวัตกรรมที่จับต้องได้จริง</p>
                </div>
                <button onClick={() => navigateTo('portfolio')} className="group flex items-center gap-2 bg-white text-[#1B4F8A] border border-[#E2E8F0] hover:border-[#1B4F8A] font-semibold hover:shadow-md px-6 py-3 rounded-full transition-all">
                  ดูทั้งหมด <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Recommendation",
                  tag: "AI Solution",
                  image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=600",
                  result: "เพิ่มยอดขายด้วยระบบแนะนำที่รู้ใจลูกค้า"
                },
                {
                  title: "Executive Dashboard",
                  tag: "BI & Data",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
                  result: "เห็นทุกตัวเลขสำคัญในหน้าเดียว"
                },
                {
                  title: "Modern Platform",
                  tag: "Web & Mobile",
                  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
                  result: "ยกระดับภาพลักษณ์องค์กรสู่สากล"
                }
              ].map((work, idx) => (
                <RevealOnScroll key={idx} delay={idx * 100}>
                  <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#E2E8F0]" onClick={() => navigateTo('portfolio')}>
                    <div className="relative overflow-hidden aspect-[4/3] m-3 rounded-xl">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#1B4F8A] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
                        {work.tag}
                      </div>
                    </div>

                    <div className="p-6 pt-3">
                      <h3 className="text-lg font-bold text-[#2D3748] mb-2 font-heading">{work.title}</h3>
                      <p className="text-[#64748B] text-sm flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#F5A623]" />
                        {work.result}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. PROCESS STEPS ===== */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4 font-heading">
                  ขั้นตอนการทำงานที่ "โปร่งใส"
                </h2>
                <p className="text-[#64748B] max-w-xl mx-auto text-lg">
                  มาตรฐานการทำงาน เพื่อให้คุณมั่นใจว่าจะได้รับงานที่มีคุณภาพ ตรงเวลา และงบไม่บานปลาย
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-12 left-[14%] right-[14%] h-0.5 border-t-2 border-dashed border-[#E2E8F0] -z-0"></div>

              {[
                { icon: <Lightbulb size={26} />, step: "01", title: "Plan", desc: "วิเคราะห์โจทย์", bg: "bg-[#E8F1FA]", iconColor: "text-[#1B4F8A]", borderColor: "border-[#E8F1FA]" },
                { icon: <PenTool size={26} />, step: "02", title: "Design", desc: "ออกแบบ UX/UI", bg: "bg-[#FFF8E1]", iconColor: "text-[#F5A623]", borderColor: "border-[#FFF8E1]" },
                { icon: <Code2 size={26} />, step: "03", title: "Build", desc: "พัฒนาและทดสอบ", bg: "bg-[#E8F1FA]", iconColor: "text-[#1B4F8A]", borderColor: "border-[#E8F1FA]" },
                { icon: <Rocket size={26} />, step: "04", title: "Deploy", desc: "ส่งมอบและดูแล", bg: "bg-[#FFF8E1]", iconColor: "text-[#F5A623]", borderColor: "border-[#FFF8E1]" }
              ].map((item, idx) => (
                <RevealOnScroll key={idx} delay={idx * 100}>
                  <div className="relative flex flex-col items-center text-center group z-10">
                    <div className={`w-24 h-24 bg-white ${item.borderColor} border-4 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-sm group-hover:shadow-lg transition-all group-hover:scale-110 duration-300`}>
                      <div className={`${item.bg} w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full flex items-center justify-center`}>
                        <div className={item.iconColor}>{item.icon}</div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#2D3748] mb-1 font-heading">{item.title}</h3>
                    <p className="text-[#64748B] text-sm">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. FINAL CTA ===== */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#E8F1FA] via-white to-[#FFF8E1]">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#E8F1FA] rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFF8E1] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D3748] mb-6 font-heading leading-tight">
                พร้อมเปลี่ยนไอเดีย... <br />
                ให้กลายเป็นความจริงหรือยัง?
              </h2>
              <p className="text-[#64748B] text-lg mb-10 max-w-2xl mx-auto">
                อย่าปล่อยให้ความซับซ้อนหยุดยั้งการเติบโตของคุณ <br />
                เราพร้อมหาทางออกที่ดีที่สุดให้
              </p>
              <button className="bg-[#1B4F8A] hover:bg-[#143D6B] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] inline-flex items-center gap-3">
                เริ่มต้นพูดคุยกับเรา <MessageSquare size={22} />
              </button>
            </RevealOnScroll>
          </div>
        </section>
      </>
    );
  };

  /* ========== PORTFOLIO VIEW ========== */
  const PortfolioView = () => {
    const portfolioItems = [
      {
        category: "AI & Data Intelligence",
        items: [
          {
            title: "Recommendation System",
            tags: ["E-commerce", "Personalization"],
            desc: "ระบบแนะนำสินค้าและคอนเทนต์อัจฉริยะ ช่วยเพิ่มยอดขายและ Engagement",
            icon: <ShoppingBag size={26} />
          },
          {
            title: "Smart Chatbot + RAG",
            tags: ["Support", "AI"],
            desc: "แชทบอทที่เข้าใจบริบทองค์กรแม่นยำ ตอบคำถามจากฐานข้อมูลได้ทันที",
            icon: <Bot size={26} />
          },
          {
            title: "Computer Vision & OCR",
            tags: ["Automation", "Efficiency"],
            desc: "ระบบอ่านเอกสารอัตโนมัติและตรวจจับวัตถุ ลดเวลาการทำงาน Manual",
            icon: <Eye size={26} />
          }
        ]
      },
      {
        category: "Business Intelligence (BI)",
        items: [
          {
            title: "Executive Dashboard",
            tags: ["Real-time", "Analytics"],
            desc: "แดชบอร์ดสรุปภาพรวมธุรกิจสำหรับผู้บริหาร ดูยอดขายและ KPI ได้แบบ Real-time",
            icon: <BarChart3 size={26} />
          },
          {
            title: "Automated Reporting",
            tags: ["Efficiency", "Data"],
            desc: "ระบบออกรายงานอัตโนมัติ ลดเวลาการทำ Excel ซ้ำซาก เปลี่ยนข้อมูลให้เป็นกราฟ",
            icon: <FileText size={26} />
          }
        ]
      },
      {
        category: "Web & Platforms (Win Fast)",
        items: [
          {
            title: "SME Starter Package",
            tags: ["Fast Deploy", "E-commerce"],
            desc: "เว็บไซต์สำเร็จรูปสำหรับธุรกิจขนาดเล็ก ขายสินค้า สวยงาม รวดเร็ว รองรับ SEO",
            icon: <Zap size={26} />
          },
          {
            title: "Corporate Website",
            tags: ["Branding", "Professional"],
            desc: "เว็บไซต์องค์กรที่เน้นความน่าเชื่อถือ ดีไซน์ทันสมัย สะท้อนภาพลักษณ์มืออาชีพ",
            icon: <MonitorSmartphone size={26} />
          }
        ]
      }
    ];

    return (
      <div className="pt-24 pb-20 min-h-screen bg-[#FAFBFD]">
        {/* Header */}
        <div className="bg-white py-20 border-b border-[#E2E8F0] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8F1FA] rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3"></div>
          <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
            <RevealOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 font-heading text-[#2D3748]">Our Solutions</h1>
              <p className="text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
                โซลูชันที่ยืดหยุ่น พร้อมปรับแต่งให้เข้ากับเป้าหมายของคุณที่สุด
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="container mx-auto px-6 md:px-8 space-y-20 mt-16">
          {portfolioItems.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <RevealOnScroll delay={idx * 80}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-1.5 rounded-full ${idx % 2 === 0 ? 'bg-[#1B4F8A]' : 'bg-[#F5A623]'}`}></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2D3748] font-heading">
                    {section.category}
                  </h2>
                </div>
              </RevealOnScroll>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIdx) => (
                  <RevealOnScroll key={itemIdx} delay={itemIdx * 100}>
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E2E8F0] hover:border-[#1B4F8A]/20 hover:-translate-y-1 p-7 group h-full cursor-default relative overflow-hidden">
                      <div className="flex justify-between items-start mb-5 relative z-10">
                        <div className={`w-13 h-13 ${idx % 2 === 0 ? 'bg-[#E8F1FA] text-[#1B4F8A]' : 'bg-[#FFF8E1] text-[#F5A623]'} rounded-xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-[#2D3748] mb-3 font-heading">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 bg-[#FAFBFD] text-[#64748B] rounded-full border border-[#E2E8F0]">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-[#64748B] text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  /* ========== RENDER ========== */
  return (
    <div className="min-h-screen bg-white font-sans text-[#4A5568]">
      <Navbar />
      {currentPage === 'home' ? <HomeView /> : <PortfolioView />}
      <Footer />
    </div>
  );
};

export default WiseUpTech;