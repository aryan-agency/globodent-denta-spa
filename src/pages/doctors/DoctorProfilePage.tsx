import { Link } from "react-router-dom";
import { Phone, MessageCircle, Calendar, MapPin, GraduationCap, Award, Stethoscope, ChevronRight, Plus, Minus, Star } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";

export interface DoctorProfileData {
  slug: string;
  name: string;
  title: string;
  role: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  qualifications: string[];
  experience: string[];
  expertise: string[];
  summaryParagraphs: string[];
  trustPoints: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  internalLinks: { label: string; href: string; desc: string }[];
  keywords: string[];
}

const Faq = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-card rounded-xl border border-border p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-heading text-base font-medium">{q}</h3>
        <span className="shrink-0 h-8 w-8 rounded-full bg-spa-blue-light flex items-center justify-center">
          {open ? <Minus className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4 text-primary" />}
        </span>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
      </div>
    </button>
  );
};

const DoctorProfilePage = ({ data }: { data: DoctorProfileData }) => {
  const canonical = `/doctors/${data.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: data.name,
    medicalSpecialty: data.role,
    image: `https://globodentdentalspa.com${data.image}`,
    url: `https://globodentdentalspa.com${canonical}`,
    description: data.metaDescription,
    telephone: "+91-98555-79244",
    worksFor: {
      "@type": "Dentist",
      name: "Globodent Dental Spa",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ground Floor, 3/37, Shivalik Rd, Shivalik Enclave, Block E",
        addressLocality: "Malviya Nagar",
        addressRegion: "Delhi",
        postalCode: "110017",
        addressCountry: "IN",
      },
    },
    alumniOf: data.qualifications.map((q) => ({ "@type": "EducationalOrganization", name: q })),
    knowsAbout: data.expertise,
  };

  return (
    <>
      <SEOHead title={data.metaTitle} description={data.metaDescription} canonical={canonical} jsonLd={jsonLd} />

      <div className="pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-6">
          <ol className="flex items-center flex-wrap gap-1 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <ChevronRight className="h-3 w-3" />
            <li><Link to="/doctors" className="hover:text-primary">Doctors</Link></li>
            <ChevronRight className="h-3 w-3" />
            <li className="text-foreground font-medium" aria-current="page">{data.name}</li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-3xl opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-80" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.4), hsl(190 80% 55% / 0.25))" }} />
                  <img
                    src={data.image}
                    alt={`${data.name} — ${data.role} at Globodent Dental Spa, Malviya Nagar`}
                    className="relative w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl"
                    loading="eager"
                  />
                  <div className="absolute bottom-5 left-5 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5" /> Globodent Specialist
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">{data.role}</p>
                <h1 className="text-3xl md:text-5xl font-heading mb-3 leading-tight">{data.name}</h1>
                <p className="text-muted-foreground text-sm mb-3">{data.title}</p>
                <p className="text-lg font-medium text-foreground/80 mb-5">{data.tagline}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4 text-primary" />
                  Globodent Dental Spa, Malviya Nagar, South Delhi
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Book Appointment
                  </a>
                  <a href={PHONE_LINK} className="btn-glow bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 border border-border">
                    <Phone className="h-4 w-4" /> Call {PHONE_NUMBER}
                  </a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {data.expertise.slice(0, 6).map((e) => (
                    <span key={e} className="bg-spa-blue-light text-primary text-xs font-medium px-3 py-1.5 rounded-full transition-transform duration-300 hover:-translate-y-0.5 hover:shadow">
                      {e}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 text-center">About the Doctor</p>
              <h2 className="text-2xl md:text-4xl font-heading mb-8 text-center">Meet {data.name}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {data.summaryParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* QUALIFICATIONS + EXPERIENCE */}
        <section className="section-padding">
          <div className="container mx-auto grid md:grid-cols-2 gap-6 max-w-5xl">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-spa-blue-light flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-heading">Qualifications</h2>
                </div>
                <ul className="space-y-2 text-sm">
                  {data.qualifications.map((q) => (
                    <li key={q} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-gold rounded-full mt-2 shrink-0" />{q}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-spa-blue-light flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-heading">Experience Highlights</h2>
                </div>
                <ul className="space-y-2 text-sm">
                  {data.experience.map((e) => (
                    <li key={e} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-gold rounded-full mt-2 shrink-0" />{e}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* EXPERTISE GRID */}
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Areas of Expertise</p>
                <h2 className="text-2xl md:text-4xl font-heading">Specialised Treatments Offered</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.expertise.map((e, i) => (
                <ScrollReveal key={e} delay={Math.min(i * 50, 300)}>
                  <div className="group bg-background border border-border rounded-xl p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                    <div className="h-9 w-9 rounded-lg bg-spa-blue-light flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Stethoscope className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{e}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY TRUST */}
        <section className="section-padding">
          <div className="container mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Patient Trust</p>
                <h2 className="text-2xl md:text-4xl font-heading">Why Patients Trust {data.name.split(" ").slice(0, 2).join(" ")}</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-5">
              {data.trustPoints.map((t, i) => (
                <ScrollReveal key={t.title} delay={i * 80}>
                  <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 text-gold fill-gold" />
                      <h3 className="font-heading text-lg">{t.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Explore More</p>
                <h2 className="text-2xl md:text-4xl font-heading">Related Treatments & Reading</h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.internalLinks.map((l) => (
                <Link key={l.href} to={l.href} className="group bg-background border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all">
                  <h3 className="font-heading text-base mb-1 group-hover:text-primary transition-colors">{l.label}</h3>
                  <p className="text-muted-foreground text-xs mb-3">{l.desc}</p>
                  <span className="text-xs font-semibold text-primary inline-flex items-center gap-1">Learn more <ChevronRight className="h-3 w-3" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="text-center mb-8">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">FAQs</p>
                <h2 className="text-2xl md:text-4xl font-heading">Frequently Asked Questions</h2>
              </div>
            </ScrollReveal>
            <div className="space-y-3">
              {data.faqs.map((f) => <Faq key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-padding bg-primary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">Book a Consultation with {data.name.split(" ").slice(0, 2).join(" ")}</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Get specialist-led, painless and precision-focused dental care at Globodent Dental Spa, Malviya Nagar.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-gold text-foreground px-7 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
              <a href={PHONE_LINK} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-7 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link to="/contact" className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-7 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Visit Clinic
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DoctorProfilePage;
