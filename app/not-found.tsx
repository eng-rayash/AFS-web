import Link from "next/link";

export const metadata = { title: "الصفحة غير موجودة" };

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-6 text-center">
      <div>
        <p className="font-display text-[clamp(70px,14vw,180px)] leading-none text-accent">404</p>
        <h1 className="mt-4 font-display text-[clamp(26px,4vw,44px)]">هذه الصفحة غير موجودة</h1>
        <p className="mx-auto mt-4 max-w-[40ch] text-mute">
          ربما تغيّر الرابط أو حُذفت الصفحة — يمكنك العودة إلى الرئيسية أو التواصل معنا مباشرة.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-4 text-white transition-transform hover:-translate-y-0.5"
        >
          العودة إلى الرئيسية
        </Link>
      </div>
    </section>
  );
}
