import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { CLINIC_ADDRESS, PHONE_NUMBER, PHONE_LINK, CLINIC_HOURS, WHATSAPP_LINK, GOOGLE_MAPS_LINK } from "@/lib/constants";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import TrustedProfiles from "@/components/TrustedProfiles";

const ContactPage = () => (
  <>
    <SEOHead
      title="Contact Us | Globodent Dental Spa® - Malviya Nagar, New Delhi"
      description="Contact Globodent Dental Spa® in Malviya Nagar, South Delhi. Call +91 98555 79244, WhatsApp us, or visit our clinic. Open 3 PM – 8 PM daily."
      canonical="/contact"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Globodent Dental Spa",
        "telephone": "+919855579244",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ground Floor, 3/37, Shivalik Rd, Shivalik Enclave, Block E, Malviya Nagar",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110017",
          "addressCountry": "IN"
        },
        "openingHours": "Mo-Su 15:00-20:00"
      }}
    />
    <div className="pt-20">
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="text-3xl md:text-5xl font-heading mb-6">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for appointments, queries, or directions to the best dental clinic in Malviya Nagar.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-xl font-heading mb-6">Clinic Information</h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-spa-blue-light rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Address</h3>
                      <p className="text-muted-foreground text-sm">{CLINIC_ADDRESS}</p>
                      <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline">
                        Get Directions →
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-spa-blue-light rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Phone</h3>
                      <a href={PHONE_LINK} className="text-muted-foreground text-sm hover:text-primary">{PHONE_NUMBER}</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-spa-blue-light rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Clinic Hours</h3>
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
                  referrerPolicy="no-referrer-when-downgrade" title="Globodent Dental Spa Location - Malviya Nagar, New Delhi"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading text-primary-foreground mb-4">Explore Our Services</h2>
          <p className="text-primary-foreground/80 mb-6">Discover comprehensive dental care at Globodent Dental Spa<sup className="text-[0.6em]">®</sup>.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              View Services
            </Link>
            <Link to="/doctors" className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors">
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default ContactPage;
