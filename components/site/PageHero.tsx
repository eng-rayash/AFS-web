"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import Arrow from "./Arrow";
import SplitWords from "../ui/SplitWords";
import Magnetic from "../ui/Magnetic";

type Stat = { value: string; label: string };

/**
 * هيرو الصفحات الداخلية: سماء ليلية + صورة (مقصوصة أو شريط)
 * مع بارالاكس خفيف وعنوان ينكشف كلمة كلمة.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  alt,
  variant = "cutout",
  stats,
  action,
  short = false,
}: {
  eyebrow: string;
  title: string;
  lede: ReactNode;
  image: string;
  alt: string;
  variant?: "cutout" | "band";
  stats?: Stat[];
  action?: { href: string; label: string };
  short?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div className="px-3 pt-3 sm:px-7 sm:pt-3.5">
      <motion.header
        ref={ref}
        className={`relative isolate flex flex-col overflow-hidden rounded-[34px] bg-[linear-gradient(175deg,#0A2F55_0%,#04172B_55%,#020D1A_100%)] text-white ${
          short ? "min-h-[min(58vh,520px)]" : "min-h-[min(88vh,780px)]"
        }`}
      >
        {/* وهج برتقالي أسفل الصورة */}
        <div className="pointer-events-none absolute inset-x-[-10%] bottom-[-30%] z-0 h-[70%] bg-[radial-gradient(ellipse_60%_70%_at_50%_100%,rgba(242,151,21,.28),transparent_70%)]" />

        {variant === "cutout" ? (
          <motion.div
            className="absolute bottom-0 left-1/2 z-[2] w-[min(1500px,120%)] -translate-x-1/2"
            style={reduce ? undefined : { y: imgY }}
            initial={reduce ? { opacity: 0.92 } : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.92, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 0.7, 0.2, 1] }}
          >
            <Image
              src={image}
              alt={alt}
              width={1500}
              height={1000}
              priority
              sizes="120vw"
              className="cutout-mask h-auto w-full"
            />
          </motion.div>
        ) : (
          <motion.div
            className="absolute inset-0 z-0"
            style={reduce ? undefined : { y: imgY }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 0.7, 0.2, 1] }}
          >
            <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
          </motion.div>
        )}

        <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(180deg,rgba(2,13,26,.6)_0%,rgba(2,13,26,.12)_42%,rgba(2,13,26,.9)_100%)]" />

        <motion.div
          style={reduce ? undefined : { y: textY, opacity: fade }}
          className="relative z-[4] mt-auto w-full px-6 pb-[clamp(38px,5vw,64px)] sm:px-[clamp(22px,4vw,64px)]"
        >
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] text-accent"
          >
            <span className="block h-px w-8 bg-accent" />
            {eyebrow}
          </motion.p>

          <h1 className="display-gradient m-0 font-display text-[clamp(56px,11.6vw,190px)] leading-[0.98]">
            <SplitWords text={title} delay={0.1} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-5 max-w-[46ch] text-[clamp(16px,1.5vw,21px)] leading-[1.8] text-white/80"
          >
            {lede}
          </motion.p>

          {(stats || action) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mt-[clamp(28px,4vw,46px)] flex flex-wrap items-center justify-between gap-x-10 gap-y-4 border-t border-white/15 pt-6 text-[13.5px] text-white/60"
            >
              {stats && (
                <div className="flex flex-wrap gap-x-7 gap-y-2">
                  {stats.map((s) => (
                    <span key={s.label}>
                      <b className="font-medium text-white">{s.value}</b> · {s.label}
                    </span>
                  ))}
                </div>
              )}
              {action && (
                <Magnetic>
                  <Link
                    href={action.href}
                    className="inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pe-1.5 ps-4 text-[13.5px] font-medium text-deep"
                  >
                    {action.label}
                    <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-deep text-white">
                      <Arrow />
                    </span>
                  </Link>
                </Magnetic>
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.header>
    </div>
  );
}
