"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import useRevealed from "@/lib/useRevealed";

/**
 * صورة تنكشف من خلف قناع مع تقريب داخلي خفيف،
 * وعند المرور عليها تكبر قليلاً داخل إطارها.
 */
export default function RevealImage({
  src,
  alt,
  width,
  height,
  caption,
  className,
  priority = false,
  sizes = "(max-width: 960px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const shown = useRevealed(ref, 0.25);
  const reduce = useReducedMotion();
  const ease = [0.22, 0.7, 0.2, 1] as const;

  return (
    <motion.figure
      ref={ref}
      className={`group relative m-0 overflow-hidden rounded-[24px] ${className ?? ""}`}
      initial={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 100% 0)" }}
      animate={shown ? { clipPath: "inset(0 0 0% 0)", opacity: 1 } : undefined}
      transition={{ duration: 1, ease }}
    >
      <motion.div
        className="h-full w-full"
        initial={reduce ? undefined : { scale: 1.12 }}
        animate={shown ? { scale: 1 } : undefined}
        transition={{ duration: 1.3, ease }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,.7,.2,1)] group-hover:scale-[1.04]"
        />
      </motion.div>
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(2,13,26,.85)] to-transparent px-6 pb-4 pt-10 text-[12.5px] text-white">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
