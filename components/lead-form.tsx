"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "REPLACE_WITH_YOUR_WEB3FORMS_KEY";

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New inquiry — 1066 Ruppert Rd, Marco Island");
    formData.append("from_name", "1066 Ruppert Rd Listing Site");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-300" />
        <p className="text-lg font-semibold text-white">Thank you!</p>
        <p className="text-white/75">
          Your message has been sent to Manuela. She&apos;ll be in touch
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 grid max-w-xl gap-4 rounded-2xl bg-white/10 p-6 text-left backdrop-blur sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-white/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-emerald-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm text-white/80">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-emerald-300"
            placeholder="(optional)"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-white/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-emerald-300"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-white/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          defaultValue="I'm interested in 1066 Ruppert Rd, Marco Island. Please contact me with more information."
          className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-emerald-300"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Request Information
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-300">
          Something went wrong sending your message — please call or email
          Manuela directly using the details above.
        </p>
      )}
    </form>
  );
}
