import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navItems } from '../../data/navigation';
import Button from '../ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollPosition();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path.replace('/#', ''));
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src="/logo.png"
            alt="WiseUp Tech Logo"
            className="h-10 w-auto object-contain drop-shadow-sm"
            whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
          />
          <span className="text-xl font-heading font-bold tracking-tight text-navy">
            Wise Up Tech
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="relative px-5 py-2 text-sm font-semibold rounded-full transition-colors text-text-body hover:text-navy"
            >
              {item.label}
              {/* Animated active underline */}
              {isActive(item.path) && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-light-blue rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="pl-3">
            <Button to="/contact" size="md">
              <Sparkles size={16} /> Get Consultation
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-text-body p-2 rounded-full hover:bg-light-blue transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isMenuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-md fixed inset-x-0 top-[70px] shadow-xl border-t border-border-light overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.07, ease: 'easeOut' }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-left px-4 py-3 rounded-xl font-semibold transition-colors ${
                      isActive(item.path)
                        ? 'bg-light-blue text-navy'
                        : 'text-text-body hover:bg-light-blue hover:text-navy'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <div className="h-px bg-border-light my-1" />
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-navy text-white w-full py-3.5 rounded-xl font-semibold shadow-sm active:scale-[0.98] transition-transform text-center block mt-2"
                >
                  Get Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
