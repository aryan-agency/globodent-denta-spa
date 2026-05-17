import DoctorProfilePage, { DoctorProfileData } from "./DoctorProfilePage";
import drAbrar from "@/assets/dr-abrar-hussain.jpeg";

const data: DoctorProfileData = {
  slug: "dr-abrar-hussain-orthodontist-malviya-nagar",
  name: "Dr. Abrar Hussain",
  title: "BDS, MDS — Orthodontics & Dentofacial Orthopaedics",
  role: "Orthodontist & Dentofacial Orthopaedics Specialist",
  tagline: "Advanced Braces & Smile Alignment Expert in South Delhi",
  metaTitle: "Dr. Abrar Hussain | Orthodontist in Malviya Nagar | Globodent Dental Spa",
  metaDescription:
    "Meet Dr. Abrar Hussain, experienced Orthodontist in Malviya Nagar specialising in braces, smile correction, teeth alignment and invisible aligners at Globodent Dental Spa.",
  image: drAbrar,
  keywords: [
    "Orthodontist in Malviya Nagar",
    "Best braces doctor in South Delhi",
    "Teeth alignment specialist",
    "Invisible aligners in Malviya Nagar",
    "Smile correction dentist near me",
  ],
  qualifications: [
    "BDS — Maulana Azad Institute of Dental Sciences, New Delhi",
    "MDS in Orthodontics & Dentofacial Orthopaedics — MAIDS, New Delhi",
  ],
  experience: [
    "500+ ongoing orthodontic cases",
    "Consultant Orthodontist at multiple dental clinics across Delhi",
    "Expertise across metal, ceramic and clear aligner systems",
    "Patient-friendly treatment planning for children, teens and adults",
  ],
  expertise: [
    "Braces Treatment",
    "Teeth Alignment",
    "Smile Correction",
    "Invisible Aligners",
    "Jaw Alignment",
    "Dentofacial Orthopaedics",
    "Ceramic Braces",
    "Orthodontic Consultation",
  ],
  summaryParagraphs: [
    "Dr. Abrar Hussain is a highly qualified orthodontist associated with Globodent Dental Spa, Malviya Nagar. He specialises in advanced braces treatment, smile correction, teeth alignment and dentofacial orthopaedics for both children and adults.",
    "Having completed his BDS and MDS in Orthodontics & Dentofacial Orthopaedics from the prestigious Maulana Azad Institute of Dental Sciences, New Delhi, Dr. Abrar focuses on delivering modern, precise and patient-friendly orthodontic treatments tailored to each face and bite.",
    "With more than 500 ongoing orthodontic cases, he is known for creating confident smiles using advanced orthodontic solutions including metal braces, ceramic braces and clear aligners. Patients trust him for comfortable treatment planning, smile transformation and long-term dental aesthetics.",
  ],
  trustPoints: [
    { title: "Specialist-Led Orthodontics", desc: "Every case is planned and reviewed by a qualified MDS orthodontist — not a general dentist." },
    { title: "Modern Braces & Aligners", desc: "Choose from metal, ceramic or invisible aligners with clear cost and timeline upfront." },
    { title: "Comfort-First Approach", desc: "Low-friction brackets, gentle wires and shorter chair-time to keep treatment comfortable." },
    { title: "Predictable Smile Results", desc: "Digital planning, regular monitoring and final retention protocols for lasting alignment." },
  ],
  internalLinks: [
    { label: "Braces Treatment in Malviya Nagar", href: "/services/braces-treatment-in-malviya-nagar", desc: "Metal, ceramic & lingual braces with specialist care." },
    { label: "Smile Designing in Malviya Nagar", href: "/services/cosmetic-dentistry-in-malviya-nagar", desc: "Complete smile makeovers combining ortho & cosmetic dentistry." },
    { label: "Invisible Aligners vs Braces", href: "/blog/single-sitting-root-canal-treatment-benefits", desc: "Compare costs, timelines and comfort honestly." },
    { label: "Best Dentist in Malviya Nagar", href: "/best-dentist-in-malviya-nagar", desc: "How patients choose the right dental specialist." },
    { label: "Our Clinic & Technology", href: "/advanced-dental-technology-malviya-nagar", desc: "Digital scans, 3D imaging and modern orthodontic tools." },
    { label: "Contact Globodent", href: "/contact", desc: "Book a free orthodontic consultation today." },
  ],
  faqs: [
    { q: "How long does braces treatment usually take?", a: "Most orthodontic cases at Globodent take between 12 and 24 months depending on complexity. Dr. Abrar shares an estimated timeline after the first consultation and X-rays." },
    { q: "Are invisible aligners better than metal braces?", a: "Both work — aligners are nearly invisible and removable, while metal braces are more cost-effective and handle complex bites better. Dr. Abrar recommends the best option for your specific case." },
    { q: "At what age should a child see an orthodontist?", a: "An initial orthodontic check is ideal by age 7–8 to catch jaw alignment issues early. Active treatment may start later, but early monitoring prevents bigger problems." },
    { q: "Is braces treatment painful?", a: "Mild soreness for 2–3 days after each adjustment is normal. Modern brackets and gentle wires used at Globodent significantly reduce discomfort compared to older systems." },
    { q: "Do you offer EMI for orthodontic treatment?", a: "Yes — braces and aligner plans can be paid in easy monthly installments. Costs are written and shared before treatment begins." },
  ],
};

const DrAbrarHussain = () => <DoctorProfilePage data={data} />;
export default DrAbrarHussain;
