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
  Icon: LucideIcon;
  /** Optional JSON-LD structured data */
  jsonLd?: object;
  /** Long-form body rendered inside the prose container */
  children: React.ReactNode;
}

const WidgetLandingPage = ({ title, description, canonical, h1, intro, Icon, jsonLd, children }: WidgetLandingProps) => {
  return (
    <>
      <SEOHead title={title} description={description} canonical={canonical} jsonLd={jsonLd} />

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

      {/* Long-form body */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <article
            className="
              text-foreground leading-relaxed space-y-5
              [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-foreground
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-foreground
              [&_p]:text-base [&_p]:text-muted-foreground
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-muted-foreground
              [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary/80
            "
          >
            {children}
          </article>
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
