"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** شريط تقدّم القراءة أعلى الشاشة */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-right bg-gradient-to-l from-accent to-brand"
      aria-hidden="true"
    />
  );
}
