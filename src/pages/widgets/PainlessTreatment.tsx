import { Shield } from "lucide-react";
import WidgetLandingPage from "./WidgetLandingPage";

const PainlessTreatment = () => (
  <WidgetLandingPage
    title="Painless Dental Treatment in Malviya Nagar | Globodent Dental Spa"
    description="Experience truly painless dental treatment in Malviya Nagar with advanced anesthesia, gentle techniques and stress-free care at Globodent."
    canonical="/painless-dental-treatment-malviya-nagar"
    h1="Painless Dental Treatment in Malviya Nagar"
    intro="At Globodent Dental Spa, every procedure is designed for total comfort. Our team uses modern anesthesia and gentle techniques so even nervous patients feel completely at ease."
    bullets={[
      "Advanced numbing techniques for zero-pain procedures",
      "Calm, spa-like environment to ease dental anxiety",
      "Gentle, child-friendly approach for all age groups",
      "Single-sitting treatments wherever possible",
    ]}
    Icon={Shield}
  />
);

export default PainlessTreatment;
