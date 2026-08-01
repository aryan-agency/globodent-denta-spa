// Lightweight SEO landing pages: /best-[service]-in-malviya-nagar
// Content is intentionally short — long-form copy comes later.

export interface BestServiceData {
  /** URL slug WITHOUT leading slash, e.g. "best-teeth-whitening-in-malviya-nagar" */
  slug: string;
  /** Service name used in H1 / titles */
  service: string;
  title: string;
  description: string;
  intro: string;
  /** Existing service detail page slug (under /services/) — optional */
  serviceSlug?: string;
  /** Related treatments: slugs of other pages in this list */
  related: string[];
}

const S = (
  service: string,
  slug: string,
  description: string,
  intro: string,
  related: string[],
  serviceSlug?: string,
): BestServiceData => ({
  slug,
  service,
  title: `Best ${service} in Malviya Nagar | Globodent`,
  description,
  intro,
  serviceSlug,
  related,
});

export const bestServices: BestServiceData[] = [
  S(
    "Teeth Whitening",
    "best-teeth-whitening-in-malviya-nagar",
    "Professional teeth whitening in Malviya Nagar, South Delhi at Globodent Dental Spa. Safe, painless, same-day results. Book your appointment today.",
    "Get a visibly brighter smile with professional teeth whitening in Malviya Nagar at Globodent Dental Spa. Our specialists use clinically proven, enamel-safe whitening systems that lift years of coffee, tea and tobacco stains in a single sitting. Patients across South Delhi choose us for gentle, predictable and long-lasting whitening results.",
    ["best-teeth-cleaning-in-malviya-nagar", "best-cosmetic-dentistry-in-malviya-nagar", "best-smile-designing-in-malviya-nagar", "best-veneers-and-crowns-in-malviya-nagar"],
    "teeth-whitening-in-malviya-nagar",
  ),
  S(
    "Dental Bonding",
    "best-bonding-in-malviya-nagar",
    "Dental bonding in Malviya Nagar, South Delhi. Repair chipped, cracked or gapped teeth in one visit at Globodent Dental Spa. Book an appointment.",
    "Dental bonding is the fastest way to repair chipped, cracked or slightly gapped front teeth. At Globodent Dental Spa in Malviya Nagar, we colour-match high-strength composite to your natural enamel for an invisible finish. Most bonding cases in South Delhi are completed comfortably in a single appointment.",
    ["best-teeth-reshaping-in-malviya-nagar", "best-veneers-and-crowns-in-malviya-nagar", "best-fillings-and-sealants-in-malviya-nagar", "best-cosmetic-dentistry-in-malviya-nagar"],
    "cosmetic-dentistry-in-malviya-nagar",
  ),
  S(
    "Dental Check-ups",
    "best-dental-check-ups-in-malviya-nagar",
    "Routine dental check-ups in Malviya Nagar, South Delhi. Early diagnosis, digital X-rays and preventive care at Globodent Dental Spa. Book now.",
    "A twenty-minute dental check-up prevents most expensive dental problems. At Globodent Dental Spa in Malviya Nagar we screen for decay, gum disease and bite issues using digital imaging and a full oral cancer check. Families across South Delhi rely on our preventive recall programme to keep treatment simple and affordable.",
    ["best-teeth-cleaning-in-malviya-nagar", "best-dental-x-ray-in-malviya-nagar", "best-fillings-and-sealants-in-malviya-nagar", "best-online-dentist-booking-in-malviya-nagar"],
    "dental-cleaning-in-malviya-nagar",
  ),
  S(
    "Cosmetic Dentistry",
    "best-cosmetic-dentistry-in-malviya-nagar",
    "Cosmetic dentistry in Malviya Nagar, South Delhi — veneers, whitening and smile makeovers at Globodent Dental Spa. Book your consultation today.",
    "Globodent Dental Spa is a specialist-led cosmetic dentistry clinic in Malviya Nagar offering veneers, bonding, whitening and complete smile makeovers. Every case begins with a digital smile preview so you can see the result before treatment starts. Patients travel from across South Delhi for our natural, never-overdone aesthetic work.",
    ["best-smile-designing-in-malviya-nagar", "best-veneers-and-crowns-in-malviya-nagar", "best-teeth-whitening-in-malviya-nagar", "best-teeth-reshaping-in-malviya-nagar"],
    "cosmetic-dentistry-in-malviya-nagar",
  ),
  S(
    "Dental Implants",
    "best-dental-implants-in-malviya-nagar",
    "Painless dental implants in Malviya Nagar, South Delhi by implantologists at Globodent Dental Spa. Lifetime-quality implants. Book an appointment.",
    "Replace missing teeth permanently with dental implants in Malviya Nagar placed by our in-house implantologist. We use internationally certified implant systems with guided, virtually painless placement and predictable healing. Globodent Dental Spa is one of the most trusted implant centres in South Delhi.",
    ["best-dentures-and-bridges-in-malviya-nagar", "best-oral-surgery-in-malviya-nagar", "best-tooth-extractions-in-malviya-nagar", "best-dental-x-ray-in-malviya-nagar"],
    "dental-implants-in-malviya-nagar",
  ),
  S(
    "Dentures & Bridges",
    "best-dentures-and-bridges-in-malviya-nagar",
    "Dentures and dental bridges in Malviya Nagar, South Delhi. Comfortable, natural-looking tooth replacement at Globodent Dental Spa. Book today.",
    "From flexible partial dentures to fixed ceramic bridges, Globodent Dental Spa in Malviya Nagar restores comfortable chewing and a complete smile. Every prosthesis is digitally designed and lab-crafted for a precise, stable fit. It is a proven, budget-friendly tooth replacement option for patients across South Delhi.",
    ["best-dental-implants-in-malviya-nagar", "best-veneers-and-crowns-in-malviya-nagar", "best-tooth-extractions-in-malviya-nagar", "best-dental-check-ups-in-malviya-nagar"],
    "full-mouth-rehabilitation-in-malviya-nagar",
  ),
  S(
    "Tooth Extractions",
    "best-tooth-extractions-in-malviya-nagar",
    "Painless tooth and wisdom tooth extraction in Malviya Nagar, South Delhi at Globodent Dental Spa. Same-day relief. Book your appointment now.",
    "Whether it is a badly decayed molar or an impacted wisdom tooth, our surgeons perform extractions in Malviya Nagar with profound anaesthesia and minimal trauma. Careful socket preservation keeps future implant options open. Patients across South Delhi choose Globodent Dental Spa for quick, calm and genuinely painless extractions.",
    ["best-oral-surgery-in-malviya-nagar", "best-dental-implants-in-malviya-nagar", "best-dental-x-ray-in-malviya-nagar", "best-root-canal-treatment-in-malviya-nagar"],
    "tooth-extraction-in-malviya-nagar",
  ),
  S(
    "Fillings & Sealants",
    "best-fillings-and-sealants-in-malviya-nagar",
    "Tooth-coloured fillings and sealants in Malviya Nagar, South Delhi at Globodent Dental Spa. Stop decay early, painlessly. Book an appointment.",
    "Tooth-coloured composite fillings and protective sealants stop small cavities from becoming root canals. At Globodent Dental Spa in Malviya Nagar we shade-match every filling so restorations stay invisible. Sealants are especially effective for children and teenagers across South Delhi.",
    ["best-dental-check-ups-in-malviya-nagar", "best-root-canal-treatment-in-malviya-nagar", "best-teeth-cleaning-in-malviya-nagar", "best-bonding-in-malviya-nagar"],
  ),
  S(
    "Laser Dentistry",
    "best-laser-dentistry-in-malviya-nagar",
    "Laser dentistry in Malviya Nagar, South Delhi — bloodless gum treatment and faster healing at Globodent Dental Spa. Book your appointment today.",
    "Laser dentistry replaces blades and stitches with precise light energy, meaning less bleeding, less swelling and faster healing. Globodent Dental Spa in Malviya Nagar uses lasers for gum depigmentation, gum contouring, frenectomy and painless cavity preparation. It is one of the most requested advanced treatments at our South Delhi clinic.",
    ["best-oral-surgery-in-malviya-nagar", "best-smile-designing-in-malviya-nagar", "best-teeth-cleaning-in-malviya-nagar", "best-cosmetic-dentistry-in-malviya-nagar"],
  ),
  S(
    "Mouth Guards",
    "best-mouth-guards-in-malviya-nagar",
    "Custom night guards and sports mouth guards in Malviya Nagar, South Delhi at Globodent Dental Spa. Protect your teeth. Book an appointment.",
    "Custom-fitted mouth guards protect your teeth from night-time grinding, jaw pain and sports injuries. Globodent Dental Spa in Malviya Nagar takes digital impressions for a guard that fits precisely and stays comfortable through the night. Ideal for bruxism, TMJ discomfort and athletes across South Delhi.",
    ["best-dental-check-ups-in-malviya-nagar", "best-teeth-reshaping-in-malviya-nagar", "best-veneers-and-crowns-in-malviya-nagar", "best-fillings-and-sealants-in-malviya-nagar"],
  ),
  S(
    "Online Dentist Booking",
    "best-online-dentist-booking-in-malviya-nagar",
    "Book a dentist online in Malviya Nagar, South Delhi. Instant WhatsApp and phone appointments at Globodent Dental Spa. Reserve your slot today.",
    "Book your dental appointment in Malviya Nagar online in under a minute — no queues, no waiting room. Choose a convenient slot by WhatsApp or phone and our coordinator confirms it instantly with your treating specialist. It is the easiest way for busy South Delhi patients to see a dentist near them.",
    ["best-dental-check-ups-in-malviya-nagar", "best-teeth-cleaning-in-malviya-nagar", "best-root-canal-treatment-in-malviya-nagar", "best-dental-implants-in-malviya-nagar"],
  ),
  S(
    "Oral Surgery",
    "best-oral-surgery-in-malviya-nagar",
    "Oral and maxillofacial surgery in Malviya Nagar, South Delhi at Globodent Dental Spa. Wisdom teeth, cysts and grafting. Book an appointment.",
    "Our surgical team in Malviya Nagar handles impacted wisdom teeth, apicoectomy, cyst removal, bone grafting and pre-implant surgery under strict sterilisation protocols. Cases are planned on 3D imaging for safety and precision. Globodent Dental Spa is a referral point for complex surgical care in South Delhi.",
    ["best-tooth-extractions-in-malviya-nagar", "best-dental-implants-in-malviya-nagar", "best-laser-dentistry-in-malviya-nagar", "best-dental-x-ray-in-malviya-nagar"],
  ),
  S(
    "Root Canal Treatment",
    "best-root-canal-treatment-in-malviya-nagar",
    "Single-sitting root canal treatment in Malviya Nagar, South Delhi at Globodent Dental Spa. Painless RCT by endodontists. Book an appointment.",
    "Save your natural tooth with single-sitting root canal treatment in Malviya Nagar performed by our endodontist using rotary instrumentation and apex locators. Most RCTs are finished in one comfortable visit with immediate pain relief. Globodent Dental Spa is among the most recommended root canal clinics in South Delhi.",
    ["best-veneers-and-crowns-in-malviya-nagar", "best-tooth-extractions-in-malviya-nagar", "best-fillings-and-sealants-in-malviya-nagar", "best-dental-x-ray-in-malviya-nagar"],
    "root-canal-treatment-in-malviya-nagar",
  ),
  S(
    "Teeth Cleaning",
    "best-teeth-cleaning-in-malviya-nagar",
    "Professional teeth cleaning and scaling in Malviya Nagar, South Delhi at Globodent Dental Spa. Healthier gums, fresher breath. Book today.",
    "Ultrasonic scaling and polishing removes the hardened tartar that brushing cannot reach, reversing early gum disease and bad breath. Our hygienists in Malviya Nagar finish the visit with fluoride protection and personalised home-care advice. It is the single best-value appointment for any South Delhi patient.",
    ["best-dental-check-ups-in-malviya-nagar", "best-teeth-whitening-in-malviya-nagar", "best-laser-dentistry-in-malviya-nagar", "best-fillings-and-sealants-in-malviya-nagar"],
    "dental-cleaning-in-malviya-nagar",
  ),
  S(
    "Teeth Reshaping",
    "best-teeth-reshaping-in-malviya-nagar",
    "Teeth reshaping and contouring in Malviya Nagar, South Delhi at Globodent Dental Spa. Even, balanced smile in one visit. Book an appointment.",
    "Teeth reshaping gently contours uneven edges, pointed canines or slightly overlapping teeth to create a balanced smile line. It is painless, requires no anaesthesia and is usually completed in one visit at our Malviya Nagar clinic. A subtle, affordable cosmetic upgrade popular with South Delhi professionals.",
    ["best-bonding-in-malviya-nagar", "best-smile-designing-in-malviya-nagar", "best-cosmetic-dentistry-in-malviya-nagar", "best-teeth-whitening-in-malviya-nagar"],
    "cosmetic-dentistry-in-malviya-nagar",
  ),
  S(
    "Veneers & Crowns",
    "best-veneers-and-crowns-in-malviya-nagar",
    "Porcelain veneers and zirconia crowns in Malviya Nagar, South Delhi at Globodent Dental Spa. Strong, natural-looking teeth. Book today.",
    "Ultra-thin porcelain veneers and high-strength zirconia crowns restore both the look and the function of damaged or discoloured teeth. Every unit is digitally designed and shade-matched at our Malviya Nagar clinic for a seamless finish. A go-to solution for post-RCT teeth and smile makeovers across South Delhi.",
    ["best-smile-designing-in-malviya-nagar", "best-root-canal-treatment-in-malviya-nagar", "best-cosmetic-dentistry-in-malviya-nagar", "best-dentures-and-bridges-in-malviya-nagar"],
    "cosmetic-dentistry-in-malviya-nagar",
  ),
  S(
    "Dental X-Ray",
    "best-dental-x-ray-in-malviya-nagar",
    "Digital dental X-ray and OPG in Malviya Nagar, South Delhi at Globodent Dental Spa. Low radiation, instant reports. Book an appointment.",
    "Our in-house digital radiography gives instant, high-resolution images with up to 90% less radiation than conventional film. RVG, OPG and 3D scans let our specialists diagnose hidden decay, bone loss and impacted teeth accurately. Available on walk-in at our Malviya Nagar clinic for South Delhi patients and referring dentists.",
    ["best-dental-check-ups-in-malviya-nagar", "best-root-canal-treatment-in-malviya-nagar", "best-dental-implants-in-malviya-nagar", "best-oral-surgery-in-malviya-nagar"],
  ),
  S(
    "Smile Designing",
    "best-smile-designing-in-malviya-nagar",
    "Digital smile designing in Malviya Nagar, South Delhi at Globodent Dental Spa. Preview your new smile before treatment. Book a consultation.",
    "Digital Smile Design lets you preview your new smile on screen before a single tooth is touched. Our team in Malviya Nagar plans proportion, shade and lip line, then delivers the result with veneers, crowns, whitening or alignment. It is the flagship cosmetic service at Globodent Dental Spa in South Delhi.",
    ["best-veneers-and-crowns-in-malviya-nagar", "best-cosmetic-dentistry-in-malviya-nagar", "best-teeth-whitening-in-malviya-nagar", "best-teeth-reshaping-in-malviya-nagar"],
    "cosmetic-dentistry-in-malviya-nagar",
  ),
];

export const bestServiceBySlug = Object.fromEntries(
  bestServices.map((s) => [s.slug, s]),
) as Record<string, BestServiceData>;
