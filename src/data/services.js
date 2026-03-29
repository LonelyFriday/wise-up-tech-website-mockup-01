export const services = [
  {
    id: 1,
    title: "Digital Strategy",
    titleThai: "วางแผนกลยุทธ์",
    description: "ให้คำปรึกษาและวาง Roadmap เพื่อให้การลงทุนเทคโนโลยีคุ้มค่าที่สุด",
    iconKey: "briefcase",
    illustration: "/strategy-illustration.png",
  },
  {
    id: 2,
    title: "Enterprise Software",
    titleThai: "พัฒนาระบบ",
    description: "สร้าง Web/App และเชื่อมต่อระบบ API ที่ซับซ้อนให้ทำงานราบรื่น",
    iconKey: "code",
    illustration: "/development-illustration.png",
  },
  {
    id: 3,
    title: "Data & AI",
    titleThai: "ต่อยอดข้อมูล",
    description: "Dashboard, BI และ AI Chatbot เพื่อช่วยตัดสินใจและลดงานคน",
    iconKey: "brain",
    illustration: "/data-ai-illustration.png",
  },
];

export const techStack = [
  { iconKey: "cpu", label: "Cloud Native" },
  { iconKey: "database", label: "Big Data" },
  { iconKey: "brain", label: "AI Engine" },
  { iconKey: "shield", label: "Security" },
];

export const processSteps = [
  {
    step: "01", iconKey: "clipboardList", title: "Plan", variant: "primary",
    titleThai: "วางแผนโปรเจกต์",
    desc: "วิเคราะห์โจทย์ธุรกิจ กำหนดขอบเขตงาน และวาง Roadmap ร่วมกัน",
    deliverables: ["Project Scope & Timeline", "ประมาณการงบที่ชัดเจน", "Kickoff Meeting"],
  },
  {
    step: "02", iconKey: "penTool", title: "Design", variant: "accent",
    titleThai: "ออกแบบโซลูชัน",
    desc: "ออกแบบ UX/UI และสถาปัตยกรรมระบบ ให้คุณเห็นภาพก่อนลงมือสร้าง",
    deliverables: ["Wireframe & Prototype", "System Architecture", "คุณรีวิวและ Approve"],
  },
  {
    step: "03", iconKey: "code", title: "Build", variant: "primary",
    titleThai: "พัฒนาและทดสอบ",
    desc: "พัฒนาระบบเป็น Sprint อัปเดตความคืบหน้าทุกสัปดาห์",
    deliverables: ["Sprint Demo ทุก 2 สัปดาห์", "รายงานความคืบหน้า", "QA & Testing"],
  },
  {
    step: "04", iconKey: "rocket", title: "Deploy", variant: "accent",
    titleThai: "ส่งมอบและดูแล",
    desc: "ส่งมอบงาน พร้อมซัพพอร์ตหลัง Go-Live",
    deliverables: ["Go-Live Checklist", "Training ทีมงาน", "Post-launch Support"],
  },
];

export const whyUsPoints = [
  { title: "คุยภาษาคน ไม่ต้องแปล", desc: "แปลงศัพท์ Tech ยากๆ ให้เป็นภาษาธุรกิจ", variant: "primary" },
  { title: "ไม่ทิ้งงาน คือมาตรฐาน", desc: "วางแผนชัดเจน อัปเดตงานสม่ำเสมอ", variant: "accent" },
  { title: "คิดเผื่ออนาคตเสมอ", desc: "ระบบรองรับการเติบโต ไม่ต้องรื้อทำใหม่", variant: "primary" },
];
