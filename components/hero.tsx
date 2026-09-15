import { Phone, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src="https://g.tlcdn.com/view/15c036c631e641ccaafd8ca5d5a05a04.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="https://g.tlcdn.com/view/4c101b628ad749b5997dc9395a2041cf.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />

      <div className="relative z-10 flex min-h-[92vh] flex-col justify-between px-6 py-8 md:px-14 md:py-10">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light tracking-[0.35em] text-white/80">
            MANUELA REALTY INTERNATIONAL
          </span>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/40 px-5 py-2 text-sm tracking-wide transition hover:bg-white hover:text-slate-950 md:inline-block"
          >
            Request a Private Showing
          </a>
        </div>

        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-sm font-medium tracking-widest text-emerald-300/90">
            <MapPin className="h-4 w-4" />
            MARCO ISLAND, FLORIDA
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            1066 Ruppert Road
          </h1>
          <p className="mt-5 max-w-xl text-lg font-light text-white/85 md:text-xl">
            A refined gulf-access residence with 5 bedrooms, 3 bathrooms, and
            ~3,307 sq ft of thoughtfully designed living space — solar-powered
            and move-in ready in the heart of Marco Island.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View Photos &amp; Video
            </a>
            <a
              href="tel:+12394505622"
              className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              239-450-5622
            </a>
            <a
              href="mailto:manuelarealty@gmail.com"
              className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email Manuela
            </a>
          </div>
        </div>

        <div className="grid max-w-2xl grid-cols-3 gap-4 border-t border-white/20 pt-6 text-center md:text-left">
          <div>
            <p className="text-3xl font-serif">5</p>
            <p className="text-xs uppercase tracking-widest text-white/70">
              Bedrooms
            </p>
          </div>
          <div>
            <p className="text-3xl font-serif">3</p>
            <p className="text-xs uppercase tracking-widest text-white/70">
              Bathrooms
            </p>
          </div>
          <div>
            <p className="text-3xl font-serif">3,307</p>
            <p className="text-xs uppercase tracking-widest text-white/70">
              Sq Ft (approx.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
