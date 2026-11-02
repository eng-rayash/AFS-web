"use client";

import Image from "next/image";
import Link from "next/link";
import { businessAreas } from "@/data/content";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import SplitWords from "../ui/SplitWords";

/** شبكة المجالات الستة المتناثرة في الرئيسية */
const place = [
  "lg:col-start-1 lg:col-end-5",
  "lg:col-start-8 lg:col-end-13 lg:justify-end lg:flex-row-reverse",
  "lg:col-start-3 lg:col-end-7 lg:-mt-8",
  "lg:col-start-9 lg:col-end-13 lg:flex-row-reverse lg:justify-end",
  "lg:col-start-1 lg:col-end-5 lg:flex-row-reverse lg:justify-end",
  "lg:col-start-6 lg:col-end-11 lg:mt-10",
];

export default function AreasGrid() {
  return (
    <section id="areas" className="px-5 pt-[clamp(80px,10vw,150px)] sm:px-[clamp(20px,5vw,72px)]">
      <Reveal direction="right">
        <span className="mb-4 block font-display text-[clamp(28px,3vw,44px)] leading-none text-accent">
          03
        </span>
      </Reveal>

      <div className="flex flex-wrap items-end justify-between gap-5">
        <h2 className="m-0 font-display text-[clamp(44px,7.9vw,122px)] leading-[1.14]">
          <SplitWords text={"مجالات\nأعمالنا"} />
        </h2>
        <Reveal delay={0.15}>
          <p className="m-0 max-w-[36ch] text-[15px] leading-[1.8] text-mute">
            نعمل من خلال ستة مجالات استراتيجية متكاملة، يدعم كل منها الآخر داخل المشروع الواحد.
          </p>
        </Reveal>
      </div>

      <Stagger className="mt-[clamp(50px,6vw,90px)] grid grid-cols-2 gap-x-3 gap-y-[clamp(18px,2.4vw,34px)] lg:grid-cols-12 lg:gap-x-[clamp(10px,1.6vw,24px)]" gap={0.07}>
        {businessAreas.map((area, i) => (
          <StaggerItem
            key={area.id}
            className={`flex flex-col items-start gap-3.5 lg:flex-row lg:items-end ${place[i]}`}
          >
            <Link href={`/areas#${area.id}`} className="group flex w-full flex-col gap-3.5 lg:contents">
              <div className="aspect-square w-full flex-none overflow-hidden rounded-[4px] transition-[border-radius] duration-500 group-hover:rounded-[26px] lg:w-[clamp(120px,13vw,190px)]">
                <Image
                  src={area.image}
                  alt={area.alt}
                  width={560}
                  height={560}
                  sizes="(max-width: 1024px) 45vw, 190px"
                  className="h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.07]"
                />
              </div>
              <h3 className="m-0 text-[clamp(15px,1.35vw,20px)] font-medium leading-[1.3]">
                {area.title}
                <span className="mt-1.5 block text-[12.8px] font-medium leading-[1.7] text-mute">
                  {area.short}
                </span>
              </h3>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal>
        <Link
          href="/areas"
          className="mt-10 inline-flex items-center gap-2 border-b-[1.5px] border-accent pb-1 text-[15px] font-medium transition-[padding] duration-300 hover:ps-2"
        >
          كل المجالات والخدمات
        </Link>
      </Reveal>
    </section>
  );
}
