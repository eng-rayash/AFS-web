"use client";

import { lifecycle } from "@/data/content";
import SectionHead from "../site/SectionHead";
import { Stagger, StaggerItem } from "../ui/Reveal";

/** دورة حياة المشروع — تسع مراحل متصلة */
export default function Lifecycle({ num = "04" }: { num?: string }) {
  return (
    <section className="px-5 pt-[clamp(80px,9vw,140px)] sm:px-[clamp(20px,5vw,72px)]">
      <SectionHead
        num={num}
        title="دورة حياة المشروع"
        kicker="تسع مراحل متصلة — نشارك فيها كلها أو في بعضها بحسب طبيعة الاتفاق."
      />

      <Stagger className="mt-[clamp(34px,4vw,56px)] grid overflow-hidden rounded-[24px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" gap={0.06}>
        {lifecycle.map((step) => (
          <StaggerItem
            key={step.num}
            className="group h-full bg-paper p-[clamp(22px,2.4vw,32px)] shadow-[0_0_0_1px_var(--color-line)] transition-colors duration-500 hover:bg-[#F7FAFC]"
          >
            <div className="font-display text-[26px] leading-none text-accent">{step.num}</div>
            <h3 className="mb-1.5 mt-2.5 font-display text-[21px] font-normal">{step.title}</h3>
            <p className="m-0 text-sm leading-[1.8] text-[#54687A]">{step.body}</p>
            <span className="mt-4 block h-px w-0 bg-accent transition-[width] duration-500 group-hover:w-full" />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
