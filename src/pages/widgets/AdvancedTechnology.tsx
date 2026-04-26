import { Zap } from "lucide-react";
import WidgetLandingPage from "./WidgetLandingPage";

const AdvancedTechnology = () => (
  <WidgetLandingPage
    title="Advanced Dental Technology in Malviya Nagar | Globodent Dental Spa"
    description="Modern dental technology in Malviya Nagar — digital X-rays, laser dentistry, RVG and 3D imaging for accurate, comfortable treatment."
    canonical="/advanced-dental-technology-malviya-nagar"
    h1="Advanced Dental Technology in Malviya Nagar"
    intro="Globodent Dental Spa is equipped with the latest dental technology in South Delhi. From digital diagnostics to laser dentistry, we deliver precise, faster and safer results."
    bullets={[
      "Digital X-rays & RVG for low-radiation imaging",
      "Laser dentistry for stitch-free, faster healing",
      "3D scanning for implants & smile design",
      "Sterilised, world-class clinical setup",
    ]}
    Icon={Zap}
  />
);

export default AdvancedTechnology;
