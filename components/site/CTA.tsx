"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/data/content";
import Arrow from "./Arrow";
import Magnetic from "../ui/Magnetic";
import SplitWords from "../ui/SplitWords";
import Reveal from "../ui/Reveal";

/** شريط الدعوة للتواصل — مشترك بين كل الصفحات */
export default function CTA() {
  return (
    <aside className="relative mx-3 mt-[clamp(90px,10vw,150px)] overflow-hidden rounded-[34px] bg-[linear-gradient(160deg,#E6EEF6_0%,#C9DBEC_55%,#A9C5E2_100%)] px-6 py-[clamp(56px,7vw,100px)] sm:mx-7 sm:px-[clamp(24px,5vw,72px)]">
      <motion.svg
        viewBox="0 0 520 520"
        className="pointer-events-none absolute -bottom-32 -start-32 w-[520px] opacity-70"
        aria-hidden="true"
        initial={{ rotate: -8, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 0.7, 0.2, 1] }}
      >
        <g fill="none" strokeWidth="1.2">
          <circle cx="0" cy="520" r="160" stroke="#F29715" />
          <circle cx="0" cy="520" r="230" stroke="#04569F" />
          <circle cx="0" cy="520" r="300" stroke="#04569F" />
          <circle cx="0" cy="520" r="370" stroke="#FFFFFF" />
          <circle cx="0" cy="520" r="440" stroke="#FFFFFF" />
        </g>
      </motion.svg>

      <h2 className="relative font-display text-[clamp(38px,6vw,90px)] leading-[1.16]">
        <SplitWords text={"لنبدأ\nمشروعك القادم"} />
      </h2>

      <Reveal delay={0.15}>
        <p className="mt-6 max-w-[46ch] text-base leading-[1.85] text-ink/80">
          أخبرنا عن مشروعك، وسنعود إليك بتصوّر أولي للتنفيذ والتمويل والشراكة المناسبة لطبيعته.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-3 rounded-full bg-brand py-2 pe-2 ps-6 text-[15px] text-white"
            >
              <bdi dir="ltr">{company.phone}</bdi>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white">
                <Arrow size={16} />
              </span>
            </a>
          </Magnetic>
          <a
            href={company.emailHref}
            className="inline-flex items-center gap-2.5 rounded-full border border-brand/35 px-6 py-3.5 text-[15px] text-brand transition-colors hover:bg-brand/5"
          >
            {company.email}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full border border-brand/35 px-6 py-3.5 text-[15px] text-brand transition-colors hover:bg-brand/5"
          >
            حمّل الملف التعريفي (PDF)
          </Link>
        </div>

        <dl className="mt-10 flex flex-wrap gap-x-9 gap-y-2.5 text-[14.5px] text-[#2C4257]">
          <div>
            <dt className="mb-1 text-[11.5px] tracking-[0.08em] text-[#6C8298]">المقر</dt>
            <dd>{company.city}</dd>
          </div>
          <div>
            <dt className="mb-1 text-[11.5px] tracking-[0.08em] text-[#6C8298]">الموقع</dt>
            <dd>
              <a href={company.siteHref} className="border-b border-brand/30 pb-0.5">
                {company.site}
              </a>
            </dd>
          </div>
          <div>
            <dt className="mb-1 text-[11.5px] tracking-[0.08em] text-[#6C8298]">التأسيس</dt>
            <dd>{company.founded}</dd>
          </div>
        </dl>
      </Reveal>
    </aside>
  );
}
