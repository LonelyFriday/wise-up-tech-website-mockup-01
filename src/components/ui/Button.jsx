import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all active:scale-[0.98]";

const variantClasses = {
  primary: "bg-navy hover:bg-navy-dark text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
  secondary: "bg-white/80 backdrop-blur-sm text-navy border border-navy/20 hover:bg-white hover:border-navy/40",
  outline: "bg-white text-navy border border-border-light hover:border-navy hover:shadow-md",
  ghost: "text-text-body hover:bg-light-blue hover:text-navy",
};

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-5 text-lg font-bold",
};

const MotionLink = motion.create(Link);

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const hoverAnimation = { scale: 1.03 };
  const tapAnimation = { scale: 0.97 };

  if (to) {
    return (
      <MotionLink
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        className={classes}
        to={to}
        {...props}
      >
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        className={classes}
        href={href}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
