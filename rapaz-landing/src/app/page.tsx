import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Urgency } from "@/components/site/urgency";
import { PracticeAreas } from "@/components/site/practice-areas";
import { Method } from "@/components/site/method";
import { Studio } from "@/components/site/studio";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Urgency />
        <PracticeAreas />
        <Method />
        <Studio />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
