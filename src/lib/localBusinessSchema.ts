import { CLINIC_ADDRESS, PHONE_NUMBER } from "./constants";

const BASE_URL = "https://globodentdentalspa.com";

/**
 * Returns a Dentist + LocalBusiness JSON-LD object enriched with
 * NAP, geo coordinates, opening hours, area served and ratings.
 *
 * Pass page-specific overrides (name, url) per landing page.
 */
export const buildLocalBusinessSchema = (opts: {
  pagePath: string;
  name?: string;
  description?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness", "MedicalClinic"],
  "@id": `${BASE_URL}/#dentist`,
  name: opts.name ?? "Globodent Dental Spa",
  alternateName: "Globodent Dental Spa®",
  description:
    opts.description ??
    "Premium, painless and specialist-led dental clinic in Malviya Nagar, South Delhi offering implants, root canal, braces, cosmetic dentistry and more.",
  url: `${BASE_URL}${opts.pagePath}`,
  image: `${BASE_URL}/placeholder.svg`,
  logo: `${BASE_URL}/placeholder.svg`,
  telephone: "+91-98555-79244",
  email: "info@globodentdentalspa.com",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI, EMI",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, 3/37, Shivalik Rd, Shivalik Enclave, Block E",
    addressLocality: "Malviya Nagar",
    addressRegion: "Delhi",
    postalCode: "110017",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5355,
    longitude: 77.2105,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`,
  areaServed: [
    { "@type": "Place", name: "Malviya Nagar" },
    { "@type": "Place", name: "Saket" },
    { "@type": "Place", name: "Hauz Khas" },
    { "@type": "Place", name: "Shivalik" },
    { "@type": "Place", name: "South Delhi" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "15:00",
      closes: "20:00",
    },
  ],
  medicalSpecialty: ["Dentistry", "Endodontic", "Prosthodontic", "Orthodontic", "CosmeticDentistry"],
  availableService: [
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
    "Braces & Aligners",
    "Cosmetic Dentistry",
    "Smile Designing",
    "Full Mouth Rehabilitation",
    "Tooth Extraction",
    "Dental Cleaning",
  ].map((s) => ({ "@type": "MedicalProcedure", name: s })),
  sameAs: [
    "https://www.google.com/search?q=Globodent+Dental+Spa+Malviya+Nagar",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98555-79244",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  _phone: PHONE_NUMBER, // unused, keeps PHONE_NUMBER import meaningful for tree-shaking
});
