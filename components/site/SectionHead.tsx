import type { ReactNode } from "react";
import Reveal from "../ui/Reveal";
import SplitWords from "../ui/SplitWords";

/** ترويسة فصل: رقم برتقالي + عنوان عرضي + سطر تمهيدي */
export default function SectionHead({
  num,
  title,
  kicker,
  dark = false,
  children,
}: {
  num: string;
  title: string;
  kicker?: ReactNode;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start gap-5 md:gap-[clamp(18px,3vw,54px)]">
      <Reveal direction="right">
        <span className="font-display text-[clamp(28px,3vw,44px)] leading-none text-accent opacity-90">
          {num}
        </span>
      </Reveal>
      <div className="min-w-0 flex-1">
        <h2
          className={`m-0 max-w-[16ch] font-display text-[clamp(32px,5.6vw,86px)] leading-[1.1] text-balance ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          <SplitWords text={title} />
        </h2>
        {kicker && (
          <Reveal delay={0.12}>
            <p
              className={`mt-3.5 max-w-[44ch] text-[15px] leading-[1.85] ${
                dark ? "text-white/60" : "text-mute"
              }`}
            >
              {kicker}
            </p>
          </Reveal>
        )}
        {children}
      </div>
    </div>
  );
}
