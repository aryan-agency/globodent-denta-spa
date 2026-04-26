import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import WidgetLandingPage from "./WidgetLandingPage";

const TrustedClinic = () => (
  <WidgetLandingPage
    title="Trusted Dental Clinic in South Delhi | Globodent Dental Spa"
    description="Globodent is a trusted dental clinic in South Delhi with hundreds of 5-star reviews from happy patients across Malviya Nagar, Saket, Hauz Khas and nearby areas."
    canonical="/trusted-dental-clinic-south-delhi"
    h1="Trusted Dental Clinic in South Delhi"
    intro="Trust is earned one tooth at a time. Globodent Dental Spa is one of the most trusted dental clinics in South Delhi, with hundreds of verified 5-star reviews from patients across Malviya Nagar, Saket, Hauz Khas, Sheikh Sarai and the surrounding neighbourhoods. Whatever you need — from a routine cleaning to a complete smile makeover — you’re in safe, accountable hands."
    Icon={Heart}
  >
    <h2>What makes a dental clinic actually trustworthy</h2>
    <p>
      Trust in dentistry is not built on advertisements — it’s built on clean instruments, honest
      diagnosis, reasonable pricing and treatments that hold up over the years. Every part of how
      we run Globodent is designed around those four things.
    </p>
    <p>
      We are also fully verified across major directories — Google Business, Justdial, Practo and
      others — so you can cross-check us before you walk in.
    </p>

    <h2>What this means for patients</h2>
    <p>
      You don’t have to wonder whether you’re being over-treated, charged unfairly, or rushed
      through a procedure. You see your X-rays on screen, your treatment plan on paper, and your
      bill before consent. If you ever want a second opinion, we welcome it.
    </p>
    <p>
      For families, this trust compounds: parents who started with us a decade ago now bring their
      children — and increasingly, their parents — for everything from braces to implants.
    </p>

    <h2>Signals you can verify</h2>
    <ul>
      <li><strong>Hundreds of verified 5-star Google reviews</strong> from real, named patients.</li>
      <li><strong>Listed and reviewed</strong> on Justdial, Practo and other independent platforms.</li>
      <li><strong>Strict, visible sterilisation</strong> — autoclaved instruments and single-use disposables.</li>
      <li><strong>Transparent, written estimates</strong> before any treatment begins.</li>
      <li><strong>Long-term warranty &amp; follow-up</strong> on major treatments like implants and crowns.</li>
    </ul>

    <h3>Why South Delhi keeps choosing us</h3>
    <p>
      We’re centrally located in Malviya Nagar, easily reachable from Saket, Hauz Khas, Sheikh
      Sarai, Khirki Extension, Shivalik and Press Enclave Road. Patients tell us the combination
      of <em>experienced specialists + fair pricing + a calm clinic</em> is hard to find — so they
      stay, and they recommend us.
    </p>

    <h2>Why choose Globodent Dental Spa</h2>
    <h3>Experienced, in-house specialist team</h3>
    <p>
      Our{" "}
      <Link to="/experienced-dentist-malviya-nagar">experienced specialist dentists</Link> cover
      implants, RCT, braces, aligners and cosmetic dentistry under one roof — so your full case is
      handled by one accountable team.
    </p>

    <h3>Modern technology, used responsibly</h3>
    <p>
      We invest in{" "}
      <Link to="/advanced-dental-technology-malviya-nagar">advanced dental technology</Link> —
      digital imaging, 3D scans, lasers and rotary endodontics — but we use it only where it
      genuinely helps your outcome, not as an excuse to up-sell.
    </p>

    <h3>Hygiene you can see</h3>
    <p>
      Sterilisation is done in plain sight. Disposables are opened in front of you. Surfaces are
      wiped between every patient. This is non-negotiable.
    </p>

    <h3>Patient satisfaction that grows by word of mouth</h3>
    <p>
      Most new patients come to us through a recommendation — a neighbour, a colleague, a family
      member. To see the team and the clinic for yourself, visit the{" "}
      <Link to="/">Globodent Dental Spa homepage</Link> or browse our full{" "}
      <Link to="/services">treatment list</Link>.
    </p>

    <h2>When trust matters most</h2>
    <ul>
      <li>You need a major procedure (implant, full-mouth rehab, smile design) and want it done once, properly.</li>
      <li>You’ve had a bad experience elsewhere and want an honest second opinion.</li>
      <li>You’re looking for a long-term family dentist for kids, parents and grandparents.</li>
      <li>You want a verified, well-reviewed <em>dental clinic near me</em> in South Delhi.</li>
      <li>You value clean, transparent communication as much as the clinical work itself.</li>
    </ul>

    <p>
      Walk in, ask questions, and judge for yourself. The best way to test trust is to experience
      it — we’ll be glad to earn yours.
    </p>
  </WidgetLandingPage>
);

export default TrustedClinic;
