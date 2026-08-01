import { Link, useParams, Navigate } from "react-router-dom";
import { Phone, Calendar, ArrowRight, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, PHONE_LINK, GOOGLE_MAPS_LINK } from "@/lib/constants";
import { buildLocalBusinessSchema } from "@/lib/localBusinessSchema";
import { bestServiceBySlug } from "./bestServiceData";

const BASE_URL = "https://globodentdentalspa.com";

const BestServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? bestServiceBySlug[slug] : undefined;

  if (!data) return <Navigate to="/services" replace />;

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
      { "@type": "Place", name: "Malviya Nagar" },
      { "@type": "Place", name: "South Delhi" },
    ],
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

  const related = data.related
    .map((s) => bestServiceBySlug[s])
    .filter(Boolean)
    .slice(0, 6);

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

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="btn-glow">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" /> Book Appointment
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={PHONE_LINK}>
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Serving patients from Malviya Nagar, Hauz Khas, Panchsheel Park, Saket and South Delhi
          </p>
        </div>
      </section>

      {/* Related treatments */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
            Related Treatments in Malviya Nagar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((r) => (
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
