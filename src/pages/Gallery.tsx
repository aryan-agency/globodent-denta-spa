import ClinicSlider from "@/components/ClinicSlider";
import { WHATSAPP_LINK } from "@/lib/constants";

const Gallery = () => (
  <div className="pt-20">
    <section className="section-padding bg-card">
      <div className="container mx-auto text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Clinic</p>
        <h1 className="text-3xl md:text-5xl font-heading mb-6">Where Your Jaw is Reborn</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Experience our state-of-the-art facility designed for your comfort. Modern equipment, pristine hygiene, and a luxury spa-like atmosphere.
        </p>
        <ClinicSlider />
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading text-primary-foreground mb-4">Visit Us Today</h2>
        <p className="text-primary-foreground/80 mb-6">See our clinic in person and meet our team.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Book a Visit
        </a>
      </div>
    </section>
  </div>
);

export default Gallery;
