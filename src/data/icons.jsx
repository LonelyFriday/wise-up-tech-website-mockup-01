import {
  Briefcase, Code2, BrainCircuit, Cpu, Database, ShieldCheck,
  Lightbulb, PenTool, Rocket, ShoppingBag, Bot, Eye,
  BarChart3, FileText, Zap, MonitorSmartphone, Languages,
} from 'lucide-react';

const iconMap = {
  briefcase: Briefcase,
  code: Code2,
  brain: BrainCircuit,
  cpu: Cpu,
  database: Database,
  shield: ShieldCheck,
  lightbulb: Lightbulb,
  penTool: PenTool,
  rocket: Rocket,
  shoppingBag: ShoppingBag,
  bot: Bot,
  eye: Eye,
  barChart: BarChart3,
  fileText: FileText,
  zap: Zap,
  monitor: MonitorSmartphone,
  languages: Languages,
};

export function getIcon(key, props = {}) {
  const Icon = iconMap[key];
  if (!Icon) return null;
  return <Icon {...props} />;
}
