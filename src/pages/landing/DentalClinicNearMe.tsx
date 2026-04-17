import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Clock, Navigation, Zap, CalendarCheck, AlertCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import TrustedProfiles from "@/components/TrustedProfiles";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  WHATSAPP_LINK,
  PHONE_LINK,
  PHONE_NUMBER,
  CLINIC_ADDRESS,
  CLINIC_HOURS,
  GOOGLE_MAPS_EMBED,
  GOOGLE_MAPS_LINK,
} from "@/lib/constants";

const nearbyAreas = [
  "Malviya Nagar", "Saket", "Hauz Khas", "Green Park", "Shivalik", "Khirki Extension",
  "Panchsheel Park", "Sheikh Sarai", "Pushp Vihar", "Saidulajab", "Lado Sarai", "Begumpur",
];

const quickServices = [
  { name: "Emergency Tooth Pain", slug: "root-canal-treatment-in-malviya-nagar" },
  { name: "Same-Day Tooth Extraction", slug: "tooth-extraction-in-malviya-nagar" },
  { name: "Dental Cleaning & Polishing", slug: "dental-cleaning-in-malviya-nagar" },
  { name: "Single-Visit Root Canal", slug: "root-canal-treatment-in-malviya-nagar" },
  { name: "Broken Tooth Repair", slug: "cosmetic-dentistry-in-malviya-nagar" },
  { name: "Teeth Whitening", slug: "teeth-whitening-in-malviya-nagar" },
];

const faqs = [
  { q: "Is there a dentist open today near Malviya Nagar?", a: `Yes — Globodent Dental Spa is open today from ${CLINIC_HOURS}. Walk-ins are accepted and emergency slots are reserved daily for urgent cases. Call ${PHONE_NUMBER} to confirm availability.` },
  { q: "Do you provide same-day dental treatment?", a: "Absolutely. Many treatments — including single-sitting root canals, tooth extractions, fillings, scaling and emergency pain relief — are completed in one visit, so you don't need to come back multiple times." },
  { q: "How close are you to Saket, Hauz Khas and Green Park?", a: "We are located in Shivalik, Malviya Nagar — just 5–10 minutes' drive from Saket, Hauz Khas, Green Park, Panchsheel Park and Sheikh Sarai. The Malviya Nagar metro station is a short ride away." },
  { q: "Can I book an appointment on WhatsApp?", a: `Yes. Send us a WhatsApp message and our front-desk team will confirm your slot within minutes. You can also call ${PHONE_NUMBER} directly.` },
  { q: "Do you handle dental emergencies after hours?", a: "For genuine emergencies — severe pain, swelling, dental trauma — we make every effort to accommodate same-day or next-morning slots. Call us first and we'll guide you on next steps." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Globodent Dental Spa — Dental Clinic Near Me",
  url: "https://globodentdentalspa.com/dental-clinic-near-me-malviya-nagar",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, 3/37, Shivalik Rd, Shivalik Enclave, Block E",
    addressLocality: "Malviya Nagar, New Delhi",
    postalCode: "110017",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 15:00-20:00",
  telephone: "+91-98555-79244",
};

const DentalClinicNearMe = () => (
  <>
    <SEOHead
      title="Dental Clinic Near Me in Malviya Nagar | Book Appointment"
      description="Looking for a dental clinic near you in Malviya Nagar? Globodent Dental Spa offers same-day appointments, emergency care & easy access from Saket, Hauz Khas & Green Park."
      canonical="/dental-clinic-near-me-malviya-nagar"
      jsonLd={jsonLd}
    />

    <section className="relative pt-28 md:pt-32 pb-12 bg-gradient-to-br from-spa-blue-light via-background to-background">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
          <MapPin className="h-4 w-4" /> Open Today · {CLINIC_HOURS}
        </span>
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Dental Clinic Near Me in Malviya Nagar
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-6">
          Need a trusted dentist nearby? Globodent Dental Spa is minutes away — offering same-day appointments, emergency treatment and convenient parking right in the heart of Shivalik, Malviya Nagar.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="gap-2">
            <a href={PHONE_LINK}><Phone className="h-5 w-5" /> Call {PHONE_NUMBER}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> Book on WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>

    <TrustedProfiles />

    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-primary/30">
            <CardContent className="p-5 flex gap-3">
              <Zap className="h-8 w-8 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Same-Day Slots</h3>
                <p className="text-xs text-muted-foreground">Walk-ins welcome. Most treatments completed in one visit.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="p-5 flex gap-3">
              <AlertCircle className="h-8 w-8 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Emergency Care</h3>
                <p className="text-xs text-muted-foreground">Severe pain or swelling? Call us — we keep emergency slots open daily.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="p-5 flex gap-3">
              <CalendarCheck className="h-8 w-8 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Easy Booking</h3>
                <p className="text-xs text-muted-foreground">Confirm your slot in under 60 seconds via WhatsApp or phone.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section className="py-16 bg-spa-blue-light/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">Conveniently Located in the Heart of South Delhi</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            Whether you're searching for a "dentist near me" from Saket, Hauz Khas, Green Park or anywhere in South Delhi, Globodent Dental Spa is just a short drive away. Our Shivalik clinic is easy to find, has free parking and is minutes from the Malviya Nagar metro station.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-sm text-muted-foreground">{CLINIC_ADDRESS}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Hours</h3>
                <p className="text-sm text-muted-foreground">Open daily · {CLINIC_HOURS}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Navigation className="h-5 w-5 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Nearby Areas We Serve</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {nearbyAreas.map(a => (
                    <span key={a} className="text-xs bg-card border border-border px-2.5 py-1 rounded-full">{a}</span>
                  ))}
                </div>
              </div>
            </div>
            <Button asChild className="gap-2 mt-2">
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden border border-border shadow-md aspect-video">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Globodent Dental Spa Location"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">Quick Treatments Available Today</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Walk in or book ahead — these popular treatments can usually be completed in a single same-day visit.
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {quickServices.map(s => (
            <Link
              key={s.name}
              to={`/services/${s.slug}`}
              className="group p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all"
            >
              <Zap className="h-5 w-5 text-primary mb-2" />
              <p className="font-medium text-sm group-hover:text-primary">{s.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-spa-blue-light/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">Dental Emergency? We're Here.</h2>
          <p className="text-center text-muted-foreground mb-6">
            Sudden tooth pain, swelling, a knocked-out tooth or a broken filling can't wait. Globodent reserves daily emergency slots for nearby patients — call us, describe your symptoms, and our team will guide you on whether to come in immediately or take interim relief at home. Most dental emergencies are resolved on the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="gap-2">
              <a href={PHONE_LINK}><Phone className="h-5 w-5" /> Emergency Call</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> Quick WhatsApp</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">Common Questions From Nearby Patients</h2>
        </ScrollReveal>
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`q${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="text-center text-sm text-muted-foreground mt-8">
          New to us? Read our{" "}
          <Link to="/blog/is-root-canal-painful-in-malviya-nagar" className="text-primary underline">painless root canal guide</Link>{" "}
          or learn{" "}
          <Link to="/blog/single-sitting-root-canal-treatment-benefits" className="text-primary underline">why single-sitting RCT is better</Link>.
        </p>
      </div>
    </section>

    <section className="py-14 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Book Your Appointment in Under a Minute</h2>
        <p className="text-primary-foreground/90 mb-6">Skip the wait — confirm your slot now and walk in to a friendly, professional team ready to help.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <a href={PHONE_LINK}><Phone className="h-5 w-5" /> {PHONE_NUMBER}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp Now</a>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default DentalClinicNearMe;
