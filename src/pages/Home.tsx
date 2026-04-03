import { Shield, Zap, Users, IndianRupee, Heart, Star, ChevronLeft, ChevronRight, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { WHATSAPP_LINK, PHONE_LINK, CLINIC_ADDRESS, PHONE_NUMBER, CLINIC_HOURS, GOOGLE_MAPS_LINK } from "@/lib/constants";
import ClinicSlider from "@/components/ClinicSlider";
import ScrollReveal from "@/components/ScrollReveal";

import serviceImplants from "@/assets/service-implants.jpg";
import serviceAligners from "@/assets/service-aligners.jpg";
import serviceFullmouth from "@/assets/service-fullmouth.jpg";
import serviceRct from "@/assets/service-rct.jpg";
import serviceCosmetic from "@/assets/service-cosmetic.jpg";
import serviceWhitening from "@/assets/service-whitening.jpg";
import serviceCrown from "@/assets/service-crown.jpg";
import serviceSmile from "@/assets/service-smile.jpg";
import serviceMetalbraces from "@/assets/service-metalbraces.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import serviceExtraction from "@/assets/service-extraction.jpg";
import serviceVeneers from "@/assets/service-veneers.jpg";
import serviceDentures from "@/assets/service-dentures.jpg";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceXray from "@/assets/service-xray.jpg";
import serviceGum from "@/assets/service-gum.jpg";
import servicePerio from "@/assets/service-perio.jpg";
import serviceImplantDenture from "@/assets/service-implant-denture.jpg";
import serviceFilling from "@/assets/service-filling.jpg";
import serviceSurgery from "@/assets/service-surgery.jpg";
import servicePostcore from "@/assets/service-postcore.jpg";

/* ── Data ── */
const whyChoose = [
  { icon: Shield, title: "Painless Treatments", desc: "Advanced anesthesia techniques for a comfortable, pain-free experience." },
  { icon: Zap, title: "Advanced Technology", desc: "State-of-the-art equipment including digital X-rays and laser dentistry." },
  { icon: Users, title: "Experienced Specialists", desc: "Board-certified dentists with decades of combined experience." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium dental care at prices that won't break the bank." },
  { icon: Heart, title: "Trusted in South Delhi", desc: "Hundreds of happy patients across Malviya Nagar and beyond." },
];

const services = [
  { name: "Dental Implants", desc: "Permanent tooth replacement with titanium implants.", keyword: "affordable dental implants in Malviya Nagar", img: serviceImplants },
  { name: "Invisible Braces / Aligners", desc: "Straighten teeth discreetly with clear aligners.", keyword: "invisible braces dentist South Delhi", img: serviceAligners },
  { name: "Full Mouth Rehabilitation", desc: "Complete restoration for severely damaged teeth.", keyword: "full mouth rehab clinic Malviya Nagar", img: serviceFullmouth },
  { name: "Single Sitting RCT", desc: "Complete root canal in one painless visit.", keyword: "painless root canal treatment Delhi", img: serviceRct },
  { name: "Cosmetic Dentistry", desc: "Veneers, bonding, and aesthetic procedures.", keyword: "cosmetic dentist South Delhi", img: serviceCosmetic },
  { name: "Teeth Whitening", desc: "Professional whitening for a brighter smile.", keyword: "teeth whitening Malviya Nagar", img: serviceWhitening },
  { name: "Crown & Bridges", desc: "Custom crowns and bridges for damaged teeth.", keyword: "dental crown bridge Delhi", img: serviceCrown },
  { name: "Smile Designing", desc: "Complete smile makeover for your dream smile.", keyword: "smile design makeover South Delhi", img: serviceSmile },
  { name: "Metal Braces", desc: "Traditional braces for effective teeth alignment.", keyword: "metal braces treatment Delhi", img: serviceMetalbraces },
  { name: "Ceramic Braces", desc: "Tooth-colored brackets for a subtler look.", keyword: "ceramic braces dentist near me", img: serviceCeramic },
  { name: "Painless Extractions", desc: "Gentle, pain-free tooth removal.", keyword: "painless tooth extraction Delhi", img: serviceExtraction },
  { name: "Veneers & Laminates", desc: "Ultra-thin shells for a flawless smile.", keyword: "dental veneers South Delhi", img: serviceVeneers },
  { name: "Complete Dentures", desc: "Comfortable dentures for a natural-looking smile.", keyword: "dentures clinic near me Malviya Nagar", img: serviceDentures },
  { name: "Teeth Cleaning & Polishing", desc: "Professional scaling to remove plaque & tartar.", keyword: "dental cleaning polishing Delhi", img: serviceCleaning },
  { name: "Digital X-Ray", desc: "Low-radiation imaging for accurate diagnosis.", keyword: "digital dental x-ray Delhi", img: serviceXray },
  { name: "Gum Depigmentation", desc: "Remove dark spots for uniform pink gums.", keyword: "gum depigmentation treatment Delhi", img: serviceGum },
  { name: "Periodontal Surgery", desc: "Advanced gum disease treatment.", keyword: "periodontal gum surgery Malviya Nagar", img: servicePerio },
  { name: "Implant Supported Dentures", desc: "Implant-secured dentures for maximum stability.", keyword: "implant supported dentures Malviya Nagar", img: serviceImplantDenture },
  { name: "Tooth-Colored Fillings", desc: "Mercury-free fillings matching natural tooth color.", keyword: "tooth colored fillings South Delhi", img: serviceFilling },
  { name: "Surgical Procedures", desc: "Oral surgery for impacted teeth and complex cases.", keyword: "dental surgery clinic Malviya Nagar", img: serviceSurgery },
  { name: "Post and Core", desc: "Foundation restoration before crown placement.", keyword: "post and core dental treatment Delhi", img: servicePostcore },
];

const doctors = [
  {
    name: "Dr. Aanchal Bansal", title: "B.D.S, M.D.S", role: "Prosthodontist & Implantologist",
    specialties: ["Full Mouth Rehabilitation", "Smile Restoration", "Dental Implants", "Certified Orthodontist"],
    education: "Dr. Harvansh Singh Judge Institute (Punjab University)",
    experience: ["Safdarjung Hospital, New Delhi", "Lady Hardinge Medical College, New Delhi"],
    focus: "Advanced dental rehabilitation using cutting-edge modern technology for complete smile transformations.",
  },
  {
    name: "Dr. Rohit Bansal", title: "B.D.S, M.D.S", role: "Endodontist (Root Canal Specialist)",
    specialties: ["Pain Diagnosis & RCT", "Cosmetic Dentistry", "Restorative Dentistry"],
    education: "Manipal University & PDM Dental College",
    experience: ["Former Assistant Professor at ITS Dental College", "National dental conferences (IACDE)"],
    focus: "Expert in painless root canal treatments, cosmetic and restorative dentistry with meticulous precision.",
  },
];

const testimonials = [
  { name: "Priya S.", text: "Best dental clinic near me in Malviya Nagar! The pain-free root canal was truly painless. Highly recommended.", rating: 5 },
  { name: "Rahul M.", text: "Affordable dentist in South Delhi with world-class facilities. Dr. Bansal made my smile transformation amazing.", rating: 5 },
  { name: "Anita K.", text: "Pain-free root canal in Delhi — I was so nervous but the team was incredibly gentle. Will never go anywhere else!", rating: 5 },
  { name: "Vikram T.", text: "Got dental implants here. The best implant specialist in Malviya Nagar. Professional, clean, and caring.", rating: 5 },
];

/* ── Component ── */
const Home = () => {
  const [reviewIdx, setReviewIdx] = useState(0);
  const nextReview = useCallback(() => setReviewIdx((i) => (i + 1) % testimonials.length), []);
  const prevReview = useCallback(() => setReviewIdx((i) => (i - 1 + testimonials.length) % testimonials.length), []);
  const [heroOffset, setHeroOffset] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = setInterval(nextReview, 4000);
    return () => clearInterval(id);
  }, [nextReview]);

  // Parallax
  useEffect(() => {
    const handler = () => {
      if (heroRef.current) {
        setHeroOffset(window.scrollY * 0.4);
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* ══ HERO ══ */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${heroOffset}px)` }}>
          <img src={heroBg} alt="Modern dental clinic interior" className="w-full h-[120%] object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">Globodent Dental Spa</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-tight mb-6 text-primary-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Best Dental Clinic in Malviya Nagar for Pain-Free Advanced Treatments
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Affordable, Advanced & Trusted Dental Care in South Delhi
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base">
                Book Consultation
              </a>
              <a href={PHONE_LINK} className="btn-glow bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST BAR ══ */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto py-6 px-4">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {whyChoose.map((item, i) => (
                <div key={item.title} className="flex flex-col items-center text-center p-3">
                  <div className="h-10 w-10 bg-spa-blue-light rounded-lg flex items-center justify-center mb-2">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--spa-blue-light)) 50%, hsl(var(--background)) 100%)' }}>
        {/* Ambient glow orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent)' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(190 80% 55% / 0.25), transparent)' }} />

        <div className="container mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
              <h2 className="text-3xl md:text-5xl font-heading mb-5">Comprehensive Dental Care</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From routine cleanings to advanced implantology — affordable, pain-free dental care at the best clinic in Malviya Nagar.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <ScrollReveal key={s.name} delay={Math.min(i * 70, 400)}>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card-premium block group cursor-pointer"
                >
                  {/* Image */}
                  <div className="overflow-hidden h-44">
                    <img
                      src={s.img}
                      alt={s.name}
                      loading="lazy"
                      width={640}
                      height={512}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-heading mb-2 group-hover:text-primary transition-colors duration-300">{s.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                      Book This Service
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DOCTORS ══ */}
      <section id="doctors" className="section-padding bg-card">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Specialists</p>
              <h2 className="text-3xl md:text-4xl font-heading">Meet Your Doctors</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {doctors.map((doc, i) => (
              <ScrollReveal key={doc.name} delay={i * 150}>
                <div className="bg-background rounded-2xl border border-border p-8 md:p-10 card-hover">
                  <h3 className="text-2xl font-heading mb-1">{doc.name}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{doc.title}</p>
                  <p className="text-primary font-semibold mb-4">{doc.role}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {doc.specialties.map((s) => (
                        <span key={s} className="bg-spa-blue-light text-primary text-xs font-medium px-3 py-1 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Education</h4>
                    <p className="text-sm">{doc.education}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Experience</h4>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALLERY ══ */}
      <section id="gallery" className="section-padding">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Clinic</p>
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Where Your Jaw is Reborn</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-sm">
              State-of-the-art facility designed for your comfort. Modern equipment, pristine hygiene, and a luxury spa-like atmosphere.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <ClinicSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section id="testimonials" className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Patient Reviews</p>
            <h2 className="text-3xl md:text-4xl font-heading mb-12">What Our Patients Say</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative max-w-2xl mx-auto">
              <div className="bg-background p-8 md:p-10 rounded-2xl border border-border min-h-[200px] flex flex-col items-center justify-center">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[reviewIdx].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-4 text-base">"{testimonials[reviewIdx].text}"</p>
                <p className="font-semibold text-sm">{testimonials[reviewIdx].name}</p>
              </div>
              <button onClick={prevReview} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-card h-10 w-10 rounded-full flex items-center justify-center shadow-lg border border-border hover:scale-110 transition-transform" aria-label="Previous review">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={nextReview} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-card h-10 w-10 rounded-full flex items-center justify-center shadow-lg border border-border hover:scale-110 transition-transform" aria-label="Next review">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">Ready for Your Best Smile?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Book your consultation today and experience pain-free, affordable dental care at the best clinic in Malviya Nagar.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold text-base">
              Book on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-heading">Contact Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-heading mb-6">Clinic Information</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-spa-blue-light rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Address</h4>
                      <p className="text-muted-foreground text-sm">{CLINIC_ADDRESS}</p>
                      <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline">Get Directions →</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-spa-blue-light rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Phone</h4>
                      <a href={PHONE_LINK} className="text-muted-foreground text-sm hover:text-primary">{PHONE_NUMBER}</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-spa-blue-light rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Clinic Hours</h4>
                      <p className="text-muted-foreground text-sm">{CLINIC_HOURS}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow flex-1 text-center bg-primary text-primary-foreground py-3 rounded-lg font-semibold">
                    WhatsApp Us
                  </a>
                  <a href={PHONE_LINK} className="btn-glow flex-1 text-center bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold">
                    Call Now
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0!2d77.2!3d28.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f5f6b8b0a5%3A0x0!2sGlobodent+Dental+Spa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0, minHeight: 400 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Globodent Dental Spa Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
