import { MapPin, Phone, Clock } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CLINIC_ADDRESS, PHONE_NUMBER, PHONE_LINK, CLINIC_HOURS, WHATSAPP_LINK } from "@/lib/constants";

const footerLinks = [
  { label: "Home", path: "/", id: "hero" },
  { label: "Services", path: "/services", id: "services" },
  { label: "Doctors", path: "/doctors", id: "doctors" },
  { label: "Gallery", path: "/gallery", id: "gallery" },
  { label: "Reviews", path: "/reviews", id: "testimonials" },
  { label: "Contact", path: "/contact", id: "contact" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNav = (link: typeof footerLinks[0]) => {
    if (isHome && document.getElementById(link.id)) {
      document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (link.path.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    navigate(link.path);
  };

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-heading text-primary-foreground mb-4">Globodent Dental Spa<sup className="text-[0.6em] align-super">®</sup></h3>
            <p className="text-sm leading-relaxed">Where Your Smile is Reborn. Premium dental care combining advanced technology with a spa-like experience in South Delhi.</p>
          </div>
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              {footerLinks.map((l) => (
                <button key={l.path} onClick={() => handleNav(l)} className="text-left hover:text-primary-foreground transition-colors">
                  {l.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex gap-2"><MapPin className="h-4 w-4 mt-1 shrink-0" /><span>{CLINIC_ADDRESS}</span></div>
              <div className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><a href={PHONE_LINK} className="hover:text-primary-foreground">{PHONE_NUMBER}</a></div>
              <div className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /><span>{CLINIC_HOURS}</span></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Book Now</h4>
            <p className="text-sm mb-4">Ready for your best smile? Book a consultation today.</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs">
          <p>© {new Date().getFullYear()} Globodent Dental Spa<sup className="text-[0.6em]">®</sup>. All rights reserved. | Best Dental Clinic in Malviya Nagar, New Delhi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
