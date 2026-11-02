"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView } from "framer-motion";

/**
 * هل حان وقت ظهور العنصر؟
 * يعتمد على التقاطع مع الشاشة، مع ضمان إضافي: لو قفز الزائر إلى رابط داخلي
 * وتجاوز العنصر دون أن يمرّ عليه (أو كان أعلى الشاشة عند التحميل) يُعرض فوراً
 * بدل أن يبقى مخفياً.
 */
export default function useRevealed(
  ref: RefObject<Element | null>,
  amount: number = 0.2,
  once: boolean = true
) {
  const inView = useInView(ref, { once, amount });
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const check = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect && rect.bottom < 0) setForced(true);
    };
    const id = window.setTimeout(check, 120);
    window.addEventListener("hashchange", check);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("hashchange", check);
    };
  }, [ref]);

  return inView || forced;
}
