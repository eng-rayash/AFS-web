"use client";

import type { ReactNode } from "react";

/** شريط نصي يمرّ أفقياً بلا توقف (يتوقف مع تفضيل تقليل الحركة) */
export default function Marquee({
  items,
  className,
  itemClassName,
  slow = false,
  separator = "◆",
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  slow?: boolean;
  separator?: ReactNode;
}) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className ?? ""}`} aria-hidden="true">
      <div
        className={`flex w-max gap-11 whitespace-nowrap ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span key={i} className={`flex items-center gap-11 ${itemClassName ?? ""}`}>
            {item}
            <span className="text-accent text-[0.5em] align-middle">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
