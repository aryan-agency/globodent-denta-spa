import { Link } from "react-router-dom";
import { Phone, MessageCircle, Award, Sparkles, ShieldCheck, HeartPulse, Star, CheckCircle2, Stethoscope } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import TrustedProfiles from "@/components/TrustedProfiles";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";

const services = [
  { name: "Root Canal Treatment", slug: "root-canal-treatment-in-malviya-nagar" },
  { name: "Dental Implants", slug: "dental-implants-in-malviya-nagar" },
  { name: "Teeth Whitening", slug: "teeth-whitening-in-malviya-nagar" },
  { name: "Braces Treatment", slug: "braces-treatment-in-malviya-nagar" },
  { name: "Cosmetic Dentistry", slug: "cosmetic-dentistry-in-malviya-nagar" },
  { name: "Full Mouth Rehabilitation", slug: "full-mouth-rehabilitation-in-malviya-nagar" },
];

const reasons = [
  { Icon: Award, title: "15+ Years of Excellence", text: "A legacy of trusted dentistry serving thousands of happy patients across South Delhi." },
  { Icon: Stethoscope, title: "Specialist-Led Care", text: "Endodontists, implantologists and orthodontists under one premium roof." },
  { Icon: Sparkles, title: "Spa-Like Experience", text: "Relax in a calming, luxurious environment designed to ease dental anxiety." },
  { Icon: ShieldCheck, title: "Sterilization & Safety", text: "Hospital-grade sterilization protocols and single-use disposables for every patient." },
  { Icon: HeartPulse, title: "Painless Treatments", text: "Advanced anaesthesia and gentle techniques ensure a comfortable visit every time." },
  { Icon: CheckCircle2, title: "Transparent Pricing", text: "Honest, upfront treatment plans with no hidden costs and flexible payment options." },
];

const testimonials = [
  { name: "Priya Sharma", area: "Malviya Nagar", text: "Hands down the best dental clinic in Malviya Nagar. Dr. Bansal explained every step and my root canal was completely painless." },
  { name: "Rahul Verma", area: "Saket", text: "Premium experience from start to finish. The clinic feels like a luxury spa and the results of my smile makeover are stunning." },
  { name: "Anjali Mehra", area: "Hauz Khas", text: "Got my dental implants done here. Professional team, latest technology and genuine care. Highly recommend Globodent." },
];

const faqs = [
  { q: "What makes Globodent the best dental clinic in Malviya Nagar?", a: "Globodent Dental Spa combines specialist-led treatment, advanced technology, painless techniques and a spa-like ambience. With 15+ years of experience and thousands of 5-star reviews, we are consistently rated among the top dental clinics in Malviya Nagar and South Delhi." },
  { q: "Which dental treatments are offered at your clinic?", a: "We offer the full spectrum of dental care: root canals, dental implants, braces & aligners, teeth whitening, cosmetic veneers, full mouth rehabilitation, paediatric dentistry and more — all under one roof." },
  { q: "Are the treatments really painless?", a: "Yes. We use modern computer-controlled anaesthesia, rotary endodontics and laser-assisted procedures so most patients report little to no discomfort during and after treatment." },
  { q: "Do you accept insurance and offer EMI?", a: "We accept most major dental insurance providers and offer 0% EMI options on higher-value treatments such as implants, smile makeovers and orthodontics." },
  { q: "How can I book a consultation?", a: `You can call us at ${PHONE_NUMBER}, message us on WhatsApp or visit our clinic in Shivalik, Malviya Nagar. Walk-ins are welcome but appointments are preferred.` },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Globodent Dental Spa — Best Dental Clinic in Malviya Nagar",
  url: "https://globodentdentalspa.com/best-dental-clinic-in-malviya-nagar",
  areaServed: "Malviya Nagar, South Delhi",
  priceRange: "₹₹",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
};

const BestDentalClinic = () => (
  <>
    <SEOHead
      title="Best Dental Clinic in Malviya Nagar | Globodent Dental Spa"
      description="Globodent Dental Spa is the best dental clinic in Malviya Nagar, South Delhi. Specialist dentists, painless treatments, advanced technology & premium spa experience."
      canonical="/best-dental-clinic-in-malviya-nagar"
      jsonLd={jsonLd}
    />

    <section className="relative pt-28 md:pt-32 pb-12 bg-gradient-to-br from-spa-blue-light via-background to-background">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
          <Award className="h-4 w-4" /> Award-Winning Dental Care
        </span>
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Best Dental Clinic in Malviya Nagar
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-6">
          Globodent Dental Spa® is South Delhi's most trusted destination for premium, painless and specialist-led dentistry. Experience world-class treatment in a luxurious spa setting.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="gap-2">
            <a href={PHONE_LINK}><Phone className="h-5 w-5" /> Call Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp Us</a>
          </Button>
        </div>
      </div>
    </section>

    <TrustedProfiles />

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">A Legacy of Trust in South Delhi Dentistry</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            For over a decade, Globodent Dental Spa has redefined what a dental visit feels like in Malviya Nagar. We blend clinical excellence with hospitality — pairing internationally trained specialists, German and American dental technology, and a serene spa environment to deliver outcomes that look natural and last a lifetime. Whether you walk in for a routine cleaning or a complex full-mouth rehabilitation, you are treated by doctors who genuinely care, in a clinic that genuinely respects your time and comfort.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 bg-spa-blue-light/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Why We Are Rated the Best</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map(({ Icon, title, text }) => (
            <Card key={title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">Comprehensive Dental Services Under One Roof</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            From preventive check-ups to advanced cosmetic and surgical procedures — explore our most-requested treatments in Malviya Nagar.
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map(s => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all"
            >
              <span className="font-medium text-foreground group-hover:text-primary">{s.name}</span>
              <CheckCircle2 className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline"><Link to="/services">View All Services</Link></Button>
        </div>
      </div>
    </section>

    <section className="py-16 bg-spa-blue-light/30">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Meet Our Lead Specialist</h2>
          <p className="text-muted-foreground mb-6">
            <strong className="text-foreground">Dr. Rohit Bansal</strong> — Founder of Globodent Dental Spa, an internationally trained implantologist and cosmetic dentist with 15+ years of clinical excellence. Known across Malviya Nagar for combining surgical precision with an artist's eye for aesthetics, Dr. Bansal leads a team of dedicated endodontists, orthodontists and prosthodontists.
          </p>
          <Button asChild><Link to="/doctors">View All Doctors</Link></Button>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">What Our Patients Say</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map(t => (
            <Card key={t.name}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">"{t.text}"</p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.area}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline"><Link to="/reviews">Read More Reviews</Link></Button>
        </div>
      </div>
    </section>

    <section className="py-16 bg-spa-blue-light/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-3">The Globodent Clinic Experience</h2>
          <p className="text-center text-muted-foreground mb-8">
            Walk into a modern, light-filled clinic designed to feel less like a dental office and more like a luxury wellness spa. From aromatherapy in the waiting lounge to noise-cancelling headphones during treatment, every detail is engineered for your comfort. Our operatories feature digital X-rays with 90% less radiation, intra-oral cameras, CBCT imaging, and laser-assisted dentistry — the same technology you'd find in the world's leading dental hospitals.
          </p>
          <div className="text-center">
            <Button asChild><Link to="/gallery">View Clinic Gallery</Link></Button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">Frequently Asked Questions</h2>
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
          Want to learn more? Read our guides on{" "}
          <Link to="/blog/best-dentist-in-malviya-nagar-guide" className="text-primary underline">choosing the best dentist</Link> and{" "}
          <Link to="/blog/dental-implant-cost-in-delhi-2025" className="text-primary underline">dental implant costs in Delhi</Link>.
        </p>
      </div>
    </section>

    <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">Experience the Best Dental Care in Malviya Nagar</h2>
        <p className="text-primary-foreground/90 mb-6">Book your consultation today and discover why thousands trust Globodent Dental Spa.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <a href={PHONE_LINK}><Phone className="h-5 w-5" /> {PHONE_NUMBER}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default BestDentalClinic;
