// Auto-generates public/sitemap.xml by extracting all routes and dynamic
// slugs (blog + services) directly from the source files. Re-runs on every
// `vite dev` and `vite build` start via the inline plugin in vite.config.ts.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const BASE_URL = "https://globodentdentalspa.com";

const read = (p) => readFileSync(resolve(root, p), "utf8");
const uniq = (a) => [...new Set(a)];

// --- Static routes (mirror of <Route path="..."> in src/App.tsx) ---------
const appTsx = read("src/App.tsx");
const staticRoutes = uniq(
  [...appTsx.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((p) => p !== "*" && !p.includes(":")),
);

// --- Dynamic service slugs (from serviceData.ts) -------------------------
const serviceData = read("src/pages/services/serviceData.ts");
const serviceSlugs = uniq(
  [...serviceData.matchAll(/^\s*"([a-z0-9-]+-in-malviya-nagar)"\s*:/gm)].map(
    (m) => m[1],
  ),
);

// --- Dynamic blog slugs (from blogData.ts) -------------------------------
const blogData = read("src/pages/blog/blogData.ts");
const blogSlugs = uniq([
  ...[...blogData.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]),
  ...[...blogData.matchAll(/serviceSlug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]),
  ...[...blogData.matchAll(/costSlug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]),
]).filter((s) => !serviceSlugs.includes(s)); // exclude service slugs

const priorityFor = (path) => {
  if (path === "/") return "1.0";
  if (path.startsWith("/services/") || path.startsWith("/best-") || path.startsWith("/dental-") || path.startsWith("/dentist-")) return "0.9";
  if (path.startsWith("/blog/")) return "0.7";
  return "0.8";
};
const freqFor = (path) =>
  path === "/" || path.startsWith("/blog") || path === "/reviews" ? "weekly" : "monthly";

const entries = uniq([
  ...staticRoutes,
  ...serviceSlugs.map((s) => `/services/${s}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
]).sort();

const today = new Date().toISOString().slice(0, 10);

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map(
    (p) =>
      `  <url><loc>${BASE_URL}${p}</loc><lastmod>${today}</lastmod><changefreq>${freqFor(p)}</changefreq><priority>${priorityFor(p)}</priority></url>`,
  ),
  `</urlset>`,
  "",
].join("\n");

writeFileSync(resolve(root, "public/sitemap.xml"), xml);
console.log(`[sitemap] wrote ${entries.length} URLs to public/sitemap.xml`);
