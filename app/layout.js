import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", weight: ["400", "500", "700"] });
const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", weight: ["400", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Raka Wijaya","jobTitle":"Motion & Visual Designer","url":"https://pulse.pintuweb.com","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://pulse.pintuweb.com"),
  title: "PULSE — Raka Wijaya, Motion Designer",
  description: "Link in bio motion & visual designer Raka Wijaya: showreel, karya, dan kontak — semuanya di sini.",
  applicationName: "PULSE",
  keywords: ["link in bio", "motion designer", "visual designer", "showreel", "portfolio"],
  authors: [{ name: "PULSE" }],
  creator: "PULSE",
  publisher: "PULSE",
  alternates: { canonical: "https://pulse.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pulse.pintuweb.com",
    siteName: "PULSE",
    title: "PULSE — Raka Wijaya, Motion Designer",
    description: "Link in bio motion & visual designer Raka Wijaya: showreel, karya, dan kontak — semuanya di sini.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PULSE — Raka Wijaya, Motion Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PULSE — Raka Wijaya, Motion Designer",
    description: "Link in bio motion & visual designer Raka Wijaya: showreel, karya, dan kontak — semuanya di sini.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${grotesk.variable} ${jbmono.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
