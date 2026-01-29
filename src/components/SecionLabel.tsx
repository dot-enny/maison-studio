import { motion } from "motion/react";

interface SectionLabelProps {
  text: string;
  color?: 'default' | 'white';
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ text, color = 'default' }) => (
  <motion.span 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className={`inline-block text-xs font-sans font-medium tracking-widest uppercase mb-12 ${
      color === 'white' ? 'text-white/60' : 'text-neutral-500'
    }`}
  >
    {text}
  </motion.span>
);