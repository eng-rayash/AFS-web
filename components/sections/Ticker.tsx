import { tickerItems } from "@/data/content";
import Marquee from "../ui/Marquee";

/** شريط القدرات المتحرك تحت الهيرو */
export default function Ticker() {
  return (
    <Marquee
      items={tickerItems}
      className="mt-[clamp(50px,6vw,84px)] border-y border-line py-4"
      itemClassName="font-display text-[clamp(17px,1.9vw,25px)] text-[#8FA0B0]"
    />
  );
}
