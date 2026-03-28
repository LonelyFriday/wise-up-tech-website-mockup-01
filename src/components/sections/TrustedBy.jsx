import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { clients } from '../../data/clients';
import RevealOnScroll from '../ui/RevealOnScroll';

// Double the list for seamless loop
const doubledClients = [...clients, ...clients];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <p className="text-center text-text-muted text-sm font-semibold uppercase tracking-widest mb-10">
            Trusted by leading companies
          </p>
        </RevealOnScroll>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 w-max"
        >
          {doubledClients.map((name, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-off-white border border-border-light text-text-muted hover:text-navy hover:border-navy/20 transition-colors flex-shrink-0"
            >
              <Building2 size={20} className="opacity-40" />
              <span className="font-semibold text-sm whitespace-nowrap">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
