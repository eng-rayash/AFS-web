import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { company } from "@/data/content";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ScrollProgress from "@/components/site/ScrollProgress";
import CursorGlow from "@/components/site/CursorGlow";
import Preloader from "@/components/site/Preloader";

const hacen = localFont({
  src: "../public/fonts/hacen-samra.woff2",
  variable: "--font-hacen",
  display: "swap",
  weight: "400",
});

const thmanyah = localFont({
  src: "../public/fonts/thmanyah-serif.woff2",
  variable: "--font-thmanyah",
  display: "swap",
  weight: "500",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://afsksa.com"),
  title: {
    default: `${company.name} | شريك تطوير وتنفيذ المشاريع`,
    template: `%s | ${company.name}`,
  },
  description:
    "مؤسسة سعودية مقرها الدمام تعمل في المقاولات والبنية التحتية، الأعمال الكهربائية والميكانيكية، الطاقة المتجددة، العقارات، الحلول المالية والاستشارات الإدارية.",
  keywords: [
    "مقاولات",
    "بنية تحتية",
    "الطاقة الشمسية",
    "EPC",
    "BOT",
    "الدمام",
    "السعودية",
    "تطوير مشاريع",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: company.name,
    title: `${company.name} | ${company.tagline}`,
    description: company.sloganEn,
    images: ["/img/hero.webp"],
  },
  icons: { icon: "/img/logo-mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#04172B",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${hacen.variable} ${thmanyah.variable}`}>
      <body>
        <Preloader />
        <ScrollProgress />
        <CursorGlow />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
