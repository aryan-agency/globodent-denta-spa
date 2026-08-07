import { Link, Navigate } from "react-router-dom";
import { Phone, Calendar, ArrowRight, MapPin, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WHATSAPP_LINK, PHONE_LINK, GOOGLE_MAPS_LINK } from "@/lib/constants";
import { buildLocalBusinessSchema } from "@/lib/localBusinessSchema";
import { bestServiceBySlug } from "./bestServiceData";
import { bestContentBySlug } from "./content";

const BASE_URL = "https://globodentdentalspa.com";

const CtaRow = ({ variant = "primary" }: { variant?: "primary" | "muted" }) => (
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    <Button asChild size="lg" className={variant === "primary" ? "btn-glow" : undefined}>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <Calendar className="w-4 h-4" /> Book Appointment
      </a>
    </Button>
    <Button asChild size="lg" variant={variant === "primary" ? "outline" : "secondary"}>
      <a href={PHONE_LINK}>
        <Phone className="w-4 h-4" /> Call Now
      </a>
    </Button>
    <Button asChild size="lg" variant="outline">
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <Sparkles className="w-4 h-4" /> Schedule Consultation
      </a>
    </Button>
  </div>
);

const BestServicePage = ({ slug }: { slug: string }) => {
  const data = bestServiceBySlug[slug];

  if (!data) return <Navigate to="/services" replace />;

  const content = bestContentBySlug[slug];
  const canonical = `/${data.slug}`;
  const h1 = `Best ${data.service} in Malviya Nagar`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}${canonical}#service`,
    name: h1,
    serviceType: data.service,
    description: data.description,
    url: `${BASE_URL}${canonical}`,
    provider: { "@id": `${BASE_URL}/#dentist` },
    areaServed: [
      "Malviya Nagar",
      "Saket",
      "Hauz Khas",
      "Panchsheel Park",
      "Greater Kailash",
      "Green Park",
      "Sheikh Sarai",
      "Chirag Delhi",
      "Khirki Extension",
      "Pushp Vihar",
      "South Delhi",
    ].map((name) => ({ "@type": "Place", name })),
    audience: { "@type": "PeopleAudience", geographicArea: { "@type": "Place", name: "South Delhi" } },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: h1, item: `${BASE_URL}${canonical}` },
    ],
  };

  const faqSchema = content?.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${BASE_URL}${canonical}#faq`,
        mainEntity: content.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const related = data.related
    .map((s) => bestServiceBySlug[s])
    .filter(Boolean)
    .slice(0, 6);

  // Broaden the related grid to 6–10 cards without duplicates or broken links.
  const extraRelated = Object.values(bestServiceBySlug)
    .filter((s) => s.slug !== data.slug && !related.some((r) => r.slug === s.slug))
    .slice(0, 10 - related.length);
  const relatedAll = [...related, ...extraRelated];

  return (
    <>
      <SEOHead
        title={data.title}
        description={data.description}
        canonical={canonical}
        jsonLd={[
          buildLocalBusinessSchema({ pagePath: canonical, description: data.description }),
          serviceSchema,
          breadcrumbSchema,
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 pt-28 pb-14">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{data.service}</span>
          </nav>

          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            4.9★ Rated on Google · Malviya Nagar, South Delhi
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">{h1}</h1>

          <p className="text-base md:text-lg text-muted-foreground mb-8">{data.intro}</p>

          <CtaRow />

          <p className="text-xs text-muted-foreground mt-4">
            Serving patients from Malviya Nagar, Hauz Khas, Panchsheel Park, Saket and South Delhi
          </p>
        </div>
      </section>

      {content && (
        <>
          {/* About the treatment */}
          <section className="py-14">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                About {data.service} in Malviya Nagar
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {content.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Planning wider treatment? Explore our{" "}
                <Link to="/services" className="text-primary underline underline-offset-4">dental services in Malviya Nagar</Link>,
                meet our <Link to="/doctors" className="text-primary underline underline-offset-4">specialist dentists</Link>, or{" "}
                <Link to="/contact" className="text-primary underline underline-offset-4">contact the clinic</Link>.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-14 bg-muted/40">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                Benefits of {data.service} at Globodent Dental Spa
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {content.benefits.map((b) => (
                  <div key={b.title} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Signs / symptoms */}
          <section className="py-14">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Signs You May Need {data.service}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{content.signsIntro}</p>
              <ul className="space-y-3">
                {content.signs.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaRow variant="muted" />
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-14 bg-muted/40">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                The {data.service} Process at Our Malviya Nagar Clinic
              </h2>
              <ol className="space-y-6">
                {content.process.map((p, i) => (
                  <li key={p.title} className="flex gap-4">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Why choose Globodent */}
          <section className="py-14">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                Why Choose Globodent Dental Spa for {data.service}
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {content.whyGlobodent.map((w) => (
                  <div key={w.title} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary mt-1 shrink-0" aria-hidden="true" />
                      {w.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{w.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-border bg-card p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Patients Choose Us</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {content.whyPatients.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-5">
                  Learn more about our{" "}
                  <Link to="/about" className="text-primary underline underline-offset-4">clinic and philosophy</Link> or read the{" "}
                  <Link to="/reviews" className="text-primary underline underline-offset-4">experiences of our patients</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Nearby areas */}
          <section className="py-14 bg-muted/40">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Nearby Areas We Serve in South Delhi
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {content.areas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "Malviya Nagar",
                  "Saket",
                  "Hauz Khas",
                  "Panchsheel Park",
                  "Panchsheel Enclave",
                  "Chirag Delhi",
                  "Greater Kailash",
                  "Sheikh Sarai",
                  "Green Park",
                  "Khirki Extension",
                  "Pushp Vihar",
                  "South Delhi",
                ].map((a) => (
                  <span key={a} className="text-xs rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-14">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                {data.service} in Malviya Nagar — Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {content.faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Closing */}
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {content.closing.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <CtaRow />
              </div>
            </div>
          </section>
        </>
      )}

      {/* Related treatments */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
            Related Treatments in Malviya Nagar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedAll.map((r) => (
              <Link
                key={r.slug}
                to={`/${r.slug}`}
                className="card-hover group rounded-xl border border-border bg-card p-5 flex items-center justify-between gap-3"
              >
                <span className="font-medium text-foreground">Best {r.service} in Malviya Nagar</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          {data.serviceSlug && (
            <p className="text-center text-muted-foreground mt-6">
              Read the full treatment guide:{" "}
              <Link to={`/services/${data.serviceSlug}`} className="text-primary underline underline-offset-4">
                {data.service} in Malviya Nagar
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* Internal links + CTA */}
      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Book Your {data.service} Appointment
          </h2>
          <p className="text-muted-foreground mb-6">
            Globodent Dental Spa — the{" "}
            <Link to="/best-dental-clinic-in-malviya-nagar" className="text-primary underline underline-offset-4">
              best dental clinic in Malviya Nagar
            </Link>
            , South Delhi.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button asChild size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" /> Book Appointment
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={PHONE_LINK}>
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4" /> Visit Clinic
              </a>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground space-x-2">
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <span>·</span>
            <Link to="/services" className="text-primary hover:underline">All Services</Link>
            <span>·</span>
            <Link to="/doctors" className="text-primary hover:underline">Our Doctors</Link>
            <span>·</span>
            <Link to="/contact" className="text-primary hover:underline">Contact</Link>
            <span>·</span>
            <Link to="/reviews" className="text-primary hover:underline">Reviews</Link>
            <span>·</span>
            <Link to="/gallery" className="text-primary hover:underline">Gallery</Link>
            <span>·</span>
            <Link to="/blog" className="text-primary hover:underline">Blog</Link>
          </div>

          <div className="text-sm text-muted-foreground mt-4 space-x-2">
            <Link to="/services/dental-implants-in-malviya-nagar" className="text-primary hover:underline">Dental Implants</Link>
            <span>·</span>
            <Link to="/services/root-canal-treatment-in-malviya-nagar" className="text-primary hover:underline">Root Canal</Link>
            <span>·</span>
            <Link to="/services/braces-treatment-in-malviya-nagar" className="text-primary hover:underline">Braces</Link>
            <span>·</span>
            <Link to="/services/teeth-whitening-in-malviya-nagar" className="text-primary hover:underline">Teeth Whitening</Link>
            <span>·</span>
            <Link to="/services/cosmetic-dentistry-in-malviya-nagar" className="text-primary hover:underline">Smile Designing</Link>
          </div>

          <div className="text-sm text-muted-foreground mt-4 space-x-2">
            <Link to="/blog/is-root-canal-painful-in-malviya-nagar" className="text-primary hover:underline">Is Root Canal Painful?</Link>
            <span>·</span>
            <Link to="/blog/dental-implant-cost-in-delhi-2025" className="text-primary hover:underline">Dental Implant Cost in Delhi</Link>
            <span>·</span>
            <Link to="/blog/teeth-whitening-cost-in-delhi" className="text-primary hover:underline">Teeth Whitening Cost</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestServicePage;
