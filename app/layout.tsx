import type { Metadata } from "next";
import { Inter, Raleway, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Production-Ready AI Systems | Gokul Krishnaa",
  description: "I help specialty medical practices, accounting firms, and real estate brokerages implement AI workflows that save 10-20 hours per week—leveraging my experience at DataStax (the team behind LangFlow).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${raleway.variable} ${outfit.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

