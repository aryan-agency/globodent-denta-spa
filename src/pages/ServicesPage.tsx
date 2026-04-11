import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/lib/constants";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import { servicePages } from "@/pages/services/serviceData";

import serviceImplants from "@/assets/service-implants-real.jpg";
import serviceAligners from "@/assets/service-aligners-real.jpg";
import serviceFullmouth from "@/assets/service-fullmouth-real.jpg";
import serviceRct from "@/assets/service-rct-real.png";
import serviceCosmetic from "@/assets/service-cosmetic-real.jpg";
import serviceWhitening from "@/assets/service-whitening-new.jpg";
import serviceCrown from "@/assets/service-crown.jpg";
import serviceSmile from "@/assets/service-smile-real.jpg";
import serviceMetalbraces from "@/assets/service-metalbraces-real.png";
import serviceCeramic from "@/assets/service-ceramic-real.jpg";
import serviceExtraction from "@/assets/service-extraction-real.jpg";
import serviceVeneers from "@/assets/service-veneers.jpg";
import serviceDentures from "@/assets/service-dentures.jpg";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceXray from "@/assets/service-xray.jpg";
import serviceGum from "@/assets/service-gum.jpg";
import servicePerio from "@/assets/service-perio.jpg";
import serviceImplantDenture from "@/assets/service-implant-denture.jpg";
import serviceFilling from "@/assets/service-filling.jpg";
import serviceSurgery from "@/assets/service-surgery-real.jpg";
import servicePostcore from "@/assets/service-postcore-real.jpg";

const serviceSlugMap: Record<string, string> = {
  "Single Sitting RCT": "root-canal-treatment-in-malviya-nagar",
  "Dental Implants": "dental-implants-in-malviya-nagar",
  "Teeth Whitening": "teeth-whitening-in-malviya-nagar",
  "Metal Braces": "braces-treatment-in-malviya-nagar",
  "Ceramic Braces": "braces-treatment-in-malviya-nagar",
  "Invisible Braces / Aligners": "braces-treatment-in-malviya-nagar",
  "Painless Extractions": "tooth-extraction-in-malviya-nagar",
  "Teeth Cleaning & Polishing": "dental-cleaning-in-malviya-nagar",
  "Cosmetic Dentistry": "cosmetic-dentistry-in-malviya-nagar",
  "Full Mouth Rehabilitation": "full-mouth-rehabilitation-in-malviya-nagar",
};

const services = [
  { name: "Dental Implants", desc: "Permanent tooth replacement with titanium implants that look and feel natural.", benefits: "Long-lasting, natural appearance, preserves jawbone", keyword: "affordable dental implants in Malviya Nagar", img: serviceImplants },
  { name: "Invisible Braces / Aligners", desc: "Straighten teeth discreetly with clear aligners — no metal wires needed.", benefits: "Invisible, removable, comfortable", keyword: "invisible braces dentist South Delhi", img: serviceAligners },
  { name: "Full Mouth Rehabilitation", desc: "Complete restoration for severely damaged or missing teeth using advanced prosthetics.", benefits: "Comprehensive solution, restored function, aesthetic", keyword: "full mouth rehab clinic Malviya Nagar", img: serviceFullmouth },
  { name: "Metal Braces", desc: "Traditional orthodontic braces for effective teeth alignment and bite correction.", benefits: "Proven results, cost-effective, all ages", keyword: "metal braces treatment Delhi", img: serviceMetalbraces },
  { name: "Ceramic Braces", desc: "Tooth-colored brackets that blend with your smile for a subtler orthodontic look.", benefits: "Aesthetic, strong, effective", keyword: "ceramic braces dentist near me", img: serviceCeramic },
  { name: "Cosmetic Dentistry", desc: "Transform your smile with veneers, bonding, and aesthetic dental procedures.", benefits: "Confidence boost, natural results, quick", keyword: "cosmetic dentist South Delhi", img: serviceCosmetic },
  { name: "Teeth Whitening", desc: "Professional whitening treatments for a brighter, stain-free smile in one visit.", benefits: "Instant results, safe, long-lasting", keyword: "teeth whitening Malviya Nagar", img: serviceWhitening },
  { name: "Painless Extractions", desc: "Gentle, pain-free tooth removal using modern anesthesia techniques.", benefits: "Minimal discomfort, fast recovery, safe", keyword: "painless tooth extraction Delhi", img: serviceExtraction },
  { name: "Single Sitting RCT", desc: "Complete root canal treatment in one visit — save time without compromising quality.", benefits: "Time-saving, painless, effective", keyword: "painless root canal treatment Delhi", img: serviceRct },
  { name: "Painless Surgical Procedures", desc: "Advanced oral surgery for impacted teeth, cysts, and complex dental conditions.", benefits: "Expert surgeons, sterile environment, precision", keyword: "dental surgery clinic Malviya Nagar", img: serviceSurgery },
  { name: "Crown & Bridges", desc: "Custom-crafted crowns and bridges to restore damaged or missing teeth.", benefits: "Natural look, durable, functional", keyword: "dental crown bridge Delhi", img: serviceCrown },
  { name: "Smile Designing", desc: "Complete smile makeover combining multiple cosmetic procedures for your dream smile.", benefits: "Customized, dramatic results, confidence", keyword: "smile design makeover South Delhi", img: serviceSmile },
  { name: "Veneers & Laminates", desc: "Ultra-thin porcelain shells bonded to teeth for a flawless, celebrity-like smile.", benefits: "Instant transformation, stain-resistant, minimal prep", keyword: "dental veneers South Delhi", img: serviceVeneers },
  { name: "Complete Dentures", desc: "Full or partial dentures for a comfortable, functional, and natural-looking smile.", benefits: "Affordable, comfortable fit, natural", keyword: "dentures clinic near me Malviya Nagar", img: serviceDentures },
  { name: "Teeth Cleaning & Polishing", desc: "Professional scaling and polishing to remove plaque, tartar, and surface stains.", benefits: "Preventive care, fresh breath, healthy gums", keyword: "dental cleaning polishing Delhi", img: serviceCleaning },
  { name: "Digital X-Ray", desc: "Low-radiation digital imaging for accurate diagnosis and treatment planning.", benefits: "90% less radiation, instant results, precise", keyword: "digital dental x-ray Delhi", img: serviceXray },
  { name: "Gum Depigmentation", desc: "Remove dark spots and discoloration from gums for a uniform, pink, healthy look.", benefits: "Aesthetic gums, painless, lasting results", keyword: "gum depigmentation treatment Delhi", img: serviceGum },
  { name: "Periodontal Surgery", desc: "Surgical treatment for advanced gum disease to save teeth and restore gum health.", benefits: "Stops disease progression, saves teeth", keyword: "periodontal gum surgery Malviya Nagar", img: servicePerio },
  { name: "Implant Supported Dentures", desc: "Dentures secured by implants for maximum stability and comfort.", benefits: "No slipping, natural feel, permanent", keyword: "implant supported dentures Malviya Nagar", img: serviceImplantDenture },
  { name: "Tooth-Colored Fillings", desc: "Mercury-free composite fillings that match your natural tooth color perfectly.", benefits: "Aesthetic, safe, durable", keyword: "tooth colored fillings South Delhi", img: serviceFilling },
  { name: "Post and Core", desc: "Foundation restoration for severely damaged teeth before crown placement.", benefits: "Saves natural tooth, strong foundation", keyword: "post and core dental treatment Delhi", img: servicePostcore },
];

const ServicesPage = () => (
  <>
    <SEOHead
      title="Dental Services | Globodent Dental Spa® - Malviya Nagar, Delhi"
      description="Comprehensive dental services at Globodent Dental Spa® — dental implants, painless root canal, invisible braces, cosmetic dentistry & more in Malviya Nagar, South Delhi."
      canonical="/services"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Globodent Dental Spa - Services",
        "description": "Comprehensive dental services including implants, root canal, braces, cosmetic dentistry in Malviya Nagar.",
        "medicalSpecialty": ["Dentistry", "Prosthodontics", "Endodontics", "Orthodontics"],
        "availableService": services.slice(0, 10).map(s => ({
          "@type": "MedicalProcedure",
          "name": s.name,
          "description": s.desc
        }))
      }}
    />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => {
              const detailSlug = serviceSlugMap[s.name];
              const Wrapper = detailSlug
                ? ({ children, className }: { children: React.ReactNode; className: string }) => (
                    <Link to={`/services/${detailSlug}`} className={className}>{children}</Link>
                  )
                : ({ children, className }: { children: React.ReactNode; className: string }) => (
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
                  );
              return (
              <ScrollReveal key={s.name} delay={Math.min(i * 70, 400)}>
                <Wrapper className="service-card-premium block group cursor-pointer">
                  <div className="overflow-hidden h-48 bg-muted/30 flex items-center justify-center">
                    <img src={s.img} alt={s.name} loading="lazy" width={640} height={512} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading mb-2 group-hover:text-primary transition-colors duration-300">{s.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                    <p className="text-xs text-primary font-medium mb-3">✓ {s.benefits}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                      {detailSlug ? "Learn More" : "Book This Service"}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Wrapper>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading text-primary-foreground mb-4">Need a Treatment?</h2>
          <p className="text-primary-foreground/80 mb-6">Consult with our specialists for personalized treatment plans.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Free Consultation
            </a>
            <Link to="/doctors" className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors">
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default ServicesPage;
