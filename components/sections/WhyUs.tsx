"use client";

import { whyUs } from "@/data/content";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import SplitWords from "../ui/SplitWords";

/** قائمة «لماذا نحن» — صفوف تتمدد عند المرور عليها */
export default function WhyUs() {
  return (
    <section className="px-5 pt-[clamp(80px,10vw,150px)] sm:px-[clamp(20px,5vw,72px)]">
      <Reveal direction="right">
        <span className="mb-4 block font-display text-[clamp(28px,3vw,44px)] leading-none text-accent">
          05
        </span>
      </Reveal>
      <h2 className="m-0 font-display text-[clamp(44px,7.9vw,122px)] leading-[1.14]">
        <SplitWords text="لماذا نحن؟" />
      </h2>

      <Stagger className="mt-[clamp(40px,5vw,70px)] list-none border-t border-line p-0" gap={0.06}>
        {whyUs.map((item, i) => (
          <StaggerItem
            key={item.title}
            className="group grid grid-cols-[34px_1fr] items-center gap-5 border-b border-line py-[clamp(16px,1.8vw,24px)] transition-[padding] duration-500 hover:ps-3 lg:grid-cols-[60px_1fr_minmax(180px,300px)]"
          >
            <span className="text-[13px] text-mute transition-colors duration-300 group-hover:text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="m-0 font-display text-[clamp(20px,2.6vw,40px)] font-normal leading-[1.25]">
              {item.title}
            </h3>
            <p className="col-start-2 m-0 text-sm leading-[1.75] text-mute lg:col-start-3 lg:text-start">
              {item.body}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
