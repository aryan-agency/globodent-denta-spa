import { Heart } from "lucide-react";
import WidgetLandingPage from "./WidgetLandingPage";

const TrustedClinic = () => (
  <WidgetLandingPage
    title="Trusted Dental Clinic in South Delhi | Globodent Dental Spa"
    description="Globodent is a trusted dental clinic in South Delhi with hundreds of 5-star reviews from happy patients across Malviya Nagar and nearby areas."
    canonical="/trusted-dental-clinic-south-delhi"
    h1="Trusted Dental Clinic in South Delhi"
    intro="Globodent Dental Spa is one of South Delhi’s most trusted dental destinations. Hundreds of patients across Malviya Nagar, Saket, Hauz Khas and beyond rely on us for honest, quality care."
    bullets={[
      "Hundreds of verified 5-star Google reviews",
      "Trusted by families across South Delhi",
      "Verified listings on Justdial, Practo & more",
      "Safe, hygienic & fully sterilised clinic",
    ]}
    Icon={Heart}
  />
);

export default TrustedClinic;
