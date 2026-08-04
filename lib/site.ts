/**
 * Central site configuration. Everything a search engine or AI assistant
 * should know about the business lives here, so copy, metadata, JSON-LD
 * and llms.txt never drift apart.
 */

export const site = {
  name: "Michael's Treasures",
  legalName: "Michal Sopoliga",
  tagline: "Exceptional Vintage Watches",
  description:
    "Exceptional vintage watches, personally selected and photographed in Prague. Viewings by appointment. Worldwide insured shipping.",
  url: "https://praguevintagewatches.com",
  email: "michael@praguevintagewatches.com",
  instagram: "https://instagram.com/michaels.treasures",
  instagramHandle: "@michaels.treasures",
  city: "Prague",
  country: "Czechia",
  countryCode: "CZ",
  // TODO: replace the placeholders below with the real registered details
  ico: "IČO [number]",
  registeredAddress: "[registered address]",
  dealingSince: "[year]",
} as const;

export const faq = [
  {
    question: "Can I see the watch in person?",
    answer:
      "Yes. Viewings take place in Prague by appointment, usually within a day or two of asking.",
  },
  {
    question: "Do you ship outside the EU?",
    answer:
      "Yes. Every watch is shipped fully insured, worldwide, with tracking sent before it leaves.",
  },
  {
    question: "Are the dials original?",
    answer:
      "Unless stated otherwise, yes. Redials, service dials and replaced hands are always disclosed in writing, before anything is agreed.",
  },
  {
    question: "How do I pay?",
    answer:
      "Bank transfer for most sales, or cash in person in Prague. An invoice with the registered company details is issued for every watch.",
  },
] as const;

/**
 * Photography slots. Replace the placeholder SVGs with real photographs by
 * dropping JPEGs into /public/images and updating the paths (or keeping the
 * same file names). Alt text is written for both accessibility and search.
 */
export const photos = {
  hero: {
    src: "/images/placeholder-wide.svg",
    alt: "Vintage watch worn on the wrist, photographed in daylight in Prague",
  },
  selection: {
    src: "/images/placeholder-tall.svg",
    alt: "Latest vintage watch arrival at Michael's Treasures, Prague",
  },
  about: {
    src: "/images/placeholder-tall.svg",
    alt: "Michal Sopoliga at his bench inspecting a vintage watch",
  },
  collection: [
    { src: "/images/placeholder-portrait.svg", alt: "Vintage watch dial close-up" },
    { src: "/images/placeholder-portrait.svg", alt: "Vintage watch wrist shot in daylight" },
    { src: "/images/placeholder-portrait.svg", alt: "Vintage watch caseback engraving" },
    { src: "/images/placeholder-portrait.svg", alt: "Vintage watch resting on a desk" },
    { src: "/images/placeholder-portrait.svg", alt: "Vintage watch dial patina detail" },
    { src: "/images/placeholder-portrait.svg", alt: "Vintage watch on the wrist, natural light" },
    { src: "/images/placeholder-portrait.svg", alt: "Vintage watch lug and case detail" },
    { src: "/images/placeholder-portrait.svg", alt: "Vintage mechanical watch movement" },
  ],
} as const;
