export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://linkinbio-pulse.vercel.app/sitemap.xml",
    host: "https://linkinbio-pulse.vercel.app",
  };
}
