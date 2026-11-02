"use client";

import Image from "next/image";
import Link from "next/link";
import { homeStats, mission, vision } from "@/data/content";
import Counter from "../ui/Counter";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import SplitWords from "../ui/SplitWords";

/** فصل «من نحن» المختصر في الرئيسية */
export default function HomeAbout() {
  return (
    <section id="about" className="px-5 pt-[clamp(80px,10vw,150px)] sm:px-[clamp(20px,5vw,72px)]">
      <Reveal direction="right">
        <span className="mb-4 block font-display text-[clamp(28px,3vw,44px)] leading-none text-accent">
          01
        </span>
      </Reveal>

      <h2 className="m-0 font-display text-[clamp(44px,7.9vw,122px)] leading-[1.14]">
        <SplitWords text="من نحن" />
      </h2>

      <Reveal delay={0.1}>
        <div className="mt-2.5 flex max-w-[760px] flex-wrap justify-between gap-4 text-[13.5px] text-mute">
          <span>مؤسسة سعودية</span>
          <span>المقر: الدمام</span>
          <span>تأسست 10 ديسمبر 2025</span>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-[clamp(40px,5vw,70px)] ms-auto max-w-[1150px] text-[clamp(22px,3.1vw,46px)] font-medium leading-[1.55]">
          <span className="text-mute">لسنا مقاولاً تقليدياً.</span> نبني نموذجاً متكاملاً
          <InlinePill src="/img/inl-plant.webp" /> لتطوير وتنفيذ المشاريع والاستثمارات،{" "}
          <span className="text-mute">من دراسة الفرصة وتمويلها</span>
          <InlinePill src="/img/inl-tanks.webp" /> إلى التنفيذ والتشغيل وتحقيق القيمة.
        </p>
      </Reveal>

      <div className="mt-[clamp(46px,6vw,80px)] grid grid-cols-2 items-end gap-[clamp(14px,2vw,26px)] lg:grid-cols-[auto_auto_1fr_1fr]">
        <Thumb src="/img/about-team.webp" alt="فريق موقع يرتدي معدات السلامة" />
        <Thumb src="/img/about-roads.webp" alt="أعمال طرق وأسفلت قيد التنفيذ" />
        <Reveal delay={0.1}>
          <h3 className="mb-1.5 text-[15px] font-medium text-ink">رؤيتنا</h3>
          <p className="max-w-[38ch] text-[14.5px] leading-[1.9] text-mute">{vision.ar}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <h3 className="mb-1.5 text-[15px] font-medium text-ink">رسالتنا</h3>
          <p className="max-w-[38ch] text-[14.5px] leading-[1.9] text-mute">{mission.ar}</p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <Link
          href="/about"
          className="mt-10 inline-flex items-center gap-2 border-b-[1.5px] border-accent pb-1 text-[15px] font-medium transition-[padding] duration-300 hover:ps-2"
        >
          القصة الكاملة للمؤسسة
        </Link>
      </Reveal>

      <Stagger className="mt-[clamp(46px,5vw,76px)] grid grid-cols-2 gap-[clamp(18px,2.4vw,34px)] border-t border-line pt-[clamp(30px,3.4vw,46px)] lg:grid-cols-4">
        {homeStats.map((s) => (
          <StaggerItem key={s.label}>
            <b className="block font-display text-[clamp(46px,5.4vw,84px)] leading-none text-brand">
              <Counter to={s.value} />
            </b>
            <span className="mt-2.5 block max-w-[22ch] text-sm leading-[1.7] text-mute">
              {s.label}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function InlinePill({ src }: { src: string }) {
  return (
    <span className="relative -top-[0.06em] mx-[0.15em] inline-block h-[0.95em] w-[1.9em] overflow-hidden rounded-full align-middle">
      <Image src={src} alt="" width={260} height={130} className="h-full w-full object-cover" />
    </span>
  );
}

function Thumb({ src, alt }: { src: string; alt: string }) {
  return (
    <Reveal>
      <div className="group aspect-[1.55] w-full max-w-full overflow-hidden rounded-[20px] lg:w-[clamp(130px,15vw,210px)]">
        <Image
          src={src}
          alt={alt}
          width={640}
          height={412}
          sizes="(max-width: 1024px) 45vw, 210px"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </Reveal>
  );
}
