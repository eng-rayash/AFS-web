"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { businessAreas } from "@/data/content";
import Arrow from "../site/Arrow";
import Magnetic from "../ui/Magnetic";

type FieldName = "name" | "email" | "phone" | "message";

const validators: Record<FieldName, (v: string) => string> = {
  name: (v) => (v.trim().length >= 3 ? "" : "اكتب اسمك الكامل."),
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "أدخل بريدًا إلكترونيًا صحيحًا.",
  phone: (v) => (v.replace(/\D/g, "").length >= 9 ? "" : "أدخل رقم جوال صحيحًا."),
  message: (v) => (v.trim().length >= 20 ? "" : "صف المشروع في 20 حرفًا على الأقل."),
};

/**
 * نموذج التواصل — تحقق فوري من المدخلات.
 * ملاحظة للمطوّر: الإرسال الفعلي يُوصَّل لاحقاً بـ API route أو خدمة نماذج،
 * موضع التوصيل معلّم بـ TODO في الدالة submit.
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  function validateField(name: FieldName, value: string) {
    const msg = validators[name](value);
    setErrors((e) => ({ ...e, [name]: msg }));
    return !msg;
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Partial<Record<FieldName, string>> = {};

    (Object.keys(validators) as FieldName[]).forEach((key) => {
      const msg = validators[key](String(data.get(key) ?? ""));
      if (msg) next[key] = msg;
    });
    setErrors(next);

    if (Object.keys(next).length) {
      const first = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }

    setBusy(true);
    try {
      // المسار app/api/contact/route.ts — وصّل داخله البريد أو قاعدة البيانات
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
    } catch {
      /* لا نوقف التجربة على الزائر إن تعذّر الاتصال */
    }
    setBusy(false);
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={submit} noValidate className="mt-[clamp(34px,4vw,56px)] grid gap-[clamp(16px,2vw,26px)] md:grid-cols-2">
      <Field label="الاسم *" name="name" error={errors.name} onBlurValidate={validateField} autoComplete="name" />
      <Field label="الجهة / الشركة" name="org" autoComplete="organization" />
      <Field
        label="البريد الإلكتروني *"
        name="email"
        type="email"
        dir="ltr"
        error={errors.email}
        onBlurValidate={validateField}
        autoComplete="email"
      />
      <Field
        label="الجوال *"
        name="phone"
        type="tel"
        dir="ltr"
        placeholder="+966"
        error={errors.phone}
        onBlurValidate={validateField}
        autoComplete="tel"
      />

      <div className="flex flex-col gap-2.5 md:col-span-2">
        <label htmlFor="type" className="text-[13px] text-mute">
          نوع المشروع
        </label>
        <select id="type" name="type" className="field-input">
          <option value="">اختر المجال…</option>
          {businessAreas.map((a) => (
            <option key={a.id}>{a.title}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2.5 md:col-span-2">
        <label htmlFor="message" className="text-[13px] text-mute">
          تفاصيل المشروع *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={errors.message ? "true" : "false"}
          onBlur={(e) => validateField("message", e.target.value)}
          className="field-input min-h-[150px] resize-y"
        />
        <ErrorLine msg={errors.message} />
      </div>

      <div className="flex flex-wrap items-center gap-4 md:col-span-2">
        <Magnetic>
          <button
            type="submit"
            disabled={busy}
            className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-base text-white transition-[background,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#0468BE] disabled:opacity-70"
          >
            {busy ? "جارٍ الإرسال…" : "أرسل الطلب"}
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">
              <Arrow />
            </span>
          </button>
        </Magnetic>
        <span className="text-[13.5px] text-mute">نعود إليك خلال يومي عمل.</span>
      </div>

      <AnimatePresence>
        {sent && (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="m-0 rounded-[16px] border border-green bg-green/10 px-5 py-4 text-[14.5px] text-[#2F6B4A] md:col-span-2"
          >
            تم استلام طلبك — سنتواصل معك على البيانات التي أدخلتها.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

function ErrorLine({ msg }: { msg?: string }) {
  return (
    <span className="min-h-[1em] text-[12.5px] text-[#C0392B]">{msg ?? ""}</span>
  );
}

function Field({
  label,
  name,
  type = "text",
  dir,
  placeholder,
  error,
  autoComplete,
  onBlurValidate,
}: {
  label: string;
  name: string;
  type?: string;
  dir?: "ltr" | "rtl";
  placeholder?: string;
  error?: string;
  autoComplete?: string;
  onBlurValidate?: (name: FieldName, value: string) => boolean;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={name} className="text-[13px] text-mute">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        dir={dir}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : "false"}
        onBlur={(e) => onBlurValidate?.(name as FieldName, e.target.value)}
        className="field-input"
      />
      <ErrorLine msg={error} />
    </div>
  );
}
