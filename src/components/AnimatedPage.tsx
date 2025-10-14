import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedPageProps {
  children: ReactNode;
}

const AnimatedPage = ({ children }: AnimatedPageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
