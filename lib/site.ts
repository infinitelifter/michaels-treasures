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
    "Exceptional vintage watches from the 1940s–1950s, personally selected and photographed in Prague. Viewings by appointment. Worldwide insured shipping.",
  url: "https://praguevintagewatches.com",
  email: "michael.treasures1@gmail.com",
  instagram: "https://instagram.com/michaels.treasures",
  instagramHandle: "@michaels.treasures",
  city: "Prague",
  country: "Czechia",
  countryCode: "CZ",
  ico: "22533834",
  streetAddress: "Slavíkova 1379/20",
  postalCode: "130 00",
  curatedEra: "1940s–1950s",
} as const;

export const faq = [
  {
    question: "Are the watches authentic?",
    answer:
      "I carefully select watches for their originality, condition and character. If a watch has any known replaced parts or other deviations from originality, they are always clearly disclosed before a sale.",
  },
  {
    question: "Are the watches serviced?",
    answer:
      "Every watch is inspected and tested for accuracy before being offered. Where servicing is required or recommended, it can be carried out prior to delivery by an experienced watchmaker.",
  },
  {
    question: "Do you buy vintage watches?",
    answer:
      "Yes. I'm always interested in purchasing quality vintage watches or entire collections. Feel free to get in touch if you're considering selling.",
  },
  {
    question: "How do I pay?",
    answer:
      "Bank transfer is preferred for most transactions, while cash payment is possible for in-person meetings in Prague. An invoice is issued for every purchase.",
  },
] as const;

/**
 * Photography slots. To swap a photo, drop the new JPEG over the same file
 * name in /public/images (or update the path + alt text here).
 */
export const photos = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Vintage military pilot's watch with black dial and luminous numerals on a leather strap",
  },
  selection: {
    src: "/images/selection.jpg",
    alt: "Vintage gold chronograph on a burgundy leather strap, worn on the wrist in Prague",
  },
  about: {
    src: "/images/about.jpg",
    alt: "Michal Sopoliga, vintage watch dealer, wearing a vintage watch in Prague",
  },
  collection: [
    {
      src: "/images/slide-1.jpg",
      alt: "Vintage chronograph with two-tone cream dial on a tan crocodile strap",
    },
    {
      src: "/images/slide-2.jpg",
      alt: "Vintage Omega with tropical brown dial on a tan leather strap",
    },
    {
      src: "/images/slide-3.jpg",
      alt: "Gold Omega dress watch with honeycomb dial on a black strap",
    },
    {
      src: "/images/slide-4.jpg",
      alt: "Vintage TAG Heuer diver with cream lume dial on a steel bracelet",
    },
    {
      src: "/images/slide-5.jpg",
      alt: "Vintage watch with two-tone copper dial resting on a book page",
    },
    {
      src: "/images/slide-6.jpg",
      alt: "Vintage Revue with silver dial and small seconds on a grey strap",
    },
    {
      src: "/images/slide-7.jpg",
      alt: "Vintage skin diver with orange accents on a black tropic strap",
    },
    {
      src: "/images/slide-8.jpg",
      alt: "Universal Genève automatic with silver dial on a navy stitched strap",
    },
    {
      src: "/images/slide-9.jpg",
      alt: "Cartier with white Roman-numeral dial on a burgundy leather strap",
    },
    {
      src: "/images/slide-10.jpg",
      alt: "Vintage rectangular tank watch on an oxblood leather strap",
    },
  ],
} as const;
