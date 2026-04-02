import { WHATSAPP_LINK } from "@/lib/constants";

const doctors = [
  {
    name: "Dr. Aanchal Bansal",
    title: "B.D.S, M.D.S",
    role: "Prosthodontist & Implantologist",
    specialties: ["Full Mouth Rehabilitation", "Smile Restoration", "Dental Implants", "Certified Orthodontist"],
    education: "Dr. Harvansh Singh Judge Institute (Punjab University)",
    experience: [
      "Safdarjung Hospital, New Delhi",
      "Lady Hardinge Medical College, New Delhi",
    ],
    focus: "Advanced dental rehabilitation using cutting-edge modern technology for complete smile transformations.",
  },
  {
    name: "Dr. Rohit Bansal",
    title: "B.D.S, M.D.S",
    role: "Endodontist (Root Canal Specialist)",
    specialties: ["Pain Diagnosis & RCT", "Cosmetic Dentistry", "Restorative Dentistry"],
    education: "Manipal University & PDM Dental College",
    experience: [
      "Former Assistant Professor at ITS Dental College",
      "National dental conferences (IACDE)",
    ],
    focus: "Expert in painless root canal treatments, cosmetic and restorative dentistry with meticulous precision.",
  },
];

const About = () => (
  <div className="pt-20">
    <section className="section-padding bg-card">
      <div className="container mx-auto text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
        <h1 className="text-3xl md:text-5xl font-heading mb-6">Our Dental Specialists</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          At Globodent Dental Spa, our experienced team of specialists combines advanced technology
          with compassionate care to deliver the best dental treatments in South Delhi.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doc) => (
            <div key={doc.name} className="bg-card rounded-2xl border border-border p-8 md:p-10 hover-lift">
              <div className="mb-6">
                <h2 className="text-2xl font-heading mb-1">{doc.name}</h2>
                <p className="text-muted-foreground text-sm mb-1">{doc.title}</p>
                <p className="text-primary font-semibold">{doc.role}</p>
              </div>

              <div className="mb-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {doc.specialties.map((s) => (
                    <span key={s} className="bg-spa-blue-light text-primary text-xs font-medium px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Education</h3>
                <p className="text-sm">{doc.education}</p>
              </div>

              <div className="mb-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Experience</h3>
                <ul className="text-sm space-y-1">
                  {doc.experience.map((e) => (
                    <li key={e} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-muted-foreground text-sm italic">{doc.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading text-primary-foreground mb-4">Consult Our Specialists</h2>
        <p className="text-primary-foreground/80 mb-6">Get expert advice from the best dentists in Malviya Nagar.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Book Consultation
        </a>
      </div>
    </section>
  </div>
);

export default About;
