"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import useRevealed from "@/lib/useRevealed";

/**
 * عنوان يظهر كلمة كلمة من خلف قناع — يُستخدم للعناوين العرضية الكبيرة.
 * الأسطر تُفصل بـ \n داخل النص.
 */
export default function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const shown = useRevealed(ref, 0.25);
  const reduce = useReducedMotion();
  const lines = text.split("\n");

  return (
    <span ref={ref} className={className}>
      {lines.map((line, li) => {
        const words = line.split(" ");
        return (
          <span key={li} className="block overflow-hidden pb-[0.12em]">
            {words.map((word, wi) => (
              <motion.span
                key={`${li}-${wi}`}
                className={`inline-block ${wordClassName ?? ""}`}
                initial={reduce ? { opacity: 1 } : { y: "110%", opacity: 0 }}
                animate={shown ? { y: 0, opacity: 1 } : undefined}
                transition={{
                  duration: 0.9,
                  delay: delay + (li * 3 + wi) * 0.07,
                  ease: [0.22, 0.7, 0.2, 1],
                }}
              >
                {word}
                {wi < words.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </span>
        );
      })}
    </span>
  );
}
