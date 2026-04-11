import type { ServicePageData } from "./ServiceDetailPage";

import serviceRct from "@/assets/service-rct-real.png";
import serviceImplants from "@/assets/service-implants-real.jpg";
import serviceWhitening from "@/assets/service-whitening-new.jpg";
import serviceMetalbraces from "@/assets/service-metalbraces-real.png";
import serviceExtraction from "@/assets/service-extraction-real.jpg";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceCosmetic from "@/assets/service-cosmetic-real.jpg";
import serviceFullmouth from "@/assets/service-fullmouth-real.jpg";

const allSlugs = [
  { name: "Root Canal Treatment", slug: "root-canal-treatment-in-malviya-nagar" },
  { name: "Dental Implants", slug: "dental-implants-in-malviya-nagar" },
  { name: "Teeth Whitening", slug: "teeth-whitening-in-malviya-nagar" },
  { name: "Braces Treatment", slug: "braces-treatment-in-malviya-nagar" },
  { name: "Tooth Extraction", slug: "tooth-extraction-in-malviya-nagar" },
  { name: "Dental Cleaning", slug: "dental-cleaning-in-malviya-nagar" },
  { name: "Cosmetic Dentistry", slug: "cosmetic-dentistry-in-malviya-nagar" },
  { name: "Full Mouth Rehabilitation", slug: "full-mouth-rehabilitation-in-malviya-nagar" },
];

const related = (exclude: string) => allSlugs.filter(s => s.slug !== exclude);

export const servicePages: Record<string, ServicePageData> = {
  "root-canal-treatment-in-malviya-nagar": {
    slug: "root-canal-treatment-in-malviya-nagar",
    title: "Painless Root Canal Treatment in Malviya Nagar | Globodent Dental Spa®",
    metaDescription: "Get painless single-sitting root canal treatment at Globodent Dental Spa® in Malviya Nagar, South Delhi. Affordable RCT by expert endodontists. Book now!",
    h1: "Root Canal Treatment in Malviya Nagar",
    heroSubtitle: "Painless, single-sitting root canal therapy by experienced endodontists at the best dental clinic in Malviya Nagar, South Delhi.",
    aboutTitle: "What is Root Canal Treatment?",
    aboutContent: [
      "Root canal treatment (RCT) is a dental procedure that saves a severely infected or damaged tooth by removing the infected pulp tissue from inside the tooth. At Globodent Dental Spa® in Malviya Nagar, our specialists perform painless root canal treatment using advanced rotary endodontics and modern anaesthesia techniques.",
      "If you're looking for an experienced dentist in Malviya Nagar for root canal therapy, our clinic offers single-sitting RCT with minimal discomfort, ensuring you walk out with a healthy, pain-free smile the same day."
    ],
    benefits: [
      "Painless procedure with modern anaesthesia",
      "Complete treatment in a single sitting",
      "Saves your natural tooth from extraction",
      "Prevents spread of infection to adjacent teeth",
      "Affordable pricing with flexible payment options",
      "Performed by specialist endodontists"
    ],
    procedureTitle: "How Root Canal Treatment Works",
    procedureSteps: [
      { title: "Diagnosis & X-Ray", desc: "Our dentist takes a digital X-ray to evaluate the extent of infection and plan the treatment." },
      { title: "Local Anaesthesia", desc: "The area around the tooth is numbed completely so you feel no pain during the procedure." },
      { title: "Pulp Removal", desc: "The infected pulp tissue is carefully removed using precision rotary instruments." },
      { title: "Canal Cleaning & Shaping", desc: "The root canals are thoroughly cleaned, shaped, and disinfected." },
      { title: "Filling & Sealing", desc: "The canals are filled with biocompatible material and sealed to prevent re-infection." },
      { title: "Crown Placement", desc: "A custom dental crown is placed over the treated tooth for protection and natural appearance." }
    ],
    faqs: [
      { q: "Is root canal treatment painful?", a: "At Globodent Dental Spa® in Malviya Nagar, we use advanced anaesthesia and rotary endodontics to ensure the procedure is completely painless. Most patients report feeling no discomfort during treatment." },
      { q: "How long does a root canal take?", a: "With our single-sitting RCT approach, the entire treatment is usually completed in 45–90 minutes in one visit." },
      { q: "What is the cost of root canal treatment in Malviya Nagar?", a: "Root canal treatment costs vary based on the tooth and complexity. We offer competitive, affordable pricing. Contact us for a detailed quote." },
      { q: "Do I need a crown after root canal?", a: "Yes, a dental crown is recommended after RCT to protect the treated tooth and restore its strength and appearance." },
      { q: "How long does a root canal treated tooth last?", a: "With proper care and a good crown, a root canal treated tooth can last a lifetime." }
    ],
    relatedServices: related("root-canal-treatment-in-malviya-nagar"),
    image: serviceRct,
  },

  "dental-implants-in-malviya-nagar": {
    slug: "dental-implants-in-malviya-nagar",
    title: "Dental Implants in Malviya Nagar | Globodent Dental Spa®",
    metaDescription: "Get premium dental implants at Globodent Dental Spa® in Malviya Nagar, South Delhi. Permanent tooth replacement by expert implantologists. Affordable pricing.",
    h1: "Dental Implants in Malviya Nagar",
    heroSubtitle: "Permanent, natural-looking tooth replacement with titanium implants at the leading dental clinic in Malviya Nagar, South Delhi.",
    aboutTitle: "What Are Dental Implants?",
    aboutContent: [
      "Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. They provide a strong, permanent foundation for replacement teeth that look, feel, and function like natural teeth. At Globodent Dental Spa® in Malviya Nagar, our experienced implantologists use the latest technology for precise, comfortable implant placement.",
      "Whether you need a single tooth replacement or full mouth dental implants, our dental clinic in Malviya Nagar offers comprehensive implant solutions with world-class materials at affordable prices."
    ],
    benefits: [
      "Permanent solution — lasts a lifetime with care",
      "Looks and feels exactly like natural teeth",
      "Preserves jawbone and prevents bone loss",
      "No damage to adjacent healthy teeth",
      "Restores full chewing function and confidence",
      "High success rate (95%+) with expert placement"
    ],
    procedureTitle: "Dental Implant Procedure",
    procedureSteps: [
      { title: "Consultation & 3D Imaging", desc: "Comprehensive evaluation with CBCT scan to assess bone density and plan implant positioning." },
      { title: "Implant Placement", desc: "The titanium implant is surgically placed into the jawbone under local anaesthesia." },
      { title: "Healing Period", desc: "The implant integrates with the bone over 3–6 months (osseointegration)." },
      { title: "Abutment Placement", desc: "A connector piece is attached to the implant once healing is complete." },
      { title: "Crown Fitting", desc: "A custom-made ceramic crown is placed for a natural, beautiful finish." }
    ],
    faqs: [
      { q: "Are dental implants painful?", a: "The procedure is performed under local anaesthesia, making it painless. Most patients experience only mild soreness for a day or two after surgery." },
      { q: "How long do dental implants last?", a: "With proper oral hygiene and regular checkups, dental implants can last a lifetime." },
      { q: "What is the cost of dental implants in Malviya Nagar?", a: "Implant costs depend on the type of implant and crown material. We offer affordable packages — contact us for a personalized quote." },
      { q: "Am I a candidate for dental implants?", a: "Most adults with healthy gums and sufficient bone density are good candidates. Our specialists will evaluate your suitability during consultation." },
      { q: "How many teeth can be replaced with implants?", a: "Implants can replace a single tooth, multiple teeth, or even support full-arch dentures for complete mouth restoration." }
    ],
    relatedServices: related("dental-implants-in-malviya-nagar"),
    image: serviceImplants,
  },

  "teeth-whitening-in-malviya-nagar": {
    slug: "teeth-whitening-in-malviya-nagar",
    title: "Professional Teeth Whitening in Malviya Nagar | Globodent Dental Spa®",
    metaDescription: "Brighten your smile with professional teeth whitening at Globodent Dental Spa® in Malviya Nagar, South Delhi. Safe, instant results in one visit. Book today!",
    h1: "Teeth Whitening in Malviya Nagar",
    heroSubtitle: "Get a brighter, stain-free smile in just one visit with professional teeth whitening at the top dental clinic in Malviya Nagar.",
    aboutTitle: "About Professional Teeth Whitening",
    aboutContent: [
      "Professional teeth whitening is a safe, effective cosmetic dental treatment that removes stains and discoloration to give you a noticeably brighter smile. At Globodent Dental Spa® in Malviya Nagar, we use advanced LED whitening technology and professional-grade bleaching agents for superior, long-lasting results.",
      "Unlike over-the-counter products, our in-office teeth whitening treatment is supervised by experienced cosmetic dentists in South Delhi, ensuring safety and optimal results in a single appointment."
    ],
    benefits: [
      "Visible results in just one session",
      "Up to 8 shades brighter smile",
      "Safe and supervised by dental professionals",
      "Long-lasting results with proper care",
      "Removes coffee, tea, and tobacco stains",
      "Boosts confidence instantly"
    ],
    procedureTitle: "How Teeth Whitening Works",
    procedureSteps: [
      { title: "Dental Examination", desc: "Your dentist checks for cavities or sensitivity issues before proceeding." },
      { title: "Cleaning & Prep", desc: "Teeth are professionally cleaned and a protective barrier is applied to gums." },
      { title: "Whitening Gel Application", desc: "Professional-strength whitening gel is carefully applied to teeth surfaces." },
      { title: "LED Light Activation", desc: "A special LED light activates the gel to break down stains effectively." },
      { title: "Final Assessment", desc: "Results are evaluated and aftercare instructions provided for long-lasting brightness." }
    ],
    faqs: [
      { q: "Is teeth whitening safe?", a: "Yes, professional teeth whitening supervised by dentists at Globodent Dental Spa® is completely safe and does not damage tooth enamel." },
      { q: "How long do whitening results last?", a: "Results typically last 6–12 months, depending on your diet and oral habits. Avoiding staining foods helps maintain brightness." },
      { q: "Does teeth whitening cause sensitivity?", a: "Some patients may experience mild, temporary sensitivity which resolves within 24–48 hours." },
      { q: "How much does teeth whitening cost in Malviya Nagar?", a: "We offer affordable professional whitening packages. Contact us for current pricing and offers." },
      { q: "Can teeth whitening remove all stains?", a: "Professional whitening is highly effective on extrinsic stains from food and beverages. Intrinsic discoloration may require veneers for best results." }
    ],
    relatedServices: related("teeth-whitening-in-malviya-nagar"),
    image: serviceWhitening,
  },

  "braces-treatment-in-malviya-nagar": {
    slug: "braces-treatment-in-malviya-nagar",
    title: "Braces Treatment in Malviya Nagar | Globodent Dental Spa®",
    metaDescription: "Get metal braces, ceramic braces, and invisible aligners at Globodent Dental Spa® in Malviya Nagar, South Delhi. Expert orthodontists, affordable pricing.",
    h1: "Braces Treatment in Malviya Nagar",
    heroSubtitle: "Straighten your teeth with expert orthodontic care — metal braces, ceramic braces, and invisible aligners at our Malviya Nagar clinic.",
    aboutTitle: "About Orthodontic Braces Treatment",
    aboutContent: [
      "Braces treatment corrects misaligned teeth, bite issues, and crowding to give you a perfectly straight, beautiful smile. At Globodent Dental Spa® in Malviya Nagar, our orthodontic specialists offer multiple options including traditional metal braces, aesthetic ceramic braces, and invisible clear aligners.",
      "Whether you're a teenager or an adult looking for the best orthodontist in South Delhi, our clinic provides customized treatment plans to achieve optimal results in the shortest time possible."
    ],
    benefits: [
      "Corrects crooked, crowded, or spaced teeth",
      "Fixes bite problems (overbite, underbite, crossbite)",
      "Multiple options — metal, ceramic, or invisible",
      "Improves oral health by making teeth easier to clean",
      "Boosts confidence with a beautiful, aligned smile",
      "Suitable for all ages — teens and adults"
    ],
    procedureTitle: "Braces Treatment Process",
    procedureSteps: [
      { title: "Consultation & Records", desc: "Comprehensive examination with X-rays, photographs, and impressions for treatment planning." },
      { title: "Treatment Planning", desc: "Your orthodontist designs a customized plan based on your specific alignment needs." },
      { title: "Braces Placement", desc: "Brackets are bonded to teeth and wires are placed — a painless process." },
      { title: "Regular Adjustments", desc: "Monthly visits for wire adjustments to gradually move teeth into position." },
      { title: "Braces Removal & Retainers", desc: "Once alignment is achieved, braces are removed and retainers provided to maintain results." }
    ],
    faqs: [
      { q: "How long does braces treatment take?", a: "Treatment duration varies from 12–24 months depending on the complexity of your case." },
      { q: "Are braces painful?", a: "You may feel mild discomfort for a few days after placement and adjustments, but it's very manageable." },
      { q: "Which type of braces is best?", a: "It depends on your needs and preferences. Metal braces are most effective for complex cases, ceramic braces are aesthetic, and aligners offer maximum discretion." },
      { q: "What is the cost of braces in Malviya Nagar?", a: "Costs vary by type — metal braces are the most affordable, followed by ceramic and clear aligners. We offer EMI options for easy payment." },
      { q: "Can adults get braces?", a: "Absolutely! We treat many adult patients successfully. There's no age limit for orthodontic treatment." }
    ],
    relatedServices: related("braces-treatment-in-malviya-nagar"),
    image: serviceMetalbraces,
  },

  "tooth-extraction-in-malviya-nagar": {
    slug: "tooth-extraction-in-malviya-nagar",
    title: "Painless Tooth Extraction in Malviya Nagar | Globodent Dental Spa®",
    metaDescription: "Safe, painless tooth extraction at Globodent Dental Spa® in Malviya Nagar, South Delhi. Expert oral surgeons, fast recovery. Book your appointment today!",
    h1: "Tooth Extraction in Malviya Nagar",
    heroSubtitle: "Gentle, painless tooth removal by experienced oral surgeons at the trusted dental clinic in Malviya Nagar, South Delhi.",
    aboutTitle: "About Tooth Extraction",
    aboutContent: [
      "Tooth extraction is the removal of a tooth that is severely damaged, decayed, or impacted. At Globodent Dental Spa® in Malviya Nagar, we prioritize painless treatment using advanced anaesthesia and minimally invasive techniques for quick recovery.",
      "Our experienced oral surgeons handle simple and complex extractions, including wisdom tooth removal, with utmost care. If you need a dentist in Malviya Nagar for tooth extraction, you're in safe hands."
    ],
    benefits: [
      "Completely painless with modern anaesthesia",
      "Minimally invasive techniques for faster healing",
      "Expert handling of impacted wisdom teeth",
      "Prevents infection spread to other teeth",
      "Same-day procedure with quick recovery",
      "Post-extraction care guidance provided"
    ],
    procedureTitle: "Extraction Procedure",
    procedureSteps: [
      { title: "Examination & X-Ray", desc: "The tooth and surrounding bone are evaluated with digital X-rays." },
      { title: "Anaesthesia", desc: "Local anaesthesia is administered to completely numb the area." },
      { title: "Tooth Loosening", desc: "The tooth is gently loosened using specialized instruments." },
      { title: "Extraction", desc: "The tooth is carefully removed with minimal impact to surrounding tissue." },
      { title: "Post-Care Instructions", desc: "You receive detailed aftercare guidance and any necessary medication." }
    ],
    faqs: [
      { q: "Is tooth extraction painful?", a: "No. At Globodent Dental Spa®, we use effective local anaesthesia that makes the procedure completely painless." },
      { q: "How long does recovery take?", a: "Most patients recover within 2–3 days. Complete healing of the socket takes about 1–2 weeks." },
      { q: "When should a tooth be extracted?", a: "Extraction is recommended when a tooth is severely decayed, broken beyond repair, impacted, or causing infection." },
      { q: "What should I do after extraction?", a: "Avoid hot foods, don't spit forcefully, and follow the medication schedule. Our team provides complete aftercare instructions." },
      { q: "Can I get an implant after extraction?", a: "Yes, dental implants are an excellent option after extraction. In some cases, immediate implant placement is possible." }
    ],
    relatedServices: related("tooth-extraction-in-malviya-nagar"),
    image: serviceExtraction,
  },

  "dental-cleaning-in-malviya-nagar": {
    slug: "dental-cleaning-in-malviya-nagar",
    title: "Professional Dental Cleaning in Malviya Nagar | Globodent Dental Spa®",
    metaDescription: "Professional teeth cleaning and polishing at Globodent Dental Spa® in Malviya Nagar, South Delhi. Remove plaque, tartar & stains. Affordable dental care.",
    h1: "Dental Cleaning & Polishing in Malviya Nagar",
    heroSubtitle: "Keep your teeth and gums healthy with professional scaling and polishing at the best dental clinic in Malviya Nagar, South Delhi.",
    aboutTitle: "Why Professional Dental Cleaning?",
    aboutContent: [
      "Professional dental cleaning (scaling and polishing) removes plaque, tartar, and surface stains that regular brushing cannot eliminate. At Globodent Dental Spa® in Malviya Nagar, our hygienists use ultrasonic scalers and advanced polishing techniques for a thorough, comfortable cleaning experience.",
      "Regular dental cleanings at our clinic in Malviya Nagar help prevent gum disease, cavities, and bad breath — keeping your smile healthy and fresh. Dentists recommend professional cleaning every 6 months."
    ],
    benefits: [
      "Removes stubborn plaque and tartar buildup",
      "Prevents gum disease and tooth decay",
      "Eliminates bad breath at the source",
      "Makes teeth feel smooth and look brighter",
      "Early detection of dental problems",
      "Quick, comfortable, and affordable"
    ],
    procedureTitle: "Cleaning & Polishing Process",
    procedureSteps: [
      { title: "Oral Examination", desc: "Your dentist checks for any signs of gum disease, cavities, or other issues." },
      { title: "Ultrasonic Scaling", desc: "An ultrasonic scaler gently removes tartar and plaque from teeth and gumline." },
      { title: "Hand Scaling", desc: "Fine hand instruments clean hard-to-reach areas for thorough removal." },
      { title: "Polishing", desc: "Teeth are polished with a special paste to remove stains and smooth surfaces." },
      { title: "Fluoride Application", desc: "Optional fluoride treatment strengthens enamel and protects against decay." }
    ],
    faqs: [
      { q: "How often should I get dental cleaning?", a: "Dentists recommend professional cleaning every 6 months to maintain optimal oral health." },
      { q: "Is dental cleaning painful?", a: "Professional cleaning at Globodent Dental Spa® is generally comfortable. Patients with sensitive gums may feel mild discomfort." },
      { q: "Does cleaning whiten teeth?", a: "Cleaning removes surface stains and makes teeth look brighter, but for significant whitening, a professional whitening treatment is recommended." },
      { q: "How much does dental cleaning cost in Malviya Nagar?", a: "We offer affordable dental cleaning packages. Contact us for current pricing." },
      { q: "Can cleaning damage teeth?", a: "No. Professional cleaning is safe and does not damage tooth enamel when performed by trained dental professionals." }
    ],
    relatedServices: related("dental-cleaning-in-malviya-nagar"),
    image: serviceCleaning,
  },

  "cosmetic-dentistry-in-malviya-nagar": {
    slug: "cosmetic-dentistry-in-malviya-nagar",
    title: "Cosmetic Dentistry in Malviya Nagar | Globodent Dental Spa®",
    metaDescription: "Transform your smile with cosmetic dentistry at Globodent Dental Spa® in Malviya Nagar, South Delhi. Veneers, smile designing, bonding & more. Book now!",
    h1: "Cosmetic Dentistry in Malviya Nagar",
    heroSubtitle: "Achieve the smile you've always dreamed of with expert cosmetic dental treatments at our premium clinic in Malviya Nagar, South Delhi.",
    aboutTitle: "About Cosmetic Dentistry",
    aboutContent: [
      "Cosmetic dentistry focuses on enhancing the appearance of your teeth, gums, and overall smile. At Globodent Dental Spa® in Malviya Nagar, our cosmetic dentists offer a comprehensive range of aesthetic treatments including veneers, smile designing, teeth bonding, and gum contouring.",
      "As a leading cosmetic dentist in South Delhi, we combine artistic skill with advanced dental technology to deliver natural-looking, stunning results that boost your confidence."
    ],
    benefits: [
      "Dramatically improves smile aesthetics",
      "Custom treatment plans for your unique needs",
      "Natural-looking, long-lasting results",
      "Veneers, bonding, and contouring options",
      "Boosts self-confidence in personal and professional life",
      "Minimally invasive procedures available"
    ],
    procedureTitle: "Cosmetic Treatment Process",
    procedureSteps: [
      { title: "Smile Analysis", desc: "Detailed evaluation of your teeth, gums, facial structure, and smile goals." },
      { title: "Digital Smile Design", desc: "Advanced software creates a preview of your expected results before treatment begins." },
      { title: "Treatment Selection", desc: "Choose from veneers, bonding, contouring, or a combination approach." },
      { title: "Procedure", desc: "Precise cosmetic work is performed with attention to symmetry, shade, and proportion." },
      { title: "Final Review", desc: "Results are evaluated and any fine adjustments are made for perfection." }
    ],
    faqs: [
      { q: "What procedures fall under cosmetic dentistry?", a: "Cosmetic dentistry includes veneers, teeth whitening, dental bonding, smile designing, gum contouring, and tooth-colored fillings." },
      { q: "Are cosmetic dental procedures painful?", a: "Most cosmetic procedures at Globodent are minimally invasive and involve little to no discomfort." },
      { q: "How long do veneers last?", a: "High-quality porcelain veneers can last 10–15 years with proper care." },
      { q: "Is cosmetic dentistry expensive?", a: "We offer various options at different price points. Contact us for a customized treatment plan and pricing." },
      { q: "Can cosmetic dentistry fix crooked teeth?", a: "Yes, veneers and bonding can improve the appearance of mildly crooked teeth without braces. For significant misalignment, orthodontic treatment may be recommended." }
    ],
    relatedServices: related("cosmetic-dentistry-in-malviya-nagar"),
    image: serviceCosmetic,
  },

  "full-mouth-rehabilitation-in-malviya-nagar": {
    slug: "full-mouth-rehabilitation-in-malviya-nagar",
    title: "Full Mouth Rehabilitation in Malviya Nagar | Globodent Dental Spa®",
    metaDescription: "Complete full mouth rehabilitation at Globodent Dental Spa® in Malviya Nagar, South Delhi. Restore function & aesthetics with expert prosthodontists.",
    h1: "Full Mouth Rehabilitation in Malviya Nagar",
    heroSubtitle: "Comprehensive restoration for severely damaged or missing teeth — regain your smile, bite, and confidence at Globodent Dental Spa® in Malviya Nagar.",
    aboutTitle: "What is Full Mouth Rehabilitation?",
    aboutContent: [
      "Full mouth rehabilitation is a comprehensive treatment approach that restores all teeth in both the upper and lower jaws. It combines multiple dental procedures — including crowns, bridges, implants, and veneers — to rebuild a functional, beautiful smile. At Globodent Dental Spa® in Malviya Nagar, our prosthodontists specialize in complex full mouth restorations.",
      "If years of dental issues, trauma, or wear have left your teeth severely damaged, our dental clinic in Malviya Nagar offers personalized rehabilitation plans using the latest prosthetic materials and techniques for life-changing results."
    ],
    benefits: [
      "Restores complete dental function — eating, speaking, smiling",
      "Addresses multiple dental problems in one plan",
      "Combines implants, crowns, bridges, and veneers",
      "Customized to your unique dental condition",
      "Improves facial aesthetics and jawline support",
      "Long-lasting, durable results"
    ],
    procedureTitle: "Full Mouth Rehabilitation Process",
    procedureSteps: [
      { title: "Comprehensive Evaluation", desc: "Full dental exam, 3D scans, bite analysis, and assessment of all existing dental work." },
      { title: "Treatment Planning", desc: "A multi-phase plan is created addressing each area — extraction, implants, restorations." },
      { title: "Foundation Work", desc: "Extractions, implant placements, and gum treatments are completed first." },
      { title: "Restoration Phase", desc: "Crowns, bridges, veneers, or dentures are fabricated and placed." },
      { title: "Final Adjustments & Follow-up", desc: "Bite is fine-tuned, aesthetics verified, and maintenance plan established." }
    ],
    faqs: [
      { q: "Who needs full mouth rehabilitation?", a: "Patients with multiple missing teeth, severe wear, extensive decay, or those who haven't had dental care for a long time are ideal candidates." },
      { q: "How long does full mouth rehabilitation take?", a: "Treatment duration ranges from a few weeks to several months, depending on the complexity and procedures involved." },
      { q: "Is full mouth rehabilitation painful?", a: "Each procedure is performed with appropriate anaesthesia. Our team ensures maximum comfort throughout the treatment journey." },
      { q: "What is the cost of full mouth rehabilitation in Malviya Nagar?", a: "Costs vary significantly based on your specific needs. We provide detailed treatment plans with transparent pricing after consultation." },
      { q: "Can full mouth rehab be done with implants?", a: "Yes, dental implants are often a key component of full mouth rehabilitation, providing permanent support for crowns and bridges." }
    ],
    relatedServices: related("full-mouth-rehabilitation-in-malviya-nagar"),
    image: serviceFullmouth,
  },
};
