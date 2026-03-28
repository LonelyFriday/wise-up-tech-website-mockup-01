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
  { iconKey: "lightbulb", step: "01", title: "Plan", desc: "วิเคราะห์โจทย์", variant: "primary" },
  { iconKey: "penTool", step: "02", title: "Design", desc: "ออกแบบ UX/UI", variant: "accent" },
  { iconKey: "code", step: "03", title: "Build", desc: "พัฒนาและทดสอบ", variant: "primary" },
  { iconKey: "rocket", step: "04", title: "Deploy", desc: "ส่งมอบและดูแล", variant: "accent" },
];

export const whyUsPoints = [
  { title: "คุยภาษาคน ไม่ต้องแปล", desc: "แปลงศัพท์ Tech ยากๆ ให้เป็นภาษาธุรกิจ", variant: "primary" },
  { title: "ไม่ทิ้งงาน คือมาตรฐาน", desc: "วางแผนชัดเจน อัปเดตงานสม่ำเสมอ", variant: "accent" },
  { title: "คิดเผื่ออนาคตเสมอ", desc: "ระบบรองรับการเติบโต ไม่ต้องรื้อทำใหม่", variant: "primary" },
];
