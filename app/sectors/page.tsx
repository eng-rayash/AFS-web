import type { Metadata } from "next";
import { documents, qualityPillars, sectors } from "@/data/content";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import QuoteBand from "@/components/site/QuoteBand";
import CTA from "@/components/site/CTA";
import Marquee from "@/components/ui/Marquee";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";

export const metadata: Metadata = {
  title: "القطاعات والجودة",
  description:
    "تسعة قطاعات مستهدفة في المملكة، وخمسة محاور للجودة والسلامة والاستدامة، والوثائق النظامية المعتمدة للمؤسسة.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="القطاعات والجودة"
        title={"حيث يُبنى\nالاقتصاد"}
        lede="نستهدف القطاعات التي تتحرك فيها المشاريع الكبرى في المملكة — ونعمل فيها بمعايير لا تُساوم على الجودة والسلامة."
        image="/img/cut-cranes.webp"
        alt="رافعات برجية في موقع إنشاء"
        variant="cutout"
        stats={[
          { value: "9 قطاعات", label: "مستهدفة" },
          { value: "5 محاور", label: "للجودة والسلامة" },
          { value: "7 وثائق", label: "نظامية معتمدة" },
        ]}
        action={{ href: "/contact", label: "اطلب الملف التعريفي" }}
      />

      <section className="mt-[clamp(70px,8vw,120px)] bg-[linear-gradient(170deg,#04172B,#020D1A)] px-5 py-[clamp(70px,8vw,130px)] text-white sm:px-[clamp(22px,5vw,72px)]">
        <SectionHead
          num="01"
          dark
          title="قطاعات نعرف كيف تعمل"
          kicker="نستهدف قطاعات حيوية ذات فرص نمو واستثمار، من أبرزها:"
        />

        <Marquee
          items={[
            "حكومي",
            "مياه ومرافق",
            "طاقة متجددة",
            "نفط وغاز",
            "مدن صناعية",
            "بنية تحتية",
            "تطوير عقاري",
            "صناديق استثمار",
            "قطاع خاص",
          ]}
          className="mt-[clamp(30px,4vw,50px)] border-y border-white/15 py-4.5"
          itemClassName="font-display text-[clamp(20px,2.4vw,34px)] text-white/60"
          slow
        />

        <Stagger className="mt-[clamp(34px,4vw,56px)] grid overflow-hidden rounded-[24px] sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
          {sectors.map((s) => (
            <StaggerItem key={s.num}>
              <article className="relative flex h-full min-h-[170px] flex-col justify-end overflow-hidden bg-night p-[clamp(24px,2.6vw,36px)] shadow-[0_0_0_1px_rgba(255,255,255,.14)] transition-colors duration-500 hover:bg-[#062A4B]">
                <span className="absolute end-5 top-4 text-xs text-white/35">{s.num}</span>
                <h3 className="m-0 font-display text-[clamp(19px,2vw,27px)] font-normal leading-[1.3] text-white">
                  {s.title}
                </h3>
                <span dir="ltr" className="mt-2 block text-end text-[11.5px] tracking-[0.08em] text-white/45">
                  {s.en}
                </span>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <QuoteBand
        image="/img/band-bw.webp"
        quote="الإنجاز وحده ليس المقياس."
        body="نؤمن بأن نجاح المشروع لا يُقاس بالتسليم فقط، بل بجودة التنفيذ وسلامة العاملين وكفاءة الموارد واستدامة النتائج."
      />

      <section className="px-5 pt-[clamp(80px,9vw,140px)] sm:px-[clamp(20px,5vw,72px)]">
        <SectionHead num="02" title="خمسة محاور لا نتجاوزها" />

        <Stagger className="mt-[clamp(34px,4vw,56px)] grid gap-[clamp(20px,2.4vw,34px)] sm:grid-cols-2 lg:grid-cols-5" gap={0.07}>
          {qualityPillars.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group h-full border-t-2 border-accent pt-5">
                <h3 className="mb-2.5 font-display text-[clamp(22px,2.2vw,30px)] font-normal">
                  {p.title}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.85] text-[#54687A]">{p.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-[clamp(50px,6vw,90px)] grid items-start gap-[clamp(26px,4vw,64px)] lg:grid-cols-[1.05fr_.95fr]">
          <RevealImage
            src="/img/band-solar.webp"
            alt="حقل طاقة شمسية ممتد"
            width={1600}
            height={760}
            caption="الاستدامة عندنا قرار اقتصادي قبل أن تكون شعاراً بيئياً"
            className="aspect-[16/10]"
          />
          <Reveal delay={0.1}>
            <h3 className="m-0 font-display text-[clamp(26px,3.4vw,44px)] font-normal leading-[1.2]">
              لماذا نقيس ما بعد التسليم
            </h3>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.95] text-body">
              الأصل الذي لا يُصان يفقد قيمته أسرع مما بُني. لذلك نربط معايير الجودة والسلامة بمرحلة
              التشغيل والصيانة، لا بمرحلة التنفيذ وحدها — وهذا ما يجعل نموذجي EPC و BOT منطقيين في
              أعمالنا.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pt-[clamp(80px,9vw,140px)] sm:px-[clamp(20px,5vw,72px)]">
        <SectionHead
          num="03"
          title="وضع نظامي واضح"
          kicker="نلتزم بالمتطلبات النظامية والتنظيمية ذات الصلة بأعمال المؤسسة، وتتوفر لدينا الوثائق الرسمية التي تعكس الوضع النظامي والبيانات المعتمدة."
        />
        <Stagger className="mt-[clamp(30px,3.6vw,50px)] grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
          {documents.map((d) => (
            <StaggerItem key={d}>
              <li className="flex items-center gap-3.5 rounded-[16px] border border-line px-5 py-4 text-[14.5px] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent">
                <svg width="18" height="18" viewBox="0 0 18 18" className="flex-none" aria-hidden="true">
                  <path d="M4 2h7l3 3v11H4z" fill="none" stroke="#04569F" strokeWidth="1.3" />
                  <path d="M11 2v3h3" fill="none" stroke="#04569F" strokeWidth="1.3" />
                </svg>
                {d}
              </li>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTA />
    </>
  );
}
