import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Details } from "@/components/details";
import { Area } from "@/components/area";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function ListingPage() {
  return (
    <main>
      <div className="bg-amber-400 px-6 py-3 text-center text-sm font-bold tracking-wide text-slate-950 md:text-base">
        OPEN HOUSE — Sunday, November 22, 1–4 PM — Come see it in person.
      </div>
      <Hero />
      <Gallery />
      <Details />
      <Area />
      <Faq />
      <Contact />
      <SiteFooter />
    </main>
  );
}

