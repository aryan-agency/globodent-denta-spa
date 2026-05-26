import { Link } from "react-router-dom";

const PreFooterCTA = () => (
  <section
    aria-label="Best dental clinic in Malviya Nagar"
    className="bg-spa-blue-light/40 border-t border-border"
  >
    <div className="container mx-auto px-4 py-8 text-center">
      <p className="text-sm md:text-base text-foreground/80 max-w-3xl mx-auto leading-relaxed">
        Looking for the{" "}
        <Link
          to="/best-dental-clinic-in-malviya-nagar"
          className="text-primary font-semibold hover:underline"
        >
          best dental clinic in Malviya Nagar
        </Link>
        ? Globodent Dental Spa offers painless implants, root canal, and
        cosmetic dentistry in South Delhi.
      </p>
    </div>
  </section>
);

export default PreFooterCTA;
