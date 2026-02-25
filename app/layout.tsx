import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Bella Cucina | Authentic Italian Restaurant in Springfield Since 1985",
  description:
    "Experience authentic Italian cuisine at Bella Cucina. Family-owned since 1985, we serve handmade pasta, traditional recipes, and fine Italian wines. Reserve your table at 742 Evergreen Terrace, Springfield.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
