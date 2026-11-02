"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitWords from "../ui/SplitWords";
import Reveal from "../ui/Reveal";

/** شريط اقتباس بعرض الشاشة فوق صورة تتحرك بتأثير بارالاكس */
export default function QuoteBand({
  image,
  quote,
  body,
}: {
  image: string;
  quote: string;
  body: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12]);

  return (
    <div
      ref={ref}
      className="relative mt-[clamp(80px,9vw,140px)] grid min-h-[clamp(420px,58vw,620px)] items-center overflow-hidden text-white"
    >
      <motion.div className="absolute inset-0 -z-20" style={reduce ? undefined : { y, scale }}>
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,13,26,.9)_8%,rgba(2,13,26,.55)_55%,rgba(2,13,26,.82)_100%)]" />
      <div className="max-w-[1100px] px-6 py-[clamp(56px,7vw,110px)] sm:px-[clamp(22px,6vw,110px)]">
        <q className="block font-display text-[clamp(30px,5.2vw,80px)] leading-[1.18] text-balance [quotes:none]">
          <SplitWords text={quote} />
        </q>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[52ch] text-[14.5px] leading-[1.85] text-white/70">{body}</p>
        </Reveal>
      </div>
    </div>
  );
}
