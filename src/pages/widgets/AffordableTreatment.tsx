import { IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import WidgetLandingPage from "./WidgetLandingPage";

const AffordableTreatment = () => (
  <WidgetLandingPage
    title="Affordable Dental Treatment in Malviya Nagar | Globodent Dental Spa"
    description="Affordable dental treatment in Malviya Nagar with transparent pricing, EMI options and premium quality care at Globodent Dental Spa, South Delhi."
    canonical="/affordable-dental-treatment-malviya-nagar"
    h1="Affordable Dental Treatment in Malviya Nagar"
    intro="Good dentistry doesn’t have to drain your savings — but cheap dentistry usually costs more in the long run. Our promise is simple: affordable dental treatment in Malviya Nagar with honest pricing, premium materials and EMI-friendly options for every family in South Delhi."
    Icon={IndianRupee}
  >
    <h2>What “affordable” really means at Globodent</h2>
    <p>
      Affordable should never mean compromising on materials, sterilisation or expertise. We keep
      prices fair by running an efficient, in-house specialist team — implantologist,
      endodontist, orthodontist and cosmetic dentist all under one roof — so you don’t pay
      multiple consultation fees or referral mark-ups.
    </p>
    <p>
      Every treatment plan is shared with you in writing before we begin. No surprise bills, no
      hidden lab charges, no last-minute upgrades pushed during the procedure.
    </p>

    <h2>What this means for patients</h2>
    <p>
      You can plan dental work the same way you plan any other major expense — with a clear
      number, a clear timeline and clear payment options. That alone makes a big difference for
      students, young families and senior patients on a fixed income.
    </p>
    <p>
      It also means you can choose long-lasting solutions like{" "}
      <Link to="/services/dental-implants-in-malviya-nagar">dental implants in Malviya Nagar</Link>
      {" "}instead of repeating cheaper fixes every few years.
    </p>

    <h2>How we keep treatment genuinely affordable</h2>
    <ul>
      <li><strong>Transparent, upfront estimates</strong> — written, itemised and explained before consent.</li>
      <li><strong>Free first consultation</strong> — examination, X-ray review and treatment plan at no charge.</li>
      <li><strong>EMI / no-cost installment options</strong> on larger treatments like implants, braces and full-mouth rehab.</li>
      <li><strong>Phased treatment plans</strong> — fix what hurts now, schedule the rest over months.</li>
      <li><strong>Cashless insurance support</strong> for partner providers wherever possible.</li>
    </ul>

    <h3>Pricing you can compare confidently</h3>
    <p>
      Many patients ask us why one clinic quotes ₹X and another quotes ₹3X for “the same” crown.
      The answer is usually material quality, lab partner and warranty. We use clinically proven
      brands and back our work with clear post-treatment support — so the number you see is the
      total long-term cost, not just the sticker price.
    </p>

    <h2>Why choose Globodent Dental Spa</h2>
    <h3>Experience that prevents over-treatment</h3>
    <p>
      Inexperienced clinics tend to over-prescribe. Our{" "}
      <Link to="/experienced-dentist-malviya-nagar">experienced specialist dentists</Link> are
      confident enough to recommend smaller, cheaper interventions when those are clinically
      enough — and that confidence directly lowers your bill.
    </p>

    <h3>Technology that does it right the first time</h3>
    <p>
      Digital X-rays, intraoral cameras and 3D scans help us plan accurately, avoid re-work and
      finish faster. Fewer visits = lower overall cost, even if the per-visit price looks similar.
    </p>

    <h3>Hygiene & safety that protect your investment</h3>
    <p>
      Strict sterilisation isn’t just about safety — it’s also about results that last. Properly
      done dentistry in a properly clean clinic simply lasts longer.
    </p>

    <h3>Trusted by South Delhi families</h3>
    <p>
      We’re proud to be a long-standing, recommended clinic in the area, trusted across
      generations. To see why, browse our{" "}
      <Link to="/services">full list of treatments</Link> or visit the{" "}
      <Link to="/">Globodent Dental Spa homepage</Link>.
    </p>

    <h2>When affordable dentistry matters most</h2>
    <ul>
      <li>You need multiple treatments and want to phase them over time.</li>
      <li>You’ve been quoted very high prices elsewhere and want a transparent second opinion.</li>
      <li>You’re considering implants, braces, aligners or full-mouth rehab on EMI.</li>
      <li>You’re a student, young professional or senior citizen looking for fair, honest pricing.</li>
      <li>You searched for an <em>affordable dentist near me</em> in Malviya Nagar or South Delhi.</li>
    </ul>

    <p>
      Walk in for a free consultation and a written estimate. You’ll know exactly what you need,
      what it costs, and what it would cost to delay — so you can decide on your own terms.
    </p>
  </WidgetLandingPage>
);

export default AffordableTreatment;
