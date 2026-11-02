"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { company } from "@/data/content";
import Arrow from "../site/Arrow";
import Magnetic from "../ui/Magnetic";

/** هيرو الصفحة الرئيسية — الصورة المقصوصة فوق سماء متدرّجة */
export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const wordY = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"]);
  const tagY = useTransform(scrollYProgress, [0, 1], ["0%", "46%"]);

  const ease = [0.22, 0.7, 0.2, 1] as const;

  return (
    <div className="px-3 pt-3 sm:px-7 sm:pt-3.5">
      <motion.header
        ref={ref}
        className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[34px] text-white
                   bg-[linear-gradient(180deg,#4A7DB5_0%,#7FA6D0_40%,#B9CDE2_58%,#EBDCC8_66%,#F0C69A_72%)]
                   lg:aspect-[1440/930] lg:bg-[radial-gradient(ellipse_40%_22%_at_34%_50%,rgba(255,214,140,.85),transparent_70%),linear-gradient(180deg,#4A7DB5_0%,#86ABD3_26%,#C9D8E6_40%,#EBDCC8_47%,#F0C69A_53%,#E9B98E_60%)]"
      >
        {/* الاسم العرضي */}
        <motion.h1
          style={reduce ? undefined : { y: wordY }}
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease }}
          className="order-1 m-0 px-5 pt-24 font-display text-[23vw] leading-[1.08] text-white/95
                     lg:absolute lg:top-[clamp(58px,7.6vw,96px)] lg:right-[clamp(18px,3vw,44px)] lg:z-[1] lg:p-0 lg:text-[clamp(105px,16.4vw,272px)]"
        >
          الشمري
        </motion.h1>

        {/* الصورة المقصوصة */}
        <motion.div
          style={reduce ? undefined : { y: sceneY }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.35, delay: 0.15, ease }}
          className="relative z-0 order-3 -mt-[30vw] w-[185%] max-w-none self-start lg:absolute lg:bottom-0 lg:left-0 lg:z-[2] lg:mt-0 lg:w-full"
        >
          <Image
            src="/img/hero.webp"
            alt="مهندسان يطلّان على منشأة صناعية وخطوط أنابيب، وخلفهما أفق المدينة عند الغروب"
            width={1440}
            height={698}
            priority
            sizes="(max-width: 1024px) 185vw, 100vw"
            className="h-auto w-full"
          />
        </motion.div>

        {/* الشعار النصي */}
        <motion.div
          style={reduce ? undefined : { y: tagY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="relative z-[5] order-2 mt-2 px-5 lg:absolute lg:left-[clamp(22px,3.2vw,48px)] lg:top-[clamp(104px,10vw,140px)] lg:z-[5] lg:mt-0 lg:max-w-[440px] lg:p-0 lg:[text-shadow:0_1px_18px_rgba(3,32,60,.25)]"
        >
          <span className="mb-3 block text-[13.5px] tracking-[0.02em] opacity-85">
            {company.tagline}
          </span>
          <h2 className="m-0 font-display text-[clamp(26px,2.8vw,42px)] leading-[1.32]">
            {company.slogan.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.8, ease }}
              >
                {line}
              </motion.span>
            ))}
          </h2>
          <p className="mt-3 max-w-[38ch] text-[15.5px] leading-[1.85] opacity-90">
            مؤسسة سعودية مقرها الدمام، نشارك في مراحل المشروع من دراسة الفرصة وتمويلها إلى التنفيذ
            والتشغيل والاستثمار.
          </p>
          <Magnetic>
            <Link
              href="/areas"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white py-2 pe-2 ps-6 text-[15px] font-medium text-deep"
            >
              استكشف مجالاتنا
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white">
                <Arrow size={16} />
              </span>
            </Link>
          </Magnetic>
        </motion.div>

        {/* بطاقات الأرقام */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="pointer-events-none absolute bottom-[clamp(40px,5vw,70px)] left-[clamp(20px,3vw,46px)] z-[5] hidden flex-col gap-2.5 lg:flex"
        >
          <div className="min-w-[210px] rounded-[22px] bg-white/95 px-5 py-3.5 text-deep shadow-[0_18px_40px_-22px_rgba(3,32,60,.6)]">
            <b className="block font-display text-[32px] leading-[1.15] text-brand">6</b>
            <span className="text-[13px] text-[#4A5B6C]">مجالات أعمال استراتيجية متكاملة</span>
          </div>
          <div className="flex min-w-[210px] items-center gap-3 rounded-[22px] bg-white/95 px-5 py-3.5 text-deep shadow-[0_18px_40px_-22px_rgba(3,32,60,.6)]">
            <Image src="/img/logo-mark.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
            <div>
              <b className="block text-sm font-medium">9 قطاعات مستهدفة</b>
              <span className="text-[13px] text-[#4A5B6C]">في المملكة العربية السعودية</span>
            </div>
          </div>
        </motion.div>

        {/* مؤشر النزول */}
        <div className="absolute bottom-[-1px] left-1/2 z-[6] hidden -translate-x-1/2 rounded-t-[30px] bg-paper px-6 pt-3.5 lg:block">
          <span className="flex items-center gap-2.5 pb-2 text-[13.5px] text-mute">
            <motion.i
              animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="block h-[22px] w-px bg-mute"
            />
            تعرّف علينا
          </span>
        </div>
      </motion.header>
    </div>
  );
}
