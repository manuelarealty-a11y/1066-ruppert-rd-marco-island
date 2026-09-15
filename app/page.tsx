import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Details } from "@/components/details";
import { Area } from "@/components/area";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function ListingPage() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Details />
      <Area />
      <Contact />
      <SiteFooter />
    </main>
  );
}
