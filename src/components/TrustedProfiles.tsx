import { Instagram, Facebook, Linkedin, MapPin, Phone, Globe, Building2, BadgeCheck } from "lucide-react";

interface Profile {
  name: string;
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
  brandClass: string; // hover color class via inline style or tailwind
}

const profiles: Profile[] = [
  { name: "Instagram", url: "https://www.instagram.com/globodent_dental_spa", Icon: Instagram, brandClass: "hover:text-[#E1306C]" },
  { name: "Facebook", url: "https://www.facebook.com/share/1KaWyQDZVC/", Icon: Facebook, brandClass: "hover:text-[#1877F2]" },
  { name: "Google Business", url: "https://share.google/fpfBt0HLywJa6iga6", Icon: MapPin, brandClass: "hover:text-[#4285F4]" },
  { name: "Justdial", url: "https://www.justdial.com/Delhi/Globodent-Dentalspa-Near-Dog-And-Cat-Clinic-Malviya-Nagar/011PXX11-XX11-210721182834-H1M5_BZDET", Icon: Phone, brandClass: "hover:text-[#FFB800]" },
  { name: "Doctors in City", url: "https://www.doctorsinciti.com/best-dentist-in-malviya-nagar.html", Icon: BadgeCheck, brandClass: "hover:text-primary" },
  { name: "Delhi IBDF", url: "https://delhi.idbf.in/4089128/globodent-dental-spa-clinic", Icon: Building2, brandClass: "hover:text-primary" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/rohit-bansal-9a620619b", Icon: Linkedin, brandClass: "hover:text-[#0A66C2]" },
  { name: "Old Website", url: "https://globodent.com/", Icon: Globe, brandClass: "hover:text-primary" },
];

const TrustedProfiles = () => (
  <section aria-labelledby="trusted-profiles-heading" className="py-10 md:py-12 bg-gradient-to-b from-spa-blue-light/40 to-background border-y border-border">
    <div className="container mx-auto px-4">
      <div className="text-center mb-6">
        <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Verified Across Platforms</p>
        <h2 id="trusted-profiles-heading" className="text-xl md:text-2xl font-heading">
          Connect With Us &amp; Verify Our Presence
        </h2>
      </div>
      <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-4xl mx-auto">
        {profiles.map(({ name, url, Icon, brandClass }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Visit Globodent Dental Spa on ${name}`}
              title={name}
              className={`group relative flex flex-col items-center justify-center gap-1.5 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.4)] ${brandClass}`}
            >
              <Icon className="h-7 w-7 md:h-8 md:w-8 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-[10px] md:text-xs font-medium text-foreground/70 group-hover:text-foreground text-center leading-tight px-1">
                {name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustedProfiles;
