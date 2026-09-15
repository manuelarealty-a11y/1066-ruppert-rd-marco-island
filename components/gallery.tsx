"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const photos = [
  { src: "https://g.tlcdn.com/view/4c101b628ad749b5997dc9395a2041cf.jpg", alt: "1066 Ruppert Rd Marco Island — front exterior with circular driveway" },
  { src: "https://g.tlcdn.com/view/e01a2c6ff1b1424f9c00cc1fbc5cebed.jpg", alt: "1066 Ruppert Rd Marco Island — entry facade" },
  { src: "https://g.tlcdn.com/view/26aae5bcdaf54781a2bb977a69648f07.jpg", alt: "1066 Ruppert Rd Marco Island — rear exterior with pool and spa" },
  { src: "https://g.tlcdn.com/view/51febbcae21b45cc9235238fd421d53f.jpg", alt: "1066 Ruppert Rd Marco Island — covered lanai, pool, and spa" },
  { src: "https://g.tlcdn.com/view/2a9403c4dd1c46f395ae34b15e02a7d4.jpg", alt: "1066 Ruppert Rd Marco Island — private boat dock with lift" },
  { src: "https://g.tlcdn.com/view/b4403228ed834935a73ef4d91c58462c.jpg", alt: "1066 Ruppert Rd Marco Island — boat dock and canal view" },
  { src: "https://g.tlcdn.com/view/5eb859d749fc4affbcd144ef1c59a449.jpg", alt: "1066 Ruppert Rd Marco Island — foyer" },
  { src: "https://g.tlcdn.com/view/d4833d4f34934d3abdf3969ad9a61da7.jpg", alt: "1066 Ruppert Rd Marco Island — living room with canal view" },
  { src: "https://g.tlcdn.com/view/8ee88c9c756a42468a03e638114476b5.jpg", alt: "1066 Ruppert Rd Marco Island — great room" },
  { src: "https://g.tlcdn.com/view/2c07d89eba3e46ab87e7af2fc4540b83.jpg", alt: "1066 Ruppert Rd Marco Island — kitchen" },
  { src: "https://g.tlcdn.com/view/404be7584cd049faadd5c18c0b3e1b03.jpg", alt: "1066 Ruppert Rd Marco Island — kitchen and living area" },
  { src: "https://g.tlcdn.com/view/f6a372bf3f144dd1aa609eeb1aaee792.jpg", alt: "1066 Ruppert Rd Marco Island — dining room" },
  { src: "https://g.tlcdn.com/view/40facc6e3c6541f9838f0a08fdd69afa.jpg", alt: "1066 Ruppert Rd Marco Island — sitting room" },
  { src: "https://g.tlcdn.com/view/fdaaaf66abc84eabb83ffde49435b50f.jpg", alt: "1066 Ruppert Rd Marco Island — additional interior view" },
  { src: "https://g.tlcdn.com/view/f3422aa04f8f4f41adf0f9ef9a94e36c.jpg", alt: "1066 Ruppert Rd Marco Island — primary bedroom with pool access" },
  { src: "https://g.tlcdn.com/view/c8142a7472bc4e7991bd4b22748e8a4e.jpg", alt: "1066 Ruppert Rd Marco Island — bedroom" },
  { src: "https://g.tlcdn.com/view/968bf8ae50d7458b91a9d23d9df67823.jpg", alt: "1066 Ruppert Rd Marco Island — bedroom with TV" },
  { src: "https://g.tlcdn.com/view/83be4234b20449c9b368b5671d47b4ee.jpg", alt: "1066 Ruppert Rd Marco Island — bathroom with soaking tub and shower" },
  { src: "https://g.tlcdn.com/view/8832d2017e054ef8b9f2f7d47825d532.jpg", alt: "1066 Ruppert Rd Marco Island — bathroom with pool access" },
  { src: "https://g.tlcdn.com/view/83870fe51aca400290fbe48cde385918.jpg", alt: "1066 Ruppert Rd Marco Island — screened balcony with water view" },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <section id="gallery" className="bg-white px-6 py-20 md:px-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Photos &amp; Video Tour
        </p>
        <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
          See the home at 1066 Ruppert Road
        </h2>

        <button
          onClick={() => setShowVideo(true)}
          className="group relative mt-8 block h-64 w-full overflow-hidden rounded-2xl md:h-96"
        >
          <Image
            src={photos[0].src}
            alt="1066 Ruppert Rd Marco Island — video tour preview"
            fill
            sizes="(min-width: 768px) 1152px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 transition group-hover:bg-slate-950/50">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg">
              <Play className="ml-1 h-6 w-6" />
            </span>
          </div>
          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold tracking-wide text-slate-900">
            Watch the full walkthrough
          </span>
        </button>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setOpenIndex(i)}
              className="relative h-32 w-full overflow-hidden rounded-xl sm:h-40"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 280px, 45vw"
                className="object-cover transition duration-300 hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          onClick={close}
        >
          <button
            className="absolute right-6 top-6 text-white"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-4 text-white md:left-10"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <div className="relative h-[85vh] w-[90vw]">
            <Image
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              fill
              sizes="90vw"
              className="rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className="absolute right-4 text-white md:right-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}

      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          onClick={() => setShowVideo(false)}
        >
          <button
            className="absolute right-6 top-6 text-white"
            onClick={() => setShowVideo(false)}
            aria-label="Close video"
          >
            <X className="h-8 w-8" />
          </button>
          <video
            src="https://g.tlcdn.com/view/15c036c631e641ccaafd8ca5d5a05a04.mp4"
            controls
            autoPlay
            className="max-h-[85vh] max-w-[90vw] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
