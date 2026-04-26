import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, type LucideIcon } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import TrustedProfiles from "@/components/TrustedProfiles";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, PHONE_LINK, GOOGLE_MAPS_LINK } from "@/lib/constants";

export interface WidgetLandingProps {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  intro: string;
  bullets: string[];
  Icon: LucideIcon;
}

const WidgetLandingPage = ({ title, description, canonical, h1, intro, bullets, Icon }: WidgetLandingProps) => {
  return (
    <>
      <SEOHead title={title} description={description} canonical={canonical} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 pt-28 pb-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5">
            <Icon className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{h1}</h1>
          <p className="text-base md:text-lg text-muted-foreground">{intro}</p>
        </div>
      </section>

      <TrustedProfiles />

      {/* Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
            Why Patients Choose Us
          </h2>
          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card text-card-foreground"
              >
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Book Your Appointment Today
          </h2>
          <p className="text-muted-foreground mb-6">
            Globodent Dental Spa, Malviya Nagar, South Delhi
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <a href={PHONE_LINK}>
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4" /> Visit Clinic
              </a>
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            Explore more: <Link to="/services" className="text-primary hover:underline">Services</Link> ·{" "}
            <Link to="/doctors" className="text-primary hover:underline">Doctors</Link> ·{" "}
            <Link to="/contact" className="text-primary hover:underline">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WidgetLandingPage;
