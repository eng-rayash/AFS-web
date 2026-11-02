"use client";

import { deliveryModels } from "@/data/content";
import SectionHead from "../site/SectionHead";
import TiltCard from "../ui/TiltCard";
import { Stagger, StaggerItem } from "../ui/Reveal";

/** فصل نماذج التنفيذ — مقطع داكن ببطاقات مائلة */
export default function HomeModels() {
  return (
    <section className="mt-[clamp(80px,9vw,140px)] bg-[linear-gradient(170deg,#04172B,#020D1A)] px-5 py-[clamp(70px,8vw,130px)] text-white sm:px-[clamp(22px,5vw,72px)]">
      <SectionHead
        num="02"
        dark
        title={"نموذج التنفيذ يُختار\nللمشروع، لا العكس"}
        kicker="ثلاثة نماذج نعمل بها بحسب طبيعة المشروع وقدرة المالك وهيكل الشراكة."
      />

      <Stagger className="mt-[clamp(34px,4vw,56px)] grid gap-[clamp(14px,1.8vw,24px)] md:grid-cols-3">
        {deliveryModels.map((m) => (
          <StaggerItem key={m.name}>
            <TiltCard className="h-full">
              <article className="group h-full rounded-[24px] border border-white/15 bg-white/[0.03] p-[clamp(24px,2.8vw,38px)] transition-colors duration-500 hover:border-accent/55 hover:bg-accent/[0.06]">
                <h3 className="m-0 font-display text-[clamp(24px,2.6vw,34px)] text-white">{m.name}</h3>
                <span dir="ltr" className="mb-4 block text-end text-[11px] tracking-[0.12em] text-white/45">
                  {m.en}
                </span>
                <p className="mb-5 text-[14.5px] leading-[1.85] text-white/60">{m.body}</p>
                <div className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-white/60">
                  {m.flow.map((step, i) => (
                    <span key={step} className="flex items-center gap-1.5">
                      {step}
                      {i < m.flow.length - 1 && <i className="not-italic text-accent">←</i>}
                    </span>
                  ))}
                </div>
              </article>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
