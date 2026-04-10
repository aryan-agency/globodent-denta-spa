import { Link } from "react-router-dom";
import ClinicSlider from "@/components/ClinicSlider";
import { WHATSAPP_LINK } from "@/lib/constants";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";

const GalleryPage = () => (
  <>
    <SEOHead
      title="Clinic Gallery | Globodent Dental Spa® - Malviya Nagar"
      description="Take a virtual tour of Globodent Dental Spa® in Malviya Nagar, South Delhi. See our modern dental clinic with state-of-the-art equipment and spa-like atmosphere."
      canonical="/gallery"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Globodent Dental Spa Clinic Gallery",
        "description": "Photos of our state-of-the-art dental clinic in Malviya Nagar, New Delhi",
        "about": {
          "@type": "Dentist",
          "name": "Globodent Dental Spa"
        }
      }}
    />
    <div className="pt-20">
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Clinic</p>
            <h1 className="text-3xl md:text-5xl font-heading mb-6">Where Your Jaw is Reborn</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              Experience our state-of-the-art facility designed for your comfort. Modern equipment, pristine hygiene, and a luxury spa-like atmosphere.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <ClinicSlider />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading text-primary-foreground mb-4">Visit Us Today</h2>
          <p className="text-primary-foreground/80 mb-6">See our clinic in person and meet our team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Book a Visit
            </a>
            <Link to="/contact" className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default GalleryPage;
