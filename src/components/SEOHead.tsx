import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  /** A single JSON-LD object or an array of objects (each rendered as its own <script>). */
  jsonLd?: object | object[];
}

const BASE_URL = "https://globodentdentalspa.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const SEOHead = ({ title, description, canonical, ogImage, ogType = "website", jsonLd }: SEOHeadProps) => {
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Globodent Dental Spa" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
