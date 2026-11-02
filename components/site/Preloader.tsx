"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

/** شاشة افتتاح قصيرة تظهر مرة واحدة لكل جلسة */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (reduce) return;
    try {
      if (sessionStorage.getItem("afs-intro") === "done") return;
      sessionStorage.setItem("afs-intro", "done");
    } catch {
      /* التخزين غير متاح — نعرضها عادي */
    }
    setOpen(true);
    const t = setTimeout(() => setOpen(false), 1750);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[linear-gradient(170deg,#0a2f55,#04172b_55%,#020d1a)]"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 0.7, 0.2, 1] }}
            >
              <Image src="/img/logo-mark.png" alt="" width={64} height={64} priority />
            </motion.div>
            <motion.div
              className="h-px w-[180px] origin-right bg-white/25"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.p
              className="font-display text-sm tracking-[0.2em] text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              AFS
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
