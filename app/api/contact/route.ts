import { NextResponse } from "next/server";

/**
 * نقطة استقبال طلبات نموذج التواصل.
 *
 * حالياً تتحقق من البيانات وتسجّلها في سجل الخادم فقط.
 * لتفعيل الإرسال الفعلي اختر واحداً:
 *  1) بريد عبر Resend:   await resend.emails.send({ to: "info@afsksa.com", ... })
 *  2) خدمة نماذج مثل Formspree أو Web3Forms (استبدل fetch في هذه الدالة)
 *  3) حفظ في قاعدة بيانات (Supabase / Postgres) ثم إشعار بالبريد
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ ok: false, error: "بيانات ناقصة" }, { status: 400 });
    }

    // TODO: أرسل البيانات إلى البريد أو قاعدة البيانات هنا.
    console.log("[AFS] طلب تواصل جديد:", { name, email, phone, type: body.type, org: body.org });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "طلب غير صالح" }, { status: 400 });
  }
}
