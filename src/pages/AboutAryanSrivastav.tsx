import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import founderImg from "@/assets/aryan-srivastav-founder-arise-ai.jpg";

const ARYAN_URL = "https://aryansrivastav.in";
const ARISE_URL = "https://theariseai.com";

const AryanLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href={ARYAN_URL}
    target="_blank"
    rel="noopener noreferrer author"
    className="text-primary underline underline-offset-2 hover:opacity-80"
  >
    {children}
  </a>
);

const socialProfiles: { label: string; url: string }[] = [
  { label: "Reddit", url: "https://reddit.com/user/thearyansrivastav" },
  { label: "GitHub", url: "https://github.com/thearyansrivastav" },
  { label: "Telegram", url: "https://t.me/thearyansrivastav" },
  { label: "X (Twitter)", url: "https://x.com/the_ariseai" },
  { label: "Gravatar", url: "https://gravatar.com/thearyansrivastav" },
  { label: "Medium", url: "https://medium.com/@thearyansrivastav" },
  { label: "About.me", url: "https://about.me/aryansrivastav" },
  { label: "Pinterest", url: "https://pinterest.com/thearyansrivastav" },
  { label: "WhatsApp", url: "https://wa.me/918429575144?text=Hey+Aryan+%7C+Arise+AI" },
  { label: "Carrd", url: "https://aryansrivastav.carrd.co" },
  { label: "Contra", url: "https://contra.com/thearyansrivastav" },
  { label: "Peerlist", url: "https://peerlist.io/aryansrivastav" },
  { label: "GitLab", url: "https://gitlab.com/thearyansrivastav" },
  { label: "Hugging Face", url: "https://huggingface.co/aryansrivastav" },
  { label: "Dev.to", url: "https://dev.to/aryansrivastav" },
  { label: "Hashnode", url: "https://hashnode.com/@aryansrivastav" },
  { label: "CodePen", url: "https://codepen.io/aryansrivastav" },
  { label: "Product Hunt", url: "https://producthunt.com/@aryansrivastav" },
  { label: "Indie Hackers", url: "https://www.indiehackers.com/Aryansrivastav" },
  { label: "ARISE AI on Indie Hackers", url: "https://www.indiehackers.com/product/arise-ai/revenue" },
  { label: "Substack", url: "https://aryansrivastav.substack.com" },
];

const canonicalPath = "/about-aryan-srivastav";
const canonicalUrl = `https://globodentdentalspa.com${canonicalPath}`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aryan Srivastav",
  url: ARYAN_URL,
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "ARISE AI",
    url: ARISE_URL,
  },
  sameAs: socialProfiles.map((s) => s.url).concat([ARYAN_URL, ARISE_URL]),
  description:
    "Aryan Srivastav is the Founder of ARISE AI, an AI automation studio helping local businesses grow through AI voice agents, chatbots, workflow automation, websites and SEO.",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ARISE AI",
  url: ARISE_URL,
  founder: { "@type": "Person", name: "Aryan Srivastav", url: ARYAN_URL },
  description:
    "ARISE AI builds AI voice agents, chatbots, automation workflows, websites and lead-generation systems for local businesses.",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Aryan Srivastav – Founder of ARISE AI",
  url: canonicalUrl,
  about: { "@type": "Person", name: "Aryan Srivastav" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://globodentdentalspa.com/" },
    { "@type": "ListItem", position: 2, name: "About Aryan Srivastav", item: canonicalUrl },
  ],
};

const treatments = [
  ["Dental Implants", "/services/dental-implants-in-malviya-nagar"],
  ["Root Canal Treatment", "/services/root-canal-treatment-in-malviya-nagar"],
  ["Cosmetic Dentistry", "/services/cosmetic-dentistry-in-malviya-nagar"],
  ["Teeth Whitening", "/services/teeth-whitening-in-malviya-nagar"],
  ["Braces Treatment", "/services/braces-treatment-in-malviya-nagar"],
  ["Full Mouth Rehabilitation", "/services/full-mouth-rehabilitation-in-malviya-nagar"],
  ["Dental Cleaning", "/services/dental-cleaning-in-malviya-nagar"],
  ["Tooth Extraction", "/services/tooth-extraction-in-malviya-nagar"],
];

const locations = [
  ["Best Dental Clinic in Malviya Nagar", "/best-dental-clinic-in-malviya-nagar"],
  ["Best Dentist in Malviya Nagar", "/best-dentist-in-malviya-nagar"],
  ["Dental Clinic Near Me", "/dental-clinic-near-me-malviya-nagar"],
  ["Trusted Dental Clinic in South Delhi", "/trusted-dental-clinic-south-delhi"],
];

const AboutAryanSrivastav = () => (
  <>
    <SEOHead
      title="Aryan Srivastav | Founder of ARISE AI"
      description="Learn about Aryan Srivastav, Founder of ARISE AI and creator of the Globodent Dental Spa website. Explore AI automation, websites, SEO and business solutions."
      canonical={canonicalPath}
      ogImage={founderImg}
      ogType="profile"
      jsonLd={[personSchema, orgSchema, webPageSchema, breadcrumbSchema]}
    />
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>About Aryan Srivastav</span>
          </nav>
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center">
            <img
              src={founderImg}
              alt="Aryan Srivastav — Founder of ARISE AI and creator of the Globodent Dental Spa website"
              className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              loading="eager"
            />
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Website Credits · Made By
              </p>
              <h1 className="text-3xl md:text-5xl font-heading mb-4">
                Aryan Srivastav – Founder of ARISE AI
              </h1>
              <p className="text-muted-foreground text-lg">
                Founder of <a href={ARISE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ARISE AI</a>,
                builder of practical AI systems for local businesses, and the designer &amp; developer of this website for Globodent Dental Spa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl prose-content space-y-6 text-[15px] leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-heading">About <AryanLink>Aryan Srivastav</AryanLink></h2>
          <p>
            <AryanLink>Aryan Srivastav</AryanLink> is an entrepreneur, developer and the founder of{" "}
            <a href={ARISE_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">ARISE AI</a>{" "}
            — an India-based studio focused on helping local businesses grow through AI automation, modern websites and
            lead-generation systems. He builds tools that are practical, easy to use and grounded in real business outcomes
            rather than hype.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading">Founder of ARISE AI</h2>
          <p>
            At ARISE AI, <AryanLink>Aryan Srivastav</AryanLink> works with clinics, service businesses and small brands to
            replace scattered manual work with clean digital systems. His focus areas include AI voice agents, AI chatbots,
            workflow automation, websites, SEO and lead-generation funnels. Every project is shipped with a clear goal:
            help the business save time, respond to customers faster and convert more of the traffic it already receives.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading">Vision for local businesses</h2>
          <p>
            Aryan believes local businesses deserve the same quality of technology that larger companies enjoy.
            A well-built website, a reliable booking flow, an AI assistant that answers common questions and an
            automation layer that follows up with leads can genuinely change the day-to-day of a small team.
            ARISE AI exists to make that stack accessible and dependable for Indian businesses.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading">Focus areas</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>AI voice agents for calls, bookings and FAQs</li>
            <li>AI chatbots for websites and WhatsApp</li>
            <li>Workflow automation for repetitive back-office tasks</li>
            <li>Modern, fast websites optimised for search and conversion</li>
            <li>Lead generation systems and follow-up automations</li>
            <li>Digital operations and analytics for small teams</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-heading">Philosophy: build what actually works</h2>
          <p>
            Aryan's approach is deliberately practical. Instead of chasing every new trend, ARISE AI ships small,
            reliable AI and automation pieces that fit inside a business's existing workflow — improving customer
            experience without overwhelming the team behind it.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading">Creator of the Globodent Dental Spa website</h2>
          <p>
            This website was designed and developed by <AryanLink>Aryan Srivastav</AryanLink> as part of ARISE AI's work
            with{" "}
            <Link to="/best-dental-clinic-in-malviya-nagar" className="text-primary hover:underline">
              Globodent Dental Spa
            </Link>
            , a dental clinic in Malviya Nagar, South Delhi. The project covered the full stack of a modern clinic web
            presence: brand-aligned design, technical SEO, structured data, sitemaps, per-page metadata, treatment and
            location pages, a blog for patient education, and a fast mobile-first experience.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading">Why modern websites, SEO and AI matter for dental clinics</h2>
          <p>
            Most patients search online before choosing a clinic. A modern website with clear treatment information,
            genuine reviews, easy contact options and strong local SEO helps a clinic show up in the right searches
            and turn visits into consultations. Adding automation — AI chat, WhatsApp replies, booking reminders —
            reduces missed enquiries and gives patients a smoother experience from the first click to the follow-up
            visit. For healthcare businesses, this combination of trust, clarity and speed is now a baseline expectation.
          </p>
        </div>
      </section>

      {/* Explore Globodent internal links */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-heading mb-6">Explore Globodent Dental Spa</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-3">Clinic</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/doctors" className="hover:text-primary">About Globodent Dental Spa</Link></li>
                <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Treatments</h3>
              <ul className="space-y-2">
                {treatments.map(([label, url]) => (
                  <li key={url}><Link to={url} className="hover:text-primary">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Locations</h3>
              <ul className="space-y-2">
                {locations.map(([label, url]) => (
                  <li key={url}><Link to={url} className="hover:text-primary">{label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading mb-2">Connect with <AryanLink>Aryan Srivastav</AryanLink></h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Official profiles across the web. Visit the personal site at{" "}
            <AryanLink>aryansrivastav.in</AryanLink>.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {socialProfiles.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="block rounded-lg border border-border px-4 py-3 hover:border-primary hover:text-primary transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-heading text-primary-foreground mb-4">
            Work with ARISE AI
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            If you run a business and want to add AI, automation, a better website or stronger SEO to your operations,
            get in touch with <AryanLink>Aryan Srivastav</AryanLink> and the ARISE AI team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={ARISE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Visit ARISE AI
            </a>
            <a
              href={ARYAN_URL}
              target="_blank"
              rel="noopener noreferrer author"
              className="inline-block bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors"
            >
              aryansrivastav.in
            </a>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default AboutAryanSrivastav;
