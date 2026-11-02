import HomeHero from "@/components/sections/HomeHero";
import Ticker from "@/components/sections/Ticker";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeModels from "@/components/sections/HomeModels";
import AreasGrid from "@/components/sections/AreasGrid";
import Lifecycle from "@/components/sections/Lifecycle";
import WhyUs from "@/components/sections/WhyUs";
import QuoteBand from "@/components/site/QuoteBand";
import CTA from "@/components/site/CTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Ticker />
      <HomeAbout />
      <HomeModels />
      <AreasGrid />
      <QuoteBand
        image="/img/band-pipeline.webp"
        quote={"لا نكتفي بالتنفيذ.\nنشارك في صناعة المشروع."}
        body="من تحديد الفرصة ودراستها وتمويلها، إلى تنفيذها وتشغيلها والاستثمار فيها — دور واحد ممتد بدل أدوار متقطعة."
      />
      <Lifecycle num="04" />
      <WhyUs />
      <CTA />
    </>
  );
}
