"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import useRevealed from "@/lib/useRevealed";

type Direction = "up" | "down" | "right" | "left" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 38 },
  down: { x: 0, y: -38 },
  right: { x: 42, y: 0 },
  left: { x: -42, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shown = useRevealed(ref, amount);
  const reduce = useReducedMotion();
  const { x, y } = offset[direction];

  const variants: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.75, delay, ease: [0.22, 0.7, 0.2, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={shown ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/** حاوية تتابع: تشغّل أبناءها واحداً تلو الآخر */
export function Stagger({
  children,
  className,
  gap = 0.08,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shown = useRevealed(ref, amount);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={shown ? "show" : "hidden"}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

/** عنصر داخل حاوية التتابع */
export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduce = useReducedMotion();
  const { x, y } = offset[direction];
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1 } : { opacity: 0, x, y },
        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: [0.22, 0.7, 0.2, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
