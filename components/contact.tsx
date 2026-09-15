import { Phone, Mail, Globe } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-20 text-white md:px-14"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Private Showings &amp; Inquiries
        </p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">
          Ready to see 1066 Ruppert Road in person?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/75">
          For current pricing, availability, or a private showing, contact
          Manuela Schinagl of Manuela Realty International — serving Marco
          Island and Southwest Florida real estate.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+12394505622"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            239-450-5622
          </a>
          <a
            href="mailto:manuelarealty@gmail.com"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold transition hover:bg-white/10 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            manuelarealty@gmail.com
          </a>
        </div>

        <a
          href="https://www.naplesrealestate.sale"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 underline underline-offset-4 hover:text-white"
        >
          <Globe className="h-4 w-4" />
          naplesrealestate.sale
        </a>

        <LeadForm />
      </div>
    </section>
  );
}
