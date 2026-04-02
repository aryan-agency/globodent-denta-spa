import { Shield, Zap, Users, IndianRupee, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { WHATSAPP_LINK, PHONE_LINK } from "@/lib/constants";

const whyChoose = [
  { icon: Shield, title: "Painless Treatments", desc: "Advanced anesthesia techniques for a comfortable, pain-free experience." },
  { icon: Zap, title: "Advanced Technology", desc: "State-of-the-art equipment including digital X-rays and laser dentistry." },
  { icon: Users, title: "Experienced Specialists", desc: "Board-certified dentists with decades of combined experience." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium dental care at prices that won't break the bank." },
  { icon: Heart, title: "Trusted in South Delhi", desc: "Hundreds of happy patients across Malviya Nagar and beyond." },
];

const services = [
  "Dental Implants", "Invisible Braces", "Full Mouth Rehab", "Single Sitting RCT",
  "Cosmetic Dentistry", "Teeth Whitening", "Crown & Bridges", "Smile Designing",
];

const testimonials = [
  { name: "Priya S.", text: "Best dental clinic near me in Malviya Nagar! The pain-free root canal was truly painless. Highly recommended.", rating: 5 },
  { name: "Rahul M.", text: "Affordable dentist in South Delhi with world-class facilities. Dr. Bansal made my smile transformation amazing.", rating: 5 },
  { name: "Anita K.", text: "Pain-free root canal in Delhi — I was so nervous but the team was incredibly gentle. Will never go anywhere else!", rating: 5 },
  { name: "Vikram T.", text: "Got dental implants here. The best implant specialist in Malviya Nagar. Professional, clean, and caring.", rating: 5 },
];

const Home = () => {
  const [reviewIdx, setReviewIdx] = useState(0);
  const nextReview = useCallback(() => setReviewIdx((i) => (i + 1) % testimonials.length), []);
  const prevReview = useCallback(() => setReviewIdx((i) => (i - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const id = setInterval(nextReview, 4000);
    return () => clearInterval(id);
  }, [nextReview]);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Modern dental clinic interior" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">Globodent Dental Spa</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-tight mb-6 text-primary-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Best Dental Clinic in Malviya Nagar for Pain-Free Advanced Treatments
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Affordable, Advanced & Trusted Dental Care in South Delhi
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base">
                Book Consultation
              </a>
              <a href={PHONE_LINK} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors text-base">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-heading mb-12">Comprehensive Dental Care</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((s) => (
              <Link
                key={s}
                to="/services"
                className="bg-background p-6 rounded-xl hover-lift text-center border border-border"
              >
                <span className="text-sm md:text-base font-medium text-foreground">{s}</span>
              </Link>
            ))}
          </div>
          <Link to="/services" className="inline-block mt-8 text-primary font-semibold hover:underline">
            View All Services →
          </Link>
        </div>
      </section>

      {/* About Doctors Preview */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Specialists</p>
          <h2 className="text-3xl md:text-4xl font-heading mb-12">Meet Your Doctors</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Dr. Aanchal Bansal", role: "Prosthodontist & Implantologist", desc: "Specialist in Full Mouth Rehabilitation & Smile Restoration with years of hospital experience." },
              { name: "Dr. Rohit Bansal", role: "Endodontist (Root Canal Specialist)", desc: "Expert in pain diagnosis, cosmetic & restorative dentistry with academic excellence." },
            ].map((doc) => (
              <div key={doc.name} className="bg-card p-8 rounded-2xl border border-border hover-lift text-left">
                <h3 className="text-xl font-heading mb-1">{doc.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{doc.role}</p>
                <p className="text-muted-foreground text-sm">{doc.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/about" className="inline-block mt-8 text-primary font-semibold hover:underline">
            Read Full Profiles →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-heading mb-12">The Globodent Difference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="flex flex-col items-center p-6 rounded-xl bg-background border border-border hover-lift">
                <div className="h-12 w-12 bg-spa-blue-light rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Patient Reviews</p>
          <h2 className="text-3xl md:text-4xl font-heading mb-12">What Our Patients Say</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-card p-8 md:p-10 rounded-2xl border border-border min-h-[200px] flex flex-col items-center justify-center">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[reviewIdx].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-4 text-base">"{testimonials[reviewIdx].text}"</p>
              <p className="font-semibold text-sm">{testimonials[reviewIdx].name}</p>
            </div>
            <button onClick={prevReview} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-card h-10 w-10 rounded-full flex items-center justify-center shadow-lg border border-border" aria-label="Previous review">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={nextReview} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-card h-10 w-10 rounded-full flex items-center justify-center shadow-lg border border-border" aria-label="Next review">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">Ready for Your Best Smile?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Book your consultation today and experience pain-free, affordable dental care at the best clinic in Malviya Nagar.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base">
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
