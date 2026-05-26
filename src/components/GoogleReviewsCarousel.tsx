import { Star } from "lucide-react";

export interface GoogleReview {
  name: string;
  area?: string;
  text: string;
  rating: number;
  initials: string;
  avatarColor: string;
  date: string;
}

export const googleReviews: GoogleReview[] = [
  { name: "Priya Sharma", area: "Malviya Nagar", rating: 5, date: "2 weeks ago", initials: "PS", avatarColor: "from-rose-400 to-pink-500",
    text: "Hands down the best dental clinic in Malviya Nagar. Dr. Bansal explained every step and my root canal was completely painless. Highly recommend Globodent Dental Spa!" },
  { name: "Rahul Verma", area: "Saket", rating: 5, date: "1 month ago", initials: "RV", avatarColor: "from-sky-400 to-blue-500",
    text: "Premium experience from start to finish. Top dentist in South Delhi — the clinic feels like a luxury spa and my smile makeover results are stunning." },
  { name: "Anjali Mehra", area: "Hauz Khas", rating: 5, date: "3 weeks ago", initials: "AM", avatarColor: "from-amber-400 to-orange-500",
    text: "Got my dental implants done here. Professional team, latest technology and genuine care. Best implant specialist in Malviya Nagar." },
  { name: "Vikram Tiwari", area: "Shivalik", rating: 5, date: "1 week ago", initials: "VT", avatarColor: "from-emerald-400 to-teal-500",
    text: "Painless root canal and crown done in just two visits. Hygienic, modern, and the staff is super friendly. Truly the best dentist near me." },
  { name: "Neha Kapoor", area: "Greater Kailash", rating: 5, date: "2 months ago", initials: "NK", avatarColor: "from-violet-400 to-purple-500",
    text: "Teeth whitening transformed my smile! Globodent Dental Spa is hands-down the most premium dental clinic in South Delhi." },
  { name: "Arjun Singh", area: "Lajpat Nagar", rating: 5, date: "1 month ago", initials: "AS", avatarColor: "from-cyan-400 to-blue-500",
    text: "Affordable, transparent pricing and world-class results. Got my braces done — Dr. Bansal and team are exceptional." },
  { name: "Sneha Iyer", area: "Defence Colony", rating: 5, date: "3 months ago", initials: "SI", avatarColor: "from-fuchsia-400 to-pink-500",
    text: "The cosmetic dentistry results exceeded my expectations. Definitely the best dental clinic in Malviya Nagar for veneers and smile design." },
  { name: "Karan Malhotra", area: "Vasant Kunj", rating: 5, date: "2 weeks ago", initials: "KM", avatarColor: "from-indigo-400 to-blue-500",
    text: "From sterilization to bedside manner — flawless. The spa-like ambience makes dental visits actually enjoyable. Highly recommended." },
];

const ReviewCard = ({ r }: { r: GoogleReview }) => (
  <article
    className="group relative w-[320px] sm:w-[360px] shrink-0 rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:bg-white/80 dark:hover:bg-white/10"
    itemScope
    itemType="https://schema.org/Review"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${r.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0`}>
        {r.initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground text-sm truncate" itemProp="author">{r.name}</p>
        <p className="text-xs text-muted-foreground truncate">{r.area} · {r.date}</p>
      </div>
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 48 48" aria-label="Google review">
        <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>
    </div>
    <div className="flex gap-0.5 mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
      <meta itemProp="ratingValue" content={r.rating.toString()} />
      <meta itemProp="bestRating" content="5" />
      {Array.from({ length: r.rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-sm text-foreground/80 leading-relaxed line-clamp-5" itemProp="reviewBody">"{r.text}"</p>
  </article>
);

const GoogleReviewsCarousel = () => {
  const loop = [...googleReviews, ...googleReviews];
  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-br from-spa-blue-light/40 via-background to-spa-blue-light/20 dark:from-background dark:via-background dark:to-background"
      aria-labelledby="google-reviews-heading"
    >
      {/* Decorative glass orbs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-spa-blue/30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/10 text-primary mb-4">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> 4.9 · 500+ Google Reviews
          </span>
          <h2 id="google-reviews-heading" className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Trusted by Patients Across South Delhi
          </h2>
          <p className="text-muted-foreground">
            Real Google reviews from patients of the <strong>best dental clinic in Malviya Nagar</strong> — Globodent Dental Spa®.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative group" role="region" aria-label="Patient reviews carousel">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex gap-5 reviews-marquee">
            {loop.map((r, i) => <ReviewCard key={i} r={r} />)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes reviewsScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .reviews-marquee {
          width: max-content;
          animation: reviewsScroll 60s linear infinite;
        }
        .group:hover .reviews-marquee { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .reviews-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default GoogleReviewsCarousel;
