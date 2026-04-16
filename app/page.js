import HeroRotativo from "@/components/home/HeroRotativo";
import ProvaSocial from "@/components/home/ProvaSocial";
import SecaoInterativa from "@/components/home/SecaoInterativa";
import CtaWhatsApp from "@/components/home/CtaWhatsApp";
import Localizacao from "@/components/home/Localizacao";

export default function Home() {
  return (
    <main>
      <HeroRotativo />
      <ProvaSocial />
      <SecaoInterativa />
      <CtaWhatsApp />
      <Localizacao />
    </main>
  );
}
