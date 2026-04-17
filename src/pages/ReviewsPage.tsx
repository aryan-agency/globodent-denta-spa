import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/lib/constants";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import TrustedProfiles from "@/components/TrustedProfiles";

const testimonials = [
  { name: "Priya S.", text: "Best dental clinic near me in Malviya Nagar! The pain-free root canal was truly painless. Highly recommended.", rating: 5 },
  { name: "Rahul M.", text: "Affordable dentist in South Delhi with world-class facilities. Dr. Bansal made my smile transformation amazing.", rating: 5 },
  { name: "Anita K.", text: "Pain-free root canal in Delhi — I was so nervous but the team was incredibly gentle. Will never go anywhere else!", rating: 5 },
  { name: "Vikram T.", text: "Got dental implants here. The best implant specialist in Malviya Nagar. Professional, clean, and caring.", rating: 5 },
];

const ReviewsPage = () => {
  const [reviewIdx, setReviewIdx] = useState(0);
  const nextReview = useCallback(() => setReviewIdx((i) => (i + 1) % testimonials.length), []);
  const prevReview = useCallback(() => setReviewIdx((i) => (i - 1 + testimonials.length) % testimonials.length), []);

  return (
    <>
      <SEOHead
        title="Patient Reviews | Globodent Dental Spa® - Malviya Nagar"
        description="Read real patient reviews of Globodent Dental Spa® in Malviya Nagar, South Delhi. 5-star rated for painless root canals, dental implants, and cosmetic dentistry."
        canonical="/reviews"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Globodent Dental Spa",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": testimonials.length.toString(),
            "bestRating": "5"
          },
          "review": testimonials.map(t => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": t.name },
            "reviewRating": { "@type": "Rating", "ratingValue": t.rating.toString() },
            "reviewBody": t.text
          }))
        }}
      />
      <div className="pt-20">
        <section className="section-padding bg-card">
          <div className="container mx-auto text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Patient Reviews</p>
            <h1 className="text-3xl md:text-5xl font-heading mb-6">What Our Patients Say</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our patients at Globodent Dental Spa<sup className="text-[0.6em]">®</sup> in Malviya Nagar, South Delhi.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            {/* Featured carousel */}
            <ScrollReveal>
              <div className="relative max-w-2xl mx-auto mb-16">
                <div className="bg-card p-8 md:p-10 rounded-2xl border border-border min-h-[200px] flex flex-col items-center justify-center">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[reviewIdx].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-4 text-base">"{testimonials[reviewIdx].text}"</p>
                  <p className="font-semibold text-sm">{testimonials[reviewIdx].name}</p>
                </div>
                <button onClick={prevReview} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-card h-10 w-10 rounded-full flex items-center justify-center shadow-lg border border-border hover:scale-110 transition-transform" aria-label="Previous review">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={nextReview} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-card h-10 w-10 rounded-full flex items-center justify-center shadow-lg border border-border hover:scale-110 transition-transform" aria-label="Next review">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </ScrollReveal>

            {/* All reviews grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="bg-card p-6 rounded-2xl border border-border">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-foreground/80 italic text-sm mb-3">"{t.text}"</p>
                    <p className="font-semibold text-sm">{t.name}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-heading text-primary-foreground mb-4">Join Our Happy Patients</h2>
            <p className="text-primary-foreground/80 mb-6">Experience the same world-class dental care.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Book Consultation
              </a>
              <Link to="/services" className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReviewsPage;
