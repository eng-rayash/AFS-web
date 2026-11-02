import type { Metadata } from "next";
import Link from "next/link";
import { businessAreas } from "@/data/content";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import QuoteBand from "@/components/site/QuoteBand";
import CTA from "@/components/site/CTA";
import Lifecycle from "@/components/sections/Lifecycle";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import Arrow from "@/components/site/Arrow";

export const metadata: Metadata = {
  title: "مجالات الأعمال",
  description:
    "ستة مجالات استراتيجية متكاملة: المقاولات والبنية التحتية، الأعمال الكهربائية والميكانيكية، الطاقة المتجددة، العقارات، الحلول المالية، والاستشارات الإدارية — إضافة إلى نماذج EPC و BOT والتشغيل والصيانة.",
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="مجالات الأعمال"
        title={"ستة مجالات\nمشروع واحد"}
        lede="كل مجال منها يقف وحده، ومجتمعةً تعني أن المشروع لا يُسلَّم من يد إلى يد — بل يبقى تحت إدارة واحدة من أول دراسة إلى آخر ساعة تشغيل."
        image="/img/band-tower.webp"
        alt="برج زجاجي قيد الإنشاء ورافعة برجية"
        variant="band"
        stats={[
          { value: "تقليدي", label: "نطاق محدد" },
          { value: "EPC", label: "هندسة وتوريد وإنشاء" },
          { value: "BOT", label: "بناء وتشغيل ونقل ملكية" },
        ]}
        action={{ href: "/contact", label: "ناقش مشروعك" }}
      />

      {/* الفهرس */}
      <section className="px-5 pt-[clamp(80px,9vw,140px)] sm:px-[clamp(20px,5vw,72px)]">
        <SectionHead
          num="00"
          title="ابدأ من المجال الذي يخصّك"
          kicker="نعمل من خلال ستة مجالات استراتيجية متكاملة، يدعم كل منها الآخر داخل المشروع الواحد."
        />
        <Stagger className="mt-[clamp(34px,4vw,60px)] list-none border-t border-line p-0" gap={0.05}>
          {businessAreas.map((area) => (
            <StaggerItem key={area.id}>
              <div className="border-b border-line">
                <Link
                  href={`#${area.id}`}
                  className="group grid grid-cols-[44px_1fr_auto] items-center gap-4 py-[clamp(18px,2vw,26px)] transition-[padding] duration-500 hover:ps-3.5 lg:grid-cols-[70px_1fr_auto]"
                >
                  <span className="text-[13px] text-accent">{area.num}</span>
                  <h3 className="m-0 font-display text-[clamp(20px,3.2vw,46px)] font-normal leading-[1.2]">
                    {area.title}
                  </h3>
                  <span className="hidden items-center gap-2 text-[13px] text-mute transition-colors group-hover:text-brand sm:flex">
                    اعرض التفاصيل
                    <Arrow className="transition-transform duration-500 group-hover:-translate-x-1" />
                  </span>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* المجالات الثلاثة الأولى */}
      {businessAreas.slice(0, 3).map((area, i) => (
        <AreaBlock key={area.id} area={area} flip={i % 2 === 1} dark={i === 1} />
      ))}

      <QuoteBand
        image="/img/band-cranes.webp"
        quote={"لا نبيع ساعات عمل.\nنهيكل مشاريع."}
        body="نموذجا EPC و BOT يتيحان للمالك تنفيذ المشروع دون أن يحمل عبأه كاملاً — نحن نجمع الهندسة والتوريد والإنشاء، وعند الحاجة التمويل والتشغيل، داخل عقد واحد."
      />

      {/* نماذج التنفيذ + التشغيل والصيانة */}
      <section className="mt-[clamp(80px,9vw,140px)] bg-[linear-gradient(170deg,#04172B,#020D1A)] px-5 py-[clamp(70px,8vw,130px)] text-white sm:px-[clamp(22px,5vw,72px)]">
        <SectionHead
          num="04"
          dark
          title="نماذج التنفيذ"
          kicker="نختار النموذج بحسب طبيعة المشروع وقدرة المالك وهيكل الشراكة — لا العكس."
        />

        <div className="mt-[clamp(34px,4vw,60px)] grid gap-[clamp(26px,4vw,64px)] lg:grid-cols-2">
          <Reveal>
            <h3 className="m-0 font-display text-[clamp(26px,3.4vw,50px)] font-normal leading-[1.2]">EPC</h3>
            <span dir="ltr" className="mb-3.5 block text-end text-xs tracking-[0.12em] text-white/45">
              ENGINEERING, PROCUREMENT &amp; CONSTRUCTION
            </span>
            <p className="m-0 max-w-[52ch] text-[15.5px] leading-[1.95] text-white/60">
              إطار متكامل لتنفيذ المشاريع يجمع الهندسة والتوريد والإنشاء ضمن منظومة واحدة تهدف إلى
              التكامل والكفاءة: من التصميم والهندسة إلى توريد المعدات والمواد، وصولًا إلى التنفيذ
              والاختبار والتشغيل وفق متطلبات المشروع.
            </p>
            <Flow steps={["الهندسة", "التوريد", "الإنشاء"]} />
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="m-0 font-display text-[clamp(26px,3.4vw,50px)] font-normal leading-[1.2]">BOT</h3>
            <span dir="ltr" className="mb-3.5 block text-end text-xs tracking-[0.12em] text-white/45">
              BUILD, OPERATE &amp; TRANSFER
            </span>
            <p className="m-0 max-w-[52ch] text-[15.5px] leading-[1.95] text-white/60">
              هيكلة مشاريع طويلة الأجل تجمع التطوير والتمويل والتنفيذ والتشغيل ثم نقل الملكية وفق
              الشروط التعاقدية المعتمدة، بما يبني شراكات ممتدة بين المطورين والمستثمرين والجهات
              المستفيدة.
            </p>
            <Flow steps={["تطوير", "تمويل", "تصميم", "إنشاء", "تشغيل", "نقل ملكية"]} />
          </Reveal>
        </div>

        <div className="my-[clamp(34px,4vw,56px)] h-px bg-gradient-to-l from-transparent via-white/15 to-transparent" />

        <SectionHead
          num="05"
          dark
          title="التشغيل والصيانة"
          kicker="توجّهنا يمتد إلى ما بعد الإنشاء: استمرارية الأعمال وكفاءة الأصول وأداء مستدام."
        />
        <Stagger className="mt-[clamp(26px,3vw,40px)] grid list-none gap-x-8 gap-y-3 p-0 sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
          {[
            "التشغيل والمتابعة",
            "الصيانة الوقائية",
            "الصيانة التصحيحية",
            "متابعة أداء الأنظمة",
            "رفع كفاءة التشغيل",
            "دعم استمرارية الأعمال",
            "المحافظة على كفاءة الأصول والمعدات",
          ].map((s) => (
            <StaggerItem key={s}>
              <span className="flex gap-3 text-[15px] leading-[1.8] text-white/75">
                <i className="mt-[11px] block h-[7px] w-[7px] flex-none rounded-full bg-accent" />
                {s}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* بقية المجالات */}
      {businessAreas.slice(3).map((area, i) => (
        <AreaBlock key={area.id} area={area} flip={i % 2 === 1} />
      ))}

      <Lifecycle num="09" />
      <CTA />
    </>
  );
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="mt-[clamp(26px,3vw,42px)] flex flex-wrap items-center gap-2.5">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-2.5">
          <span className="rounded-[14px] border border-white/15 px-5 py-3 font-display text-[clamp(16px,1.7vw,22px)] text-white">
            {s}
          </span>
          {i < steps.length - 1 && <i className="not-italic text-lg text-accent">←</i>}
        </span>
      ))}
    </div>
  );
}

function AreaBlock({
  area,
  flip,
  dark = false,
}: {
  area: (typeof businessAreas)[number];
  flip: boolean;
  dark?: boolean;
}) {
  return (
    <section
      id={area.id}
      className={`scroll-mt-28 px-5 sm:px-[clamp(20px,5vw,72px)] ${
        dark
          ? "mt-[clamp(80px,9vw,140px)] bg-[linear-gradient(170deg,#04172B,#020D1A)] py-[clamp(70px,8vw,130px)] text-white"
          : "pt-[clamp(80px,9vw,140px)]"
      }`}
    >
      <SectionHead num={area.num} dark={dark} title={area.headline} />

      <div
        className={`mt-[clamp(40px,5vw,70px)] grid items-start gap-[clamp(26px,4vw,64px)] ${
          flip ? "lg:grid-cols-[1.05fr_.95fr]" : "lg:grid-cols-[.95fr_1.05fr]"
        }`}
      >
        <div className={flip ? "lg:order-2" : ""}>
          <Reveal>
            <h3 className="m-0 font-display text-[clamp(26px,3.4vw,50px)] font-normal leading-[1.2]">
              {area.title}
            </h3>
            <span
              dir="ltr"
              className={`mb-3.5 block text-end text-xs tracking-[0.12em] ${
                dark ? "text-white/45" : "text-mute"
              }`}
            >
              {area.en}
            </span>
            <p
              className={`m-0 max-w-[52ch] text-[15.5px] leading-[1.95] ${
                dark ? "text-white/60" : "text-body"
              }`}
            >
              {area.intro}
            </p>
          </Reveal>

          <Stagger className="mt-[clamp(26px,3vw,40px)] grid list-none gap-x-8 gap-y-3 p-0 sm:grid-cols-2" gap={0.05}>
            {area.services.map((s) => (
              <StaggerItem key={s}>
                <span
                  className={`flex gap-3 text-[15px] leading-[1.8] ${
                    dark ? "text-white/75" : "text-body"
                  }`}
                >
                  <i className="mt-[11px] block h-[7px] w-[7px] flex-none rounded-full bg-accent" />
                  {s}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <RevealImage
          src={area.photo}
          alt={area.alt}
          width={1000}
          height={750}
          caption={area.caption}
          className={`aspect-[4/3] ${flip ? "lg:order-1" : ""}`}
        />
      </div>
    </section>
  );
}
