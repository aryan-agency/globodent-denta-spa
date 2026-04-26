import { Users } from "lucide-react";
import WidgetLandingPage from "./WidgetLandingPage";

const ExperiencedDentist = () => (
  <WidgetLandingPage
    title="Experienced Dentist in Malviya Nagar | Globodent Dental Spa"
    description="Meet our experienced specialist dentists in Malviya Nagar with decades of combined expertise in implants, RCT, braces & cosmetic dentistry."
    canonical="/experienced-dentist-malviya-nagar"
    h1="Experienced Specialist Dentist in Malviya Nagar"
    intro="Our team of board-certified specialists brings decades of combined experience. From routine care to complex full-mouth rehab, you’re always in expert hands."
    bullets={[
      "Specialists for implants, RCT, braces & cosmetic dentistry",
      "Decades of combined clinical experience",
      "Personalised treatment plans for every patient",
      "Trusted by thousands of South Delhi families",
    ]}
    Icon={Users}
  />
);

export default ExperiencedDentist;
