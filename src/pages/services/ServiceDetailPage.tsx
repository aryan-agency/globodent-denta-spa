import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, CheckCircle, MapPin, Clock } from "lucide-react";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER, CLINIC_ADDRESS, CLINIC_HOURS } from "@/lib/constants";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import TrustedProfiles from "@/components/TrustedProfiles";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface ServicePageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutContent: string[];
  benefits: string[];
  procedureTitle: string;
  procedureSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: { name: string; slug: string }[];
  image: string;
}

const ServiceDetailPage = ({ data }: { data: ServicePageData }) => (
  <>
    <SEOHead
      title={data.title}
      description={data.metaDescription}
      canonical={`/services/${data.slug}`}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": data.h1,
        "description": data.metaDescription,
        "howPerformed": data.procedureSteps.map(s => s.desc).join(" "),
        "provider": {
          "@type": "MedicalClinic",
          "name": "Globodent Dental Spa®",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ground Floor, 3/37, Shivalik Rd, Shivalik Enclave, Block E",
            "addressLocality": "Malviya Nagar",
            "addressRegion": "New Delhi",
            "postalCode": "110017",
            "addressCountry": "IN"
          },
          "telephone": "+919855579244"
        }
      }}
    />
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Services</p>
          <h1 className="text-3xl md:text-5xl font-heading mb-4">{data.h1}</h1>
          <p className="text-muted-foreground text-lg mb-6">{data.heroSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <MessageCircle className="h-5 w-5" /> Book on WhatsApp
            </a>
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <Phone className="h-5 w-5" /> Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      <TrustedProfiles />

      {/* About */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading mb-4">{data.aboutTitle}</h2>
                {data.aboutContent.map((p, i) => (
                  <p key={i} className="text-muted-foreground mb-4 leading-relaxed">{p}</p>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={data.image} alt={data.h1} className="w-full h-72 object-cover" loading="lazy" width={640} height={288} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading mb-8 text-center">Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Procedure */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading mb-8 text-center">{data.procedureTitle}</h2>
            <div className="space-y-6">
              {data.procedureSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading mb-6 text-center">Visit Globodent Dental Spa® in Malviya Nagar</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-muted-foreground text-sm">{CLINIC_ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Clinic Hours</p>
                  <p className="text-muted-foreground text-sm">{CLINIC_HOURS}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading mb-6 text-center">Explore More Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.relatedServices.map(s => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-background border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                {s.name} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Book your appointment at Globodent Dental Spa® in Malviya Nagar today. Painless, affordable, and world-class dental care.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
            <a href={PHONE_LINK} className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default ServiceDetailPage;
