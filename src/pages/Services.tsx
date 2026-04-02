import { WHATSAPP_LINK } from "@/lib/constants";

const services = [
  { name: "Dental Implants", desc: "Permanent tooth replacement with titanium implants that look and feel natural.", benefits: "Long-lasting, natural appearance, preserves jawbone", keyword: "affordable dental implants in Malviya Nagar" },
  { name: "Invisible Braces / Aligners", desc: "Straighten teeth discreetly with clear aligners — no metal wires needed.", benefits: "Invisible, removable, comfortable", keyword: "invisible braces dentist South Delhi" },
  { name: "Full Mouth Rehabilitation", desc: "Complete restoration for severely damaged or missing teeth using advanced prosthetics.", benefits: "Comprehensive solution, restored function, aesthetic", keyword: "full mouth rehab clinic Malviya Nagar" },
  { name: "Metal Braces", desc: "Traditional orthodontic braces for effective teeth alignment and bite correction.", benefits: "Proven results, cost-effective, all ages", keyword: "metal braces treatment Delhi" },
  { name: "Ceramic Braces", desc: "Tooth-colored brackets that blend with your smile for a subtler orthodontic look.", benefits: "Aesthetic, strong, effective", keyword: "ceramic braces dentist near me" },
  { name: "Cosmetic Dentistry", desc: "Transform your smile with veneers, bonding, and aesthetic dental procedures.", benefits: "Confidence boost, natural results, quick", keyword: "cosmetic dentist South Delhi" },
  { name: "Teeth Whitening", desc: "Professional whitening treatments for a brighter, stain-free smile in one visit.", benefits: "Instant results, safe, long-lasting", keyword: "teeth whitening Malviya Nagar" },
  { name: "Painless Extractions", desc: "Gentle, pain-free tooth removal using modern anesthesia techniques.", benefits: "Minimal discomfort, fast recovery, safe", keyword: "painless tooth extraction Delhi" },
  { name: "Single Sitting RCT", desc: "Complete root canal treatment in one visit — save time without compromising quality.", benefits: "Time-saving, painless, effective", keyword: "painless root canal treatment Delhi" },
  { name: "Surgical Dental Procedures", desc: "Advanced oral surgery for impacted teeth, cysts, and complex dental conditions.", benefits: "Expert surgeons, sterile environment, precision", keyword: "dental surgery clinic Malviya Nagar" },
  { name: "Crown & Bridges", desc: "Custom-crafted crowns and bridges to restore damaged or missing teeth.", benefits: "Natural look, durable, functional", keyword: "dental crown bridge Delhi" },
  { name: "Tooth-Colored Fillings", desc: "Mercury-free composite fillings that match your natural tooth color perfectly.", benefits: "Aesthetic, safe, durable", keyword: "tooth colored fillings South Delhi" },
  { name: "Complete Dentures", desc: "Full or partial dentures for a comfortable, functional, and natural-looking smile.", benefits: "Affordable, comfortable fit, natural", keyword: "dentures clinic near me Malviya Nagar" },
  { name: "Teeth Cleaning & Polishing", desc: "Professional scaling and polishing to remove plaque, tartar, and surface stains.", benefits: "Preventive care, fresh breath, healthy gums", keyword: "dental cleaning polishing Delhi" },
  { name: "Smile Designing", desc: "Complete smile makeover combining multiple cosmetic procedures for your dream smile.", benefits: "Customized, dramatic results, confidence", keyword: "smile design makeover South Delhi" },
  { name: "Implant Supported Dentures", desc: "Dentures secured by implants for maximum stability and comfort.", benefits: "No slipping, natural feel, permanent", keyword: "implant supported dentures Malviya Nagar" },
  { name: "Veneers & Laminates", desc: "Ultra-thin porcelain shells bonded to teeth for a flawless, celebrity-like smile.", benefits: "Instant transformation, stain-resistant, minimal prep", keyword: "dental veneers South Delhi" },
  { name: "Digital X-Ray", desc: "Low-radiation digital imaging for accurate diagnosis and treatment planning.", benefits: "90% less radiation, instant results, precise", keyword: "digital dental x-ray Delhi" },
  { name: "Gum Depigmentation", desc: "Remove dark spots and discoloration from gums for a uniform, pink, healthy look.", benefits: "Aesthetic gums, painless, lasting results", keyword: "gum depigmentation treatment Delhi" },
  { name: "Periodontal Surgery", desc: "Surgical treatment for advanced gum disease to save teeth and restore gum health.", benefits: "Stops disease progression, saves teeth", keyword: "periodontal gum surgery Malviya Nagar" },
  { name: "Post and Core", desc: "Foundation restoration for severely damaged teeth before crown placement.", benefits: "Saves natural tooth, strong foundation", keyword: "post and core dental treatment Delhi" },
];

const Services = () => (
  <div className="pt-20">
    <section className="section-padding bg-card">
      <div className="container mx-auto text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Services</p>
        <h1 className="text-3xl md:text-5xl font-heading mb-6">Comprehensive Dental Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From routine cleanings to advanced implantology — affordable, pain-free dental care at the best clinic in Malviya Nagar, South Delhi.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.name} className="bg-card rounded-xl border border-border p-6 hover-lift group">
              <h3 className="text-lg font-heading mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
              <p className="text-xs text-primary font-medium mb-3">✓ {s.benefits}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:underline"
              >
                Book This Service →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading text-primary-foreground mb-4">Need a Treatment?</h2>
        <p className="text-primary-foreground/80 mb-6">Consult with our specialists for personalized treatment plans.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Get Free Consultation
        </a>
      </div>
    </section>
  </div>
);

export default Services;
