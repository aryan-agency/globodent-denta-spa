import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import WidgetLandingPage from "./WidgetLandingPage";

const ExperiencedDentist = () => (
  <WidgetLandingPage
    title="Experienced Dentist in Malviya Nagar | Globodent Dental Spa"
    description="Meet experienced specialist dentists in Malviya Nagar, South Delhi — implants, RCT, braces, cosmetic dentistry and full-mouth rehab under one roof."
    canonical="/experienced-dentist-malviya-nagar"
    h1="Experienced Specialist Dentist in Malviya Nagar"
    intro="When something goes wrong with a tooth, experience is what separates a quick fix from a long-term solution. Our experienced dentist team in Malviya Nagar brings decades of combined expertise to every case — from a simple filling for a child to complex full-mouth rehabilitation for senior patients across South Delhi."
    Icon={Users}
  >
    <h2>Why experience matters more than equipment</h2>
    <p>
      Modern clinics across Delhi have access to similar machines. What changes the outcome is
      judgement: knowing when to extract vs. save, when to do an RCT in one sitting vs. two, when
      a crown is enough and when an implant is the smarter long-term call. That judgement only
      comes from years of treating real patients.
    </p>
    <p>
      Our team covers every major specialty in-house — implantology, endodontics, orthodontics and
      cosmetic dentistry — so you don’t bounce between clinics for a single problem.
    </p>

    <h2>What this means for patients</h2>
    <p>
      You get a single treatment plan, owned by one team, instead of conflicting opinions from
      multiple places. Complex cases like full-mouth rehab, implant-supported dentures or smile
      makeovers are coordinated step by step, with the same hygiene and quality standard at every
      visit.
    </p>
    <p>
      It also means honest advice. Sometimes the best recommendation is the smaller, cheaper
      treatment. Experience gives us the confidence to say that.
    </p>

    <h2>Specialties under one roof</h2>
    <ul>
      <li><strong>Implantology</strong> — single, multiple and full-arch implants with 3D-guided planning.</li>
      <li><strong>Endodontics</strong> — single-sitting and complex re-treatment root canals.</li>
      <li><strong>Orthodontics</strong> — metal braces, ceramic braces and clear aligners for adults & teens.</li>
      <li><strong>Cosmetic dentistry</strong> — veneers, whitening and full smile design.</li>
      <li><strong>Pediatric & preventive care</strong> — gentle, child-friendly cleanings and fillings.</li>
    </ul>

    <h3>How our specialists work together</h3>
    <p>
      For a typical full-mouth case, our prosthodontist plans the final smile, the implantologist
      places the implants, and the endodontist handles any teeth that can be saved with{" "}
      <Link to="/services/root-canal-treatment-in-malviya-nagar">root canal treatment</Link>. You
      see the same coordinated plan throughout — not five different doctors guessing.
    </p>

    <h2>Why choose Globodent Dental Spa</h2>
    <h3>Decades of combined chair-side experience</h3>
    <p>
      Our doctors have collectively treated thousands of patients across Malviya Nagar, Saket,
      Sheikh Sarai and nearby areas of South Delhi. You can read about each specialist on the{" "}
      <Link to="/doctors">doctors page</Link>.
    </p>

    <h3>Technology that supports clinical skill</h3>
    <p>
      Skill works best with the right tools. We pair our experience with{" "}
      <Link to="/advanced-dental-technology-malviya-nagar">advanced dental technology</Link> —
      digital X-rays, 3D scans, lasers and rotary endodontics — for precise, predictable results.
    </p>

    <h3>Hygiene & safety at international standards</h3>
    <p>
      Autoclaved instruments, single-use disposables and surface disinfection between every
      patient. The same protocol applies whether you’re in for a polish or a 3-hour surgery.
    </p>

    <h3>Patient satisfaction that compounds</h3>
    <p>
      Most of our new patients come from referrals — neighbours, family members and colleagues
      sending people they trust. To see the full picture of who we are, visit the{" "}
      <Link to="/">Globodent Dental Spa homepage</Link>.
    </p>

    <h2>When you should choose an experienced specialist</h2>
    <ul>
      <li>You’ve been told you need an implant, RCT, or full-mouth rehab and want a second opinion.</li>
      <li>You have a previously failed treatment (re-do crown, re-RCT, broken implant).</li>
      <li>You want braces or aligners and need a long, accountable treatment plan.</li>
      <li>You’re planning a smile makeover for a wedding or career milestone.</li>
      <li>You searched for an <em>experienced dentist near me</em> in Malviya Nagar or South Delhi.</li>
    </ul>

    <p>
      Book a consultation and bring your old reports — we’ll review everything, explain your
      options in plain language, and help you choose the path that actually fits your mouth, your
      time and your budget.
    </p>
  </WidgetLandingPage>
);

export default ExperiencedDentist;
