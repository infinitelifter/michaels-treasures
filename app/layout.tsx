import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { site, faq } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300", "400"],
  variable: "--font-fraunces",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Michael's Treasures — Vintage Watches in Prague",
    template: "%s — Michael's Treasures",
  },
  description: site.description,
  keywords: [
    "vintage watches",
    "vintage watches Prague",
    "vintage watch dealer",
    "buy vintage watch Czechia",
    "mechanical watches",
    "Michal Sopoliga",
    "Michael's Treasures",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Michael's Treasures — Vintage Watches in Prague",
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael's Treasures — Vintage Watches in Prague",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#14110E",
  width: "device-width",
  initialScale: 1,
};

/**
 * schema.org graph: Organization/LocalBusiness + Person + WebSite + FAQPage.
 * This is what search engines and AI assistants read to understand who
 * Michal is, where he operates, and how the business works.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${site.url}/#org`,
      name: site.name,
      legalName: site.legalName,
      description: `${site.name} is a vintage watch dealer based in Prague, Czechia, run by ${site.legalName}.`,
      url: site.url,
      email: site.email,
      identifier: site.ico,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.registeredAddress,
        addressLocality: site.city,
        addressCountry: site.countryCode,
      },
      areaServed: ["EU", "Worldwide"],
      sameAs: [site.instagram],
      founder: { "@id": `${site.url}/#michal` },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        description: "By appointment",
      },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#michal`,
      name: site.legalName,
      jobTitle: "Vintage Watch Dealer",
      worksFor: { "@id": `${site.url}/#org` },
    },
    {
      "@type": "WebSite",
      url: site.url,
      name: site.name,
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
