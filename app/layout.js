import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", weight: ["400", "500", "700"] });
const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", weight: ["400", "700"] });

export const metadata = {
  title: "PULSE® — Raka Wijaya",
  description: "Motion & visual designer. Reel, karya, dan kontak — semuanya di sini.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${grotesk.variable} ${jbmono.variable} antialiased`}>{children}</body>
    </html>
  );
}
