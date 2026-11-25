import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import "./globals.css";

const siteUrl = "https://1066ruppertrd.com";
const title =
  "1066 Ruppert Rd, Marco Island, FL 34145 | $2,750,000 | 5BR Gulf-Access Home For Sale";
const description =
  "Offered at $2,750,000 (reduced from $3,100,000). Refined 5 bedroom, 3 bathroom Marco Island home with ~3,307 sqft, quick gulf access, solar power with battery backup, and a circular driveway. Offered by Manuela Schinagl, Manuela Realty International. MLS #2261311.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "1066 Ruppert Rd Marco Island",
    "Marco Island real estate",
    "Marco Island homes for sale",
    "Marco Island gulf access home",
    "Southwest Florida luxury real estate",
    "Manuela Schinagl",
    "Manuela Realty International",
  ],
  authors: [{ name: "Manuela Schinagl" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "1066 Ruppert Rd, Marco Island",
    images: [
      {
        url: "https://g.tlcdn.com/view/4c101b628ad749b5997dc9395a2041cf.jpg",
        width: 2048,
        height: 1365,
        alt: "1066 Ruppert Rd, Marco Island, FL — front exterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://g.tlcdn.com/view/4c101b628ad749b5997dc9395a2041cf.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Marco Island",
    "geo.position": "25.96702;-81.72962",
    ICBM: "25.96702, -81.72962",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "1066 Ruppert Rd, Marco Island, FL 34145",
    description,
    url: siteUrl,
    offers: {
      "@type": "Offer",
      price: 2750000,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    datePosted: "2026-07-24",
    image: [
      "https://g.tlcdn.com/view/4c101b628ad749b5997dc9395a2041cf.jpg",
      "https://g.tlcdn.com/view/e01a2c6ff1b1424f9c00cc1fbc5cebed.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1066 Ruppert Rd",
      addressLocality: "Marco Island",
      addressRegion: "FL",
      postalCode: "34145",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.96702,
      longitude: -81.72962,
    },
    numberOfRooms: 5,
    numberOfBathroomsTotal: 3,
    floorSize: {
      "@type": "QuantitativeValue",
      value: 3307,
      unitCode: "FTK",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Solar panels with battery backup",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Direct gulf access",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Circular driveway",
        value: true,
      },
    ],
    additionalProperty: [
      { "@type": "PropertyValue", name: "MLS Number", value: "2261311" },
      {
        "@type": "PropertyValue",
        name: "MLS Number (NABOR)",
        value: "226027033",
      },
    ],
    broker: {
      "@type": "RealEstateAgent",
      name: "Manuela Schinagl",
      worksFor: "Manuela Realty International",
      telephone: "+1-239-450-5622",
      email: "manuelarealty@gmail.com",
      url: "https://www.naplesrealestate.sale",
    },
  };

  return (
    <html lang="en">
      <body>
        <a
          href="https://www.naplesrealestate.sale"
          className="sticky top-0 z-50 flex items-center gap-2 bg-slate-950 px-4 py-2.5 text-sm font-medium text-white/90 transition hover:text-white md:px-14"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Naples Real Estate
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
