import type { Metadata } from "next";
import { aboutStory, mission, strategicModels, values, vision } from "@/data/content";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import QuoteBand from "@/components/site/QuoteBand";
import CTA from "@/components/site/CTA";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "مؤسسة سعودية مقرها الدمام تأسست في ديسمبر 2025 — قصتنا ورؤيتنا ورسالتنا وقيمنا التسع وتوجهنا الاستراتيجي.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="من نحن"
        title={"نصنع\nالفرص"}
        lede="مؤسسة سعودية وُلدت بفكرة واضحة: ألّا يقف دورنا عند تنفيذ ما يُطلب، بل أن نشارك في صناعة المشروع من لحظته الأولى — دراسةً وتمويلاً وتنفيذاً وتشغيلاً."
        image="/img/cut-build.webp"
        alt="مبنى قيد الإنشاء ورافعات برجية"
        variant="cutout"
        stats={[
          { value: "الدمام", label: "المملكة العربية السعودية" },
          { value: "10 ديسمبر 2025", label: "تاريخ التأسيس" },
          { value: "6 مجالات", label: "تحت إدارة واحدة" },
        ]}
        action={{ href: "/contact", label: "تحدّث إلينا" }}
      />

      <section className="px-5 pt-[clamp(80px,9vw,140px)] sm:px-[clamp(20px,5vw,72px)]">
        <SectionHead
          num="01"
          title="مؤسسة تقرأ المشروع قبل أن تبنيه"
          kicker="المقاولات والبنية التحتية · الأعمال الكهربائية والميكانيكية والصناعية · الطاقة المتجددة · العقارات · الحلول المالية · الاستشارات الإدارية"
        />

        <div className="mt-[clamp(34px,4vw,60px)] grid items-start gap-[clamp(28px,4vw,72px)] lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Reveal>
              <p className="m-0 max-w-[24ch] text-[clamp(20px,2.3vw,32px)] font-medium leading-[1.62]">
                نسعى إلى بناء نموذج متكامل يتيح لنا المشاركة في مراحل متعددة من دورة حياة المشروع.
              </p>
            </Reveal>
            <div className="mt-7 space-y-4">
              {aboutStory.map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <p className="m-0 max-w-[52ch] text-[15.5px] leading-[1.95] text-body">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <RevealImage
            src="/img/ph-board.webp"
            alt="قاعة اجتماعات تطل على أفق المدينة، وعلى الطاولة مخططات ونموذج معماري"
            width={1000}
            height={1000}
            caption="من طاولة الدراسة إلى أرض الموقع — قرار واحد متصل"
            className="aspect-square"
          />
        </div>

        <Stagger className="mt-[clamp(30px,4vw,52px)] grid overflow-hidden rounded-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["المقر", "الدمام، السعودية"],
            ["التأسيس", "10 ديسمبر 2025"],
            ["نماذج التنفيذ", "تقليدي · EPC · BOT"],
            ["الامتداد", "تشغيل وصيانة واستثمار"],
          ].map(([k, v]) => (
            <StaggerItem key={k}>
              <div className="h-full bg-paper px-6 py-5 shadow-[0_0_0_1px_var(--color-line)]">
                <b className="mb-2 block text-[11.5px] font-medium tracking-[0.1em] text-mute">{k}</b>
                <span className="font-display text-[clamp(19px,1.9vw,26px)] leading-[1.25]">{v}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <QuoteBand
        image="/img/band-dusk.webp"
        quote="من الفرصة… إلى القيمة."
        body="دورنا لا يقتصر على تنفيذ الأعمال، بل يمتد إلى المشاركة في تطوير المشروع وبناء الحلول والشراكات التي تحوّل الفرص إلى مشاريع قابلة للتنفيذ."
      />

      <section className="mt-[clamp(80px,9vw,140px)] bg-[linear-gradient(170deg,#04172B,#020D1A)] px-5 py-[clamp(70px,8vw,130px)] text-white sm:px-[clamp(22px,5vw,72px)]">
        <SectionHead num="02" dark title={"إلى أين نتجه،\nوبماذا نلتزم"} />
        <div className="mt-[clamp(34px,4vw,56px)] grid gap-[clamp(30px,4vw,70px)] lg:grid-cols-2">
          {[
            { h: "رؤيتنا", ...vision },
            { h: "رسالتنا", ...mission },
          ].map((block, i) => (
            <Reveal key={block.h} delay={i * 0.12}>
              <article className="border-t border-white/15 pt-7">
                <h3 className="mb-4 font-display text-[clamp(26px,3vw,44px)] font-normal text-white">
                  {block.h}
                </h3>
                <p className="m-0 text-base leading-[1.95] text-white/60">{block.ar}</p>
                <span dir="ltr" className="mt-4 block text-start text-[13px] leading-[1.8] text-white/40">
                  {block.en}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pt-[clamp(80px,9vw,140px)] sm:px-[clamp(20px,5vw,72px)]">
        <SectionHead
          num="03"
          title="تسع قناعات تحكم كل قرار"
          kicker="قيمنا ليست شعارات على جدار — هي المعايير التي نقيس بها العمل قبل تسليمه."
        />
        <Stagger
          className="mt-[clamp(34px,4vw,60px)] grid overflow-hidden rounded-[24px] sm:grid-cols-2 lg:grid-cols-3"
          gap={0.06}
        >
          {values.map((v) => (
            <StaggerItem key={v.num}>
              <article className="group relative h-full overflow-hidden bg-paper p-[clamp(26px,2.6vw,38px)] shadow-[0_0_0_1px_var(--color-line)] transition-colors duration-500 hover:bg-[#F7FAFC]">
                <span className="text-xs tracking-[0.1em] text-accent">{v.num}</span>
                <h3 className="mb-1 mt-3.5 font-display text-[clamp(22px,2.2vw,30px)] font-normal">
                  {v.title}
                </h3>
                <span dir="ltr" className="mb-3.5 block text-end text-[11.5px] tracking-[0.1em] text-mute">
                  {v.en}
                </span>
                <p className="m-0 text-[14.5px] leading-[1.85] text-[#54687A]">{v.body}</p>
                <span className="absolute bottom-0 start-0 block h-[2px] w-0 bg-accent transition-[width] duration-500 group-hover:w-full" />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mt-[clamp(80px,9vw,140px)] bg-[linear-gradient(170deg,#04172B,#020D1A)] px-5 py-[clamp(70px,8vw,130px)] text-white sm:px-[clamp(22px,5vw,72px)]">
        <SectionHead
          num="04"
          dark
          title={"تحوّل مقصود،\nلا توسّع عشوائي"}
          kicker="توجّهنا الاستراتيجي: الانتقال من نموذج شركة المقاولات التقليدية إلى نموذج متكامل لتطوير وتنفيذ المشاريع والاستثمارات."
        />

        <div className="mt-[clamp(34px,4vw,60px)] grid items-center gap-[clamp(20px,3vw,50px)] lg:grid-cols-[1fr_auto_1fr]">
          <Reveal direction="right">
            <div className="rounded-[24px] border border-white/15 bg-white/[0.03] p-[clamp(26px,3vw,44px)]">
              <b className="mb-4 block text-[11.5px] tracking-[0.14em] text-white/60">من</b>
              <p className="m-0 font-display text-[clamp(22px,2.6vw,38px)] leading-[1.3] text-white">
                مقاول ينفّذ نطاقاً محدداً، وينتهي دوره عند التسليم.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid place-items-center py-2 text-accent lg:rotate-0 rotate-90">
              <svg width="54" height="24" viewBox="0 0 54 24" aria-hidden="true">
                <path
                  d="M52 12H2M14 4 2 12l12 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Reveal>
          <Reveal direction="left">
            <div className="rounded-[24px] border border-accent/50 bg-accent/[0.07] p-[clamp(26px,3vw,44px)]">
              <b className="mb-4 block text-[11.5px] tracking-[0.14em] text-white/60">إلى</b>
              <p className="m-0 font-display text-[clamp(22px,2.6vw,38px)] leading-[1.3] text-white">
                شريك يطوّر الفرصة ويهيكل تمويلها وينفّذها ويشغّلها ويستثمر فيها.
              </p>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-[clamp(30px,3.4vw,46px)] flex flex-wrap gap-2.5" gap={0.05}>
          {strategicModels.map((m) => (
            <StaggerItem key={m}>
              <span className="block rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition-colors duration-300 hover:border-accent hover:text-white">
                {m}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTA />
    </>
  );
}
