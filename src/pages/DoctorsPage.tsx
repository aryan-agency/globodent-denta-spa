import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/lib/constants";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import TrustedProfiles from "@/components/TrustedProfiles";
import drAanchal from "@/assets/dr-aanchal.png";
import drRohit from "@/assets/dr-rohit.png";

const doctors = [
  {
    name: "Dr. Aanchal Bansal", title: "B.D.S, M.D.S", role: "Prosthodontist & Implantologist",
    specialties: ["Full Mouth Rehabilitation", "Smile Restoration", "Dental Implants", "Certified Orthodontist"],
    education: "Dr. Harvansh Singh Judge Institute (Punjab University)",
    experience: ["Safdarjung Hospital, New Delhi", "Lady Hardinge Medical College, New Delhi"],
    focus: "Advanced dental rehabilitation using cutting-edge modern technology for complete smile transformations.",
    img: drAanchal, badge: "10+ Years Experience",
  },
  {
    name: "Dr. Rohit Bansal", title: "B.D.S, M.D.S", role: "Endodontist (Root Canal Specialist)",
    specialties: ["Pain Diagnosis & RCT", "Cosmetic Dentistry", "Restorative Dentistry"],
    education: "Manipal University & PDM Dental College",
    experience: ["Former Assistant Professor at ITS Dental College", "National dental conferences (IACDE)"],
    focus: "Expert in painless root canal treatments, cosmetic and restorative dentistry with meticulous precision.",
    img: drRohit, badge: "Advanced Dental Specialist",
  },
];

const DoctorsPage = () => (
  <>
    <SEOHead
      title="Our Dentists | Globodent Dental Spa® - Best Dentists in Malviya Nagar"
      description="Meet the expert dental specialists at Globodent Dental Spa® — Dr. Aanchal Bansal (Prosthodontist) & Dr. Rohit Bansal (Endodontist) in Malviya Nagar, South Delhi."
      canonical="/doctors"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Globodent Dental Spa - Our Doctors",
        "physician": doctors.map(d => ({
          "@type": "Physician",
          "name": d.name,
          "medicalSpecialty": d.role,
          "description": d.focus
        }))
      }}
    />
    <div className="pt-20">
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Specialists</p>
          <h1 className="text-3xl md:text-5xl font-heading mb-6">Meet Your Doctors</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Globodent Dental Spa<sup className="text-[0.6em]">®</sup>, our experienced team of specialists combines advanced technology
            with compassionate care to deliver the best dental treatments in South Delhi.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="space-y-16 max-w-6xl mx-auto">
            {doctors.map((doc, i) => {
              const imgFirst = i % 2 === 0;
              return (
                <ScrollReveal key={doc.name} delay={i * 150}>
                  <div className={`flex flex-col ${imgFirst ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                    <div className="w-full md:w-5/12 shrink-0">
                      <div className="relative group">
                        <div className="absolute -inset-1 rounded-2xl opacity-40 group-hover:opacity-70 blur-md transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(190 80% 55% / 0.2))' }} />
                        <img src={doc.img} alt={doc.name} loading="lazy" className="relative w-full aspect-[4/3] object-cover object-top rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.03]" />
                        <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                          {doc.badge}
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-7/12">
                      <h2 className="text-2xl md:text-3xl font-heading mb-1">{doc.name}</h2>
                      <p className="text-muted-foreground text-sm mb-1">{doc.title}</p>
                      <p className="text-primary font-semibold text-lg mb-5">{doc.role}</p>
                      <div className="mb-5">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Specializations</h3>
                        <div className="flex flex-wrap gap-2">
                          {doc.specialties.map((s) => (
                            <span key={s} className="bg-spa-blue-light text-primary text-xs font-medium px-3 py-1.5 rounded-full">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-5">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Education</h3>
                        <p className="text-sm">{doc.education}</p>
                      </div>
                      <div className="mb-5">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Experience</h3>
                        <ul className="text-sm space-y-1">
                          {doc.experience.map((e) => (
                            <li key={e} className="flex items-start gap-2">
                              <span className="h-1.5 w-1.5 bg-gold rounded-full mt-2 shrink-0" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-muted-foreground text-sm italic">{doc.focus}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading text-primary-foreground mb-4">Consult Our Specialists</h2>
          <p className="text-primary-foreground/80 mb-6">Get expert advice from the best dentists in Malviya Nagar.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Book Consultation
            </a>
            <Link to="/services" className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default DoctorsPage;
