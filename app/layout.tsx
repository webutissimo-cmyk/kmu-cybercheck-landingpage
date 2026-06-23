import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KMU Cybercheck – Kostenloser Cyber-Sicherheitscheck für Unternehmen",
  description:
    "Prüfen Sie die Cyber-Sicherheit Ihres Unternehmens in wenigen Minuten. Kostenloser KMU-Cybercheck mit Risiko-Score, NIS2-Ersteinschätzung und konkreten Maßnahmen.",
  keywords: [
    "KMU Cybercheck",
    "Cyber-Sicherheitscheck KMU",
    "IT-Sicherheit KMU",
    "NIS2 Check KMU",
    "Cyber Risiko Check",
    "Cyber Sicherheit Unternehmen",
    "Sicherheitscheck für kleine Unternehmen",
  ],
  authors: [{ name: "Webutissimo S.L." }],
  creator: "Webutissimo S.L.",
  publisher: "Webutissimo S.L.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://kmu-cybercheck.de",
    siteName: "KMU Cybercheck",
    title:
      "KMU Cybercheck – Kostenloser Cyber-Sicherheitscheck für Unternehmen",
    description:
      "Prüfen Sie die Cyber-Sicherheit Ihres Unternehmens in wenigen Minuten. Kostenloser KMU-Cybercheck mit Risiko-Score, NIS2-Ersteinschätzung und konkreten Maßnahmen.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "KMU Cybercheck – Kostenloser Cyber-Sicherheitscheck für Unternehmen",
    description:
      "Prüfen Sie die Cyber-Sicherheit Ihres Unternehmens in wenigen Minuten. Kostenloser KMU-Cybercheck mit Risiko-Score, NIS2-Ersteinschätzung und konkreten Maßnahmen.",
  },
  alternates: {
    canonical: "https://kmu-cybercheck.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased bg-navy-950 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}