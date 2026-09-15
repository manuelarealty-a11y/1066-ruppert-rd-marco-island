import { MapPin } from "lucide-react";

const highlights = [
  "White-sand beaches",
  "Boating & direct gulf access",
  "Golf courses",
  "Fine dining & shopping",
  "Gulf Coast natural beauty",
];

export function Area() {
  return (
    <section className="bg-white px-6 py-20 md:px-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          The Marco Island Lifestyle
        </p>
        <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
          Steps from the best of Southwest Florida
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Enjoy proximity to white-sand beaches, boating, golf, dining,
          shopping, and the natural beauty of the Gulf Coast — all part of
          everyday life at 1066 Ruppert Road.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=1066+Ruppert+Rd,+Marco+Island,+FL+34145"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-900 hover:text-white"
        >
          <MapPin className="h-4 w-4" />
          View 1066 Ruppert Rd on Google Maps
        </a>
      </div>
    </section>
  );
}
