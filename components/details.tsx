import { Home, Bath, Ruler, Sun, Car, Waves } from "lucide-react";

const features = [
  { icon: Home, label: "5 Bedrooms" },
  { icon: Bath, label: "3 Full Bathrooms" },
  { icon: Ruler, label: "~3,307 Sq Ft Living Space" },
  { icon: Waves, label: "Quick, Direct Gulf Access" },
  { icon: Sun, label: "Solar Panels + Battery Backup" },
  { icon: Car, label: "Welcoming Circular Driveway" },
];

export function Details() {
  return (
    <section className="bg-slate-50 px-6 py-20 md:px-14">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Property Details
          </p>
          <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
            Refined Marco Island living, built for comfort and efficiency
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Discover 1066 Ruppert Road, a refined Marco Island residence
            offering quick and direct access to the gulf, generous living
            space, modern efficiency, and the relaxed sophistication of
            Southwest Florida living. This impressive home features 5
            bedrooms, 3 full bathrooms, and approximately 3,307 square feet of
            thoughtfully designed living space.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            A welcoming circular driveway sets the tone on arrival, while the
            spacious layout provides flexibility for family life,
            entertaining guests, or creating dedicated work and guest spaces.
            A notable feature is the property&apos;s solar-panel system with
            battery backup — an increasingly valuable advantage for Florida
            homeowners.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Whether you are seeking a primary residence, a seasonal retreat,
            or an investment in one of Florida&apos;s most desirable coastal
            markets, 1066 Ruppert Rd presents an exceptional opportunity to
            enjoy the Marco Island lifestyle.
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Auch auf Deutsch
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Entdecken Sie 1066 Ruppert Road auf Marco Island, Florida — ein
              großzügiges, hochwertiges Wohnhaus mit 5 Schlafzimmern, 3 Bädern
              und ca. 3.307 sq ft Wohnfläche, eleganter Zufahrt sowie
              Solarpanels mit Batteriespeicher für zusätzliche
              Energieeffizienz und Sicherheit. Kontaktieren Sie uns für einen
              privaten Besichtigungstermin.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <Icon className="h-6 w-6 text-emerald-700" />
              <p className="text-sm font-medium text-slate-800">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
