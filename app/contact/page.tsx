import type { Metadata } from "next";
import { company } from "@/data/content";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CTA from "@/components/site/CTA";
import ContactForm from "@/components/sections/ContactForm";
import Arrow from "@/components/site/Arrow";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع مؤسسة أحمد فايز الشمري في الدمام — هاتف وواتساب وبريد إلكتروني ونموذج طلب مباشر.",
};

const channels = [
  { label: "هاتف", value: company.phone, href: company.phoneHref, ltr: true },
  { label: "واتساب", value: "محادثة مباشرة", href: company.whatsapp, ltr: false },
  { label: "البريد", value: company.email, href: company.emailHref, ltr: false },
  { label: "الموقع", value: company.site, href: company.siteHref, ltr: false },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="تواصل معنا"
        title={"مشروعك\nيبدأ بمحادثة"}
        lede="أخبرنا بالفكرة أو النطاق أو حتى السؤال — ونعود إليك بتصوّر أولي للتنفيذ والتمويل والشراكة المناسبة."
        image="/img/band-crane.webp"
        alt="برج قيد الإنشاء ورافعة"
        variant="band"
        short
      />

      <section className="px-5 pt-[clamp(80px,9vw,140px)] sm:px-[clamp(20px,5vw,72px)]">
        <SectionHead num="01" title="الطرق المباشرة" />
        <Stagger className="mt-[clamp(34px,4vw,56px)] grid gap-[clamp(14px,1.8vw,22px)] sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
          {channels.map((c) => (
            <StaggerItem key={c.label}>
              <a
                href={c.href}
                className="group block h-full rounded-[22px] border border-line p-[clamp(24px,2.6vw,34px)] transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-[#FBFCFD]"
              >
                <b className="mb-3 block text-[11.5px] font-medium tracking-[0.12em] text-mute">
                  {c.label}
                </b>
                <span className="flex items-center justify-between gap-3 font-display text-[clamp(18px,1.8vw,24px)] leading-[1.35]">
                  {c.ltr ? <bdi dir="ltr">{c.value}</bdi> : c.value}
                  <Arrow className="text-mute transition-all duration-300 group-hover:-translate-x-1 group-hover:text-accent" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="px-5 pt-[clamp(80px,9vw,140px)] sm:px-[clamp(20px,5vw,72px)]">
        <SectionHead
          num="02"
          title="أخبرنا عن المشروع"
          kicker="كلما كان الوصف أوضح، كان ردّنا أدق. الحقول المطلوبة مُعلَّمة."
        />
        <ContactForm />
      </section>

      <section className="px-5 pt-[clamp(80px,9vw,140px)] sm:px-[clamp(20px,5vw,72px)]">
        <SectionHead num="03" title="المقر" />
        <Reveal>
          <div className="relative mt-[clamp(34px,4vw,56px)] grid min-h-[clamp(260px,32vw,420px)] content-center overflow-hidden rounded-[26px] bg-[linear-gradient(160deg,#0A2F55,#04172B)] p-[clamp(30px,4vw,58px)] text-white">
            <div className="map-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
            <div className="relative z-[2]">
              <h3 className="m-0 mb-2.5 font-display text-[clamp(26px,3vw,42px)] font-normal">
                {company.city}
              </h3>
              <p className="m-0 text-[15px] text-white/60">
                المنطقة الشرقية — قلب المشاريع الصناعية والطاقة في المملكة.
              </p>
              <div className="mt-[clamp(28px,3vw,44px)] flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white py-2 pe-2 ps-5 text-[13.5px] font-medium text-deep transition-transform duration-300 hover:-translate-y-0.5"
                >
                  الملف التعريفي — عربي
                  <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-deep text-white">
                    <Arrow />
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white py-2 pe-2 ps-5 text-[13.5px] font-medium text-deep transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <bdi dir="ltr">Company Profile — English</bdi>
                  <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-deep text-white">
                    <Arrow />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
