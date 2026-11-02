"use client";

import { motion } from "framer-motion";

/** انتقال بين الصفحات: ظهور ناعم مع صعود خفيف عند كل تنقّل */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
