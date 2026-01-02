import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Consulting Services | Practical AI That Drives Business Outcomes",
  description: "We partner with leadership teams to apply AI in ways that directly support their business goals. Specializing in real estate, healthcare, and professional services firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}

