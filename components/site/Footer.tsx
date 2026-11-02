import Image from "next/image";
import Link from "next/link";
import { company, nav } from "@/data/content";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5 px-5 pb-10 pt-9 text-[13.5px] text-mute sm:px-[clamp(20px,5vw,72px)]">
      <Link href="/" aria-label={company.name}>
        <Image
          src="/img/logo-lockup.png"
          alt={`${company.name} — AFS Establishment`}
          width={360}
          height={401}
          className="h-[58px] w-auto"
        />
      </Link>

      <nav aria-label="روابط التذييل" className="flex flex-wrap gap-6">
        {nav.slice(1).map((item) => (
          <Link key={item.href} href={item.href} className="transition-colors hover:text-brand">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-wrap gap-x-5 gap-y-1.5">
        <span>{company.city}</span>
        <a href={company.phoneHref}>
          <bdi dir="ltr">{company.phone}</bdi>
        </a>
        <a href={company.emailHref} className="transition-colors hover:text-brand">
          {company.email}
        </a>
      </div>
    </footer>
  );
}
