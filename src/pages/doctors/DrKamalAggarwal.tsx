import DoctorProfilePage, { DoctorProfileData } from "./DoctorProfilePage";
import drKamal from "@/assets/dr-kamal-aggarwal.webp";

const data: DoctorProfileData = {
  slug: "dr-kamal-aggarwal-dental-implant-specialist-malviya-nagar",
  name: "Dr. Kamal Aggarwal",
  title: "BDS, MDS Periodontics — Implantologist & Gum Specialist",
  role: "Periodontist | Dental Implant Specialist",
  tagline: "Advanced Dental Implant & Gum Surgery Expert",
  metaTitle: "Dr. Kamal Aggarwal | Dental Implant Specialist in Malviya Nagar",
  metaDescription:
    "Meet Dr. Kamal Aggarwal, experienced Periodontist and Dental Implant Specialist in Malviya Nagar offering advanced implant and gum treatments at Globodent Dental Spa.",
  image: drKamal,
  keywords: [
    "Dental implant specialist in Malviya Nagar",
    "Best implant dentist in South Delhi",
    "Gum specialist near me",
    "Laser dentistry in Malviya Nagar",
    "Periodontist in Delhi",
  ],
  qualifications: [
    "BDS — Maulana Azad Institute of Dental Sciences, New Delhi",
    "MDS Periodontics — Maulana Azad Institute of Dental Sciences, New Delhi",
  ],
  experience: [
    "1500+ successful dental implant surgeries",
    "Former Senior Resident at MAIDS, New Delhi",
    "Senior Research Associate & Young Scientist",
    "Extensive experience in implant-supported full mouth rehabilitation",
    "Multiple research publications in modern periodontics & implantology",
  ],
  expertise: [
    "Dental Implants",
    "Full Mouth Rehabilitation",
    "Gum Disease Treatment",
    "PRF Therapy",
    "Bone Grafting",
    "Laser Dentistry",
    "Periodontal Surgeries",
    "Immediate Implants",
    "All-on-4 Implants",
  ],
  summaryParagraphs: [
    "Dr. Kamal Aggarwal is an experienced Periodontist and Dental Implant Specialist at Globodent Dental Spa, Malviya Nagar. He specialises in advanced implant surgeries, gum treatments, laser dentistry, PRF procedures and complete oral rehabilitation.",
    "He completed both his BDS and MDS in Periodontics from the prestigious Maulana Azad Institute of Dental Sciences, New Delhi, and has extensive surgical and research experience in modern dental procedures including immediate loading and All-on-4 implants.",
    "With more than 1500 successful implant surgeries, Dr. Kamal is trusted for delivering painless, advanced and precision-focused dental care. His expertise spans dental implants, gum surgeries, bone grafting, PRF therapy, laser dentistry and full mouth rehabilitation for patients seeking long-lasting and aesthetic dental solutions.",
  ],
  trustPoints: [
    { title: "1500+ Implant Surgeries", desc: "Vast clinical experience across single, multiple and full-arch implant cases." },
    { title: "Painless, Precise Surgery", desc: "Modern surgical protocols, laser-assisted procedures and PRF for faster healing." },
    { title: "Research-Backed Treatment", desc: "Evidence-based planning from a published clinician trained at MAIDS, New Delhi." },
    { title: "Gum & Bone Expertise", desc: "Specialised gum surgeries and bone grafting ensure long-term implant success." },
  ],
  internalLinks: [
    { label: "Dental Implants in Malviya Nagar", href: "/services/dental-implants-in-malviya-nagar", desc: "Single, multiple and All-on-4 implant solutions." },
    { label: "Full Mouth Rehabilitation", href: "/services/full-mouth-rehabilitation-in-malviya-nagar", desc: "Complete oral rehabilitation in phased visits." },
    { label: "Laser Dentistry in Malviya Nagar", href: "/blog/laser-dentistry-in-malviya-nagar", desc: "Minimally invasive laser-assisted dental care." },
    { label: "Oral Surgery in Malviya Nagar", href: "/blog/oral-surgery-in-malviya-nagar", desc: "Specialist surgical procedures for complex cases." },
    { label: "Dental Implant Cost in Malviya Nagar", href: "/blog/dental-implant-cost-in-malviya-nagar", desc: "Transparent breakdown of current implant pricing." },
    { label: "Contact Globodent", href: "/contact", desc: "Book an implant consultation today." },
  ],
  faqs: [
    { q: "Are dental implants painful?", a: "No. Implants are placed under local anaesthesia using gentle surgical techniques. Most patients return to normal routine within 24–48 hours with minimal discomfort." },
    { q: "How long do dental implants last?", a: "With good oral hygiene and regular check-ups, modern dental implants can last 20+ years — often a lifetime. Dr. Kamal uses premium implant systems with long-term warranties." },
    { q: "What is All-on-4 implant treatment?", a: "All-on-4 uses just four strategically placed implants to support a full arch of fixed teeth — ideal for patients missing most or all teeth in a jaw, often in a single day." },
    { q: "Do I need bone grafting before implants?", a: "Only if bone volume is insufficient. A CBCT scan during consultation tells us exactly. When needed, bone grafting and PRF are done in the same visit." },
    { q: "How much does a dental implant cost in Malviya Nagar?", a: "Costs vary by implant brand and case complexity. Globodent offers transparent pricing and EMI options — see our detailed implant cost guide for current ranges." },
  ],
};

const DrKamalAggarwal = () => <DoctorProfilePage data={data} />;
export default DrKamalAggarwal;
