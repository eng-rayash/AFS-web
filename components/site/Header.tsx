"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav } from "@/data/content";
import Arrow from "./Arrow";

/**
 * القائمة الرئيسية: شريط زجاجي يختفي عند النزول ويعود عند الصعود،
 * ويتحول إلى قائمة ملء الشاشة على الجوال.
 */
export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 80);
    setHidden(y > 320 && y > prev && !open);
  });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
        className="fixed inset-x-0 top-0 z-[70] px-3 pt-[calc(14px+env(safe-area-inset-top,0px))] sm:px-6"
      >
        <nav
          aria-label="القائمة الرئيسية"
          className={`mx-auto flex max-w-[1500px] items-center gap-5 rounded-full border px-3 py-2 ps-5 transition-colors duration-500 ${
            solid
              ? "border-white/15 bg-[rgba(3,23,43,.78)] backdrop-blur-xl"
              : "border-white/35 bg-white/10 backdrop-blur-md"
          } text-white`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-2.5 text-sm font-medium">
            <Image src="/img/logo-mark.png" alt="" width={30} height={30} className="h-[30px] w-auto" />
            <span className="whitespace-nowrap">{company.name}</span>
          </Link>

          <ul className="mx-auto hidden items-center gap-6 text-[13.5px] lg:flex xl:gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative block pb-1 opacity-80 transition-opacity hover:opacity-100 aria-[current=page]:opacity-100"
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-px block h-[1.5px] rounded bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <span className="hidden text-[12.5px] tracking-wider opacity-85 lg:block">EN</span>

          <Link
            href="/contact"
            className="hidden items-center gap-2.5 rounded-full bg-white py-1.5 pe-1.5 ps-4 text-[13.5px] font-medium text-deep transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
          >
            تواصل معنا
            <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-deep text-white">
              <Arrow />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            className="ms-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/50 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <motion.span
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="absolute inset-x-0 top-0 block h-[1.6px] bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="absolute inset-x-0 bottom-0 block h-[1.6px] bg-white"
              />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[65] bg-[linear-gradient(170deg,#04172b,#020d1a)] px-6 pb-10 pt-32 lg:hidden"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 0.7, 0.2, 1] }}
          >
            <ul className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.5 }}
                  className="border-b border-white/10"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 font-display text-3xl text-white"
                  >
                    {item.label}
                    <Arrow size={18} className="text-accent" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 space-y-2 text-sm text-white/65"
            >
              <p dir="ltr" className="text-start">{company.phone}</p>
              <p>{company.email}</p>
              <p>{company.city}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
