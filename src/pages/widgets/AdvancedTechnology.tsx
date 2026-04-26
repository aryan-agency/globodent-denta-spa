import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import WidgetLandingPage from "./WidgetLandingPage";

const AdvancedTechnology = () => (
  <WidgetLandingPage
    title="Advanced Dental Technology in Malviya Nagar | Globodent Dental Spa"
    description="Modern dental technology in Malviya Nagar — digital X-rays, RVG, laser dentistry, 3D scanning and CAD/CAM at Globodent Dental Spa, South Delhi."
    canonical="/advanced-dental-technology-malviya-nagar"
    h1="Advanced Dental Technology in Malviya Nagar"
    intro="The right technology doesn’t just look impressive — it changes the outcome. Our investment in advanced dental technology in Malviya Nagar means more accurate diagnosis, smaller and more targeted treatment, and faster recovery for every patient who walks into our South Delhi clinic."
    Icon={Zap}
  >
    <h2>Modern dentistry, built around precision</h2>
    <p>
      Two clinics can offer the same procedure with very different results — and the difference is
      usually equipment. At Globodent Dental Spa we run a fully digital workflow: from your first
      X-ray to your final crown, every step is captured, measured and verified. That precision is
      what allows us to deliver{" "}
      <Link to="/painless-dental-treatment-malviya-nagar">painless dental treatment</Link> with
      predictable results.
    </p>

    <h2>What this means for patients</h2>
    <p>
      Better technology means less guesswork. A digital X-ray reveals decay you can’t see with the
      naked eye. A 3D scan lets us plan an implant before we ever touch your gum. A laser can do
      the work of a scalpel without stitches. The result: shorter appointments, smaller wounds,
      and treatments that last longer.
    </p>
    <p>
      It also means safer dentistry. Digital imaging uses up to 80–90% less radiation than older
      film X-rays — important if you need follow-up scans for braces, implants or RCT.
    </p>

    <h2>Technology you’ll experience at our clinic</h2>
    <ul>
      <li><strong>Digital X-rays & RVG</strong> — instant images, far lower radiation, easy to share with you on screen.</li>
      <li><strong>Intraoral cameras</strong> — we show you exactly what we see inside your mouth.</li>
      <li><strong>Laser dentistry</strong> — for gum reshaping, frenectomies and many soft-tissue procedures, often without sutures.</li>
      <li><strong>3D scanning & smile design</strong> — to preview your new smile before treatment begins.</li>
      <li><strong>Apex locators & rotary endodontics</strong> — for faster, more accurate root canal therapy.</li>
      <li><strong>CAD/CAM-supported crowns and veneers</strong> — precision-fit restorations that look and feel natural.</li>
    </ul>

    <h3>How this changes specific treatments</h3>
    <p>
      For{" "}
      <Link to="/services/dental-implants-in-malviya-nagar">dental implants in Malviya Nagar</Link>,
      3D imaging lets us plan the exact angle and depth before surgery — protecting nerves and
      sinuses. For braces and aligners, digital scans replace messy putty impressions. For
      whitening and veneers, digital previews mean no surprises on the final reveal.
    </p>

    <h2>Why choose Globodent Dental Spa</h2>
    <h3>Experience that knows when to use what</h3>
    <p>
      Owning equipment is easy; using it well is the hard part. Our specialists have years of
      hands-on experience matching the right tool to the right case — sometimes that’s a laser,
      sometimes it’s simply a careful, traditional technique done very well.
    </p>

    <h3>A fully digital, paper-light workflow</h3>
    <p>
      Your records, X-rays and treatment plans are stored digitally and securely. If you need a
      second opinion or move cities, your full history travels with you in minutes — not files.
    </p>

    <h3>Hygiene built for high-tech dentistry</h3>
    <p>
      Every instrument is autoclaved, every handpiece sterilised between patients, and disposables
      are opened in front of you. Advanced technology only works in a clean environment, and we
      take that seriously.
    </p>

    <h3>Patients who keep coming back</h3>
    <p>
      We’re proud to be one of the most reviewed clinics in the area, trusted by families across
      South Delhi. You can explore our full range of treatments on the{" "}
      <Link to="/services">services page</Link> or learn more about the team on the{" "}
      <Link to="/">Globodent homepage</Link>.
    </p>

    <h2>When advanced technology really matters</h2>
    <ul>
      <li>You’re considering implants, full-mouth rehab or smile design.</li>
      <li>You’ve had repeated issues with old fillings, ill-fitting crowns or recurring pain.</li>
      <li>You need braces or aligners and want precise, scan-based planning.</li>
      <li>You are nervous about radiation from frequent X-rays.</li>
      <li>You searched for a high-quality <em>dental clinic near me</em> in Malviya Nagar / South Delhi.</li>
    </ul>

    <p>
      Whatever brings you in, our promise is the same: we will use the gentlest, smallest, most
      accurate option that solves the problem properly the first time.
    </p>
  </WidgetLandingPage>
);

export default AdvancedTechnology;
