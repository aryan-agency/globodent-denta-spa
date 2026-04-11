import { useParams, Navigate } from "react-router-dom";
import ServiceDetailPage from "./ServiceDetailPage";
import { servicePages } from "./serviceData";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? servicePages[slug] : undefined;

  if (!data) return <Navigate to="/services" replace />;

  return <ServiceDetailPage data={data} />;
};

export default ServicePage;
