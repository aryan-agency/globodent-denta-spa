import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-new.png";
import { WHATSAPP_LINK, PHONE_LINK } from "@/lib/constants";
import useScrollSpy from "@/hooks/useScrollSpy";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "Services", id: "services" },
  { label: "Doctors", id: "doctors" },
  { label: "Gallery", id: "gallery" },
  { label: "Reviews", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const sectionIds = navLinks.map((l) => l.id);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-1"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <img
            src={logo}
            alt="Globodent Dental Spa"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-10" : "h-12 md:h-14"}`}
            style={{ filter: 'drop-shadow(0 0 8px hsl(209 65% 48% / 0.3))' }}
          />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                activeId === link.id
                  ? "text-primary after:w-full"
                  : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PHONE_LINK}
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Book Consultation
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-card/95 backdrop-blur-md border-t border-border`}
      >
        <nav className="container mx-auto py-4 px-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`py-2 text-base font-medium transition-colors text-left ${
                activeId === link.id ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="flex gap-3 mt-2">
            <a href={PHONE_LINK} className="flex-1 text-center bg-secondary text-secondary-foreground py-2.5 rounded-lg font-medium">
              Call Now
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-primary text-primary-foreground py-2.5 rounded-lg font-medium">
              Book Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
