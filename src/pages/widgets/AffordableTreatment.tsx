import { IndianRupee } from "lucide-react";
import WidgetLandingPage from "./WidgetLandingPage";

const AffordableTreatment = () => (
  <WidgetLandingPage
    title="Affordable Dental Treatment in Malviya Nagar | Globodent Dental Spa"
    description="Affordable dental treatment in Malviya Nagar with transparent pricing, EMI options and premium quality care at Globodent Dental Spa."
    canonical="/affordable-dental-treatment-malviya-nagar"
    h1="Affordable Dental Treatment in Malviya Nagar"
    intro="Premium dental care shouldn’t cost a fortune. At Globodent, we offer honest, transparent pricing with flexible payment options — without compromising on quality."
    bullets={[
      "Transparent, upfront pricing — no hidden charges",
      "EMI & flexible payment plans available",
      "Free initial consultation & treatment estimate",
      "Premium materials at fair, family-friendly prices",
    ]}
    Icon={IndianRupee}
  />
);

export default AffordableTreatment;
