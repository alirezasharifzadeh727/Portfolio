import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { languageInitScript } from "@/lib/i18n/LanguageContext";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alireza Sharifzadeh — Data Analyst in Ausbildung",
  description:
    "Portfolio von Alireza Sharifzadeh: vom Logistiker zur Datenanalyse. Python, SQL und Datenvisualisierung — auf der Suche nach einer Ausbildung als Fachinformatiker für Daten- und Prozessanalyse.",
  keywords: [
    "Data Analyst",
    "Datenanalyse",
    "Fachinformatiker",
    "Ausbildung",
    "Python",
    "SQL",
    "Portfolio",
    "Alireza Sharifzadeh",
  ],
  authors: [{ name: "Alireza Sharifzadeh" }],
  openGraph: {
    title: "Alireza Sharifzadeh — Data Analyst in Ausbildung",
    description:
      "Vom Logistiker zur Datenanalyse. Python, SQL und Datenvisualisierung.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-lang="de"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: languageInitScript }} />
      </head>
      <body className="min-h-full bg-background text-text-primary">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
